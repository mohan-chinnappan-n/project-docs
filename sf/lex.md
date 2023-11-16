
# Lef Perf Notes

- It is a SPA (Single Page Application)
- Uses client-side rendering of Aura and LWC components
    - Salesforce Classic:
        - Uses server-side rendering and Visualforce components


![Lex Steps](https://d259t2jj6zp7qm.cloudfront.net/images/20230315161007/image-40.png
)
1. Establish Connection
    - Establish initial connection to a Salesforce data center

------ Initial Setup ------

2a. Get the core framework

2b. Get Common Components
    - Download initial HTML, CSS, and JavaScript with the core framework 
    - the most common Aura and LWC components

------ Initial Setup ------


------ App Page Rendering ------

3. Render Initial Page
    - Use client-side rendering to build the application chrome (initial layout) and remove the loading screen
4. Get Additional - Download additional code and components specific to the page
    - code
    - components
5. Get Data
    - Request data to display in the components while enforcing access and security

6. Present Complete Page
    - Start progressively rendering the app page as more data arrives, and wait for further user input

------ App Page Rendering ------

![Lex Steps 2 ](https://d259t2jj6zp7qm.cloudfront.net/images/20230315161115/image-41.png)



After the initial navigation, one of the following is most likely to happen.


- Full Navigation: Includes **initial setup and app page rendering** - e.g., switch applications in the App Launcher

- Soft Navigation: Typically requires only **app page rendering** 
    - Click somewhere on the app page to initiate soft navigation (repeating steps 2 to 6 above), e.g., navigate to a record
- Abandon the app, e.g., close the tab

## EPT

![EPT](https://d259t2jj6zp7qm.cloudfront.net/images/20230315161154/image-42.png)

- Measures the time it takes for a page to load entirely.he
- Measures the time required for the highlighted
    - Render initial page
    - Get additional code, components
    - Get Data
    - Present complete page

- As of the last publicly available release, our globally measured P50 (median) EPT is reported as 1.0 second.

- According to the [HTTP Archive](https://httparchive.org/reports/loading-speed), average page loading metrics fall in the range of **2 to 7 seconds**

-  If Lightning Experience loads pages in 1 second — several times faster than average (2 to 7 Seconds) — then why does it need to get even faster?



---
- All the work required for full navigation -  basically, the page load time as perceived by the end user when they start Lightning Experience

- Page load data coming from problematic navigations that took longer than a certain threshold that was previously excluded.

- In addition to looking at P50 data (at least 50% of navigations would be slower than that value), we’re now tracking P75 data (at least 25% of navigations would be slower than that value) to better reflect worse experiences.

```
Once those changes were implemented on the Performance dashboards, we saw that the Lightning Experience page load duration for full navigation would be a P50 of about **4 seconds** and P75 of about **7 seconds**. This gets even worse for organizations with complex implementations reaching P75 of more than **10 seconds** in some cases. Ouch.
```

- Every solution starts with understanding and internalizing the problem. This data discovery exercise confirmed the **urgency of improving Lightning Experience page loading performance for our users**

## Plan to improve Perf:

![Plan 2](https://d259t2jj6zp7qm.cloudfront.net/images/20230906173321/image-2023-09-06T173310.143-1777x1000.png)

-  deep engineering investigations, profiling, and prototyping multiple options right now.

|Plan|Comments|
|---|---|
|Improve connectivity with better CDN utilization for core framework resources and enabling CDN for more users (see more details in [our blog post](https://developer.salesforce.com/blogs/2023/03/enable-cdn-to-load-lightning-experience-faster)).|![CDN](https://d259t2jj6zp7qm.cloudfront.net/images/20230308105622/CDN-image.jpeg)
|Reduce the payload size of the **initial core framework**, components, and styles. In addition to lowering the amount of data transferred, this should have a positive impact on the client devices if there is less code to compile and fewer styles to cascade.||
|Enable prioritization of resource fetches to get initially visible content faster||
|Improve code cacheability||
|Reduce client-server **chattiness** for faster page loads and interactions.||
|Continue our investment into components|1.Support [Dynamic Forms](https://help.salesforce.com/s/articleView?id=sf.dynamic_forms_overview.htm&type=5) on additional entities 2.Make Dynamic Forms default for new orgs 3. Convert top five most-used Aura entities to LWC|![Plan](https://d259t2jj6zp7qm.cloudfront.net/images/20230315161336/image-43.png)

---


## Plan

|Plan|Details||
|---|---|---|
|**Increase concurrency**|| network connection from the browser to Salesforce’s server![connection](https://d259t2jj6zp7qm.cloudfront.net/images/20230906173400/image-2023-09-06T173349.350-1779x1000.png) That first hop (Salesforce Load Balancer, Lightning CDN, Salesforce Edge) heavily influences the rest of the experience as the best protocol available between client and server would define the number of **concurrent connections available** in a browser.|
|||For most organizations today, the first hop would use HTTP/1.1 protocol.|
|||We are exploring the best ways to enable HTTP/2 support for most of Salesforce customers, making more concurrent requests available to client browsers.|
|||Our planned solution — enabling HTTP/2 at the Salesforce scale — is not an easy or simple change.|
|**Get less code, faster**||initial loading of the core Aura (Lightning) framework, along with the required components, as the **bootstrap** process. This bootstrap process is universal for all Lightning Experience apps and is processed on every (full) navigation. ![Bootstrap](https://d259t2jj6zp7qm.cloudfront.net/images/20230906173454/image-2023-09-06T173431.436-1779x1000.png)||
|||Retrieves all the resources required to bootstrap the application (code, components, styles, app config, etc.) from the local cache or origin|
|||Processes those assets|
|||Starts constructing the requested page using client-side rendering|
|||Any components used by that page that aren’t preloaded during the application bootstrap will be requested individually|
|||The Aura framework (that Lightning Experience is built upon) was created almost a decade ago, and to mitigate browser limits back then, the system was designed to batch component requests using Aura **boxcar**, which combines individual requests into a single one.|
|||most of the components today are delivered as JavaScript strings (literal JavaScript comments or part of a JSON payload) that, among other things, **defeat bytecode caching in modern browsers**.|
|||Roughly 80% of the common components delivered during bootstrapping are not used on 80% of the page views.  Luckily for us, the industry has solved this exact problem with bundling (and component tree optimizations). Additionally we’re looking to trim down the initial payload in the short-term, even before we introduce bundling.|
|||Components are delivered as JavaScript comments and strings, not code. As part of our code delivery improvements, we’re planning to transition from **code as comments** to **code as code** so we can make of [byecode caching](https://v8.dev/blog/code-caching-for-devs) in the browser|
|||Requesting additional components requires multiple network round-trips. Along with the bootstrap, we will be shipping a **static map of the latest versions of first-party components**, and we’ll enable HTTP caching the LATEST version of the components that aren’t part of the application bootstrap|
|||Certain first-party components are requested individually very frequently (millions of times per month).Frequently requested first-party components that are not part of the bootstrap will be added to it.|
|||Parts of the core framework are represented by compatibility code for legacy (long unsupported) browsers.Following up on [Internet Explorer 11 deprecation](https://help.salesforce.com/s/articleView?id=release-notes.rn_supported_browsers_ie11.htm&release=230&type=5&_ga=2.231577116.225686922.1699863060-1256301778.1698932870), we will remove all compatibility code.|
|||Aura boxcarring mechanism needs to be rethought in HTTP/2-enabled environment.We’re planning to disable the **Aura boxcarring** mechanism for component delivery along with HTTP/2 enablement.|
|||Avoiding redirects to the LATEST version of the components -![redirect](https://d259t2jj6zp7qm.cloudfront.net/images/20230906173548/image-2023-09-06T173538.388-1781x1000.png)
|||There are two ways we’re planning to mitigate the need to perform a non-cacheable redirect and incur a non-trivial delay in waiting for the server to respond:Considering that the vast majority of components are first-party standard components that don’t change outside of patch releases, we’re planning to create a static map of the LATEST versions of the most frequently requested components (that are not requested frequently enough to be added to the initial payload).For all other components, we’ll be caching the LATEST version of a component with an HTTP cache with a TTL of five minutes (10 with [stale-while-revalidate](https://web.dev/stale-while-revalidate/)). We will continue to tune this value in future releases.|
|**Optimize layouts and components**||we’re prioritizing the migration of entities and components from Aura to Lightning Web Components.|
|||Certain frequently used **entities** are not LWC.|Continue converting top remaining Aura entities to LWC.|
|||Certain frequently used **components** are not LWC.	|Continue converting top remaining Aura components to LWC: Related Record, Path Assistant, Activity Timeline, Case Feed.|
|||FlexiPages are generated on the server per user, limiting cacheability and reuse in the organization.|Transition FlexiPages to a user-agnostic model to dramatically improve cacheability.|
|||Certain standard components are relatively slow vs industry peers.Invest into improving performance for most used and slowest standard components, starting with DataTable|
|||Lightning Reports are 3% of all Lightning Experience page views and consistently are above P75 page load times. Invest in improving performance for Lightning Reports.|
|**Prioritize critical data sooner**||![data delivery](https://d259t2jj6zp7qm.cloudfront.net/images/20230906173631/image-2023-09-06T173620.946-1779x1000.png)|
|||Among other things, data delivery provides all of the required metadata, and of course, the actual set of data depends on the specific page: FlexiPage description; Related list, Object, and Layout information; Record actions and avatars; Record fields data.|
|||When we analyzed our production data, we noticed that almost 50% of the P75 EPT for a page is idle waiting for the results of the previously requested XHR to come back.|
|||Aura actions are limited to **6 concurrent** with a boxcarring mechanism. :: Increase the number of Aura actions along with HTTP/2 enablement.|
|||Aura actions are practically unlimited on the server. While not common, certain pages use **thousands of Aura actions**, making the experience slower for everybody. :: Limit Aura actions to 1250 per page (or lower) on the server, limiting impact of the outliers on the rest of the users.|
|||Most of the data is delivered sequentially, even when it’s not dependent on previous requests. :: Preload as much data as possible as soon as we can, potentially along with the code.|
|||In many cases, record fields are delivered in small batches (to hydrate component by component). :: Investigate opportunities to get record fields data more efficiently in fewer numbers of requests (to minimize client/server transactional costs).|
|||Our production data shows that only 10% of the page navigations result in a user action, and there’s no need to eagerly load them all. :: Investigate opportunities to defer loading platform actions metadata until user invokes an action.| 
|||Components under hidden tabs and in many standard containers are still requesting data to be rendered, even if they’re not visible yet. :: Leverage progressive page rendering containers for hidden tabs and more component containers to defer requesting data and rendering **below the fold** content, and enable getting the most critical data as soon as possible.|
|||Local encrypted Aura actions cache is too small and overly aggressive at removing all contents, resulting in very low hit rate. :: We’re investing into modernizing and increasing the size of the local encrypted Aura actions cache to dramatically increase cache hit rate.|
|||Local encrypted Aura actions cache has a very short TTL (Time to Live). :: We’re investigating various strategies to improve cache hit rates (see above), and as part of that effort, we will experiment with optimizing TTL and potentially implement [stale-while-revalidate](https://web.dev/stale-while-revalidate/) pattern.|




## Planned timeline
We believe that combining the above-mentioned changes will have a transformative effect on the Lightning Experience page loading times and critical interactions.

![timeline](https://d259t2jj6zp7qm.cloudfront.net/images/20230906173708/image-2023-09-06T173658.804-1964x1000.png)




## References
- [Lightning Experience with Lightning Speed](https://developer.salesforce.com/blogs/2023/03/lightning-experience-with-lightning-speed-are-we-there-yet)
- [Our Detailed Plan to Improve Lightning Experience Performance](https://developer.salesforce.com/blogs/2023/09/our-detailed-plan-to-improve-lightning-experience-performance?utm_source=inshort&utm_campaign=apacdevrel)
- [The Full Picture on HTTP/2 and HOL Blocking](https://engineering.salesforce.com/the-full-picture-on-http-2-and-hol-blocking-7f964b34d205/)