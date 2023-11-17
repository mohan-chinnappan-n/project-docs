(function () {
  window.pageStartTime = new Date().getTime();
  window.Aura || (window.Aura = {});
  window.Aura.bootstrap || (window.Aura.bootstrap = {});
  window.Aura.appBootstrap = {
    data: {
      app: {
        componentDef: { descriptor: "markup://one:one" },
        attributes: { values: {} },
      },
    },
  };
  (function () {
    window.Aura.bootstrap.execBootstrapJs =
      window.performance && window.performance.now
        ? window.performance.now()
        : Date.now();
    window.Aura.appBootstrapStatus = "loaded";
    window.Aura.afterBootstrapReady = window.Aura.afterBootstrapReady || [];
    if (window.Aura.afterBootstrapReady.length) {
      var queue = window.Aura.afterBootstrapReady;
      window.Aura.afterBootstrapReady = [];
      for (var i = 0; i < queue.length; i++) {
        queue[i]();
      }
    }
  })();

  var time =
    window.performance && window.performance.now
      ? window.performance.now.bind(performance)
      : function () {
          return Date.now();
        };
  window.Aura.bootstrap.execInlineJs = time();

  window.Aura.inlineJsLoaded = true;

  var auraConfig = {
      disableAuraBundling: false,
      deftype: "APPLICATION",
      ns: {
        internal: [
          "SearchCopilot",
          "access_control_objectmanager_setup",
          "adminsuccess",
          "adminui",
          "aloha_sales_forecasting",
          "aloha_sales_opptysplit",
          "aloha_sales_tm2",
          "analytics",
          "analyticsHome",
          "analytics_data_manager",
          "analyzer_framework",
          "app_flexipage",
          "appbuilder_actions_bridge",
          "appexUi",
          "assistantFramework",
          "assistantFrameworkModules",
          "assistant_builder",
          "aura",
          "auraStorage",
          "auradev",
          "auradocs",
          "auraplat",
          "b2b_buyer_builder",
          "b2b_buyer_cart",
          "b2b_buyer_coupons",
          "b2b_buyer_data",
          "b2b_buyer_einstein_activities",
          "b2b_buyer_error_states",
          "b2b_buyer_navigation",
          "b2b_buyer_orders",
          "b2b_buyer_pricing",
          "b2b_buyer_product_category",
          "b2b_buyer_product_details",
          "b2b_buyer_product_images",
          "b2b_buyer_promotions",
          "b2b_buyer_quick_order",
          "b2b_buyer_styling",
          "b2b_buyer_wishlists",
          "b2b_search_api",
          "b2b_search_builder",
          "b2b_search_facets",
          "b2b_search_management",
          "b2b_search_product_card",
          "b2b_search_results",
          "b2b_search_results_tiles",
          "b2b_search_settings",
          "b2b_search_suggestions",
          "b2b_storefront",
          "b2c_lite_commerce",
          "backToWork",
          "briefcase",
          "builder_communities_nba",
          "builder_e360_journeys",
          "builder_framework",
          "builder_industries_arcgraph",
          "builder_industries_bre_samples",
          "builder_industries_dataprocessingengine",
          "builder_industries_fsc",
          "builder_industries_healthcare",
          "builder_industries_insurance",
          "builder_industries_integrationconfiguration",
          "builder_industries_interaction_rule",
          "builder_industries_publicsector",
          "builder_industries_serviceprocess",
          "builder_industries_survey",
          "builder_industries_utilizationmanagement",
          "builder_industries_visit",
          "builder_interaction_externalservices",
          "builder_payments",
          "builder_platform_interaction",
          "builder_platform_process",
          "builder_platform_usage",
          "builder_record_flexipage",
          "builder_service_chatbots",
          "calendar",
          "calendar_view",
          "cg_retail",
          "chatbots",
          "chatterui",
          "ci_player",
          "clients",
          "clients_chatapp",
          "cmsAuthor",
          "commerce",
          "commerce_admin_displayable_fields",
          "commerce_assistant",
          "commerce_builder",
          "commerce_cart",
          "commerce_catalog",
          "commerce_channel_creation",
          "commerce_checkout",
          "commerce_console",
          "commerce_data_provider",
          "commerce_management",
          "commerce_market",
          "commerce_my_account",
          "commerce_product_details",
          "commerce_product_information",
          "commerce_reorder_portal",
          "commerce_search",
          "commerce_starter",
          "commerce_store",
          "commerce_store_integrations",
          "commerce_troubleshooting",
          "commerce_unified_checkout",
          "commerce_unified_coupons",
          "commerce_unified_promotions",
          "comms_msm",
          "communitySetup",
          "community_article",
          "community_builder",
          "community_byo",
          "community_case",
          "community_content",
          "community_dam",
          "community_deflection",
          "community_hierarchy",
          "community_layout",
          "community_login",
          "community_navigation",
          "community_pay_now",
          "community_reputation",
          "community_runtime",
          "community_setup",
          "community_styling",
          "community_topic",
          "community_user",
          "community_utils",
          "componentReference",
          "console",
          "contentbuilder",
          "contentpage",
          "conversation",
          "cooper",
          "cordaDashboards",
          "cxm",
          "dashboards",
          "dataImporter",
          "ddcProspector",
          "designtime_cdp",
          "designtime_journeys",
          "designtime_p13n",
          "desktopDashboards",
          "dxp",
          "dxp_action",
          "dxp_base",
          "dxp_builder",
          "dxp_content_layout",
          "dxp_crm_search",
          "dxp_data_provider",
          "dxp_flow",
          "dxp_form",
          "dxp_icon",
          "dxp_layout",
          "dxp_page_layout",
          "dxp_records",
          "dxp_search",
          "dxp_service",
          "dxp_styling",
          "dxp_util",
          "eamobile",
          "eduadmissions",
          "edualumni",
          "educationcloud",
          "edulearning",
          "eduprogrammgmt",
          "eduscheduler",
          "edustudentsuccess",
          "einstein_assistant",
          "einstein_discovery",
          "einstein_gpt",
          "einsteinbuilder",
          "einsteinconduit",
          "emailStream",
          "emailui",
          "embeddedMessaging",
          "embeddedService",
          "embedded_service",
          "embedded_service_iframe",
          "entityinterface",
          "environmenthub",
          "erb",
          "es_base_components",
          "es_block_builder",
          "es_design",
          "es_property_editors",
          "escBuilder",
          "essentials_trialassistant",
          "exp_builder",
          "experience",
          "experience_availability",
          "experience_einstein",
          "experience_incident_mgmt",
          "experience_marketing_landing",
          "experience_messaging",
          "explainability_setup",
          "externalServicesSetup",
          "feeds_answer_badging",
          "feeds_assistant",
          "feeds_autocomplete",
          "feeds_best_answer",
          "feeds_caching",
          "feeds_cases",
          "feeds_chat",
          "feeds_compact",
          "feeds_discussion_threading",
          "feeds_emoji",
          "feeds_liking",
          "feeds_metrics",
          "feeds_paging",
          "feeds_placeholding",
          "feeds_post_body_content",
          "feeds_replying",
          "feeds_sorter",
          "feeds_timestamping",
          "feeds_translation",
          "feeds_voting",
          "fieldservicemobile",
          "flexipage",
          "flexipageEditor",
          "flow_object_linking",
          "flowruntime",
          "flowtrigger",
          "folder",
          "force",
          "forceChatter",
          "forceChatterApi",
          "forceCommunity",
          "forceContent",
          "forceDiscovery",
          "forceHelp",
          "forceKnowledge",
          "forceSearch",
          "forceTopic",
          "formula",
          "gen_ai_agentbuilder",
          "googleConnector",
          "group_industries_publicsector",
          "guardrails",
          "hammerSetup",
          "healthcloud",
          "hello",
          "home",
          "hvcc",
          "hybrid",
          "hyperforce_assistant",
          "industries_automotive",
          "industries_cds_common",
          "industries_cib",
          "industries_common",
          "industries_document_checklist",
          "industries_loyalty_engine",
          "industries_loyalty_promo",
          "industries_manufacturing",
          "industries_mfg_adv_forecast",
          "industries_mfg_common",
          "industries_mfg_forecast",
          "industries_mfg_program",
          "industries_mfg_rebates",
          "industries_mfg_service",
          "industries_mfg_targets",
          "industries_sales_excellence",
          "industries_service_excellence",
          "instrumentation",
          "interaction_explorer",
          "interaction_orchestrator",
          "interop",
          "iot",
          "isotope",
          "journey",
          "jsonxform",
          "knowledge_lightning",
          "knowledgeone",
          "knowledgeui",
          "komaci",
          "komaci_test",
          "komaci_test_components",
          "laf",
          "lbpm",
          "lcwizard",
          "ldsdebug",
          "lightning",
          "lightningInbox",
          "lightningcommunity",
          "lightningcomponentdemo",
          "lightningdocs",
          "lightningmobileruntime",
          "lightningsnapin",
          "liveAgent",
          "lst",
          "ltng",
          "ltngtools",
          "lwr",
          "macros",
          "marketing_microsite",
          "mcontent_channel",
          "mcontent_content",
          "mcontent_content_detail",
          "mcontent_content_picker",
          "mcontent_content_preview",
          "mcontent_content_translate",
          "mcontent_editor",
          "mcontent_interaction_builder",
          "mcontent_jobs",
          "mcontent_publication",
          "mcontent_shared",
          "mcontent_workspace",
          "mfa_assistant",
          "mobileBuilder",
          "mobileBuilderSapp",
          "mobile_setup",
          "mulesoft_citizen",
          "myday",
          "native",
          "navex",
          "notes",
          "o11y",
          "o11y_schema",
          "objectManager",
          "objectives_recommendations",
          "offline",
          "omni",
          "onboarding",
          "onboardingTest",
          "one",
          "onesetup",
          "onlinesales",
          "opencti",
          "packagingSetupUI",
          "platformencryption",
          "private_industries_common",
          "process_home",
          "process_migration",
          "processui",
          "processuiappr",
          "processuicommon",
          "processuimgnt",
          "processuirule",
          "processuitest",
          "record_flexipage",
          "records",
          "reports",
          "rulepage",
          "runtime_actions_data",
          "runtime_agent_engagement",
          "runtime_all_walkthroughs",
          "runtime_all_walkthroughsTest",
          "runtime_analytics_dataplatform",
          "runtime_appointmentbooking",
          "runtime_approval_process",
          "runtime_associationengine",
          "runtime_automated_actions",
          "runtime_branch_management",
          "runtime_calendar",
          "runtime_cdp",
          "runtime_citizen_flow",
          "runtime_commerce_entitlements",
          "runtime_commerce_oci",
          "runtime_commerce_oms",
          "runtime_commerce_os",
          "runtime_commerce_pricing",
          "runtime_commerce_store",
          "runtime_communities_nba",
          "runtime_compliantsharing",
          "runtime_conversation",
          "runtime_declarative_card",
          "runtime_digital_wallet",
          "runtime_einstein_campaign",
          "runtime_einstein_discovery",
          "runtime_enablement",
          "runtime_enablement_coaching",
          "runtime_essential_checkout",
          "runtime_essentials_common",
          "runtime_growth_intelligence",
          "runtime_hcc_performanceassistant",
          "runtime_hcc_scalecenter",
          "runtime_hello_studio",
          "runtime_hybrid_capabilities",
          "runtime_iag_core",
          "runtime_industries_actionablelist",
          "runtime_industries_actionplan",
          "runtime_industries_aiaccelerator",
          "runtime_industries_aisentimentresult",
          "runtime_industries_arcgraph",
          "runtime_industries_assessment",
          "runtime_industries_budget",
          "runtime_industries_cfg",
          "runtime_industries_churn_ED",
          "runtime_industries_clause_library",
          "runtime_industries_clm",
          "runtime_industries_clm_addin",
          "runtime_industries_complaintmgmt",
          "runtime_industries_cpq",
          "runtime_industries_dfo_decomp",
          "runtime_industries_dfo_entityoverrides",
          "runtime_industries_dfo_fdworkspace",
          "runtime_industries_dfo_planview",
          "runtime_industries_digitallending",
          "runtime_industries_docgen",
          "runtime_industries_documentreader",
          "runtime_industries_epc",
          "runtime_industries_eri",
          "runtime_industries_frops",
          "runtime_industries_fsc",
          "runtime_industries_fundraising",
          "runtime_industries_gdf",
          "runtime_industries_healthcare",
          "runtime_industries_insurance",
          "runtime_industries_integrationconfiguration",
          "runtime_industries_interaction_decisionmatrix",
          "runtime_industries_interesttagging",
          "runtime_industries_lending",
          "runtime_industries_loyalty",
          "runtime_industries_materiality_assessment",
          "runtime_industries_obligation",
          "runtime_industries_orderforecasting",
          "runtime_industries_ordermanagement",
          "runtime_industries_outcomes",
          "runtime_industries_pricing",
          "runtime_industries_program_mgmt",
          "runtime_industries_publicsector",
          "runtime_industries_recurrence",
          "runtime_industries_referral_management",
          "runtime_industries_referralscoring",
          "runtime_industries_retailexecution",
          "runtime_industries_serviceprocess",
          "runtime_industries_smartselling",
          "runtime_industries_smarttags",
          "runtime_industries_sustainability",
          "runtime_industries_tearsheet",
          "runtime_industries_ups",
          "runtime_industries_utilizationmanagement",
          "runtime_industries_visit",
          "runtime_learning_essentials_welcome",
          "runtime_marketing_btobma",
          "runtime_marketing_litmuspreview",
          "runtime_marketing_unifiedmarketing",
          "runtime_mc2",
          "runtime_media_adsales",
          "runtime_mobilesapp",
          "runtime_omnistudio",
          "runtime_omnistudio_common",
          "runtime_omnistudio_flexcards",
          "runtime_omnistudio_omniscript",
          "runtime_online_sales",
          "runtime_payments",
          "runtime_pipeline_inspector",
          "runtime_platformServices_eventMonitoring",
          "runtime_platform_actions",
          "runtime_platform_backgroundoperation",
          "runtime_platform_employee",
          "runtime_platform_leap",
          "runtime_platform_leap_authoring",
          "runtime_platform_notifications",
          "runtime_platform_optimizer",
          "runtime_platform_prefcenter",
          "runtime_platform_privacy_analytics",
          "runtime_platform_privacycenter",
          "runtime_platform_salesforcehub",
          "runtime_platform_sfdx",
          "runtime_platform_testhistory",
          "runtime_platform_unified_notifications",
          "runtime_platformservices_condBuilder",
          "runtime_platformservices_transactionSecurity",
          "runtime_process_exception",
          "runtime_qtc_assetmanagement",
          "runtime_quip",
          "runtime_retail_runtime",
          "runtime_revenue_admin_console",
          "runtime_revenue_billingbatchinvoices",
          "runtime_revenue_billingbatchpayments",
          "runtime_revenue_billingbatchschedulers",
          "runtime_revenue_configurator",
          "runtime_revenue_custom_field_mapping",
          "runtime_revenue_foundation",
          "runtime_revenue_insights",
          "runtime_revenue_products",
          "runtime_revenue_rules",
          "runtime_rtc",
          "runtime_rtc_spark",
          "runtime_sales_activities",
          "runtime_sales_ade",
          "runtime_sales_billingpayments",
          "runtime_sales_cadence",
          "runtime_sales_cadencebuilder",
          "runtime_sales_campaign",
          "runtime_sales_commerce",
          "runtime_sales_corebiz",
          "runtime_sales_dedupe",
          "runtime_sales_easy",
          "runtime_sales_emailtemplateui",
          "runtime_sales_engagement",
          "runtime_sales_forecasting",
          "runtime_sales_hvs",
          "runtime_sales_insights",
          "runtime_sales_lead",
          "runtime_sales_leadiq",
          "runtime_sales_linkedin",
          "runtime_sales_maps",
          "runtime_sales_merge",
          "runtime_sales_multiaddedit",
          "runtime_sales_opportunitysplit",
          "runtime_sales_pathassistant",
          "runtime_sales_pipelineboard",
          "runtime_sales_quotes",
          "runtime_sales_salesAIForEveryone",
          "runtime_sales_skype",
          "runtime_sales_social",
          "runtime_sales_todo_list",
          "runtime_sales_video",
          "runtime_sales_xclean",
          "runtime_search_federated",
          "runtime_service_easy",
          "runtime_service_fieldservice",
          "runtime_service_incident_mgmt",
          "runtime_service_knowledge_generation",
          "runtime_service_liveagent",
          "runtime_service_livemessage",
          "runtime_service_objectlinking",
          "runtime_service_omnichannel",
          "runtime_service_predictions",
          "runtime_service_scs",
          "runtime_service_servicecatalog",
          "runtime_service_suggested_articles",
          "runtime_service_swarming",
          "runtime_service_trials",
          "runtime_service_workforce_engagement_config",
          "runtime_ses_base",
          "runtime_ses_ext",
          "runtime_thp_builder",
          "runtime_thp_cms",
          "runtime_thp_learning",
          "runtime_video_platform",
          "runtime_web3",
          "runtime_workdotcom_broadcast",
          "runtime_workdotcom_qmgmt",
          "runtime_workdotcom_scheduling",
          "runtime_workdotcom_trust_cards",
          "s1wizard",
          "sales_bots",
          "sales_einstein",
          "salesforceIdentity",
          "salesforce_assistant",
          "sass_service_catalog",
          "scrt",
          "scrt_setup",
          "search_dialog",
          "search_filters",
          "search_instrumentation",
          "search_lightning",
          "search_navigation",
          "search_nls",
          "search_results",
          "search_setup",
          "securityHealth",
          "securityHub",
          "securitycentral",
          "selfService",
          "selfservice_setup",
          "serviceCommunity",
          "service_cloud_voice",
          "servicecatalogbuilder",
          "setup",
          "setupAssistant",
          "setup_analytics_datamanager",
          "setup_analytics_pardot",
          "setup_appexchange_appAnalytics",
          "setup_automated_actions",
          "setup_batch_management",
          "setup_cdp",
          "setup_citizen_journey",
          "setup_clients_chatapp",
          "setup_content_collections",
          "setup_data_translation",
          "setup_document_checklist",
          "setup_e360_sms",
          "setup_einstein_assistant",
          "setup_einstein_doccapture",
          "setup_einstein_for_devs",
          "setup_einstein_shared",
          "setup_exploration_consent",
          "setup_gpt_summarization",
          "setup_industries_accounting_subledger",
          "setup_industries_advancedforecast",
          "setup_industries_aiaccelerator",
          "setup_industries_automotive_foundation",
          "setup_industries_byoa",
          "setup_industries_churnprediction",
          "setup_industries_clm",
          "setup_industries_common",
          "setup_industries_comprehend",
          "setup_industries_context",
          "setup_industries_dataprocessingengine",
          "setup_industries_decisiontable",
          "setup_industries_docgen",
          "setup_industries_documentreader",
          "setup_industries_educationcloud",
          "setup_industries_fundraising",
          "setup_industries_gptaccelerator",
          "setup_industries_grantmaking",
          "setup_industries_insurance",
          "setup_industries_mfg_common",
          "setup_industries_mfg_service",
          "setup_industries_mfgprogram",
          "setup_industries_nlp",
          "setup_industries_objectdetection",
          "setup_industries_outcomes",
          "setup_industries_pricing",
          "setup_industries_publicsector",
          "setup_industries_referralscoring",
          "setup_industries_rfm",
          "setup_industries_scoringframework",
          "setup_industries_smartselling",
          "setup_industries_smarttags",
          "setup_industries_tpm",
          "setup_industries_ups",
          "setup_industries_vertical_integration",
          "setup_integration_services",
          "setup_lightning_visualforce",
          "setup_marketing_unifiedmarketing",
          "setup_mc2",
          "setup_messaging_email",
          "setup_mobile_appclone",
          "setup_mobile_security",
          "setup_motivation",
          "setup_osl",
          "setup_osl_actions",
          "setup_payments",
          "setup_platformServices_eventManager",
          "setup_platformServices_eventMonitoring",
          "setup_platform_a2",
          "setup_platform_adoptionapps",
          "setup_platform_api_wsdl",
          "setup_platform_cdc",
          "setup_platform_dsar",
          "setup_platform_dynamodbsetupwizard",
          "setup_platform_eventrelay",
          "setup_platform_externalconnection",
          "setup_platform_externaldatasource",
          "setup_platform_integration",
          "setup_platform_ltngbolt",
          "setup_platform_namedcredential",
          "setup_platform_nearcoredataservices",
          "setup_platform_notifications",
          "setup_platform_optimizer",
          "setup_platform_perms",
          "setup_platform_sfdx",
          "setup_platformservices_customplatform",
          "setup_platformservices_customschema",
          "setup_prototyping_consent",
          "setup_release_update",
          "setup_revenue_insights",
          "setup_revenue_intelligence",
          "setup_sales_ai4m",
          "setup_sales_einstein",
          "setup_sales_einsteinForecasting",
          "setup_sales_forecasting",
          "setup_sales_insights",
          "setup_sales_leadiq",
          "setup_sales_linkedin",
          "setup_sales_opportunity_score",
          "setup_sales_pardot",
          "setup_sales_pathassistant",
          "setup_sales_prmconfig",
          "setup_sales_spark",
          "setup_security_productDefense",
          "setup_service",
          "setup_service_cdp",
          "setup_service_einstein_email_gen",
          "setup_service_einstein_grounding",
          "setup_service_entityarchiving",
          "setup_service_experience",
          "setup_service_fieldservice",
          "setup_service_flowobjectlinking",
          "setup_service_folmessaging",
          "setup_service_folvoice",
          "setup_service_intents",
          "setup_service_knowledge_generation",
          "setup_service_livemessage",
          "setup_service_messenger",
          "setup_service_objectlinking",
          "setup_service_omnichannel",
          "setup_service_predictions",
          "setup_service_scs",
          "setup_service_smb",
          "setup_service_swarming",
          "setup_service_usecaseexplorer",
          "setup_service_voice",
          "setup_suggested_articles",
          "setup_suggested_response",
          "setup_user_access_policies",
          "setup_value_center",
          "setupnav",
          "setupwizard",
          "sfa",
          "sfdc_cms",
          "sfdc_fieldservice",
          "sfdc_gantt",
          "sfdc_payments_console",
          "sfdc_tableau_viz",
          "siteforce",
          "siteforceBuilder",
          "slack_invocable_actions",
          "spcm_industries_publicsector",
          "subledger_flow",
          "support",
          "survey",
          "sustainability",
          "tableau",
          "templatesetup",
          "today",
          "transformEditor",
          "ui",
          "uiExamples",
          "uns",
          "usage_app",
          "userProvisioningUI",
          "visualEditor",
          "voice",
          "wave",
          "waveapps",
          "webresources",
          "wfm",
          "wfm_adherence",
          "wfm_agentengagement",
          "wfm_analytics",
          "wfm_intraday_management",
          "wfm_scheduling",
          "wits",
          "work",
          "workAloha",
          "forceGenerated",
        ],
        privileged: [
          "DEVOPSIMPKG1",
          "DEVOPSIMPKG10",
          "DEVOPSIMPKG2",
          "DEVOPSIMPKG3",
          "DEVOPSIMPKG4",
          "DEVOPSIMPKG5",
          "DEVOPSIMPKG6",
          "DEVOPSIMPKG7",
          "DEVOPSIMPKG8",
          "DEVOPSIMPKG9",
          "einsteinservice",
          "et4ae5",
          "FinServ",
          "FinServ_WM",
          "FinServ_RB",
          "FinServ_CB",
          "FinServ_SB",
          "FinServ_WM_SB",
          "FinServ_RB_SB",
          "FinServ_INS_SB",
          "FinServ_CB_SB",
          "FinServ_RB_Pre",
          "FinServ_INS_Pre",
          "FinServ_CB_Pre",
          "FinServWaveExt",
          "FSC",
          "FSC1",
          "FSC10",
          "FSC10gs0",
          "FSC11",
          "FSC12",
          "FSC13",
          "FSC14",
          "FSC15",
          "FSC2",
          "FSC3",
          "FSC4",
          "FSC5",
          "FSC6",
          "FSC6gs0",
          "FSC7",
          "FSC7gs0",
          "FSC8",
          "FSC8gs0",
          "FSC9",
          "FSC9gs0",
          "FSC_RB",
          "fscprerelease",
          "fsc1_r1",
          "fsc2_r1",
          "fsc3_r1",
          "fscwealth",
          "fscwealthE",
          "fscwealthpatch",
          "fscwealthfuture",
          "fscfma",
          "fscwmmain",
          "FSL",
          "FSLMPDEV",
          "FSLQA",
          "HealthCloud_SB",
          "HealthCloudGA",
          "hc1_r1",
          "hc2_r1",
          "hc3_r1",
          "HC10gs0",
          "HC11",
          "HC12",
          "HC13",
          "HC14",
          "HC15",
          "HC16",
          "HC17",
          "HC18",
          "HC19",
          "HC20",
          "HC21",
          "HC22",
          "HC23",
          "HC24",
          "HC25",
          "HC4",
          "HC4a",
          "HC5",
          "HC6",
          "HC6gs0",
          "HC7",
          "HC7gs0",
          "HC8",
          "HC8gs0",
          "HC9",
          "HC9gs0",
          "hcfma",
          "hcperf",
          "iqinbox",
          "mcdm_3",
          "mcdm_8",
          "mcdm_15",
          "mcdm_21",
          "mcdm_22",
          "mcdm_23",
          "mcdm_24",
          "mcdm_25",
          "mcdm_26",
          "mcdm_27",
          "mcdm_28",
          "mcdm_29",
          "mcdm_30",
          "mcsocsel",
          "mcsocsel_1",
          "mcsocsel_2",
          "mcsocsel_3",
          "mcsocsel_4",
          "mcsocsel_5",
          "mcsocsel_6",
          "mcsocsel_7",
          "mcsocsel_8",
          "mcsocsel_9",
          "mcsocsel_10",
          "relateiq",
          "wealthone",
          "wealthoneblitz",
          "wealthonep",
          "fscmainstguat",
          "hcmainstguat",
          "fscmainstgpu",
          "hcmainstgpu",
          "fscsbuat",
          "hcsbuat",
          "fscsbpu",
          "hcsbpu",
          "fscr1uat",
          "hcr1uat",
          "fscr1pu",
          "hcr1pu",
          "wkcc",
          "vlocity_lwc27",
          "vlocity_lwc26",
          "vlocity_lwc18",
          "vlocity_lwc28",
          "vlocity_lwc30",
          "vlocity_lwc3",
          "vlocity_lwc5",
          "devopsimpkg01",
          "devopsimpkg11",
          "devopsimpkg12",
          "devopsimpkg13",
          "devopsimpkg14",
          "devopsimpkg15",
          "devopsimpkg16",
          "devopsimpkg17",
          "devopsimpkg18",
          "devopsimpkg19",
          "devopsimpkg20",
          "devopsimpkg21",
          "devopsimpkg22",
          "instest12",
          "omnistudio",
          "perf_dc230",
          "scalpel",
          "stmpahins01",
          "vlocityins1",
          "vlocityins2",
          "vlocityins3",
          "vlocityins4",
          "vlocityins5",
          "vlocityins6",
          "vlocityins7",
          "vlocityins8",
          "vlocityins9",
          "vlocityins10",
          "vlocityins11",
          "vlocityins12",
          "vlocityins13",
          "vlocityins17",
          "vlocityins2_fsc",
          "vlocity_bmk",
          "vlocity_clmperf",
          "vlocity_cmt",
          "vlocity_dc",
          "vlocity_digital",
          "vlocity_erg",
          "vlocity_ins",
          "vlocity_ins_fsc",
          "vlocity_lwc1",
          "vlocity_lwc2",
          "vlocity_lwc4",
          "vlocity_lwc6",
          "vlocity_lwc7",
          "vlocity_lwc8",
          "vlocity_lwc9",
          "vlocity_lwc10",
          "vlocity_lwc11",
          "vlocity_lwc12",
          "vlocity_lwc13",
          "vlocity_lwc14",
          "vlocity_lwc15",
          "vlocity_lwc16",
          "vlocity_lwc17",
          "vlocity_lwc19",
          "vlocity_lwc20",
          "vlocity_lwc21",
          "vlocity_lwc22",
          "vlocity_lwc23",
          "vlocity_lwc24",
          "vlocity_lwc25",
          "vlocity_lwc29",
          "vlocity_lwctest",
          "vlocity_perf",
          "vlocity_ps",
          "vlocity_upc",
          "cgcloud",
          "cgcloud_dev",
          "cg_cloud_gs0",
          "cgcloud_gs0_stg",
          "cgcloud_r1",
          "cgcloud_stg",
          "cgc_sync",
          "cgc_sync_dev",
          "cgc_sync_gs0",
          "cgcsync_gs0_stg",
          "cgc_sync_r1",
          "cgc_sync_stg",
          "cgc_exc",
          "cgc_exc_stg",
          "devops001gs0",
          "devops002gs0",
          "devops003gs0",
          "devops004gs0",
          "devops005gs0",
          "devops006r1",
          "devops007r1",
          "devops008r1",
          "devops009r1",
          "devops010r1",
          "devopsimpkg27",
          "devopsimpkg28",
          "devopsimpkg29",
          "devopsimpkg30",
          "devopsimpkg31",
          "devopsimpkg32",
          "devopsimpkg33",
          "devopsimpkg34",
          "devopsimpkg35",
          "devopsimpkg36",
          "devopsimpkg37",
          "devopsimpkg38",
          "devopsimpkg39",
          "devopsimpkg40",
          "DEVOPSIMPKG51",
          "DEVOPSIMPKG52",
          "DEVOPSIMPKG53",
          "DEVOPSIMPKG54",
          "DEVOPSIMPKG55",
          "DEVOPSIMPKG56",
          "DEVOPSIMPKG57",
          "DEVOPSIMPKG58",
          "DEVOPSIMPKG59",
          "DEVOPSIMPKG60",
          "DEVOPSIMPKG61",
          "DEVOPSIMPKG62",
          "DEVOPSIMPKG41",
          "DEVOPSIMPKG42",
          "DEVOPSIMPKG43",
          "DEVOPSIMPKG44",
          "DEVOPSIMPKG45",
          "DEVOPSIMPKG46",
          "DEVOPSIMPKG47",
          "DEVOPSIMPKG48",
          "DEVOPSIMPKG49",
          "DEVOPSIMPKG50",
          "DEVOPSIMPKG64",
          "DEVOPSIMPKG65",
          "DEVOPSIMPKG66",
          "DEVOPSIMPKG67",
          "DEVOPSIMPKG68",
          "DEVOPSIMPKG69",
          "DEVOPSIMPKG70",
          "DEVOPSIMPKG71",
          "DEVOPSIMPKG72",
          "ins_fsc04_gs0",
          "vlocity_fsc_gs0",
          "wkdw",
          "sfi_media_6",
          "sfi_media_7",
          "sfi_media_8",
          "sfi_media_9",
          "sfi_media_10",
        ],
      },
      eikoocnekot: "__Host-ERIC_PROD-2162407812889185112",
      bootstrapInlined: true,
      LabelsFromStorage: true,
      descriptor: "markup://one:one",
      pathPrefix: "",
      staticResourceDomain: "",
      componentUids: {
        "markup://forceChatter:sfxFollowAction": {
          uid: "uFVksDmMSyV-a7tJeHYUDw",
        },
        "markup://sfa:opportunityLineItemMultiEdit": {
          uid: "DwooHkPbJfhXLhky8jX9BQ",
        },
        "markup://force:customLinkUrl": { uid: "FeuFvyKHv4mG3fW3YgTjlA" },
        "markup://instrumentation:avroValidator": {
          uid: "DO64uEj063V5e7XR3lw9eA",
        },
        "markup://one:utilityBarItem": { uid: "CfTrEjDGTSuJIMwZG2aJCg" },
        "markup://force:calendarStoreCreate": { uid: "ovVmOGzOJgvOOGUJHwbZ4w" },
        "markup://lightning:iconSvgTemplatesAction": {
          uid: "yJoGHdN9MJM9vA31lvhBzQ",
        },
        "markup://flexipage:accordion": { uid: "23hlfpu6qGaaToCBEbyBzQ" },
        "markup://flexipage:recentItems": { uid: "7hF6UXeOcumeoht9xW5srA" },
        "markup://forceChatter:exposedFeed": { uid: "Mn4xusj3HwJsp5baOTBlTg" },
        "markup://runtime_sales_activities:singleOwner": {
          uid: "ZLQ8F1CNRLwiBIb6XK1gHw",
        },
        "markup://emailui:formattedEmailAccount": {
          uid: "xrfIUKvgDngSavrR6BDpeQ",
        },
        "markup://forceChatter:outputShareType": {
          uid: "FqB7ZIAOivFh7NtoUYHPrg",
        },
        "markup://flexipage:recordHomeLeftSidebarTemplateDesktop": {
          uid: "iG41ZnDvK3KC8CyISzg4-g",
        },
        "markup://support:caseHoverDescription": {
          uid: "C3ezYwn_XgF5y6zMdVZy5Q",
        },
        "markup://forceKnowledge:outputPublishStatus": {
          uid: "7bU9fdAokQpSxLROjlMR-w",
        },
        "markup://runtime_communities_nba:builderNbaWidget": {
          uid: "MoUn0bHuFQ5i_8v_XPHC9Q",
        },
        "markup://runtime_sales_merge:mergeCandidatesPreviewCard": {
          uid: "JCW4aSqjfxDV7of3ENF6kg",
        },
        "markup://sfa:opportunityFieldOverride": {
          uid: "oPZLtdGpFRbg0TlJsNGzsQ",
        },
        "markup://force:multiAddMultiEditHeader": {
          uid: "gysslbKBNhsXTSStvTRDzA",
        },
        "markup://force:uiQueryService": { uid: "Jx3-OZ-NJoAGCiEua3BzWg" },
        "markup://forceKnowledge:articleSearchDesktop": {
          uid: "tmAK4elAV5R2TgAH7QlXZg",
        },
        "markup://support:compactFeedItemForPreview": {
          uid: "BIGJu5G2iZLQGcL9nyHY8Q",
        },
        "markup://flexipage:recordHomeTwoColEqualHeaderTemplateDesktop2": {
          uid: "hUtsmhL93ecZI8Vxu57bHQ",
        },
        "markup://force:socialImage": { uid: "_Co_GWO8yd17c_xqy8zx3w" },
        "markup://forceChatter:feedAuxBodyEmailMessage": {
          uid: "jHeD8c7ve-AuGJ3NiJ-_cA",
        },
        "markup://runtime_sales_forecasting:forecastingFlexipageWrapper": {
          uid: "gF39ih08I0tEX-_zdqeNHA",
        },
        "markup://sfa:stageNameService": { uid: "GdJlOv_PmZxU0d8lIZZOEQ" },
        "markup://support:emailMessageSubjectFieldLinkOverride": {
          uid: "5662MN4xJk_G2ScLkSCzSw",
        },
        "markup://forceKnowledge:articleDataCategoryViewer": {
          uid: "66h9NU9S4SMpY3vtTohJ-g",
        },
        "markup://runtime_service_omnichannel:omniWidget": {
          uid: "Ayqs9Q1YcF53Sj8ub5kl4A",
        },
        "markup://notes:contentNoteRelatedListStencil": {
          uid: "QWsU7C1ZadB2yMFpigfCzA",
        },
        "markup://sfa:outputLookupWithHierarchyIcon": {
          uid: "yIQur3MPtXj9tVZuMNgJoQ",
        },
        "markup://console:relatedRecord": { uid: "rEARIgSaF9qRnmVmR6mTKg" },
        "markup://lst:relatedListAuraAppEventListener": {
          uid: "jdifCFpRVE294ZzQxsdVSg",
        },
        "markup://force:popOutManager": { uid: "NbVKj2QKFoxPTspOrPmBIw" },
        "markup://runtime_sales_activities:manyWhoNameCompact": {
          uid: "N5O8pNhYD9G2LrNiS4Hc9Q",
        },
        "markup://usage_app:salesforceMobilePage": {
          uid: "x0jNt5Pha1_aN-ooANsXmA",
        },
        "markup://flexipage:recordHomePinnedLeftSidebarCollapsibleRegionsTemplateDesktop":
          { uid: "4x7pa-7eUQYHIBGUYkTEMw" },
        "markup://forceChatter:userPreviewStencil": {
          uid: "puvdoQqkAJIOAR4e0_CMpA",
        },
        "markup://runtime_platform_actions:actionHeadlessFormSaveAndNew": {
          uid: "YadQ_b7Wo2i8WgDB1PhWVA",
        },
        "markup://runtime_sales_activities:taskRecurringView": {
          uid: "ID3twEJIR0HTsV3lP38HrQ",
        },
        "markup://forceContent:contentVersionRelatedListRecord": {
          uid: "77CxjPPruTjYhtiFalQUtw",
        },
        "markup://runtime_sales_activities:timelineFixedStencilWrapper": {
          uid: "rJwIOuRu-zhRrv9E_PXVkA",
        },
        "markup://support:outputCaseSubjectFieldWrapper": {
          uid: "atR4O-2hAnyVQhQdUuINVg",
        },
        "markup://instrumentation:o11ySecondaryLoader": {
          uid: "iVoI_RYCX4m4O5loBTnQfA",
        },
        "markup://one:unsupportedContainer": { uid: "x_r6BjOLY6PbqoGpejZr8A" },
        "markup://flexipage:field": { uid: "wBfYBY1qF2msDhdvD31WRQ" },
        "markup://force:sforceConsoleEvent": { uid: "wVDP0TEXYQbF7cIdoC-sIA" },
        "markup://runtime_sales_pathassistant:pathAssistant": {
          uid: "DA0GEgTw-4Pn0LKPdt06FQ",
        },
        "markup://flexipage:accordionSection2": {
          uid: "4N1r318HHzcS0eLibbeqQw",
        },
        "markup://forceSearch:predictedResults": {
          uid: "UpHtXoyy6_fvpNbObLH0sw",
        },
        "markup://support:feedContainerForPreview": {
          uid: "29hyshJUxlXxh9EPry5XoA",
        },
        "markup://sfa:choosePricebookFooter": { uid: "NximKKyBnLozPpnSrHb2bg" },
        "markup://macros:macroUtilityItem": { uid: "-3h2pQCR1Xdwrad1Rm3ThQ" },
        "markup://force:changeRecordType": { uid: "cGUEtCAGsd6sbCcKDyOWmw" },
        "markup://forceContent:listUploadFileAction": {
          uid: "V4Jm2YucMJuTPcHh8AIQVQ",
        },
        "markup://support:outputLookupWithPreviewForSubject": {
          uid: "xGY7S8mqebSSzqoFtmyIng",
        },
        "markup://forceKnowledge:kbResultFieldTitle": {
          uid: "kzFa9NXi0EbXQlQ1MN9eRg",
        },
        "markup://runtime_sales_insights:topInsight": {
          uid: "pvQuLgyblqXaq1kLr-o9DQ",
        },
        "markup://force:multiEdit": { uid: "MdQ0otH5sFaEgjkE4wCK-g" },
        "markup://support:inputCaseStatus": { uid: "oaudXgrL0HQXb3xDzDoM4g" },
        "markup://forceKnowledge:optionDialogFooter": {
          uid: "BJLYDMJLAUxn4ya6clpvkQ",
        },
        "markup://sfa:inputForecastCategory": { uid: "7Cpeo1A6_WClKfaJ49a0UQ" },
        "markup://sfa:ocrRelatedListPrimaryField": {
          uid: "BVguYei8OSyjirfvptmkgw",
        },
        "markup://forceChatter:feedAuxBodyRecordSummary": {
          uid: "D8wC1WxClcsLZuPhRoUFyA",
        },
        "markup://forceContent:outputReasonForChange": {
          uid: "RshXo4rHz9xg1ujjhxQoHg",
        },
        "markup://flexipage:tabset2": { uid: "H0CPJoTIoxK2Jp2Gvrzo4Q" },
        "markup://one:recordActionWrapper": { uid: "xM6yffUc4vzeG6uXtUY-LQ" },
        "markup://forceChatter:publisher": { uid: "W2Tow8oqkAf7eFkaOFJZJg" },
        "markup://one:lexOnboardingManagerService": {
          uid: "bi1kIxJljhhovK-AKb5AgQ",
        },
        "markup://runtime_sales_lead:recordTypeOutputText": {
          uid: "r0ouW6C9XlaFfGjgfHzseQ",
        },
        "markup://runtime_hello_studio:studioLauncher": {
          uid: "OHbiItsgHv8jvJ3xh1RJOw",
        },
        "markup://flexipage:recordHomeLeftSidebarTemplateDesktop2": {
          uid: "pHWZbJK12OpJeOZfE8xliQ",
        },
        "markup://flexipage:recordHomeThreeColTemplateDesktop2": {
          uid: "qsdDJhfl566GFF3R0F0lUA",
        },
        "markup://flexipage:recordHomeWithSubheaderTemplateDesktop": {
          uid: "QNJFpZBYZmbi_wMtLdum5g",
        },
        "markup://records:recordLayoutSection": {
          uid: "r2Du7WS44qFjogDjZgVO0w",
        },
        "markup://flexipage:fieldSection2": { uid: "fmURTX4Fc9kNhv34ibhJag" },
        "markup://usage_app:lightningExperiencePage": {
          uid: "t6mXaeXVkiefZrnfFTWpow",
        },
        "markup://force:actionWindowLink": { uid: "YSMQr7lMHJdGLGdm6NOdTA" },
        "markup://support:label": { uid: "fLRjeBRRj7Zeql7tTfsEsg" },
        "markup://emailui:activityTimeline2EmailMessageToAddressFieldOverride":
          { uid: "_asF6wNtpMbpqNEgWicquQ" },
        "markup://runtime_sales_forecasting:forecastingCellPredictionCurrency":
          { uid: "5Jk6jRx9nhJ7YPojyJqFmw" },
        "markup://flexipage:auraWrapper": { uid: "6V0onxIUwVb2pnX9v7PARg" },
        "markup://forceChatter:topicsOnRecordWrapper": {
          uid: "DTjJGaZCea5EDR3Q8cnpBw",
        },
        "markup://runtime_sales_insights:accountInsightsContainer": {
          uid: "4oNgESaEENX9CG-kOOnJaA",
        },
        "markup://record_flexipage:desktopRecordPageDecorator": {
          uid: "zD411Q0xCpTW-Z8Q3sZ4eA",
        },
        "markup://runtime_sales_activities:taskReminderView": {
          uid: "76Fva6L7O2BSgv0ReBQvuw",
        },
        "markup://flowruntime:flowRuntimeForQuickAction": {
          uid: "rPvt8gzvcvHrojNmcQJWDg",
        },
        "markup://sfa:outputNameWithHierarchyIconContact": {
          uid: "wr36YXAC-r1_uD7xqCvtMA",
        },
        "markup://support:inputTextArea": { uid: "QmxHpvbX-xC2d2NqwieRsg" },
        "markup://force:readOnlyRelatedListStencil": {
          uid: "XrioV-OIjCPJbZDnJrrBtA",
        },
        "markup://home:assistant": { uid: "hnq8TabSHx3uAVo74qBw-Q" },
        "markup://sfa:inputOpportunityAmount": {
          uid: "isok2DtLN9SLkNvZdYkXWA",
        },
        "markup://force:emptyState": { uid: "1-6KDuYFXxJQFWAmhZW2Lw" },
        "markup://emailui:emailMessageHighlightsStencil": {
          uid: "325gv2WqI08cwnxIRSZyOg",
        },
        "markup://wave:assetLabelService": { uid: "owdsDAm6X0MGp4NmSqoQ3A" },
        "markup://runtime_platform_actions:actionHeadlessFormCancel": {
          uid: "DjxvHWkTq0kWtxE1zEvnTw",
        },
        "markup://runtime_platform_actions:actionHeadlessFormSave": {
          uid: "RODzcVtUVR9U82mdoctsEg",
        },
        "markup://flexipage:auraTemplateWrapper": {
          uid: "vBU1YpjADwijFJiNDmV2Aw",
        },
        "markup://flexipage:recordHomeTemplateDesktop": {
          uid: "9rta578drwD5TwY5ZKVtKw",
        },
        "markup://force:calendarDateLibrary": { uid: "XQZYbc627WypQ49Ch204KQ" },
        "markup://force:socialRecordAvatarWrapper": {
          uid: "mHx3YdTxgbBqChQzTXAZrA",
        },
        "markup://forceChatter:entityPhotoDetail": {
          uid: "4PFafddIHapOxkJg0jaCHw",
        },
        "markup://force:outputRichText": { uid: "lZYqFtUO5CnwmY0fFUphIQ" },
        "markup://runtime_sales_activities:activitySubjectListView": {
          uid: "lzmP1p4E34X2j7p2Tx7X8w",
        },
        "markup://forceChatter:userProfileHighlightsStencilDesktop": {
          uid: "tGR2Q2wEKXPLcrK8PPPVYg",
        },
        "markup://runtime_sales_activities:outputLookupWithAlternateDetailId": {
          uid: "qWSnSirdPiaw2QgB9Turog",
        },
        "markup://record_flexipage:recordFieldPlaceholder": {
          uid: "vGZTob2XpfubXUQUw8u55A",
        },
        "markup://force:virtualRowNumberCell": {
          uid: "OVCjGue5sOV16Q9nioz96g",
        },
        "markup://runtime_sales_activities:todayTaskContainer": {
          uid: "wuldEufphANDWXVwmwo0BA",
        },
        "markup://records:recordLayoutRichText": {
          uid: "_wb8BRj_nyfPeJZ7Fb6Jrg",
        },
        "markup://one:onePreloads": { uid: "9QQUHyHosfeQ30YjRvE-PA" },
        "markup://runtime_sales_lead:convertDesktop": {
          uid: "4oL9vq5Ocy65_75azaF88g",
        },
        "markup://records:recordLayoutLookup": {
          uid: "6bdHRqJiXCbRbAeRXfKBlQ",
        },
        "markup://flexipage:recordHomeThreeColTemplateDesktop": {
          uid: "vv-dphevOIRHM11VN3Fl6w",
        },
        "markup://runtime_sales_merge:mergeDesktopConsole": {
          uid: "R3AefGYvqh_0IwwluRMtzg",
        },
        "markup://force:quill": { uid: "DQNkt3DAlZmQ6WDFA83esw" },
        "markup://sfa:opportunityDealMotionCloseDate": {
          uid: "hMIfyjFyMc82_Syy9Rs5Tg",
        },
        "markup://force:listRecord": { uid: "SLhiQSxlWzsUE3zkUS4h4Q" },
        "markup://runtime_platform_actions:quickActionWrapper": {
          uid: "SIcnO_-pPGs53dRXKKu2LA",
        },
        "markup://runtime_sales_leadiq:leadInsightsDataProvider": {
          uid: "fXZjt7jdmSPwhzTdy-cnsg",
        },
        "markup://onesetup:allHome": { uid: "B2fq_NKatQcV202yxFJudw" },
        "markup://sfa:createPartnerContainer": {
          uid: "1XiIy6RFYqxe_ySkCMAuNQ",
        },
        "markup://sfa:stageNameServiceForMDP": {
          uid: "8-YprwL_SyHjXqv9xeAslQ",
        },
        "markup://force:splitViewListRecordItem": {
          uid: "RHZ99WrafFKuYvf-i5zEiw",
        },
        "markup://flowruntime:interview": { uid: "w0qroVxE4nw1cK90fqaE4g" },
        "markup://flowruntime:flowRuntime": { uid: "q3I4sfjhi7K31tatKxr3ww" },
        "markup://records:recordLayoutBaseInput": {
          uid: "ZPP5-3I3557XqmsnLC-P1Q",
        },
        "markup://one:recordHomeFlexipage2Wrapper": {
          uid: "rbn8f9Ss3-LPuGfWzqYkjQ",
        },
        "markup://laf:windowMessengerAura": { uid: "6c6k-P0OllKJrg-gokNRdw" },
        "markup://forceChatter:outputVersionNumber": {
          uid: "8XwcD8GQGJGg43cEd20a9Q",
        },
        "markup://record_flexipage:recordField": {
          uid: "RfSnU-D3mxK6Shvj2El1Aw",
        },
        "markup://runtime_sales_insights:listViewScoreRenderer": {
          uid: "ZgTGWzkZ5i3vCZ4oq_HuAw",
        },
        "markup://force:listViewManagerGridWrapText": {
          uid: "He0ejn2-yGjwX0Mpcfnlxg",
        },
        "markup://opencti:softPhone": { uid: "QVq3sTbkWCztxlZCS6Ch0w" },
        "markup://sfa:ocrMultiEdit": { uid: "FNCES48KG1VLJpfTa3jATQ" },
        "markup://runtime_sales_forecasting:forecastingSummaryViewPanel": {
          uid: "3JROO54Moh_dvbyPJymezw",
        },
        "markup://records:recordLayoutInputAddress": {
          uid: "FIqlT99AwKCgFub4zxNS8g",
        },
        "markup://flexipage:recordHomeThreeColHeaderTemplateDesktop2": {
          uid: "Fe-dLj7_UfjOV5xqFD80qA",
        },
        "markup://runtime_sales_insights:insightsContainer": {
          uid: "aANU54Ve_VkZoeS_ysMzPQ",
        },
        "markup://records:recordLayoutBlock": { uid: "v_6g0z2kqkiTKABgt0bXCQ" },
        "markup://records:recordLayoutCheckbox": {
          uid: "9cUmA0L-E7xU5HHLOkqCTg",
        },
        "markup://interop:layoutItem": { uid: "qCDSe2NxM1YJxYUow8UK5Q" },
        "markup://force:alohaPage": { uid: "tWGmpgfEJjzi7-RfH6zpAQ" },
        "markup://home:workQueueSummary": { uid: "SXPhLcyffx9mEN5Yjzx6KA" },
        "markup://aura:serverActionError": { uid: "FETihwoH5lwatJtvJJoH6A" },
        "markup://records:recordType": { uid: "jtoNo2GOUlaNaO2y1jyqzw" },
        "markup://records:recordLayoutTextArea": {
          uid: "Bf9-kFCNJi6UzWCNPi8Uvw",
        },
        "markup://runtime_sales_activities:taskCompactStencil": {
          uid: "MTauIoHjQwIv6UxE-Cg3IA",
        },
        "markup://support:outputCaseSubjectField": {
          uid: "83Gg0ogTUPqfX9_CpuO4wQ",
        },
        "markup://sfa:analyticsHome": { uid: "OyjtVhbT3MGVJ587Gc1TjA" },
        "markup://force:outputField": { uid: "2RP8gRqkvGnTsNsGCf14_g" },
        "markup://flexipage:baseRecordHomeTemplateDesktop": {
          uid: "eKg0hUTU04NbL5HfLLAuDA",
        },
        "markup://runtime_sales_hvs:workQueueContainer": {
          uid: "ippML_2KSezIwhoeLcfLEA",
        },
        "markup://runtime_sales_lead:pathAssistant": {
          uid: "UI2ySVGtsrn9i3Ej29GKzw",
        },
        "markup://runtime_sales_todo_list:unifiedToDoListAuraWrapper": {
          uid: "dbBjvGBO3hnj_iC-IFRZhg",
        },
        "markup://sfa:inputOpportunityCurrency": {
          uid: "vs8lGhB_MSidm43GwO0edQ",
        },
        "markup://runtime_sales_forecasting:forecastingCellCalculatedCurrency":
          { uid: "hNmHHZJwS_uwYl6Yg2hQPA" },
        "markup://force:apiBridgeLoader": { uid: "waPtgOQEFTY5xFSJPZxuAw" },
        "markup://sfa:stageNameServiceForecastCategoryWrapper": {
          uid: "nY9l-29PVjQ2OKdbpv9CbQ",
        },
        "markup://runtime_sales_activities:taskActivityDateOverride": {
          uid: "8jEkV_gM_7zhMdCiTl7DSw",
        },
        "markup://force:templateWorkspaceWrapper": {
          uid: "PM37bqQ6565oYlj7NB8wVA",
        },
        "markup://one:maskContainer": { uid: "yLX4S-nDRjlSXR3m-IsenQ" },
        "markup://runtime_approval_process:pendingApprovalCard": {
          uid: "mgNq3n9vIvOgAwPXa2ADoQ",
        },
        "markup://emailui:formattedEmailLead": {
          uid: "l0HYNP97B70075AN46y2Rg",
        },
        "markup://voice:callHandlerContainer": {
          uid: "rBKIcuELZ0b7rBn-6hQppg",
        },
        "markup://wave:waveHomeTab": { uid: "cgzyvPIE1zz-PpPcg5WGKQ" },
        "markup://flexipage:card": { uid: "P3O8-wGAQoZgSSUCotro7g" },
        "markup://usage_app:switchesToClassicPage": {
          uid: "--gxTbk2nKskavaMecp_yw",
        },
        "markup://force:highlightsPreviewStencil": {
          uid: "3mQaPJNJexPHHG9Dxrn94w",
        },
        "markup://sfa:outputForecastCategory": {
          uid: "EutTiEB1mIDGGnNd_SoVKg",
        },
        "markup://runtime_sales_forecasting:forecastingPredictionColumnHeader":
          { uid: "o-3OjG3RQRrPUTQoDEU0Sg" },
        "markup://search_results:qnaAuraAdapter": {
          uid: "kdyxIF_5XG1epHKveK4W2Q",
        },
        "markup://sfa:choosePricebook": { uid: "d8EGabcOXioz9qbDCiMQ-Q" },
        "markup://formula:formulaMetrics": { uid: "QbtgzqK37mUIvmbpubFvsg" },
        "markup://runtime_sales_xclean:xCleanThisRecordModal": {
          uid: "_3xG1y2p003gQkhxevEp4w",
        },
        "markup://forceChatter:trailheadBadge": {
          uid: "VlH6qWoSrl7wzJZ5Z9H2uA",
        },
        "markup://lightning:dynamicIcon": { uid: "AiVQXEoQ1jF7qBkYgZCMKA" },
        "markup://runtime_sales_forecasting:forecastingHeaderPanel": {
          uid: "WKSFO_L3hw_LbFq6Mka04g",
        },
        "markup://flexipage:column2": { uid: "seIxO3i8oGKQP859Pgz6gQ" },
        "markup://force:popOutManagerInit": { uid: "0L2Lxb7tHXLSgaizr-oPMg" },
        "markup://emailui:formattedEmailCase": {
          uid: "_trgdVBmo5G8rzHHa5MuFg",
        },
        "markup://one:utilityBarContent": { uid: "iFITjvHNiwB1BycmO_kTsw" },
        "markup://forceContent:previewPanel": { uid: "e1FoAA_sUyAA7cK9t4kaJw" },
        "markup://support:milestones": { uid: "iDhatUW87omFzSEbhO4TwA" },
        "markup://forceContent:searchCompoundFieldsTitleRenderer": {
          uid: "OGocx7PuwXhFmaSrzZmbEg",
        },
        "markup://reports:reportBase": { uid: "wNm_SlN6IItXbjIsD1BBGw" },
        "markup://forceChatter:emojiPicker": { uid: "dqaU-yeqSHeZxM4S49K6uQ" },
        "markup://sfa:hierarchyFullView": { uid: "4JNYwdoHpJ0zPxSNDbHLWw" },
        "markup://app_flexipage:lwcAppFlexipageWrapper": {
          uid: "v5pUDNRJrDKXbnM7AxMPQg",
        },
        "markup://lst:secondDegreeRelatedListSingleContainer": {
          uid: "yG5vIr4wBeKDGLQ-MDIkJQ",
        },
        "markup://laf:windowMessengerEvent": { uid: "6rDHnu9STEiecnr-gzLZ3w" },
        "markup://lightning:iconSvgTemplatesCustom": {
          uid: "bh3C1P5qRLYwYe39AdFTxg",
        },
        "markup://navex:standardManager": { uid: "d758N4T4JYKAngv9Wgg9qQ" },
        "markup://lbpm:actionList": { uid: "ZKCCNkq-ekBLK1tTsUa-RQ" },
        "markup://forceChatter:chatterGenericRelatedListRecord": {
          uid: "3yD20QO1AxvrCvp-ef1mig",
        },
        "markup://flexipage:lwcDefaultAppHomeTemplate": {
          uid: "KiVcNh-E4uCcltXHIBTaDw",
        },
        "markup://console:history": { uid: "y_1pR_O3Z0_3sfaX1lSrEQ" },
        "markup://runtime_sales_insights:insightsEllieIcon": {
          uid: "_ftsYc3oZEnzUHTHB_Zskg",
        },
        "markup://home:newsPanel": { uid: "tLgXKiKqz1YSp4-9LJ1WvA" },
        "markup://lightning:flow": { uid: "yNArUG-qMChQigYmYgGx7A" },
        "markup://runtime_sales_insights:highlightsPanelScoreRenderer": {
          uid: "FwdEsHt_qdnlb72P1TxKMA",
        },
        "markup://forceSearch:assistantDialogContainer": {
          uid: "U6vB36DWVC6WAyPdoX7OQQ",
        },
        "markup://runtime_sales_activities:taskReminderCreate": {
          uid: "iNbV84QAKk_LT7h9tSu7xA",
        },
        "markup://runtime_sales_cadence:cadenceStepsCard": {
          uid: "h19-jaXOV_OUffLLQoQMrg",
        },
        "markup://emailui:relatedRecordContainer": {
          uid: "u8X3FoYLwbIGtv3DCtZUVA",
        },
        "markup://runtime_sales_activities:timelineVoiceVideoCallsWrapper": {
          uid: "oh9UsRMhdZbbumqNaTPAMw",
        },
        "markup://runtime_iag_core:onboardingManager": {
          uid: "tI-CITpfR_TR2M7VJymoWQ",
        },
        "markup://records:recordLayoutInputDateTime": {
          uid: "rueVnZrutwZI64QHk8qBNg",
        },
        "markup://lightning:iconSvgTemplatesUtility": {
          uid: "hXlStorFcIEN3ZGungOmTw",
        },
        "markup://force:menuTriggerIcon": { uid: "KBlkO4cfza7A45dI52taAQ" },
        "markup://forceChatter:feedAuxBodyCaseComment": {
          uid: "S0zqP7-8prY7O2Is3w44PA",
        },
        "markup://emailui:formattedEmailContact": {
          uid: "bpBsbMyuwiHY39uUhjhM9Q",
        },
        "markup://runtime_sales_activities:taskQuickClose": {
          uid: "YzJ-QqCttmTOE2zDkBzGWw",
        },
        "markup://sfa:outputNameWithHierarchyIcon": {
          uid: "v2xBG1b32Ajtk1egj2b3hg",
        },
        "markup://runtime_sales_forecasting:forecastingCellText": {
          uid: "T_bGB4PpcmGBDmMHh69KtQ",
        },
        "markup://forceContent:documentLinkRowStencil": {
          uid: "YWTGXQ2rBhUmHDJRqAZioA",
        },
        "markup://forceKnowledge:articleSearchPrefilter2": {
          uid: "jsbXaARJTwEQjLLM5LBsEQ",
        },
        "markup://flexipage:reportChart": { uid: "o5Z0Dmd3H0PiINi4aoFnYw" },
        "markup://lightning:quickActionAPI": { uid: "5gHLYZvuRruNUsuFMYlmig" },
        "markup://sfa:outputOpportunityAmount": {
          uid: "Q87WbMCnKfJJ2GeiPNp3Rg",
        },
        "markup://forceContent:quipCard": { uid: "2xwk2ihOfNgYsDelgMZcZg" },
        "markup://forceChatter:compoundNameWithOutOfOffice": {
          uid: "h8RK7ypuPAJt44pA7FuUrw",
        },
        "markup://sfa:opportunityDealMotionAmount": {
          uid: "y4qxbFwspFxdNJa9VEtc_A",
        },
        "markup://record_flexipage:recordHomeFlexipageUtil": {
          uid: "rK8PKczYZd4h_bWTtfAL6Q",
        },
        "markup://flexipage:recordHomeWithSubheaderTemplateDesktop2": {
          uid: "w0liw7IbEOgwR1uER7042g",
        },
        "markup://one:alohaPage": { uid: "R02cMmUKAma-cXf6j02D9g" },
        "markup://emailui:formattedEmail": { uid: "svY3ynFmoAfHY503pNeI5w" },
        "markup://runtime_sales_forecasting:forecastingOppListPanel": {
          uid: "gbP31a35H_RHBsMjzBGGYg",
        },
        "markup://force:baseCard": { uid: "ygMXqrHSGNkwA_I4g804nw" },
        "markup://flexipage:componentDecorator": {
          uid: "etF-ynXSTYJ_k1Q_bjbFFQ",
        },
        "markup://one:warnNewCmp": { uid: "4MOCV23ujM6Y7lcQd226Jw" },
        "markup://runtime_sales_leadiq:recordHomeInsightsContainer": {
          uid: "Udc97-C9vGam5hCMEMfdVg",
        },
        "markup://force:textEnumLookup": { uid: "tjj1ul2gbadR03PcvZXV4w" },
        "markup://setup_service:salesChannelFlow": {
          uid: "iSjoc1kcI_XbcsL-plf-7g",
        },
        "markup://emailui:emailMessageRecordHome": {
          uid: "vZbt1PEJdlhLZ_gV9xSn6A",
        },
        "markup://records:recordLayoutInputName": {
          uid: "uIvCa9K9DlsnBl-Cyx2yCg",
        },
        "markup://sfa:teamMiniRelatedStencil": {
          uid: "X6igx_zV8Z2zbwvK06ii8w",
        },
        "markup://voice:baseCallHandlerInConsole": {
          uid: "Q8haHaCjUaYd8vXqTdVfWw",
        },
        "markup://records:formulaOutput": { uid: "NQ1ybHwbC7rwyamCJ1QryQ" },
        "markup://runtime_sales_forecasting:forecastingCellQuotaCurrency": {
          uid: "CgLxV9kp5pwCLxqbqpm6Rw",
        },
        "markup://notes:utilityBarNoteList": { uid: "C2jKBCNtGwTTnMwgmaD3UQ" },
        "markup://force:popOutManagerAura": { uid: "T8Q54dkV3eVaf6dzlLeaqw" },
        "markup://forceChatter:chatterUserRelatedListRecord": {
          uid: "4_Zb245X_AxK343t_DB0Zg",
        },
        "markup://desktopDashboards:dashboard": {
          uid: "na0gOg1T3v5M6msgkZ5ieA",
        },
        "markup://flexipage:filterListCard": { uid: "TNpRcboY8nHh-TSFKBpw3A" },
        "markup://usage_app:browserMetricsPage": {
          uid: "96Q1vPBoTeq6bUTOwcXjXA",
        },
        "markup://flexipage:component3": { uid: "PYNtzQsQ919fxD_QBM9gnA" },
        "markup://flexipage:component2": { uid: "aACtXu_hD2hcE6r0MjIwmg" },
        "markup://runtime_sales_activities:taskStatusButton": {
          uid: "iG5rtgi9emLIWWzs9FnJ0w",
        },
        "markup://force:virtualSelectionColumn": {
          uid: "HPzIqsoaWj-vioPHL2q9lA",
        },
        "markup://runtime_industries_smarttags:smartTags": {
          uid: "rUcUJ8vC6Xcj-ktsGR1_jg",
        },
        "markup://records:recordPicklist": { uid: "A9NwwZzrpu6nX22md6LYgA" },
        "markup://flexipage:accordion2": { uid: "zOL45Q7FCl-e-PmXSPpyCg" },
        "markup://flexipage:recordHomeSingleColTemplateDesktop2": {
          uid: "WHgYWQqSgG1WAG7CW8_d7A",
        },
        "markup://onesetup:setupAlohaPage": { uid: "7jdlObjNxMxqBO74TP5hMg" },
        "markup://flexipage:richText": { uid: "_k1_zhpc8soWWJKIMwJDxQ" },
        "markup://formula:formulaEngine": { uid: "dYX3YrQAM3tEj-bTCj-gGQ" },
        "markup://force:splitViewListSelectableRecord": {
          uid: "KkfACr96KrtDEG-tu-Xx0w",
        },
        "markup://one:auraContainer": { uid: "PLcQGPmbYJyAOpssTaf4BQ" },
        "markup://forceContent:outputTitle": { uid: "qrxi6nKVQa3R54te8lq0qg" },
        "markup://flexipage:visualforcePage": { uid: "jEhTUSIxeunAPnJb6cvrVg" },
        "markup://force:multiAddUsingLVM": { uid: "M2LZXht5mu-Ms9dKb8zqCQ" },
        "markup://force:relatedListDesktop": { uid: "6gRe2pQza0ZtSt9ei5O6eQ" },
        "markup://lightning:iconSvgTemplatesStandard": {
          uid: "Zizwg1fqWrAcCeQ8ODcz8Q",
        },
        "markup://runtime_service_omnichannel:omniAPILoader": {
          uid: "hLcrt-oF9iVYbXKm3OOpNw",
        },
        "markup://sfa:inputStageName": { uid: "iPMUK22eQgMQwF9r7NgoJA" },
        "markup://force:ownerLookup": { uid: "Lem5SJAA5JYTeyZsB8we9A" },
        "markup://forceChatter:contentFileSize": {
          uid: "SUiIrjN5uHTJSAlPpn1RSw",
        },
        "markup://forceContent:compoundFieldsTitleRenderer": {
          uid: "fVUXIyTbrkc2uUgPeEXchQ",
        },
        "markup://force:navigateToReactNativeApp": {
          uid: "K1gSkzrVAxOO8Is2D6tgAw",
        },
        "markup://forceChatter:feedAuxBodyEnhancedLink": {
          uid: "FmzOo3BB04oHdZ-0YmuR1Q",
        },
        "markup://sfa:outputOpportunityCurrency": {
          uid: "WoRE7IlgeUbJ8yfuUf4d_g",
        },
        "markup://records:highlightsDetailsItemGroup": {
          uid: "CL41cdLhDG3xzJEjVCP3xg",
        },
        "markup://lightning:auraDynamic": { uid: "mIqvswcHU1F3tlB_YDM-QA" },
        "markup://force:inlineEditCell": { uid: "3NoQBTbNEsoKwcEDzYPqUw" },
        "markup://desktopDashboards:embeddedDashboard": {
          uid: "0LCQPUXrQCYaFWwAP6drgg",
        },
        "markup://force:recordOutputPicklist": {
          uid: "xrP1Xt-tUUbHjGkK6l1SXA",
        },
        "markup://forceContent:latestVersionDetailPanel": {
          uid: "Isp9gpf40WH_kBPeEF4AGQ",
        },
        "markup://runtime_sales_forecasting:forecastingCellCalculatedNumber": {
          uid: "mHCOSaQRI9pej9sPVovL5g",
        },
        "markup://forceContent:contentDocumentHighlightsStencilDesktop": {
          uid: "Be4hMm8a5-skYiBUb9dbHQ",
        },
        "markup://force:changeCalendarType": { uid: "Iyori_YccBUlvbxCwRJDVA" },
        "markup://flowruntime:image": { uid: "QZ4uLQewz83hiO00w30IOQ" },
        "markup://force:detailPanelEventBroker": {
          uid: "YrmTqIhy1Seo1TlbQAm6Yg",
        },
        "markup://forceContent:virtualRelatedListStencil": {
          uid: "LHspZX1tRKFq_A4b69BT5w",
        },
        "markup://home:topDealsContainer": { uid: "mayoGfqXLBvGIodyQ1Mskw" },
        "markup://ui:dataTableHeader": { uid: "s33mhOvPgZYl8cTMg58S0A" },
        "markup://flexipage:tab2": { uid: "2pK0XMFmAFNuHpZH_F7dgA" },
        "markup://runtime_quip:quipCardLightning": {
          uid: "uhvNKdsRRsQDxK1C7PDG7g",
        },
        "markup://flexipage:baseFlexipageRegionClass": {
          uid: "TDZGsqr7tTRje2y5CVs39Q",
        },
        "markup://force:calendarStoreUpdate": { uid: "5ju2Wur_AY5W5gYucMNSJg" },
        "markup://runtime_sales_activities:taskRecurringCreate": {
          uid: "NMSdhDYK39eW7UGCpDjv1Q",
        },
        "markup://runtime_sales_activities:manyWhoInputLookup": {
          uid: "XfMwhdCuRMnCB-TassN1JQ",
        },
        "markup://force:calendarLibrary": { uid: "f0GrY3TSk9ZPWUoofPbB8w" },
        "markup://emailui:activityTimeline2EmailMessageFromAddressFieldOverride":
          { uid: "7QG00ehGDUPor_n5VjGa7w" },
        "markup://runtime_sales_forecasting:forecastingCellCurrency": {
          uid: "_6ivfpXRwlRigbmzjtLjbg",
        },
        "markup://emailui:relatedOtherPeopleContainer": {
          uid: "zTlR1SaRGlCuSAjMgA2EAQ",
        },
        "markup://one:sidebarWrapper": { uid: "A5FSykzasOI5JEcfz-FCuw" },
        "markup://support:compactRecordFeedContainerDesktop": {
          uid: "CVGMgPX5ma5AaRDax9TO0Q",
        },
        "markup://onesetup:baseHomePage": { uid: "MmQO1oJy74K-rALWHd8mhA" },
        "markup://force:inlineEditGridInputNumber": {
          uid: "9rfsrSDusFGpXl9f7Vjswg",
        },
        "markup://home:eventContainer": { uid: "UW1_ndttu9EDykC3wYXDIg" },
        "markup://support:caseHighlightsPreviewStencil": {
          uid: "lw77ODhsNr12Kjn5ZubOKA",
        },
        "markup://force:recordPreviewItem": { uid: "dfBlIokahPUFHTwZAKDMdQ" },
        "markup://runtime_sales_activities:taskDateOverride": {
          uid: "DfA4gStzehGRtuC-WxERjg",
        },
        "markup://emailui:emailMessageEngagementTab": {
          uid: "FovKtZHsZZnlNjbKcIow2A",
        },
        "markup://records:modstamp": { uid: "ggVNEC2BCSLAWP-FCFRZ3g" },
        "markup://flowruntime:flowRuntimeHeaderForModal": {
          uid: "Ff9vrKsemx_vyVn-7TqUDA",
        },
        "markup://force:inputField": { uid: "3rKUZk3CSjzitM-d8fiTSg" },
        "markup://usage_app:pageMetricsPage": { uid: "xTQ2Z7hpwF9CwvNmN_L2AQ" },
        "markup://records:highlightsDetailsItem": {
          uid: "3fGwmSQDsihRn0Wc_7-OWQ",
        },
        "markup://calendar:refresh": { uid: "1B-Kf3YIJzMz1_fwOXjTPw" },
        "markup://flexipage:lwcAppHomeTemplateHeaderTwoColumnsLeftSidebar": {
          uid: "uCcyOAujxF2P8BhYVz6prw",
        },
        "markup://runtime_sales_lead:dupePanelCardStencil": {
          uid: "5k5Pt47bYn92hAYd-0C7Eg",
        },
        "markup://forceChatter:compoundFieldUserNameRenderer": {
          uid: "sKDPDsIml3s6HPAsMWYONw",
        },
        "markup://home:recentRecordContainer": {
          uid: "6lntw4kbsaKQ8isjAN1BNg",
        },
        "markup://runtime_sales_activities:activitySubject": {
          uid: "9praacElpToSyEAuJjW1hA",
        },
        "markup://runtime_sales_activities:timelineEmailStencilWrapper": {
          uid: "Yi12k4VdeO8h87NN_pYNkQ",
        },
        "markup://sfa:outputNameWithHierarchyIconAccount": {
          uid: "cKG1DnrTklmAUc9jH79wlQ",
        },
        "markup://forceChatter:outputUserIsActive": {
          uid: "WKlgKk-_DYkMCFbulkx4pQ",
        },
      },
      initializers: {
        outputPhoneManagerConfig: {
          isOpenCtiUser: false,
          isVoiceUser: false,
          isRtcVoiceUser: false,
        },
        gates: {
          "rrh.useLWCRelatedLists.__test__": [0, 1],
          "komaciInLexRecordLayout.lasr.ltng": [0, 0],
          "preloadRecordHomeOnlyOnce.lasr.ltng": [1, 0],
          "enableRuntimeReportingService.lwc.ltng": [0, 0],
          "com.salesforce.listview.drl.viewAll": [1, 0],
          "com.salesforce.scalecenter.isStelePdfGenerationEnabled": [0, 0],
          "komaciInLexAction.lasr.ltng": [0, 0],
          "createReport.ecm.einstein": [1, 0],
          "scenarioTrackerEnabled.instrumentation.ltng": [0, 1],
          "clientTelemetry.instrumentation.ltng": [1, 0],
          "com.salesforce.scalecenter.isOptInFeatureEnabled": [1, 0],
          "com.salesforce.scalecenter.isPdfDownloadButtonVisible": [0, 0],
          "com.salesforce.acs.displayRecordAccessPage": [0, 1],
          "browserIdleTime.instrumentation.ltng": [1, 0],
          "componentProfiler.instrumentation.ltng": [0, 1],
          "progressiveContainerAroundComponents.lasr.ltng": [0, 1],
          "progressiveContainerInTab.lasr.ltng": [0, 0],
          "lookups.lookupMobilev2": [0, 1],
          "lasr.refreshViewAPI": [1, 0],
          "relatedList.lwcDrillin": [0, 1],
          "versionedFlexipagesDescriptor.lwcFlexipages.uip": [0, 0],
          "com.salesforce.scalecenter.isPlatformEventsAnalysisEnabled": [0, 0],
          "enablePreloadRecordHomeData.lasr.ltng": [0, 0],
          "o11yEnabled.instrumentation.ltng": [1, 0],
          "lds.useNewTrackedFieldBehavior": [1, 0],
          "o11yAuraActionsEnabled.instrumentation.ltng": [0, 0],
          "ui.services.PageScopedCache.enabled": [1, 0],
          "quickFiltersViewAll.drl.expSvc": [1, 0],
          "com.salesforce.scalecenter.shouldSendMetricsRequestsToBackend": [
            1, 0,
          ],
          "lwc.objectHome.expSvc": [0, 1],
          "komaciInLexFlexipage.lasr.ltng": [0, 1],
          "preloadRecordHomeOncePerPageType.lasr.ltng": [0, 0],
          "komaciInLex.lasr.ltng": [0, 0],
          "limitPerfTrxMarks.instrumentation.ltng": [1, 0],
          "tableau.auth.jwt": [0, 1],
          "com.salesforce.scaletestingservice.isDataSeedingEnabled": [0, 0],
          "scenarioTrackerMarksEnabled.instrumentation.ltng": [0, 1],
        },
        featureFlag: {
          "MapsApi.org.allowAddressAutoComplete": false,
          "Networks.org.siteHasGenerativeAnswers": false,
        },
        searchDesktopHeaderManagerConfig: {
          searchConfig: {
            isSearchAssistantDialogForUserEnabled: true,
            isInstantResultsPerfOptimizationEnabled: true,
            isLwcSearchResultsEnabled: false,
            isNaturalLanguageEnabled: true,
            isLwcKeywordResultsPerfOptimizationEnabled: false,
            isRecordPreviewOptimizationEnabled: true,
          },
        },
        instrumentationConfig: {
          tracingSampleRate: 1.0,
          distributedTracingEnabled: false,
          maxThreadCount: 20,
          env: "prod",
        },
        accessChecks: {
          "Insights.userCanViewUsage": true,
          "HealthCloud.userCanAccessOrAdminHealthCloud": false,
          "EngagementAlertsPlatform.orgHasAlertsWebPushNotificationsAccess": false,
          "InteractionCalculation.orgHasBREandDESAccess": false,
          "HighVelocitySales.userCanCreateStandardCadence": false,
          "Support.userHasLightningOpenCtiSettings": false,
          "Interaction.userCanViewInteraction": true,
          "Insights.canScheduleWorkflow": false,
          "Learning.userHasGuidanceCenterDefaultPinned": false,
          "PipelineInspector.userCanAccessOpportunityIntelligencePanel": true,
          "EnablementCoaching.userHasEnablementCoachingSurveyAdminAccess": false,
          "OmniChannel.orgHasOmniSkillsRouting": false,
          "Voice.orgHasCallDispositionEnabled": false,
          "CommercePricing.userCanAccessPriceSheetMappingEntities": false,
          "Insights.userCanViewEdgeMarts": false,
          "Insights.orgHasLwcInsightsEnabled": false,
          "AppointmentBooking.orgHasTopicOrTemplate": false,
          "Cpq.orgHasRTPExperience": false,
          "Insights.userHasSonic": false,
          "Messaging.orgEnabledEmailToCase": false,
          "InteractionCalculation.userHasBREandDESAccess": false,
          "HealthCloud.orgHasHomeHealth": false,
          "EinsteinDataDiscovery.userCanViewEDUIStory": false,
          "Cpq.userIsCollectionUser": false,
          "Visualforce.isVFRecordDataInvalidationEnabled": true,
          "ClauseMgmt.isClauseDesigner": false,
          "HealthCloud.orgHasHealthCloudStarter": false,
          "EnablementCoaching.userHasEnablementCoachingAdminAccess": false,
          "Interaction.orgHasReactiveScreens": false,
          "Interaction.userCanEditOrchestration": true,
          "EmbeddedService.userHasEmbeddedMessagingAgent": true,
          "ServiceCloudVoice.userIsCCAdminOrAgentBYOT": false,
          "Interaction.userCanEditDesigner": true,
          "RevProduct.userCanAccessBundles": false,
          "Timeline.userCanAccessCdpEventsOnTimeline": false,
          "LiveMessage.userHasLiveMessageAgent": false,
          "ConversationServiceIntegration.orgHasConversationCatchUpForAgentsEnabled": false,
          "PublicSector.userHasCarePlans": false,
          "HealthCloud.orgHasHealthCloud": false,
          "Flexipage.orgCanHaveFieldInstancesOnMobile": true,
          "Voice.orgHasDoNotCall": false,
          "ManagedContent.orgHasCMSSpaceV2Translation": true,
          "RuleEngine.userHasPricingRuleReadAccess": false,
          "Interaction.userCanViewFlowOrJourneyBuilder": true,
          "ServiceCloudVoice.orgHasServiceCloudVoiceEnabled": false,
          "Obligation.userIsObligationManager": true,
          "HighVelocitySales.userHasInvoiceAttributionEnabled": false,
          "Learning.userCanEditInAppLearning": true,
          "MailApp.orgHasContextualEverywhereEnabled": true,
          "AppointmentBooking.orgHasMultipleTopicsForShifts": false,
          "Cpq.userCanAccessSubscriptionManagement": false,
          "Interaction.userCanRunInteraction": true,
          "IndustriesEpc.userHasAccessToIndustriesEpcNextPilot": false,
          "Insights.orgHasWaveSharing": false,
          "Insights.userCanUseConnections": false,
          "Cpq.orgHasCoreCPQ": false,
          "MailApp.orgHasSalesforceEverywhereEnabled": true,
          "AppointmentBooking.orgHasAppointmentBooking": true,
          "MailApp.orgHasDisplayNotificationsEnabled": true,
          "ServiceCloudVoice.orgHasTranscriptionToggleEnabled": false,
          "Insights.userCanManagePrivateAssets": false,
          "Support.userHasConsentedToEmailSummarization": false,
          "Learning.orgHasAdvancedLearningContent": true,
          "Interaction.orgHasFlowRuntimeV2LwcRollbackSwitchOn": false,
          "Support.orgHasSwarmingAccess": false,
          "EmailStream.userHasSIQProductivityFeaturesEnabledInLex": false,
          "ManagedContent.orgHasManagedContentMarketing": false,
          "Insights.orgHasLiveConnectors": false,
          "S1Desktop.userHasActivitiesRelatedListsOnRecordHome": false,
          "TrailheadOnLightning.canShowNewSidePanel": true,
          "Flexipage.orgHasFieldInstancesOnMobileEnabled": false,
          "EmailStream.userHasEmailStreamEnabled": false,
          "OmniChannel.orgHasOmniChannelScrt2BotRouting": false,
          "Interaction.orgHasFlowRuntimeV3": true,
          "Interaction.orgHasFlowRuntimeV2": true,
          "Learning.scalableProgramAssignmentEnabled": false,
          "HighVelocitySales.userHasAnyAttributionEnabled": false,
          "HealthCloud.orgHasPrioritizationRuleEnabled": false,
          "Voice.orgHasSCVConversationIntelligencePilot": false,
          "OnlineSales.orgAllowsVirtualObjects": false,
          "IndustriesCib.orgHasCallReports": false,
          "OmniChannel.orgHasServicePresence": false,
          "PublicLoggingLib.allowJSPublicLoggingLib": false,
          "EnablementCoaching.userHasEnablementCoachingRepAccess": false,
          "Insights.canUseDataPrep": false,
          "Insights.orgHasS3WriteConnector": false,
          "AppointmentBooking.orgHasDropInAppointments": false,
          "Insights.userCanUseRecipeEditor": false,
          "S1Desktop.orgHasSimpleRecordHome": false,
          "Insights.orgHasReplicationEnabled": false,
          "InteractionCalculation.userHasInteractionCalculationAdminAccess": false,
          "Insights.orgCanUseIntelligentTemplatedApps": false,
          "Interaction.userCanEditInteraction": true,
          "AdminSuccess.guidanceCenterEnabled": true,
          "LiveAgent.orgHasLiveAgent": false,
          "EnablementCoaching.orgHasCoaching": false,
          "IndustriesEpc.orgHasIndustriesEpcFeature": false,
          "Social.hasSocialObjectsPilot": false,
          "HealthCloud.orgHasHealthCloudIntegratedCareManagement": false,
          "ContractMgmt.userHasContractMgmtRuntime": false,
          "EinsteinBuilder.orgHasEpbOneToOneJoinsEnabled": false,
          "Insights.orgHasSnowflakeWriteConnector": false,
          "Commerce.orgHasCommerceB2BEnabled": false,
          "Insights.userHasDataPipelinesApp": false,
          "HighVelocitySales.orgHasAutoSendEmailEnabledForQuickCadence": false,
          "ManagedContent.orgHasMContentEnhancedSearch": false,
          "HealthCloudUtilizationMgmt.orgHasUtilizationManagement": false,
          "EssentialsTrialSignup.IsResellerTrialOrg": false,
          "HealthCloud.userHasHomeHealthAdminAccess": false,
          "IEClauseService.orgHasClauseGenerationEnabled": false,
          "ServiceCatalog.orgHasCustomerCatalogAccess": false,
          "EinsteinBuilder.orgHasEpbOnHawkingEnabled": true,
          "IndustriesServiceProcess.userHasAccessToServiceProcess": false,
          "DocGen.userHasDocGenDesigner": false,
          "Cpq.orgHasCpqPreview": false,
          "Insights.canViewWorkflowAndNodes": false,
          "SceFreemium.orgHasFreeScoresEnabled": false,
          "Records.PSEDRecordHomeEnabled": false,
          "Insights.userCanEditEdgeMarts": false,
          "Knowledge.useLwcFlexipage": false,
          "MfgGridEnhancementPilot.orgHasMfgGridEnhancementPilotPerm": false,
          "Insights.orgHasTableauHyperWriteConnector": false,
          "CommercePricing.orgHasPriceSheetsPricingEnabled": false,
          "PipelineInspector.userCanAccessIntelligenceOverview": false,
          "AdminSuccess.onboardingAppIsSysAdmin": true,
          "AdminSuccess.simplifiedGuidanceContent": false,
          "ActionCadence.orgHasAccessToCadenceInFolders": false,
          "EinsteinBuilder.orgHasEpbJoins": false,
          "Insights.orgHasWaveTimeZoneEnabled": false,
          "Support.orgHasLightningQuickText": true,
          "HealthCloud.orgHasARCAnchorNodeEnabled": false,
          "PublicSector.userHasPscLpiAccess": false,
          "Voice.userHasVoiceOutbound": false,
          "EinsteinSearch.orgCanHaveEinsteinSearchCSPilot": false,
          "Records.StateCountryPicklistEnabled": false,
          "MailApp.orgHasNewIFTEnabled": true,
          "Insights.userHasInsightsAdmin": false,
          "Learning.userHasLearningPaths": true,
          "ServiceCloudVoice.orgHasSCVSkillBasedRoutingEnabled": false,
          "SalesExcellence.orgHasAccessToSalesExcellenceEngagement": false,
          "Insights.userCanAccessDataTemplates": false,
          "EinsteinGPT.orgHasEinsteinGPTFieldsEnabled": false,
          "InteractionUdd.orgHasEnhancedFlowListView": true,
          "CommercePricing.userCanAccessFieldMappingEntities": false,
          "Insights.orgHasUnrestrictedSMCTextFieldEnabled": false,
          "FieldService.orgHasUsageBasedPreventiveMaintenance": false,
          "Workflow.orgCanCreateProcesses": true,
          "AutomatedActions.userCanAccessAutomatedActions": false,
          "OrgPreferences.OptimizerAppEnabled": true,
          "OrgPermissions.SubscriptionsEnabled": false,
          "Insights.orgCanScheduleSubHourly": false,
          "Insights.orgCanUseSaqlQueryCaching": false,
          "Admin.userCanCustomizeApplication": true,
          "Insights.orgHasWaveNullMeaEnabled": false,
          "ServiceVoice.orgHasCallCollaboration": true,
          "ConversationServiceIntegration.orgHasConversationCatchUpForSupervisorsEnabled": false,
          "VideoConference.userCanUseVideoConferenceZoom": false,
          "Insights.orgCanUseWaveIframeDashboard": false,
          "IndustriesPricing.orgHasCorePricingAccessEnabled": false,
          "Navigation.DisablePPR": false,
          "Scheduling.orgHasShiftView": true,
          "HighVelocitySales.orgHasCadenceBuilderV2": false,
          "HelloStudio.orgHasMeetingPrepEnabled": false,
          "Interaction.orgHasFlowAutoFieldsUseRecComp": true,
          "ServiceCloudVoice.userIsContactCenterSupervisor": false,
          "ConsoleNavigation.orgLazyLoadsDetailsTabContent": false,
          "AdminSuccess.guidanceCenterForAllUsers": false,
          "Commerce.orgHasCommerceB2CEnabled": false,
          "Enablement.userHasEnablementAdminAccess": false,
          "FieldService.orgHasShiftManagement": false,
          "Scheduling.orgHasSchedulerActionableList": false,
          "IndustriesContext.orgHasIndustriesContextService": false,
          "HighVelocitySales.orgHasAutoSendEmailEnabled": false,
          "Sales.orgHasOppTeamSellingOn": false,
          "Insights.canCreateEdgemart": false,
          "Cpq.userCanAccessProductImport": false,
          "AppointmentBooking.orgHasAnyResourceType": false,
          "ServiceCatalog.userCanManageServiceCatalogSettings": false,
          "ContractMgmt.ContractMgmtAdmin": false,
          "Support.userCanCreateLightningQuickText": true,
          "Insights.orgHasSalesforceWriteConnector": false,
          "UnifiedMarketing.unifiedMarketingEnabled": false,
          "BluetailWits.hasCompanySuggestions": false,
          "Support.isQuickTextUiInLtngHidden": false,
          "ContractMgmt.ContractMgmtRuntimePC": false,
          "HighVelocitySales.userHasOpportunityAttributionEnabled": false,
          "ContractMgmt.userHasContractMgmt": false,
          "Interaction.orgHasFlowRuntimeForceLwcBody": false,
          "EinsteinBuilder.orgHasEpbWithCdpDataPilot": false,
          "Etlo.orgHasEtlOrchestrationPermEnabled": false,
          "Interaction.orgHasOrchSharing": true,
          "HighVelocitySales.orgHasLegacySnoozeStateBehavior": false,
          "InteractionCalculation.orgHasInteractionCalculationPilot": false,
          "Learning.orgCanPinGuidanceCenter": true,
          "ServiceCloudVoice.userCanToggleCallRecordings": false,
          "EinsteinBot.canUseBotChannelOnECM": false,
          "Chatapp.orgCanUseTeamsIntegration": false,
          "Insights.userHasInsights": false,
          "CDP.orgHasCdpEDCFeature": false,
          "AdminSuccess.onboardingAppUserAccess": false,
          "Insights.userHasMulesoftDataPath": false,
          "HighVelocitySales.orgHasLinkedInIntegrationForHVSEnabled": false,
          "ManagedContent.orgHidesManagedContentUIFeatures": false,
          "SecurityHub.orgHasSecurityHub": true,
          "BluetailWits.isSocialInsightsLogoAdmin": true,
          "Insights.canUploadExternalData": false,
          "Insights.orgHasSyncOut": false,
          "EinsteinDataDiscovery.userCanCreateStoryEDUIStory": false,
          "PipelineInspector.orgCanAccessContactInspector": true,
          "EinsteinBot.canUseEmailChannelOnECM": false,
          "EngagementAlertsPlatform.userHasEngagementAlertsAccess": false,
          "EinsteinAgent.orgHasSuggestedResponse": false,
          "RuleEngine.userHasPricingRuleModifyAccess": false,
          "Interaction.orgHasFlowSectionsAndColumns": true,
          "Insights.orgHasCDPDirectPilot": false,
          "HighVelocitySales.orgHasMultipleCadences": false,
          "Interaction.orgHasLwcRuntimeV3": true,
          "RuleEngine.orgHasPricingRuleEnabled": false,
          "DocGen.orgHasMS365Integration": false,
          "EinsteinGPT.userHasExecutePromptTemplates": false,
          "PipelineInspector.orgCanAccessLeadInspector": true,
          "RuleEngine.userHasRuleEnginePlatformAccess": false,
          "Records.isRRHVersionIndicatorEnabled": false,
          "OrgPermissions.PaymentPlatform": true,
          "ServiceCatalog.orgUsesDataCategories": false,
          "Insights.userCanCreateAppsFromIntelligentTemplate": false,
          "EinsteinAgent.userHasSuggestedResponse": false,
        },
        coreInfoConfig: {
          securePort: "443",
          localhostPort: "8085",
          untrustedContentDomain: ".a.forceusercontent.com",
          internalAppVersion: 246,
        },
        oneConfig: {
          isAlohaDesktop: false,
          isLightningExperiencePreferred: true,
          isAccessAllowed: true,
          densitySetting: "VIEW_ONE",
          hasAccess: true,
          isTabTitleDetailsEnabled: true,
          isLightningUrlV2Enabled: true,
          isFingerPrintEnabled: true,
          uriAddressableDefsEnabled: true,
        },
      },
      cdnForLatestDef: false,
      host: "",
      auraCmpDefBaseURI:
        "/auraCmpDef?_au=tmkBwvkd9CKM17eFFGtutw&_c=false&_density=VIEW_ONE&_ff=DESKTOP&_l=true&_l10n=en_US&_lrmc=-386269907&_style=1474136371&aura.app=markup://one:one&aura.mode=PROD",
      context: {
        mode: "PROD",
        app: "one:one",
        pathPrefix: "",
        fwuid:
          "MDM0c01pMVUtd244bVVLc2VRYzQ2UWRkdk8xRWxIam5GeGw0LU1mRHRYQ3cyNDYuMTUuNS0zLjAuNA",
        mlr: 1,
        uad: 1,
        loaded: { "APPLICATION@markup://one:one": "tmkBwvkd9CKM17eFFGtutw" },
        globalValueProviders: [
          {
            type: "$SObjectType",
            values: {
              CurrentUser: {
                isChatterEnabled: true,
                Email: "mohan.chinnappan.n@gmail.com",
                Id: "0058W00000BAlWSQA1",
              },
            },
          },
          {
            type: "$Locale",
            values: {
              userLocaleLang: "en",
              userLocaleCountry: "US",
              language: "en",
              country: "US",
              variant: "",
              langLocale: "en_US",
              datetimeLocale: "en_US",
              nameOfMonths: [
                { fullName: "January", shortName: "Jan" },
                { fullName: "February", shortName: "Feb" },
                { fullName: "March", shortName: "Mar" },
                { fullName: "April", shortName: "Apr" },
                { fullName: "May", shortName: "May" },
                { fullName: "June", shortName: "Jun" },
                { fullName: "July", shortName: "Jul" },
                { fullName: "August", shortName: "Aug" },
                { fullName: "September", shortName: "Sep" },
                { fullName: "October", shortName: "Oct" },
                { fullName: "November", shortName: "Nov" },
                { fullName: "December", shortName: "Dec" },
                { fullName: "", shortName: "" },
              ],
              nameOfWeekdays: [
                { fullName: "Sunday", shortName: "SUN" },
                { fullName: "Monday", shortName: "MON" },
                { fullName: "Tuesday", shortName: "TUE" },
                { fullName: "Wednesday", shortName: "WED" },
                { fullName: "Thursday", shortName: "THU" },
                { fullName: "Friday", shortName: "FRI" },
                { fullName: "Saturday", shortName: "SAT" },
              ],
              labelForToday: "Today",
              firstDayOfWeek: 1,
              timezone: "America/Los_Angeles",
              dateFormat: "MMM d, yyyy",
              shortDateFormat: "M/d/yyyy",
              longDateFormat: "MMMM d, yyyy",
              datetimeFormat: "MMM d, yyyy, h:mm:ss a",
              shortDatetimeFormat: "M/d/yyyy, h:mm a",
              longDatetimeFormat: "M/d/yyyy, h:mm:ss a z",
              timeFormat: "h:mm:ss a",
              shortTimeFormat: "h:mm a",
              longTimeFormat: "h:mm:ss a z",
              numberFormat: "#,##0.###",
              decimal: ".",
              grouping: ",",
              zero: "0",
              percentFormat: "#,##0%",
              exponentialSign: "E",
              infinity: "∞",
              minusSign: "-",
              nan: "NaN",
              percentSign: "%",
              perMilleSign: "\u2030",
              plusSign: "+",
              standardFormat: "#,##0.###",
              superscriptingExponentSign: "×",
              currencyFormat: "¤#,##0.00",
              currencyCode: "USD",
              currency: "$",
              dir: "ltr",
              lang: "en-US",
              isEasternNameStyle: false,
              showJapaneseImperialYear: false,
              calendarData: {
                gregorian: {
                  dayPeriods: {
                    format: {
                      abbreviated: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "in the morning",
                        afternoon1: "in the afternoon",
                        evening1: "in the evening",
                        night1: "at night",
                      },
                      narrow: {
                        midnight: "mi",
                        am: "a",
                        "am-alt-variant": "am",
                        noon: "n",
                        pm: "p",
                        "pm-alt-variant": "pm",
                        morning1: "in the morning",
                        afternoon1: "in the afternoon",
                        evening1: "in the evening",
                        night1: "at night",
                      },
                      wide: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "in the morning",
                        afternoon1: "in the afternoon",
                        evening1: "in the evening",
                        night1: "at night",
                      },
                    },
                    "stand-alone": {
                      abbreviated: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "morning",
                        afternoon1: "afternoon",
                        evening1: "evening",
                        night1: "night",
                      },
                      narrow: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "morning",
                        afternoon1: "afternoon",
                        evening1: "evening",
                        night1: "night",
                      },
                      wide: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "morning",
                        afternoon1: "afternoon",
                        evening1: "evening",
                        night1: "night",
                      },
                    },
                  },
                  days: {
                    format: {
                      abbreviated: {
                        sun: "Sun",
                        mon: "Mon",
                        tue: "Tue",
                        wed: "Wed",
                        thu: "Thu",
                        fri: "Fri",
                        sat: "Sat",
                      },
                      narrow: {
                        sun: "S",
                        mon: "M",
                        tue: "T",
                        wed: "W",
                        thu: "T",
                        fri: "F",
                        sat: "S",
                      },
                      short: {
                        sun: "Su",
                        mon: "Mo",
                        tue: "Tu",
                        wed: "We",
                        thu: "Th",
                        fri: "Fr",
                        sat: "Sa",
                      },
                      wide: {
                        sun: "Sunday",
                        mon: "Monday",
                        tue: "Tuesday",
                        wed: "Wednesday",
                        thu: "Thursday",
                        fri: "Friday",
                        sat: "Saturday",
                      },
                    },
                    "stand-alone": {
                      abbreviated: {
                        sun: "Sun",
                        mon: "Mon",
                        tue: "Tue",
                        wed: "Wed",
                        thu: "Thu",
                        fri: "Fri",
                        sat: "Sat",
                      },
                      narrow: {
                        sun: "S",
                        mon: "M",
                        tue: "T",
                        wed: "W",
                        thu: "T",
                        fri: "F",
                        sat: "S",
                      },
                      short: {
                        sun: "Su",
                        mon: "Mo",
                        tue: "Tu",
                        wed: "We",
                        thu: "Th",
                        fri: "Fr",
                        sat: "Sa",
                      },
                      wide: {
                        sun: "Sunday",
                        mon: "Monday",
                        tue: "Tuesday",
                        wed: "Wednesday",
                        thu: "Thursday",
                        fri: "Friday",
                        sat: "Saturday",
                      },
                    },
                  },
                  eras: {
                    eraNames: {
                      0: "Before Christ",
                      1: "Anno Domini",
                      "0-alt-variant": "Before Common Era",
                      "1-alt-variant": "Common Era",
                    },
                    eraAbbr: {
                      0: "BC",
                      1: "AD",
                      "0-alt-variant": "BCE",
                      "1-alt-variant": "CE",
                    },
                    eraNarrow: {
                      0: "B",
                      1: "A",
                      "0-alt-variant": "BCE",
                      "1-alt-variant": "CE",
                    },
                  },
                  months: {
                    format: {
                      abbreviated: {
                        1: "Jan",
                        2: "Feb",
                        3: "Mar",
                        4: "Apr",
                        5: "May",
                        6: "Jun",
                        7: "Jul",
                        8: "Aug",
                        9: "Sep",
                        10: "Oct",
                        11: "Nov",
                        12: "Dec",
                      },
                      narrow: {
                        1: "J",
                        2: "F",
                        3: "M",
                        4: "A",
                        5: "M",
                        6: "J",
                        7: "J",
                        8: "A",
                        9: "S",
                        10: "O",
                        11: "N",
                        12: "D",
                      },
                      wide: {
                        1: "January",
                        2: "February",
                        3: "March",
                        4: "April",
                        5: "May",
                        6: "June",
                        7: "July",
                        8: "August",
                        9: "September",
                        10: "October",
                        11: "November",
                        12: "December",
                      },
                    },
                    "stand-alone": {
                      abbreviated: {
                        1: "Jan",
                        2: "Feb",
                        3: "Mar",
                        4: "Apr",
                        5: "May",
                        6: "Jun",
                        7: "Jul",
                        8: "Aug",
                        9: "Sep",
                        10: "Oct",
                        11: "Nov",
                        12: "Dec",
                      },
                      narrow: {
                        1: "J",
                        2: "F",
                        3: "M",
                        4: "A",
                        5: "M",
                        6: "J",
                        7: "J",
                        8: "A",
                        9: "S",
                        10: "O",
                        11: "N",
                        12: "D",
                      },
                      wide: {
                        1: "January",
                        2: "February",
                        3: "March",
                        4: "April",
                        5: "May",
                        6: "June",
                        7: "July",
                        8: "August",
                        9: "September",
                        10: "October",
                        11: "November",
                        12: "December",
                      },
                    },
                  },
                  quarters: {
                    format: {
                      abbreviated: { 1: "Q1", 2: "Q2", 3: "Q3", 4: "Q4" },
                      narrow: { 1: "1", 2: "2", 3: "3", 4: "4" },
                      wide: {
                        1: "1st quarter",
                        2: "2nd quarter",
                        3: "3rd quarter",
                        4: "4th quarter",
                      },
                    },
                    "stand-alone": {
                      abbreviated: { 1: "Q1", 2: "Q2", 3: "Q3", 4: "Q4" },
                      narrow: { 1: "1", 2: "2", 3: "3", 4: "4" },
                      wide: {
                        1: "1st quarter",
                        2: "2nd quarter",
                        3: "3rd quarter",
                        4: "4th quarter",
                      },
                    },
                  },
                },
              },
              "common.digits": {
                bhks: "𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙",
                talu: "᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙",
                guru: "੦੧੨੩੪੫੬੭੮੯",
                arabext: "۰۱۲۳۴۵۶۷۸۹",
                gujr: "૦૧૨૩૪૫૬૭૮૯",
                mathdbl: "𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡",
                fullwide: "０１２３４５６７８９",
                telu: "౦౧౨౩౪౫౬౭౮౯",
                mathmono: "𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿",
                gong: "𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩",
                beng: "০১২৩৪৫৬৭৮৯",
                knda: "೦೧೨೩೪೫೬೭೮೯",
                java: "꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙",
                modi: "𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙",
                gonm: "𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙",
                segment: "🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹",
                latn: "0123456789",
                lepc: "᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉",
                orya: "୦୧୨୩୪୫୬୭୮୯",
                takr: "𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉",
                sinh: "෦෧෨෩෪෫෬෭෮෯",
                laoo: "໐໑໒໓໔໕໖໗໘໙",
                thai: "๐๑๒๓๔๕๖๗๘๙",
                mymrtlng: "꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹",
                sund: "᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹",
                olck: "᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙",
                tibt: "༠༡༢༣༤༥༦༧༨༩",
                hmnp: "𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉",
                mtei: "꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹",
                sind: "𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹",
                vaii: "꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩",
                mymrshan: "႐႑႒႓႔႕႖႗႘႙",
                tamldec: "௦௧௨௩௪௫௬௭௮௯",
                sora: "𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹",
                arab: "٠١٢٣٤٥٦٧٨٩",
                diak: "𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙",
                mlym: "൦൧൨൩൪൫൬൭൮൯",
                deva: "०१२३४५६७८९",
                hanidec: "〇一二三四五六七八九",
                adlm: "𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙",
                rohg: "𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹",
                osma: "𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩",
                hmng: "𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙",
                wara: "𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩",
                bali: "᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙",
                brah: "𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯",
                lana: "᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉",
                tirh: "𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙",
                saur: "꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙",
                limb: "᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏",
                kali: "꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉",
                mymr: "၀၁၂၃၄၅၆၇၈၉",
                wcho: "𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹",
                mathsans: "𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫",
                ahom: "𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹",
                mong: "᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙",
                cakm: "𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿",
                nkoo: "߀߁߂߃߄߅߆߇߈߉",
                khmr: "០១២៣៤៥៦៧៨៩",
                newa: "𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙",
                shrd: "𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙",
                mathsanb: "𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵",
                lanatham: "᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙",
                mroo: "𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩",
                mathbold: "𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗",
                tnsa: "𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉",
                cham: "꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙",
              },
              "common.calendarData": {
                "ethiopic-amete-alem": { eras: { 0: { _end: "-5492-08-29" } } },
                japanese: {
                  calendarSystem: "solar",
                  eras: {
                    0: { _start: "645-6-19" },
                    1: { _start: "650-2-15" },
                    2: { _start: "672-1-1" },
                    3: { _start: "686-7-20" },
                    4: { _start: "701-3-21" },
                    5: { _start: "704-5-10" },
                    6: { _start: "708-1-11" },
                    7: { _start: "715-9-2" },
                    8: { _start: "717-11-17" },
                    9: { _start: "724-2-4" },
                    10: { _start: "729-8-5" },
                    11: { _start: "749-4-14" },
                    12: { _start: "749-7-2" },
                    13: { _start: "757-8-18" },
                    14: { _start: "765-1-7" },
                    15: { _start: "767-8-16" },
                    16: { _start: "770-10-1" },
                    17: { _start: "781-1-1" },
                    18: { _start: "782-8-19" },
                    19: { _start: "806-5-18" },
                    20: { _start: "810-9-19" },
                    21: { _start: "824-1-5" },
                    22: { _start: "834-1-3" },
                    23: { _start: "848-6-13" },
                    24: { _start: "851-4-28" },
                    25: { _start: "854-11-30" },
                    26: { _start: "857-2-21" },
                    27: { _start: "859-4-15" },
                    28: { _start: "877-4-16" },
                    29: { _start: "885-2-21" },
                    30: { _start: "889-4-27" },
                    31: { _start: "898-4-26" },
                    32: { _start: "901-7-15" },
                    33: { _start: "923-4-11" },
                    34: { _start: "931-4-26" },
                    35: { _start: "938-5-22" },
                    36: { _start: "947-4-22" },
                    37: { _start: "957-10-27" },
                    38: { _start: "961-2-16" },
                    39: { _start: "964-7-10" },
                    40: { _start: "968-8-13" },
                    41: { _start: "970-3-25" },
                    42: { _start: "973-12-20" },
                    43: { _start: "976-7-13" },
                    44: { _start: "978-11-29" },
                    45: { _start: "983-4-15" },
                    46: { _start: "985-4-27" },
                    47: { _start: "987-4-5" },
                    48: { _start: "989-8-8" },
                    49: { _start: "990-11-7" },
                    50: { _start: "995-2-22" },
                    51: { _start: "999-1-13" },
                    52: { _start: "1004-7-20" },
                    53: { _start: "1012-12-25" },
                    54: { _start: "1017-4-23" },
                    55: { _start: "1021-2-2" },
                    56: { _start: "1024-7-13" },
                    57: { _start: "1028-7-25" },
                    58: { _start: "1037-4-21" },
                    59: { _start: "1040-11-10" },
                    60: { _start: "1044-11-24" },
                    61: { _start: "1046-4-14" },
                    62: { _start: "1053-1-11" },
                    63: { _start: "1058-8-29" },
                    64: { _start: "1065-8-2" },
                    65: { _start: "1069-4-13" },
                    66: { _start: "1074-8-23" },
                    67: { _start: "1077-11-17" },
                    68: { _start: "1081-2-10" },
                    69: { _start: "1084-2-7" },
                    70: { _start: "1087-4-7" },
                    71: { _start: "1094-12-15" },
                    72: { _start: "1096-12-17" },
                    73: { _start: "1097-11-21" },
                    74: { _start: "1099-8-28" },
                    75: { _start: "1104-2-10" },
                    76: { _start: "1106-4-9" },
                    77: { _start: "1108-8-3" },
                    78: { _start: "1110-7-13" },
                    79: { _start: "1113-7-13" },
                    80: { _start: "1118-4-3" },
                    81: { _start: "1120-4-10" },
                    82: { _start: "1124-4-3" },
                    83: { _start: "1126-1-22" },
                    84: { _start: "1131-1-29" },
                    85: { _start: "1132-8-11" },
                    86: { _start: "1135-4-27" },
                    87: { _start: "1141-7-10" },
                    88: { _start: "1142-4-28" },
                    89: { _start: "1144-2-23" },
                    90: { _start: "1145-7-22" },
                    91: { _start: "1151-1-26" },
                    92: { _start: "1154-10-28" },
                    93: { _start: "1156-4-27" },
                    94: { _start: "1159-4-20" },
                    95: { _start: "1160-1-10" },
                    96: { _start: "1161-9-4" },
                    97: { _start: "1163-3-29" },
                    98: { _start: "1165-6-5" },
                    99: { _start: "1166-8-27" },
                    100: { _start: "1169-4-8" },
                    101: { _start: "1171-4-21" },
                    102: { _start: "1175-7-28" },
                    103: { _start: "1177-8-4" },
                    104: { _start: "1181-7-14" },
                    105: { _start: "1182-5-27" },
                    106: { _start: "1184-4-16" },
                    107: { _start: "1185-8-14" },
                    108: { _start: "1190-4-11" },
                    109: { _start: "1199-4-27" },
                    110: { _start: "1201-2-13" },
                    111: { _start: "1204-2-20" },
                    112: { _start: "1206-4-27" },
                    113: { _start: "1207-10-25" },
                    114: { _start: "1211-3-9" },
                    115: { _start: "1213-12-6" },
                    116: { _start: "1219-4-12" },
                    117: { _start: "1222-4-13" },
                    118: { _start: "1224-11-20" },
                    119: { _start: "1225-4-20" },
                    120: { _start: "1227-12-10" },
                    121: { _start: "1229-3-5" },
                    122: { _start: "1232-4-2" },
                    123: { _start: "1233-4-15" },
                    124: { _start: "1234-11-5" },
                    125: { _start: "1235-9-19" },
                    126: { _start: "1238-11-23" },
                    127: { _start: "1239-2-7" },
                    128: { _start: "1240-7-16" },
                    129: { _start: "1243-2-26" },
                    130: { _start: "1247-2-28" },
                    131: { _start: "1249-3-18" },
                    132: { _start: "1256-10-5" },
                    133: { _start: "1257-3-14" },
                    134: { _start: "1259-3-26" },
                    135: { _start: "1260-4-13" },
                    136: { _start: "1261-2-20" },
                    137: { _start: "1264-2-28" },
                    138: { _start: "1275-4-25" },
                    139: { _start: "1278-2-29" },
                    140: { _start: "1288-4-28" },
                    141: { _start: "1293-8-5" },
                    142: { _start: "1299-4-25" },
                    143: { _start: "1302-11-21" },
                    144: { _start: "1303-8-5" },
                    145: { _start: "1306-12-14" },
                    146: { _start: "1308-10-9" },
                    147: { _start: "1311-4-28" },
                    148: { _start: "1312-3-20" },
                    149: { _start: "1317-2-3" },
                    150: { _start: "1319-4-28" },
                    151: { _start: "1321-2-23" },
                    152: { _start: "1324-12-9" },
                    153: { _start: "1326-4-26" },
                    154: { _start: "1329-8-29" },
                    155: { _start: "1331-8-9" },
                    156: { _start: "1334-1-29" },
                    157: { _start: "1336-2-29" },
                    158: { _start: "1340-4-28" },
                    159: { _start: "1346-12-8" },
                    160: { _start: "1370-7-24" },
                    161: { _start: "1372-4-1" },
                    162: { _start: "1375-5-27" },
                    163: { _start: "1379-3-22" },
                    164: { _start: "1381-2-10" },
                    165: { _start: "1384-4-28" },
                    166: { _start: "1387-8-22" },
                    167: { _start: "1387-8-23" },
                    168: { _start: "1389-2-9" },
                    169: { _start: "1390-3-26" },
                    170: { _start: "1394-7-5" },
                    171: { _start: "1428-4-27" },
                    172: { _start: "1429-9-5" },
                    173: { _start: "1441-2-17" },
                    174: { _start: "1444-2-5" },
                    175: { _start: "1449-7-28" },
                    176: { _start: "1452-7-25" },
                    177: { _start: "1455-7-25" },
                    178: { _start: "1457-9-28" },
                    179: { _start: "1460-12-21" },
                    180: { _start: "1466-2-28" },
                    181: { _start: "1467-3-3" },
                    182: { _start: "1469-4-28" },
                    183: { _start: "1487-7-29" },
                    184: { _start: "1489-8-21" },
                    185: { _start: "1492-7-19" },
                    186: { _start: "1501-2-29" },
                    187: { _start: "1504-2-30" },
                    188: { _start: "1521-8-23" },
                    189: { _start: "1528-8-20" },
                    190: { _start: "1532-7-29" },
                    191: { _start: "1555-10-23" },
                    192: { _start: "1558-2-28" },
                    193: { _start: "1570-4-23" },
                    194: { _start: "1573-7-28" },
                    195: { _start: "1592-12-8" },
                    196: { _start: "1596-10-27" },
                    197: { _start: "1615-7-13" },
                    198: { _start: "1624-2-30" },
                    199: { _start: "1644-12-16" },
                    200: { _start: "1648-2-15" },
                    201: { _start: "1652-9-18" },
                    202: { _start: "1655-4-13" },
                    203: { _start: "1658-7-23" },
                    204: { _start: "1661-4-25" },
                    205: { _start: "1673-9-21" },
                    206: { _start: "1681-9-29" },
                    207: { _start: "1684-2-21" },
                    208: { _start: "1688-9-30" },
                    209: { _start: "1704-3-13" },
                    210: { _start: "1711-4-25" },
                    211: { _start: "1716-6-22" },
                    212: { _start: "1736-4-28" },
                    213: { _start: "1741-2-27" },
                    214: { _start: "1744-2-21" },
                    215: { _start: "1748-7-12" },
                    216: { _start: "1751-10-27" },
                    217: { _start: "1764-6-2" },
                    218: { _start: "1772-11-16" },
                    219: { _start: "1781-4-2" },
                    220: { _start: "1789-1-25" },
                    221: { _start: "1801-2-5" },
                    222: { _start: "1804-2-11" },
                    223: { _start: "1818-4-22" },
                    224: { _start: "1830-12-10" },
                    225: { _start: "1844-12-2" },
                    226: { _start: "1848-2-28" },
                    227: { _start: "1854-11-27" },
                    228: { _start: "1860-3-18" },
                    229: { _start: "1861-2-19" },
                    230: { _start: "1864-2-20" },
                    231: { _start: "1865-4-7" },
                    232: { _start: "1868-9-8" },
                    233: { _start: "1912-7-30" },
                    234: { _start: "1926-12-25" },
                    235: { _start: "1989-1-8" },
                    236: { _start: "2019-5-1" },
                  },
                },
                buddhist: {
                  calendarSystem: "solar",
                  eras: { 0: { _start: "-542-01-01" } },
                },
                roc: {
                  eras: {
                    0: { _end: "1911-12-31" },
                    1: { _start: "1912-01-01" },
                  },
                },
                generic: {},
                gregorian: {
                  calendarSystem: "solar",
                  eras: { 0: { _end: "0-12-31" }, 1: { _start: "1-01-01" } },
                },
                indian: { eras: { 0: { _start: "79-01-01" } } },
                persian: {
                  calendarSystem: "solar",
                  eras: { 0: { _start: "622-01-01" } },
                },
              },
              defaultCalendar: "gregorian",
              defaultNumberingSystem: "latn",
            },
          },
          {
            type: "$Browser",
            values: {
              containerVersion: "",
              isWEBKIT: true,
              isIE11: false,
              formFactor: "DESKTOP",
              isIE10: false,
              isContainer: false,
              isBlackBerry: false,
              isIE7: false,
              isIE6: false,
              isIE9: false,
              isIE8: false,
              isDesktop: true,
              isTablet: false,
              isIPad: false,
              isSameSiteNoneIncompatible: false,
              isWindowsTablet: false,
              isPhone: false,
              S1Features: {
                isOfflineEnabled: true,
                areOfflineDraftsEnabled: false,
                isAsyncSaveEnabled: false,
                isOfflineQuickActionDraftsEnabled: false,
                isMobileNavPageRefEnabled: true,
                isPrimingPerfTestModeEnabled: false,
                hasLightningOnMobile: true,
                isUitrkLoggingEnabled: true,
                isAuraParallelBootstrapLoadEnabled: true,
                useNativeScroller: true,
                isTodayPreviewEnabled: false,
                isEclairAdvancedFeaturesEnabled: false,
                isSFXUrlFormatSupported: true,
                isEncryptedStorageEnabled: true,
                isAccountSuggestionsEnabled: false,
                isAccountLogoEnabled: false,
                isSFXInlineEditListViewEnabled: true,
                isLVMInAppBuilderEnabled: true,
                RelatedListAdvancedGrid: true,
                SplitViewMassActions: true,
                DrlViewAll: true,
                DrlViewAllQuickFilters: true,
                isLWCObjectHomeEnabled: false,
                RelatedListSmoothScrollingEnabled: false,
                isRelatedListSmoothScrollingDisabled: false,
                LwcRelatedListDrillIn: true,
                RelatedListLWCEnabled: true,
                isDynamicMruActionsOff: false,
                isListViewGroupShareEnabled: true,
                isLightningConsoleSplitViewEnabled: false,
                isSocialInsightsLogoAdmin: true,
                shouldShowEinsteinInsightsHome: false,
                homeAssistantCollapseCards: false,
                isPersonAccountsEnabled: false,
                isPersonAccountsApiLightningEnabled: false,
                isFilesSharingPrivacyEnabled: true,
                isFlexipageActionSchedulingEnabled: true,
                isForecasting3PrefEnabled: false,
                isForecasting3AggEnabledPrefOn: false,
                isForecastingPiOpptyListAllowed: true,
                orgHasEinsteinInsightsEnabled: false,
                orgHasLightningLiveAgent: false,
                isExecuteHotSpotForLDS: false,
                isInvalidRecordPlatformEventEnabled: false,
                isLDSRecordsDebug: false,
                forceReloadRecordForInlineEdit: false,
                calendarAnythingAllowed: true,
                isMultiUserOrgEnabled: true,
                isEinsteinAssistantEnabled: false,
                isEinsteinAssistantPrefEnabled: false,
                isElegibleForEinsteinGlobalModelsEnabled: false,
                isSearchCopilotEnabled: false,
                isSearchBestResultEnabled: true,
                isSearchChatterEnabled: true,
                isSearchFeedbackComponentEnabled: false,
                isEinsteinSearchCustomerServicePilotEnabled: false,
                isEinsteinSearchEnabled: true,
                isEinsteinSearchAnswersEnabled: false,
                isEinsteinSearchAnswersGPTEnabled: false,
                isEinsteinBuilderEnabled: false,
                isEinsteinBuilderLicenseEnabled: false,
                isEinsteinBuilderPrefEnabled: false,
                isEinsteinBuilderStartedPrefEnabled: false,
                isEinsteinBuilderStreamingPilotEnabled: false,
                isEinsteinBuilderFreemiumPlusEnabled: false,
                isEinsteinBuilderMLMigrated: true,
                isEinsteinEverywhereEnabled: false,
                isErbFeatureEnabled: false,
                isErbPrefEnabled: false,
                isErbStartedPrefEnabled: false,
                isAiEverywhereEnabled: true,
                isEinsteinMsaAcceptedEnabled: false,
                isEnhancedTemplatesEnabled: false,
                orgHasMatchedLeadsEnabled: false,
                isForceRefreshViewEnabled: false,
                isHighlightsWithFieldsEnabled: false,
                useRaptorAlohaPage: true,
                isEngagementScoreVisible: false,
                isLeadScoreVisible: false,
                useLexiCallbackReturnUrl: true,
                isTaskListViewsDisabled: false,
                useLightningReportBuilder: true,
                isReportEnhancedRunPageEnabled: true,
                isReportEnhancedRunPageCopyToClipboardActionEnabled: false,
                recordChangeCapture: false,
                isMergeCollisionEnabled: false,
                showTaskInfoPopover: false,
                isRaptorActionsContainerEnabled: true,
                isRaptorActionsContainerEnabledForAccount: true,
                isRaptorActionsContainerEnabledForContact: true,
                isRaptorActionsContainerEnabledForLead: true,
                isRaptorActionsContainerEnabledForOpportunity: true,
                isRaptorActionsContainerEnabledForSupport: true,
                isHeadlessFooterEnabled: true,
                isRRHVersionIndicatorEnabled: false,
                isStackedAddressableModalsEnabled: false,
                isRemoveIE11NagBannerEnabled: false,
                isFormsEnabled: false,
                isFormsOnStdObjectsEnabled: false,
                isChatterFeedOnlyInConsole: false,
                isCompactFeedInSfx: true,
                hasAutoTransitionPerm: false,
                hasOptedOutAutoTransition: false,
                hasFinishedAutoTransition: false,
                isScheduledSwitcherEnabled: true,
                isScheduledSwitcherFrequencyDaily: false,
                refreshOnInvalidSession: false,
                isLWCDeepCloneEnabled: true,
                isLWCRLHeaderActionsOffEnabled: false,
                isActionsDelaySSTFetchingEnabled: true,
                isActionsDelayHpSSTFetchingEnabled: false,
                isActionsLightningMenuItemEnabled: true,
                isServicesForAppPageEnabled: false,
                areNewRecordCallbacksEnabled: false,
                isScopedModalsOff: true,
                isUtilityBarRightAligned: false,
                isLWCPinnedRegionTemplatesEnabled: true,
                isConsoleTabPersistenceEnabled: true,
                isCollapsiblePinnedRegionsEnabled: false,
                isBackgroundNavigationsEnabled: true,
                ignoreQueryParamWhitelist: false,
                isLVMPinnedListOff: false,
                isLVMRaptorHeaderOff: false,
                isTemplateEnhancedFolderPrefEnabled: false,
                orgCanAccessLtngTempFolder: false,
                userCanUseContentBuilder: false,
                hasAccessToObjectAlias: false,
                isOrgInRZone: false,
                isSCEFreemiumEnabled: false,
                isOpptyScoreEnabled: false,
                isOpptyScoreUserPermEnabled: false,
                hasHvsBulkEmailWq: false,
                hasAccessToCadenceWho: false,
                orgHasAccessToCadenceInFolders: false,
                orgHasAccessToCadenceListViews: false,
                hasAccessToEngagementAlerts: false,
                orgCanAccessLinkedIn: true,
                isLexEndUserNoSwitchingEnabled: false,
                isBootstrapManagementEnabled: false,
                isSmartStoreAdapterV2Enabled: false,
                isSmartStoreExternalStorageDisabled: false,
                isMobileLwcOfflineEnabled: false,
                isLwcFlexipageAllObjMblRH: false,
                isLwcCaseCecEnabled: true,
                isFeedFavoritesEnabled: false,
                requireOpportunityProducts: false,
                isFeedNavBarTabsEnabled: false,
                isEditInSubtabEnabled: false,
                isCommEnhancedReportRunPageEnabled: true,
                canUserCreateReportsInCommunity: true,
                isNativeEmailClientEnabled: false,
                isLightningBlankShieldEnabled: false,
                isLightningExtAllowed: true,
                isLightningExtLinkGrabberAllowed: true,
                isLightningExtDarkModeAllowed: false,
                isLightningExtDarkModeEditable: false,
                isLightningExtCmpCustomizationAllowed: true,
                isLightningExtRelatedListsAllowed: false,
                isLightningExtRequiredFieldsAllowed: false,
                isLightningExtInlineEditModifierAllowed: false,
                isLightningExtTrailheadAllowed: false,
                isLightningExtReleased: true,
                isLightningExtRelatedListsReleased: false,
                isLightningExtRequiredFieldsReleased: false,
                isLightningExtInlineEditModifierReleased: false,
                isLightningExtTrailheadReleased: false,
                isSimpleRecordHomeEnabled: false,
                orgHasShiftManagement: false,
                minimumInstrumentationEnabled: false,
                LWCMarksEnabled: false,
                forceRecordMarksEnabled: false,
                forceRecordTransactionsDisabled: false,
                pageTrackerTransactionsDisabled: false,
                isShowViewHierarchyLinkEnabled: true,
                isMultiUserLiveRecordsEnabled: false,
                isFieldInstancesEnabled: true,
                orgCanCustomizeEntityInterface: false,
                orgCanCustDefImplForEntityInterface: false,
                orgCanViewBackupMappingUI: false,
                useNativeUiScroller: true,
                isLwcCreateEditCloneEnabled: true,
                isLwcCreateEditCloneStandardEnabled: true,
                isLightningAccSuggestionPrefEnabled: false,
                isEinsteinDocumentReaderPrefEnabled: false,
                isActionConfigurationEnabledInNative: true,
                isExpressionsEnabled: true,
                canUserShareAnalyticsImages: true,
                canUseUnifiedAnalytics: false,
                orgCanDisplayInitialLoadingSpinner: false,
                userHasOpportunityAttributionEnabled: false,
                userCanAccessPipelineInspector: false,
                userCanAccessPipelineInspectorAndOpportunity: false,
                userCanAccessPipelineInspectionSankey: false,
                orgHasPipelineInspectorSankey: false,
                userCanAccessContactInspector: true,
                userCanAccessLeadInspector: true,
                orgCanUseLwcAppPagesDesktop: true,
                orgHasDynamicInteractionsEnabled: true,
                orgCanUseLwcAppPagesMobile: false,
                isVersionedFlexipageDescriptorEnabled: false,
                isVersionedFlexipageDescriptorEnabledForRRH: false,
                orgHasRecordSharingEnabled: true,
                userHasRcCompOnStandardPages: false,
                multipleSubscriptionsEnabled: false,
                isLargeEmailBodyAllowed: false,
                EasySalesforcePrompts: false,
                StandardSalesforcePrompts: true,
                IAGExperienceCloud: false,
                isEasyChatEnabled: false,
                notificationServiceEnabled: false,
                isComplianceBannerEnabled: false,
                forceRecordDataUseLds: false,
                liveRecordsEventBusEnabled: false,
                isCaseEmailLargeDraftEnabled: false,
                isSlackEnterpriseMigrationEnabled: false,
                isRelatedListsInLabOff: false,
                isRefreshViewAPIEnabled: true,
                isKomaciInLexEnabled: false,
                isKomaciInLexRecordLayoutEnabled: false,
                isKomaciInLexActionEnabled: false,
                isKomaciInLexFlexipageEnabled: false,
                isPreloadRecordHomeDataEnabled: false,
                orgHasLinkedInIntegrationForHVSEnabled: false,
                orgHasAutoSendEmailEnabled: false,
                orgHasAutoSendEmailEnabledForQuickCadence: false,
                userCanCreateStandardCadence: false,
                userCanAccessCallTemplates: false,
                flexipageActionRouting: false,
                orgHasCallDispositionEnabled: false,
                isE2CExternalServerEnabled: false,
                isWaveIframeDashboardEnabled: false,
                isRaptorRecordHomeEnabledForKnowledge: false,
                orgHasLWCCalendarEnabled: false,
                isHistoricalTrendingAvailable: true,
                isCdnResourceTestEnabled: false,
                userIsContractMgmtAdmin: false,
                userIsContractMgmtRuntime: false,
                orgHasCadenceBuilderV2: false,
              },
              isFIREFOX: false,
              isWindowsPhone: false,
              isOSX: true,
              containerVersionMajor: 0,
              isAndroid: false,
              isIPhone: false,
              isIOS: false,
            },
          },
          {
            type: "$LightningContainer",
            values: {
              containedContentHost:
                "d8w000004lymuuac-dev-ed--c.develop.container.force.com",
              communityPrefix: "/",
            },
          },
          {
            type: "$Global",
            values: {
              eswConfigDeveloperName: { writable: true, defaultValue: "" },
              isVoiceOver: { writable: true, defaultValue: false },
              setupAppContextId: { writable: true, defaultValue: "" },
              density: { writable: true, defaultValue: "" },
              srcdoc: { writable: false, defaultValue: false },
              appContextId: { writable: true, defaultValue: "" },
              dynamicTypeSize: { writable: true, defaultValue: "" },
            },
          },
          {
            type: "$Search",
            values: {
              security: {
                key: "[116, 117, 111, -47, -2, -104, -8, 26, 20, -5, 77, 122, 59, 7, 17, -109, -115, -99, -79, -101, -35, 65, -47, 62, -53, 73, 78, -1, 2, -81, -100, 30]",
              },
            },
          },
          {
            type: "$Label",
            values: {
              Einstein: {
                EinsteinScoreNotAvailable: "Not Available",
                OpportunityScoreButton: "Opportunity Score Button",
                EinsteinFreemiumScoreHidden: "Hidden",
              },
              IncidentManagementSetupOverviewTile: {
                description:
                  "Get a quick overview of how Customer Service Incident Management can help you resolve widespread incidents.",
                linkText: "Watch Video",
                title: "What's Customer Service Incident Management?",
                navUrl:
                  "/HelpAndTrainingDoor?version=2&resource=https://salesforce.vidyard.com/watch/aRAWuFYE62YaqMh5zs3DJh",
              },
              EmailUIFrame: { Title: "Email Preview" },
              leadSidebarActivityTab: { viewLeadButton: "View More on Lead" },
              udd_Invoice: { Entity: "Invoice" },
              EmailTemplateTruncateNotificationDialog: {
                Message:
                  "This email template is too big. Make it smaller, or the content at the end will be lost.",
                Title: "Just a heads-up\u2026",
              },
              PillContainer: {
                Topic: "Topic",
                HowToEdit:
                  "To navigate, press the arrow keys. To edit items you've added, press Enter. To remove items you've added, press Backspace or Delete.",
              },
              LightningRecordEditForm: {
                apiNameMismatch: 'API Name {0} is invalid, did you mean "{1}?"',
                invalidID: "Error in fetching record: invalid record id.",
              },
              ActivityActionTypes: {
                Call: "Call",
                Task: "Task",
                Email: "Email",
                Event: "Event",
                LogACall: "Log a Call",
              },
              LightningMap: {
                iframeTitle: "Map Container",
                titleWithAddress: "Map of {0}",
              },
              SignalsField: {
                NoActivity: "None",
                NumberTrendingUpAssistiveText: "{0} trending up",
                CurrencyTrendingUpAssistiveText: "{0} trending up",
                DateTrendingUpAssistiveText: "{0} pulling in",
                NumberTrendingDownAssistiveText: "{0} trending down",
                OpportunityUnlikelyToCloseThisMonthAssistiveText:
                  "Unlikely to close this month",
                Today: "Today",
                InOneDay: "In 1 day",
                CurrencyTrendingDownAssistiveText: "{0} trending down",
                DateTrendingDownAssistiveText: "{0} pushing out",
                InDays: "In {0} days",
                OneDayAgo: "1 day ago",
                DaysAgo: "{0} days ago",
              },
              actionFooter: {
                integration_disabled_error_message:
                  "LinkedIn Sales Navigator is turned off in Setup. To advance the cadence, use the Work Queue or Cadence Steps list to mark this step complete or skip the step in Salesforce.",
              },
              CaseInteraction: {
                SubmitForApproval: "Submit for Approval",
                EmailPublisherApprovalRejected:
                  " has rejected this email with the following comments:",
                EmailPublisherApprovalRejectedNoComment:
                  " has rejected this email.",
                PublisherHeadingLabelLogCall: "Log a Call",
                EmailPublisherApprovalInfoHeaderPrivateDraft:
                  "This case has an email pending approval.",
              },
              ProjectOne_EventDetail: {
                CannotAddLeadWhenWhatPresent:
                  "You can\u2019t relate a lead to an event already related to an account, opportunity, or other object.",
                CannotMakePrivateWhenWhoPresent:
                  "You can\u2019t mark an event private when it\u2019s related to a contact or lead.",
                CannotChangeContactWhenShared:
                  "You can't change the primary contact for this shared event.",
                CannotMakePrivateWhenWhatPresent:
                  "You can\u2019t mark an event private when it\u2019s related to an account, opportunity, or other object.",
                EndDateTimeBeforeStartDateTime:
                  "The start date and time must be the same as or earlier than the end date and time.",
                CannotAddWhatWhenLeadPresent:
                  "You can\u2019t relate an account, opportunity, or other object to an event already related to a lead.",
                CannotAddWhoWhenPrivate:
                  "You can\u2019t relate a private event to a contact or lead.",
                CannotAddWhatWhenPrivate:
                  "You can\u2019t relate a private event to an account, opportunity, or other object.",
              },
              TaskCardTaskLabels: { editTaskLabel: "Edit Label" },
              OneSetup_DCM: {
                OpenInNewTab: "Opens in a new tab",
                AssociatedSetupExperience: "Setup for current app",
                HeaderTitle: "Setup",
                DeveloperConsoleLink: "Developer Console",
                EditPageLink: "Edit Page",
                EditObjectLink: "Edit Object",
              },
              Images: {
                clickToDialDisabled: "Click to dial disabled",
                clickToDial: "Click to dial",
              },
              NetworkModeration: {
                YouAndOneOtherFlaggedThis:
                  "You and 1 other flagged this as inappropriate",
                FlaggedBadge: "FLAGGED ({0})",
                ManyFlaggedThis: "{0} people flagged this as inappropriate",
                InvalidEntity: "You can't flag this item",
                Title: "What's wrong?",
                Flag: "Flag",
                Unflag: "Remove Flag",
                YouFlaggedThis: "You flagged this as inappropriate",
                FeedItem: "post",
                YouAndManyOthersFlaggedThis:
                  "You and {0} others flagged this as inappropriate",
                OneFlaggedThis: "1 person flagged this as inappropriate",
                ContentVersion: "file",
                IgnoreAllFlags: "Remove Flags",
                FeedComment: "comment",
              },
              LightningRecordPicker: {
                dataSourceErrorMessage: "Something went wrong. Try again.",
                invalidConfigurationErrorMessage:
                  "This field can't load because of a configuration problem. Ask your Salesforce admin for help.",
                messageWhenBadInputDefault:
                  "Select an option or remove the entered text.",
                defaultSelectedRecordErrorMessage:
                  "Can't show the record because an ID is invalid or you don't have access. Ask an admin for help.",
                loadingPlaceholder: "Loading...",
              },
              udd_Task: { Entity: "Task" },
              WeekDays: {
                Monday: "Mon",
                Thursday: "Thu",
                Friday: "Fri",
                Sunday: "Sun",
                Wednesday: "Wed",
                Tuesday: "Tue",
                Default: "NA",
                Saturday: "Sat",
              },
              DialogReloadOrStayOnPage: {
                CancelLabel: "Cancel",
                ConfirmLabel: "OK",
              },
              LightningMilestoneComponent: {
                caseMilestoneTabTitle: "Case Milestone",
              },
              udd_ForecastingCustomData: {
                ForecastingType: "Forecasting Type",
              },
              LightningDualListbox: {
                minRequiredErrorPlural: "At least {0} options must be selected",
                downButtonAssistiveText: "Move selection down",
                maxError: "Select at most {0} options",
                upButtonAssistiveText: "Move selection up",
                moveSelectionToAssistiveText: "Move selection to {0}",
                minRequiredErrorSingular: "At least 1 option must be selected",
                movedOptionsPlural: "Items {0} moved to the list {1}",
                minErrorSingular: "Select at least 1 option",
                optionLockAssistiveText: ": item cannot be removed from {0}",
                maxHelp: " [and a maximum of {0}]",
                requiredError: "An option must be selected",
                minErrorPlural: "Select at least {0} options",
                minHelp: " [and a minimum of {0}]",
                componentAssistiveText:
                  "Press Ctrl (Cmd on Mac) + Left Arrow or Ctrl (Cmd on Mac) + Right Arrow to move items between lists.",
                requiredOptionError: "{0} must be selected",
                movedOptionsSingular: "Item {0} moved to the list {1}",
              },
              Recommendations: {
                reject: "Skip",
                einstein_header: "Einstein Recommendations",
              },
              OpportunityPipelineView: {
                dragAndDropGenericErrorMessage: "You can't drop here.",
                closeStageBlankOption: "Select a Closed {0}",
                moveOpptyToTitle: "Move Opportunity to {0}",
                closeLostStageName: "Closed/Lost",
                closeWonStageName: "Closed/Won",
              },
              CadenceStepsCard: {
                NumberOfStepsFieldLabel: "Steps",
                AssignedToLabel: "Assigned to",
                TrackerNumberLabel: "Cadences ({0})",
                TrackerLabelNoNumber: "Cadences",
                TrackerLimitMessage:
                  "This target is in the maximum number of cadences",
                EmptyStateMessage: "This record is not in any cadences.",
                AddToCadenceButton: "Add to Cadence",
                PreviousCadencesSubTitle: "Previously Completed",
              },
              SignalsHover: {
                DateTrendingUp: "{0} pulled in by {1} days",
                NumberTrendingDown: "{0} decreased by {1}",
                TextTrendingAdvanced: "{0} advanced",
                DateTrendingUpSingular: "{0} pulled in by 1 day",
                TextTrendingReverted: "{0} reverted",
                DateTrendingDownSingular: "{0} pushed by 1 day",
                CurrencyTrendingUp: "{0} increased by {1}",
                NextStepAssistiveText: "Next Step not updated",
                CurrencyTrendingDown: "{0} decreased by {1}",
                NumberTrendingUp: "{0} increased by {1}",
                DateTrendingDown: "{0} pushed by {1} days",
              },
              EmailDraft: {
                CloseError: "Close",
                SaveFailed: "Save Failed",
                PopoverOfflineMessage:
                  "To save this draft, connect to the Internet. ",
                UnknownError: "Try again later or contact your admin.",
                Saved: "Saved",
                Saving: "Saving",
                SaveFailedPopoverHeader: "Can't save draft",
                ShowError: "Show Error",
                DeleteFailedError: "Can't delete draft. {0}",
                SaveFailedError:
                  "You can\u2019t save email drafts with body text over {0} characters. Send the email now, or shorten your draft to save it.",
              },
              AttributeDefinitionLWC: {
                LoadErrorMsg:
                  "Error while fetching data from attribute picklist value",
              },
              Publisher: {
                cancel: "Cancel",
                uploadImagePanelErrorTitle: "Can't upload image",
                UnOrderedList: "Bulleted List",
                InvalidImagePasted:
                  "Make sure your file is a .jpg, .jpeg, .png, or .gif file. If you still can't paste the image, save it to a local drive and then copy the saved image file.",
                RemoveAttachment: "Remove file {0}",
                fileLargerThanMaxLimitWithFilename:
                  "The file {0} is too large. The maximum file size for uploads is {1} GB. Select a smaller file and try again.",
                AttachUpToMoreFilesText: "Attach up to {0} more files.",
                CodeSnippetErrorMessage:
                  "It's us, not you. To post your code snippet, click Ok again.",
                fileLargerThanMaxLimit:
                  "The file is too large. The maximum file size for uploads is {0} GB. Select a smaller file and try again.",
                uploadImage: "Upload Image",
                AddMention: "Mention",
                PublisherHeader: "Publisher",
                selectImage: "Select Image",
                RemoveThisAttachment: "Remove attachment",
                QuestionEditTitle: "Edit Question",
                FilesModalActionsTitle: "Attach File",
                altTextInfoBubble:
                  "Add assistive text to help blind and low-vision users using screen readers better understand an image appearing on the page.",
                UploadFiles: "Upload Files",
                CodeSnippetModalTitle: "Enter Code",
                allowedInlineImagesMessage:
                  "{0} files aren\u2019t allowed as inline images. Feel free to select a {1} file, instead.",
                postLinkLinkUrl: "Link URL",
                MentionPeopleAndGroups: "@Mention people and groups",
                AttachFile: "Attach file",
                AttachUpToFilesText: "Attach up to {0} files.",
                postLinkLinkUrlTitle: "Link URL Title",
                TooManyFilesSelectedTitle: "Too many files selected",
                SelectNFiles: "Select Files",
                imageFilesSearchPlaceHolder: "image files",
                emptyFile:
                  "The file can't be uploaded because it's empty. Please select a file with content and try again.",
                InsertEmoji: "Insert Emoji",
                AttachUpToMoreFileText: "Attach up to {0} more file.",
                postFileImgAlt: "Attach a file to your post.",
                SelectAFile: "Select File",
                SelectOnlyOneFile: "Only one file can be selected.",
                insert: "Insert",
                GotItButtonText: "Got It",
                linkAFile: "Select a file from Salesforce",
                linkInputPlaceholder: "https://",
                filesLargerThanMaxLimit:
                  "Please remove files that are larger than the {0} GB limit.",
                emptyFiles: "Please remove empty (0 B) files.",
                CodeSnippetImageAltText: "Code Snippet",
                emptyFileWithFilename:
                  "We can't upload the file {0} because it's empty. Select a file that has content and try again.",
                OrderedList: "Numbered List",
                PublisherMaxLengthErrorMsg: "Error: Your post is too long.",
                InlineImage: "Image",
                fileUploadError:
                  "Something went wrong. Please try uploading your file again.",
                UploadFileError:
                  "There was a problem uploading your file. Please try again.",
                PostKeyboardShortcut: "Click, or press Ctrl+Enter",
                PreviewFileAttachment: "Preview file",
                altText: "Assistive Text",
                Attach: "Attach",
                FilesModalActionsMultiTitle: "Attach Files",
                MaximumFilesAttached: "Maximum files attached",
                postFileFormTitle: "Attach a File",
                uploadPanelErrorTitle: "Can't upload file",
                UploadAFile: "Upload File",
                CannotPasteImage:
                  "Can't publish a pasted image. Add images using the Images button.",
                InsertCodeSnippet: "Code Snippet",
                Submit: "Save",
                Reply: "Reply",
                RemoveFileAttachment: "Remove file",
                RemoveFormatting: "Remove Formatting",
              },
              CkeSmartLink: {
                SmartLinkContextMenuEdit: "Edit Smart Link",
                title: "Insert a Smart Link",
              },
              ChatterAnnouncements: { groupAnnouncement: "Announcement" },
              TodoListFormatTime: {
                yesterday: "Yesterday",
                overDue: "Overdue",
                due: "Due",
                dueDate: "Due Date",
                today: "Today",
                tomorrow: "Tomorrow",
                start: "Start",
              },
              Outlook365TransportExceptions: {
                TokenError:
                  "Outlook365 doesn\u2019t recognize your user ID or password. Update your credentials in Outlook365 and try again.",
                TooLargeError:
                  "Outlook365 has determined that the email is too large to be sent.",
                Default:
                  "An error occurred when email was sent via the Microsoft Graph API for Outlook365.",
              },
              LightningRichTextEditor: {
                formatFont: "Format font family and size",
                alignText: "Align text",
                imageSizeExceeded:
                  "The image exceeded the maximum size of 1 MB.",
                removeFormatting: "Remove formatting",
                formatText: "Format text",
                insertContent: "Insert content",
                fontSize: "Font Size",
                formatBackground: "Format background and text color",
                formatBody: "Format body",
                imageUploadFailed: "There was a problem uploading the file.",
                font: "Font",
              },
              Setup_Nav: {
                WorkflowRules: "Workflow Rules",
                ObjectManager: "Object Manager",
                Territory2Types: "Territory Types",
                UndeleteCustomFieldTransition: "Undeleting Custom Field",
                Territory2Settings: "Settings",
                Error: "Error",
                Territory2Models: "Territory Models",
              },
              ProgramManagementFilter: { Filter: "Filter", Close: "Close" },
              Page_AccountContactRelation_Edit_Detail: {
                title_acrel: "Account Contact Relationship",
              },
              EnrollCaseProgramParticipants: {
                EnrollParticipantsText: "Program Enrollment Details",
                SelectedProgramText: "Selected Programs",
                SaveErrorMessage:
                  "We couldn\u2019t add {0} participants to one or more programs. Try again later.",
                SearchProgramTitle: "No programs to display",
                ChooseProgramText:
                  "Search for programs to enroll participants. You can select up to {0} programs at a time.",
                UnknownError:
                  "Something went wrong. Ask your Salesforce admin for help.",
                InvalidParticipantSelectedText:
                  "You can\u2019t select more than {0} participants at a time. Remove the additional participants and try again.",
                ChooseParticipantsHeader: "Add Program Participants",
                ResultsText: "Results ({0})",
                SearchProgramDescription:
                  "Enter a program name to search for programs.",
                SelectButtonText: "Select",
                InvalidProgramSelectedText:
                  "You can\u2019t select more than {0} programs at a time. Remove the additional programs and try again.",
                SaveOneErrorMessage:
                  "We couldn\u2019t add 1 participant to a program. Try again later.",
                DeselectButtonText: "Deselect",
                ChooseParticipantsText:
                  "Select up to {0} participants per program.",
                MaxParticipantSelectionAllowed: "10",
                SearchProgramsText: "Search program names\u2026",
                NoProgramSelectedDescription:
                  "Search for and select up to {0} programs to add to this list.",
                ModifyExistingParticipantMessage:
                  "The participant is already enrolled. Any changes will update the program enrollment.",
                SaveSuccessMessage: "{0} participants were added.",
                PreviousButtonText: "Previous",
                ProgramsText: "Programs",
                SaveButtonText: "Save",
                ProgramEnrollmentsHeader: "Manage Program Enrollments",
                NoProgramSelectedTitle: "No programs selected yet",
                NextButtonText: "Next",
                NoProgramFoundError:
                  "We couldn\u2019t find a program. Create a program and try again.",
                CancelButtonText: "Cancel",
                ParticipantSelectedText: "{0} selected",
                SaveOneSuccessMessage: "1 participant was added.",
                ChooseProgramsHeader: "Select Programs",
                MaxProgramSelectionAllowed: "10",
                NoParticipantFoundError:
                  "We couldn\u2019t find a case participant. Add a case participant and try again.",
              },
              SiqMailTransportExceptions: {
                TokenExpirationError:
                  "We had trouble sending your email. Please reconnect your email account from the Einstein Activity Capture settings in your personal settings.",
                GlobalDataSourceNeedsAttentionError:
                  "We couldn\u2019t send your email. Please ask your Salesforce admin to check the Einstein Activity Capture org-level connection.",
              },
              TotalCadencesField: {
                TotalCadencesFieldTextSingular: "{0} cadence",
                TotalCadencesFieldTextPlural: "{0} cadences",
                TotalCadencesClosePopoverLabel: "Close popover",
              },
              InlineEditPanelFooter: {
                applyButton: "Apply",
                cancelButton: "Cancel",
              },
              udd_KanbanView: {
                GroupByField: "Group By",
                AggregateField: "Summarize By",
              },
              ListViewManagerSplitView: {
                ListBoxAriaLabel: "Select an item from this list to open it.",
              },
              connectionRequestAction: {
                modal_title: "Sales Navigator Connection Request",
              },
              QuickFilterPanel: {
                quickFilterInfo:
                  "Quick filters can't be saved and apply only to your current session. Quick filters that you apply don't affect anyone else's view.",
              },
              ForecastingCharts: {
                weeks: "Weeks",
                On_Target: "On Target",
                Comparison_Point_Days_Remaining: "{0} Days Remaining",
                predictionLowerBound: "Minimum",
                monthlyChangePercent: "Monthly Change Percent",
                Pipe_Coverage_Tooltip:
                  "Sales in the pipeline compared to the forecast quota.",
                periodGroup: "Period Group",
                withAdjustments: "Including Adjustments",
                historicalTrendsTabTitle: "Historical Trends",
                Target_Info_Bubble_Single_Rollup:
                  "The value of committed and closed opportunities is {0} to meet quota.",
                today: "Today",
                Off_Target: "Off Target",
                currentForecastChangesTabTitle: "Forecast Changes",
                weeklyChangePercent: "Weekly Change Percent",
                snapshotDate: "Date",
                UnknownError_description:
                  "There was an error loading the chart. Refresh and try again.",
                months: "Months",
                Target_Info_Bubble_Cumulative_Rollup:
                  "The value of committed opportunities is {0} to meet quota.",
                Comparison_Point_Tooltip:
                  "The number of days remaining in the period and when comparisons are made to past periods. For example, if the current period is 90 days long, and there are 50 days left, comparisons are made in previous periods when there were the same number of days remaining, regardless of that period's length.",
                past: "Past",
                byWeek: "This Period by Week",
                byMonth: "This Period by Month",
                UnknownError_title: "Can't load chart",
                monthlyChange: "Monthly Change",
                loading: "Loading...",
                homePageChartRedirectButton: "View Forecasts",
                future: "Future",
                currentForecastChangesXTitle: "{0} in Forecast",
                forecastChangesChartOwnerTitle:
                  "How has {0}'s forecast changed this period?",
                predictionUpperBound: "Maximum",
                weeklyChange: "Weekly Change",
                currentForecastChangesChartTitle:
                  "Changes to Current Forecast {0}",
              },
              OfflineDraftsPage: { newSObjectNameField: "New {0}" },
              Global: {
                minimize: "Minimize",
                close_window: "Close Window",
                listDelimiter: ", ",
                restore: "Restore",
                edit: "Edit",
                clear: "Clear",
                del: "Delete",
                none: "None",
                loading: "Loading...",
                error: "Error",
                labelInDashes: "-- {0} --",
                remove: "Remove",
                maximize: "Maximize",
                startOfDialog: "Start of Dialog",
                search: "Search",
                close: "Close",
              },
              KanbanView: {
                KanbanConfigMenuItem: "Kanban Settings",
                KanbanConfigTitle: "Kanban Settings",
                KanbanConfigNoColumnOptionError:
                  "Please select a Group By field",
              },
              ButtonLabels: {
                PlatformStepDisabledErrorLabel:
                  "The flow associated with this step isn't active or you don't have permission to run flows. Skip this step or mark it complete to advance the cadence.",
                cancelEmail: "Delete",
                editEmail: "Edit Email",
                editCadence: "Edit Disposition",
                viewDetails: "View Details",
                skipStep: "Skip Step",
                editSendTime: "Edit Send Time",
                markComplete: "Mark Complete",
              },
              FileActions: {
                DownloadFileOf: "Download file {0}",
                Download: "Download",
              },
              opportunitySidebarActivityTab: {
                cancel: "Cancel",
                noNextStepPresentMessage:
                  "No next step. Add how you plan to move this deal forward.",
                xDaysAgo: "{0} days ago",
                submit: "Save",
                logUpcomingActivity: "Log Activity",
                editNextStep: "Edit Next Step",
                none: "None",
                upcomingActivityHeaderWithNoneActivities:
                  "Upcoming Activity (None)",
                overdueCall: "Overdue Call",
                yesterday: "Yesterday",
                inXDays: "in {0} days",
                nextStepText: "Next Step Text",
                overdueTask: "Overdue Task",
                pastActivities: "Recent Activities ",
                pastMeetings: "Recent Meetings ",
                today: "Today",
                pastCalls: "Recent Calls ",
                upcomingMeeting: "Upcoming Meeting ",
                noPastActivityMessage:
                  "No past activities within the selected timeframe.",
                noUpcomingActivityMessage:
                  "No upcoming activity. To get things moving, add a task, set up a meeting, and more.",
                upcomingActivity: "Upcoming Activity ",
                tomorrow: "Tomorrow",
                nextStepHeader: "Opportunity Next Step",
                viewOpportunityButton: "View More on Opportunity",
                upcomingEmail: "Upcoming Email ",
                successMessageNextStep: "Next step was saved.",
                overdueEmail: "Overdue Email",
                errorMessageNextStep: "We couldn\u2019t save your next step.",
                pastActivityHeaderWithNoneActivities:
                  "Recent Activities (None)",
                upcomingCall: "Upcoming Call ",
                pastEmails: "Recent Emails ",
              },
              List: { refresh: "Refresh" },
              ObjectHomeEmptyContentLabels: {
                emptyMruListLine2: "Try switching list views.",
                emptyListViewLine1: "No items to display.",
                emptyListLine2:
                  "There's nothing in your list yet. Try adding a new record.",
                emptyListLine1: "Nothing to see here",
              },
              insightLabel: { viewAllInsights: "View all insights" },
              FeedFilter: { FilterAllUpdatesText: "What I Follow" },
              OSInput: { LastName: "Last Name" },
              contactSidebarActivityTab: {
                viewContactButton: "View More on Contact",
              },
              Feeds_QuestionPost: {
                ShowAllCommentsNoCount: "Show All Answers",
                FeedPostLogInToAnswerLink: "Log In to Answer",
                CommentVerb: "Answer",
                CommentsSummaryPlural: "{0} answers",
                CommentDeleteNonCreatorMsg:
                  "This answer was created by another user. Deleting it permanently removes it from everyone's view, not just your own.",
                FeedConversationDeleteConfirmation:
                  "Are you sure you want to delete this question and its answers?",
                CommentDefaultText: "Write an answer...",
                CommentsSummarySingular: "{0} answer",
                PlusMoreTopics: "+{0} more",
                FeedPostComment: "Answer this question",
                CommentDeleteConfirmation:
                  "Are you sure you want to delete this answer?",
                CommentSummary: "Answer",
              },
              ActionAPI: {
                UnavailableOperationError:
                  "The operation you specified isn\u2019t supported on the {0}.",
                OperationFailedError:
                  "An error was encountered that caused the operation to fail. Try the operation again.",
                EmailTemplateUnsupportedError:
                  "You don't have access to the email template specified in the API. Ask your Salesforce admin for help.",
                NoActionSelectedError:
                  "There\u2019s no action selected in the page. Select an action to continue.",
                NoParentSelectedError:
                  "We can\u2019t execute the API because the parent {0} isn\u2019t selected.",
                UnavailableAPIError:
                  "The API you used isn\u2019t supported in Lightning Experience.",
                InternalErrorNoGackId: "An internal error occurred.",
                InvalidContextError:
                  "The API you used isn\u2019t supported on this page. You can only execute this API on record pages.",
                UnavailableActionError:
                  "The action you specified isn\u2019t available on the current record page.",
              },
              CoreDeleteConfirmationDialog: {
                DeleteConfirmationBody:
                  "Deleting a scheduled email removes the email, not just the scheduling info.",
                DeleteButton: "Delete",
                DeleteErrorMessage:
                  "We can\u2019t cancel sending this email. Try again later. If you need more help, contact your Salesforce admin.",
                DeleteConfirmationTitle: "Are you sure?",
              },
              OAuthErrors: {
                RefreshTokenExchangeFailed:
                  "Your external email connection has expired. Refresh the page and try again",
                MissingRefreshToken:
                  "Missing refresh token. User might not have been authorized.",
              },
              MobileWebRecord: {
                Create: "New {0}",
                RecordHeading: "Record Heading",
                Record: "Record",
                Edit: "Edit {0}",
                CreateWithRecordType: "New {0}: {1}",
              },
              LightningHelptext: { buttonAlternativeText: "Help" },
              Duration: {
                secondsLater: "in a few seconds",
                secondsAgo: "a few seconds ago",
              },
              LightningInput: { helptextAlternativeText: "{0} Help Info" },
              Feeds_Community: {
                ShowAll: "All Updates",
                FilterFewerUpdates: "Fewer Updates",
              },
              LightningErrorPages: {
                userNoLightningAppsMessage:
                  "You don't have access to any apps. Ask your Salesforce admin for help.",
              },
              udd_OpportunityLineItemSplit: {
                SplitPercentage: "Percent (%)",
                SplitOwner: "Team Member",
              },
              udd_Activity: { IsAllDayEvent: "All-Day Event" },
              Icon: { ERROR: "Error", WARNING: "Warning" },
              Sidebar: { ellipses: "..." },
              ProjectDesktop_ListviewFilter: {
                ErrorMissingOperand: "Your filter is missing an operand.",
                STARTS_WITH: "starts with",
                EQUALS: "equals",
                WITHIN: "within",
                UnsupportedListView:
                  "This list view isn't available in Lightning Experience. To see this list view, use Salesforce Classic or switch to another list view.",
                LESS_THAN: "less than",
                INCLUDES: "includes",
                CONTAINS: "contains",
                ErrorMissingRightOperand:
                  "Your filter is missing right operand to AND or OR.",
                ErrorAmbiguousAndOr:
                  "Your filter must use parentheses around successive AND and OR expressions.",
                GREATER_OR_EQUAL: "greater or equal",
                LESS_OR_EQUAL: "less or equal",
                QuickFilters: "Quick Filters",
                ErrorUnusedFilters:
                  "Some filter conditions are defined but not referenced in your filter logic.",
                ListViewLoadErrorGeneric: "Can't load the list view.",
                NOT_CONTAIN: "does not contain",
                GREATER_THAN: "greater than",
                NOT_EQUAL: "not equal to",
                EXCLUDES: "excludes",
                ErrorTypo: "Check the spelling in your filter logic.",
                ErrorBadNumber:
                  "The filter logic references an undefined filter: {0}.",
                ErrorParen: "Your filter is missing a parenthesis.",
              },
              InteractionRuntimeError: { FaultMessageUI: "Error ID: {0}" },
              AuraSearchUI: {
                ScopedResultsSpellCorrectionBlendedMessage:
                  'Showing results for "{0}" and "{1}".',
                ObjectRecent: "Recent {0}",
                ErrorImageAltTag: "Can'\u200bt get search results.",
                SearchForInObject: '"{0}" in {1}',
                TopResultsSpellCorrectionBlendedMessage:
                  'Showing results for "{0}" and spell-corrected terms.',
                ScopedResultsCount: "{0} Results",
                TopResultsSpellCorrectionMessage:
                  "Showing results for spell-corrected terms.",
                ObjectPlaceholder: "Search {0}",
                SearchFor: '"{0}"',
                ScopedResultsMany: "{0}+ Results",
                GenericSearchRequestErrorTitle: "Hmm...something's not right",
                CustomObjects: "Custom Objects",
                GenericSearchRequestError:
                  "We can't get your search results for {0}. Try again in a few minutes.",
                NoResultsTip:
                  "Results may be available for a different object. To find out, select another object from the search scope bar beneath the global search box.",
                searchInsufficientInputError:
                  "Your search term must have 2 or more characters.",
                ResultsCountSimple: "{0}",
                ScopedResultsSpellCorrectionMessage:
                  'Showing results for "{0}".',
                ScopeRibbonFeedItemMobile: "Feeds",
                LauncherHandle: "search",
                Relevancy: "Relevance",
                AllListViews: "More List Views",
                GlobalPlaceholder: "Search...",
                NoRecentRecords: "You have no recently viewed records",
                NoResultsForObject: 'No results for "{1}" in {0}',
                NoResultsForOriginalTerm: 'No results found for "{0}".',
                SortedScopedResultSingle: "1 Result",
                SearchRequestError:
                  "There was a problem getting search results. Please check your connection and try again.",
                ObjectCancel: "Cancel",
                ScopeRibbonFeedItem: "Chatter",
                ShowListViews: "Show List Views",
                QuickResults: "Quick Results",
                NoRecentFeeds: "Nothing here yet",
                ResultsChatterMessage:
                  'Select "{0}" to see results from your feeds.',
                ResultsManySimple: "{0}+",
                searchObjectNotSearchableError:
                  "{0} aren't searchable in your organization. Ask your Salesforce administrator for help.",
                SortedScopedResultSingleMore: "1+ Result",
              },
              NetworkNotifications: {
                PopupBlockedMessage:
                  "To view notifications, configure your browser to allow pop-ups.",
                previewNotificationsDisabled:
                  "Navigation to notifications is disabled in Preview mode.",
                PopupBlockedTitle: "Pop-ups are currently blocked.",
              },
              GeneratedEmailFeedback: {
                DislikeFeedbackReasonQuestionText: "Why wasn't it helpful?",
                FeedbackQuestion: "Did we write a good email?",
                SubmitSuccessToastMessage: "Thanks for your feedback.",
                CloseButtonTitle: "Close",
                DislikeFeedbackReasonOption2: "Incomplete",
                DislikeButtonAltText: "Not helpful output",
                DislikeFeedbackReasonOption1: "Inaccurate",
                DislikeFeedbackReasonOption4: "Inappropriate tone or style",
                DislikeFeedbackReasonOption3: "Biased, toxic or harmful",
                DislikeFeedbackReasonSubmitButton: "Submit",
                FeedbackReceived: "Your feedback was saved.",
                TextAreaLabel: "Tell us more.",
                DislikeFeedbackReasonCancelButton: "Cancel",
                TextAreaPlaceHolder: "Give Feedback...",
                FeedbackError:
                  "Your feedback can't be sent right now. Please try again.",
                DislikeFeedbackReasonOptionOther: "Other",
                ResponseTextTooLong: "A maximum of 3000 characters is allowed.",
                LikeButtonAltText: "Helpful output",
              },
              HvsLearningPath: { Title: "Learn About Sales Engagement" },
              CadenceStepsCardStepErrorMessages: {
                TemplateNotPublic:
                  "You don't have access to the email template for this step. Choose another template or write your own email.",
                UnknownError:
                  "We encountered an error. Try completing this step again, skip it, mark it complete, or contact Salesforce Support.",
                UserHasNoHVSAccess:
                  "We can't send the email because the target assignee doesn't have any Sales Engagement permissions. Ask your Salesforce admin for help.",
                PardotMergeFieldRenderingError:
                  "The merge field Unsubscribed can't be used in automated emails. Ask your admin to remove that field from email template and try again.",
                TemplateTooLarge:
                  "We can't send this email because it's too big. Shorten it and try again.",
                TargetEmailEmpty:
                  "This target doesn't have an email address. Update the target's email address, and send the email manually.",
                AutoEmailDailyLimitReached:
                  "You've reached the daily user limit of automated emails. Send the email manually or try again later.",
                RetryLater:
                  "We can't send this email because of an error. Try again later.",
                TemplateDeleted:
                  "The email template for this step was deleted. Choose another template or write your own email.",
                NoListEmailPerm:
                  "We couldn't send this email because you don't have the Allow Sending of List Emails permission. Contact your Salesforce admin.",
                GlobalDataSourceNeedsAttn:
                  "We can't send this email because of an error with your Einstein Activity Capture connection. Contact your Salesforce admin.",
                InvalidTargetEmail:
                  "This target's email address is invalid. Update the target's email address and try again.",
                TargetEmailBounced:
                  "We can't send this email because the last email to this target bounced. Update the target's email address and try again.",
                AutoEmailOrgPerfOff:
                  "Automated emails are turned off. Ask your Salesforce admin for help.",
                ExchangeMaxMailboxSize:
                  "We can't send this email because your mailbox is full. Contact your email administrator.",
                InvalidUserEmailWithLink:
                  'You can\'t send email because your email address is invalid. For information about updating your personal settings, see <a href="https://help.salesforce.com/articleView?id=sf.usersetup_my_settings.htm&type=5" target="_blank">Salesforce Help</a>.',
                EmailAdminActionNeeded:
                  "We can't send this email because we can't find the sender's mailbox. Contact your email administrator. If you use a shared mailbox, make sure your account has Send As or Full Access permissions. ",
                OtherReqFieldMissing:
                  "This target is missing a required field. Fill in all required fields and try again.",
                NoAttachmentAccess:
                  "We can't tell if this email has attachments. Your Salesforce admin can help with that.",
                NoTargetAccess:
                  "We can't send this email because the target assignee no longer has access to the target. Give the assignee access, change the assignee, or remove this target from the cadence.",
                ExchangeSendAsDenied:
                  "We can't send this email because of an email system error. Try again later.",
                OrgWideDailyEmailLimitReached:
                  "Your org has reached its daily email limit. Try sending this email later.",
                TemplateEmpty:
                  "We can't send this email because the subject and body are empty. Complete these fields in the email template and try again.",
                GoogleMailServiceNotEnabled:
                  "We can't send this email because of an email system error. Try again later.",
                InvalidTemplateId:
                  "We can't find the email template for this step. Choose another template or write your own email.",
                FixedWithReconnectWithLink:
                  'Your email account isn\'t connected to Salesforce. <a href="/lightning/settings/personal/EmailStreamingSettings/home">Reconnect your account</a> and try sending the email again.',
                TemplateInvalidMergeField:
                  "Templates used in automated emails only support Recipient, Sender, and Organization merge fields. Update the email to remove the unsupported merge fields and send it manually, skip the step, or mark the step complete.",
                OrgWideAutoEmailLimitReached:
                  "Your org has reached the daily limit of 5,000 automated emails. Try sending this email later.",
                EmailOrgPermOff:
                  "Email is turned off in your org. Contact your Salesforce admin.",
                UserIsInactive:
                  "We couldn't send this automated email because the cadence target is assigned to an inactive user. Reassign the cadence to active user or remove cadence from this target",
                InvalidDraft:
                  "We can't send this email because the draft was invalid or deleted. Create the email again, skip this step, or mark it complete.",
                ScheduledEmailFailed:
                  "We can't send this email because of an error. Skip this step, mark it complete, or contact Salesforce Support.",
                NonEmailUnknownError:
                  "We encountered an error. Try completing this step again, skip it, mark it complete, or contact Salesforce Support.",
                NoBccAllowedWhenBccComplianceIsEnabled:
                  "You can\u2019t add an address to the Bcc field because Compliance BCC Email is enabled. Refresh the page and try again.",
                MaxOutRetried:
                  "We can't send this email. Skip this step, mark it complete, or contact Salesforce Support.",
                AutoLisMQMaxRetriesFailed:
                  "We can't send this email. Send it manually.",
                TargetDoNoContactOn:
                  "This target asked not to be contacted. Skip this step or remove the target from the cadence.",
                TemplateMergeFieldRenderingError:
                  "We couldn't send the email because a merge field in the email template isn't correct. For the future emails, fix the merge field syntax in the email template. For this email, send the email manually, skip the step, or mark the step complete.",
                MailProviderRateLimitReached:
                  "We can't send this email because of an error. Try sending the email again, skip this step, or mark it complete.",
              },
              OneSetup_SetupApp: { AllSetup: "Setup" },
              LightningCombobox: {
                loadingText: "Loading",
                pillCloseButtonAlternativeText: "Clear Selection",
                placeholder: "Select an Option",
                ariaSelectedOptions: "Selected Options:",
                deselectOptionKeyboard: "Press delete or backspace to remove",
              },
              NavigateConfirmation: {
                UnsavedChangesAdditionalPlural: "{0} and {1} other tabs",
                BodyWithRecord: 'There are unsaved changes in "{0}."',
                TabLeaveWarning:
                  "If you leave this tab, you\u2019ll lose your changes.",
                DiscardButton: "Discard Changes",
                ContinueButton: "Continue Editing",
                TabLeaveWarningMultiple:
                  "If you leave these tabs, you'll lose your changes.",
                Title: "Editing {0}",
                Leave: "Leave this Page",
                UnsavedChangesMultiple:
                  "You have records with unsaved changes: {0}",
                SaveButton: "Save",
                TitleSaveRecord: "Save changes in {0}?",
                TitleSave: "Save Changes?",
                UnsavedChangesAdditional: "{0} and 1 other tab",
                BodyWithoutRecord: "There are unsaved changes.",
                Confirmation: "Are you sure you want to leave this page?",
                Stay: "Stay on this Page",
              },
              DBConsole: {
                objectDataSingular: "Object",
                objectDataPlural: "Objects",
              },
              LightningConsoleHistory: {
                noHistoryToShow: "No history to show.",
                clearHistory: "Clear History",
                recentTabs: "Recent Tabs",
                linkCopiedToClipboard: "Link was copied.",
                onlySupportedInConsole1:
                  "This utility works in console apps only.",
                emptyHistory: "Empty History",
                lock: "Lock",
                action: "Action",
                copyLink: "Copy Link",
              },
              CkeMediaEmbed: {
                iframeMissing:
                  "Invalid <iframe> element. Please use valid code from the approved sites.",
                description: "Use <iframe> code from an approved video source.",
                title: "Embed Multimedia Content",
                exampleTitle: "Example:",
                example:
                  '\n            \n                <iframe width="560" height="315" src="https://www.youtube.com/embed/KcOm0TNvKBA" frameborder="0" allowfullscreen></iframe>\n            \n        ',
              },
              LightningInputNumber: {
                decrementCounter: "Decrease number",
                incrementCounter: "Increase number",
              },
              DetailMessage: { MoreDataLoaded: "More data was loaded" },
              CkeImageDialog: {
                infoTab_desc_info:
                  "Enter a description of the image for visually impaired users",
                uploadTab_desc: "Description",
                defaultImageDescription: "User-added image",
                uploadTab_file_info: "Maximum size 1 MB. Only PNG, GIF or JPEG",
                uploadTab_desc_info:
                  "Enter a description of the image for visually impaired users",
                imageUploadLimit_info: "Max number of upload images exceeded",
                btn_insert_tooltip: "Insert Image",
                httpUrlWarning:
                  "Are you sure you want to use an http URL? Using http image URLs may result in security warnings about insecure content. To avoid these warnings, use https image URLs instead.",
                title: "Insert Image",
                error: "Error:",
                uploadTab: "Upload Image",
                wrongFileTypeError:
                  "You can insert only .gif .jpeg and .png files.",
                infoTab: "Web Address",
                infoTab_url_info: "Example: http://www.mysite.com/myimage.jpg",
                missingUrlError: "You must enter a URL",
                uploadTab_file: "Select Image",
                btn_update_tooltip: "Update Image",
                btn_insert: "Insert",
                btn_update: "Update",
                infoTab_desc: "Description",
              },
              AppLauncher: { A11yNavRegion: "App" },
              udd_EmailMessage: { HtmlBody: "HTML Body" },
              TLX: {
                zeroPoints: "0 Points",
                hourMinuteLeft: "~{0} hr {1} min left",
                hourMinute: "~{0} hr {1} min",
                HomeTitle: "Learning Paths",
                ModuleIcon: "Trailhead",
                Image: "Image",
                minuteLeft: '~{0} min left"',
                onePoint: "+1 Point",
                hour: "~{0} hr",
                hourLeft: "~{0} hr left",
                hoursMinute: "~{0} hrs {1} min",
                hoursLeft: "~{0} hrs left",
                hours: "~{0} hrs",
                hourMinutes: "~{0} hr {1} mins",
                hoursMinuteLeft: "~{0} hrs {1} min left",
                minutes: "~{0} mins",
                hoursMinutes: "~{0} hrs {1} mins",
                hourMinutesLeft: "~{0} hr {1} mins left",
                minute: "~{0} min",
                GroupIcon: "Group",
                LinkIcon: "Link",
                hoursMinutesLeft: "~{0} hrs {1} mins left",
                minutesLeft: '~{0} mins left"',
                manyPoints: "+{0} Points",
                Video: "Video",
                UserIcon: "User",
                Module: "Trailhead Module",
                Link: "Link",
              },
              AppMenu: {
                a11y_dNd_grabdropped:
                  "{0}, dropped. Final position in list {1} of {2}.",
                a11y_dNd_grabstart:
                  "{0}, grabbed. Current position in list: {1} of {2}. Press left and right arrow keys to change position, Spacebar to drop, Escape key to cancel.",
                a11y_dNd_grabmove: "Current position in list: {1} of {2}.",
                a11y_dNd_grabcancelled: "{0} reorder canceled.",
              },
              Related_Lists: {
                ATTACHMENT: "Attachment",
                NOTE: "Note",
                NextMoreGeneric: "Show more »",
                task_mode_overdue: "Overdue",
              },
              ListViewManagerDisplaySwitcher: {
                ShiftUi: "Schedule",
                TileSentenceCase: "tile",
                Calendar: "Calendar",
                Grid: "Table",
                DisplaysAltText: "Displays",
                ShiftUiSentenceCase: "schedule",
                Tile: "Tile",
                KanbanSentenceCase: "kanban",
                SelectListDisplay: "Select list display",
                FolderSentenceCase: "folder",
                Folder: "Folder",
                GridSentenceCase: "table",
                SplitViewSentenceCase: "split view",
                Kanban: "Kanban",
                DisplaySelectedText: "Display as {0}",
                SplitView: "Split View",
                CalendarSentenceCase: "calendar",
              },
              Report: { true: "True", false: "False", Other: "Other" },
              LightningConsoleApp: { loading: "Loading..." },
              EmailAttachment: { DefaultAttachmentName: "attachment" },
              Indicator: { Loading: "Loading" },
              CkeCodeBlock: { addCodeSample: "Add a code sample" },
              KnowledgeLightning: {
                LoadingDetailsAssistiveText: "Loading details",
                DetailsHeader: "Article Details",
                PromotedResult: "Promoted",
                DetailsHeaderCloseAssistiveText: "Close article details",
                DetailsHeaderOpenAssistiveText: "Open article details",
                PromotedBadgeTooltip:
                  "This article was manually selected by your Salesforce admin for some or all of your search terms. Promoted articles are shown first in search results.",
              },
              LightningButtonMenu: {
                showMenu: "Show menu",
                loading: "Loading menu items...",
              },
              ObjectHomeListView: {
                CachedResponseTimeStamp:
                  "Refresh this list to view the latest data",
                Descending: "Descending",
                ListViewShowOneError: "Show 1 Error",
                PageNavigationErrorTitle: "Looks like there's a problem.",
                PageNavigationErrorMessage:
                  "We currently do not support viewing more than 2000 records in a list",
                LastUpdatedReadableTime: "Updated {0}",
                ListViewShowErrors: "Show {0} Errors",
                SortedBy: "Sorted by:",
                Ascending: "Ascending",
                LastUpdatedDateTime: "Updated {0} at {1}",
              },
              TodoItemStatusPopover: {
                LimitedAccessLabel: " Read Only",
                ErrorPopoverTitle: "Cadence error",
                LimitedAccessPopoverTitle: "Cadence read only",
                PausedPopoverTitle: "Cadence paused",
                PausedPopoverMessage:
                  "This cadence is paused. You can complete this task when the cadence resumes.",
                QueuedPopoverTitle: "Cadence queued",
                CompletedPopoverTitle: "Cadence completed",
                ActivePopoverTitle: "Cadence active",
                InProgressPopoverTitle: "Cadence step in progress",
                ScheduledPopoverTitle: "Cadence scheduled",
              },
              ActivityComposer: {
                SetEmailPreferences: "Set My Email Preferences",
                EmailMeetingTimesSubject: "Meeting with {0}",
                AddEmailToTodoList: "Add Email to To Do List",
                OutlookMailAppExtension: "Send with Outlook",
                GmailMailAppExtension: "Send with Gmail",
                NoMenuActions: "No Actions",
                MeetingAvailability: "Set My Meeting Availability",
                ViewCalendar: "View Calendar",
                AddCallToTodoList: "Add Call to To Do List",
                ShowMenuActions: "More Actions",
                EmailMeetingTimes: "Email Meeting Times",
              },
              InteractionApi: {
                ErrConfiguringSoftphoneFooter:
                  "Refresh the page and try again, or ask your Salesforce admin for help.",
                ErrConfiguringSoftphoneHeader:
                  "An error occurred while configuring the Open CTI Softphone.",
              },
              HeroChart: {
                ErrorInsertingDataMessage:
                  "Could not insert data because of an internal error. Try again later.",
                InvalidCurrency: "Invalid data type",
                CumAmountIn: "Cumulative Amount in {0}",
                Title: "Quarterly Performance",
                ReportErrorMessage:
                  "To see your sales performance, contact your Salesforce admin.",
                CumAmount: "Cumulative Amount",
                EditGoal: "Edit Goal",
                SaveGoalError:
                  "Goal is not saved because of an internal error. Try again later.",
                Date: "Date",
                Open: "Open (>70%)",
                ClosedOpen: "Closed + Open (>70%)",
                Refresh: "Refresh Chart",
                CurrencyOutOfRange: "Value outside of valid range",
                Goal: "Goal",
                ClosingOpportunityPanelHeader: "Opportunities Closing",
                ViewData: "Click here to view quarterly performance data",
                AsOf: "As of {timestamp}",
                Closed: "Closed",
                ClosingOpportunityInfoBubble:
                  "Opportunities with close dates during this time that are closed won or open with a probability over 70%.",
                EmptyStateMessage:
                  "Add the opportunities you're working on, then come back here to view your performance.",
                ErrorMessage:
                  "Your performance chart is empty because of an internal error. Check back later.",
              },
              SalesEmailAssistant: {
                cancel: "Cancel",
                productSearchHeader: "Looking for another product?",
                objectSelectionMenuDescription:
                  "Select one {0} that this email applies to",
                promptComboboxPlaceholder: "Search...",
                objectSearchInputPlaceHolder: "Search {0} records...",
                error: "An error occurred, unable to draft email.",
                productSearchInputPlaceHolder: "Search Products",
                productName: "Product Name",
                productSearchModalDescription: "Search for another product",
                disclaimerText:
                  "This tool uses generative AI, which can produce inaccurate or harmful responses. ",
                noObjectAccessInfo:
                  "You don\u2019t have access to the required object. Contact your Salesforce admin for help.",
                noObjectExistInfo:
                  "There aren\u2019t any {0} records. Create one and try this email type again.",
                close: "Close",
                retry: "Retry",
                productDescription: "Product Description",
                recentProductPlaceHolder: "Select a product record",
                recentProductDescription: "Recent products",
                productSelectionMenuDescription:
                  "Add product info to help Einstein draft your email",
                customPrompts: "Custom",
                recentlyViewedProducts: "Recently Viewed Products",
                disclaimerLearnMoreLink: "Learn More in Help",
                productNameHelpText:
                  "Einstein uses the product name and description to create your email draft.",
                continueButton: "Continue",
                stop: "Stop",
                productSearchDescription:
                  "Search for a product Einstein can use to create the email.",
                stage3: "Polishing email language...",
                productsRelatedTo: "Products Related To {0}",
                stage2: "Crafting email content...",
                stage5: "Be sure to review the email before sending...",
                productSearchInputTitle: "Product",
                stage4: "Preparing for your review...",
                selectOtherProduct: "More Products",
                stage1: "Gathering relevant information...",
                standardPrompts: "Standard",
              },
              Global_Entity: { recently_viewed: "Recently Viewed" },
              PauseCadence: {
                SectionTitle: "Paused",
                PauseCadenceByTargetIdModalTitle: "Adjust Step Timing",
                PauseCadenceByTargetIdName: "Adjust Step Timing",
              },
              PipelineViewSidePanel: {
                inlineEditLeaveMessage_Title: "Discard changes?",
                inlineEditLeaveMessage_StayButton: "Continue Editing",
                inlineEditLeaveMessage_LeaveButton: "Discard Changes",
                inlineEditLeaveMessage_BodyMessage:
                  "You've made changes in the details panel.",
                inlineEditLeaveMessage_ConfirmationMessage:
                  "Are you sure you want to discard your changes?",
              },
              GenerativePromptPanel: {
                InvalidRuntimeValue:
                  "Runtime exception. Ask your admin for help.",
                GenericError: "Something went wrong. Ask your admin for help.",
                UseActionLabel: "Use",
                HeaderCloseText: "Close the Prompt Panel",
                MessageInputPlaceholder: "Tell me what to create for you",
                Forbidden: "You don't have access to this site.",
                ChatHistoryTitle: "Chat History",
                RecordAdded: "added to record",
                InternalServerError:
                  "Something went wrong. Ask your admin for help.",
                Send: "Send",
                TypingText: "Loading...",
                InvalidField: "Invalid field error. Ask your admin for help.",
                EinsteinGpt: "Einstein GPT",
                ServiceUnavailable:
                  "We're having trouble finding your data extension. Try asking your admin for help.",
                GenerativePromptPanelTitle: "Generative Prompt Panel",
                InternalError: "Internal error. Ask your admin for help",
                UseActionTitle: "Primary actionable use button",
              },
              LightningToast: {
                infoLabel: "Info",
                macNavigationAssistiveText:
                  "Press Command + F6 to navigate to the next toast notification or focusable region.",
                warningLabel: "Warning",
                genericNavigationAssistiveText:
                  "Press Control + F6 to navigate to the next toast notification or focusable region.",
                successLabel: "Success",
                errorLabel: "Error",
                close: "Close",
              },
              Messages: {
                removeParticipant: "Remove recipient",
                replyPlaceholder: "Write a reply...",
                participantsNameSeparator: ", ",
              },
              TodoListTaskCard: {
                dragItemMovedAssistiveText:
                  "Current position in list: {0} of {1}. Select spacebar to drop.",
                dragHandle: "Move Item",
                expandTaskCard: "Expand Item",
                dragItemSelectedAssistiveText:
                  "Item grabbed. Current position in list: {0} of {1}. Use arrow keys to change position of item in list, Spacebar to drop, Esc to cancel.",
                noCadenceAccessStepTitle: "Cadence Step Assigned",
                dragHandleAlternativeText:
                  "Select Spacebar to reorder this item.",
                collapseTaskCard: "Collapse Item",
                dragItemDroppedAssistiveText:
                  "Item dropped. Final position in list: {0} of {1}.",
              },
              FeedActions: {
                TaskSuccessMessage: "Created Task: {0}",
                TaskSuccessMessageNoName: "Created Task",
                GenericSuccessMessage: "Record Created",
              },
              Setup_One: {
                LightningCheckout: "Manage Subscription",
                Home: "Home",
              },
              LightningColorPicker: {
                blueAbbr: "Blue",
                redAbbr: "Red",
                errorMessage: "Enter a valid hexadecimal value.",
                hexLabel: "Hex",
                doneButton: "Done",
                colorPickerInstructions:
                  "Use arrow keys to select a saturation and brightness, on an x and y axis.",
                cancelButton: "Cancel",
                hueInput: "Select Hue",
                rInput: "R",
                gInput: "G",
                a11yTriggerText: "Choose a color. Current color: ",
                bInput: "B",
                greenAbbr: "Green",
              },
              InfoComponentsRelatedLists: {
                EntityForParentEntity: "{0} for Parent {1}",
                RelatedListErrorMessage:
                  "We couldn't display your related list. Try again later.",
                RelatedListErrorTitle: "Something went wrong",
              },
              SaveConfirmation: {
                RecordNotificationBannerDismiss:
                  "Dismiss Notifications and Highlights",
                ConflictingFields: "Choose values to keep",
                RecordNotificationBanner: 'Another user updated "{0}." {1}',
              },
              DuplicateList: {
                ViewDuplicates: "View Duplicates",
                Header: "Use one of these records?",
                Footer: "Open This {0} ",
                NonBlockingHeaderText: "Similar Records Exist",
                ModalTitle: "View Duplicates",
                ToastMessageAlertCreate:
                  "The record you're about to create looks like a duplicate. Open an existing record instead?",
                ToastMessageBlock:
                  "You can't save this record because a duplicate record already exists. To save, use different information.",
                ToastMessageWithNoDuplicateAccess:
                  "Possible duplicate records found. You don't have access to any of the duplicates.",
                ToastMessageAlertEdit:
                  "This record looks like an existing record. Make sure to check any potential duplicate records before saving.",
                LookupNewFooter: "Use this {0} ",
              },
              AppLauncherDesktop: {
                titleLabel: "App Launcher",
                popupBlocked:
                  "Your browser is blocking '{0}'. Allow pop-ups from here and try again.",
              },
              SFXActions: {
                ShowMoreActions: "Show more actions",
                More: "More",
                ShowOneAction: "Show one more action",
                ShowActionsForList: "Show actions for {0}",
                ShowActionsObject: "Show actions for this object",
                NoActions: "No actions available",
                ShowMoreActionsRecord: "Show more actions for this record",
                ShowNumberActions: "Show {0} more actions",
                ShowActionsRecord: "Show actions for this record",
              },
              FeedSearch: { searchPosts: "Search this feed..." },
              udd_Opportunity: { Entity: "Opportunity" },
              CloseLostConfirm: {
                confirmation:
                  "Are you sure you want to update this opportunity to {0}?",
                title: "Update Opportunity {0} to Closed Lost",
              },
              CompactFeed: {
                ShortThousandQualifier: "K",
                PostVisibility: "To: {0}",
                ShortBillionQualifier: "B",
                InternalUsers: "Internal",
                ShortMillionQualifier: "M",
                AllUsers: "All",
              },
              InlineEdit: {
                preview: "Open {0} Preview",
                undo: "Undo {0}",
                SaveErrorSummary: "Review the following errors",
                edit: "Edit {0}",
                SaveFieldErrorSummary: "Review the following fields",
                previewHeader: "{0} Preview",
              },
              InAppGuidance: {
                ActionNotSupported:
                  "You can't perform that action inside of the In-App Guidance Builder.",
              },
              InfoComponentsRelatedListSingle: {
                ParentNull:
                  "We can't display this information because the record has no parent or you don\u2019t have access. Ask your admin for help.",
              },
              IncidentManagementSetupMarketingTile: {
                description:
                  "Get the latest on Customer Service Incident Management.",
                linkText: "Watch Video",
                title: "See What\u2019s New",
                navUrl:
                  "/HelpAndTrainingDoor?version=2&resource=https://salesforce.vidyard.com/watch/ZLskycxwdQa5wAmHtXKQj6",
              },
              SocialPhoto: { RecordPhotoAltText: "Profile Image" },
              LightningPill: {
                deleteAndNavigate:
                  "Press delete or backspace to remove {0}, press enter to navigate",
                warning: "Warning",
                error: "Error",
                delete: "Press delete or backspace to remove {0}",
                remove: "Remove {0}",
              },
              emailMessageTrackingStatus: {
                Opened: "Last opened {0}",
                BouncedTitle: "We were unable to deliver the email.",
                Bounced: "Bounced",
                Unopened: "Unopened",
                NotTrackedTitle:
                  "A recipient opted out of email tracking or email tracking wasn't available when the email was sent.",
                NotTracked: "Not Tracked",
                UnopenedTitle: "Unopened",
                OpenedTitle: "Opened",
              },
              mailapp_insert_free_time: {
                html_timezone: "Time Zone: {0}",
                meeting_link_in_timeslots_recipient_button_text:
                  "Select Another Time",
                html_times_in_web_browser: "View times in a new page.",
                html_intro: "Select Meeting Time",
              },
              EmailTemplateInsertDialog: {
                AttachmentError:
                  "This template has one or more attached files that you don't have access to. If you need to include those files in emails that use this template, please contact the template creator to request file access.",
              },
              udd_ActionCadence: { Entity: "Cadence", Name: "Name" },
              FlexipageEditorTabsetEditor: {
                DrillIns: "Drill ins",
                Tabs: "Tabs",
              },
              udd_OpportunitySplit: { Entity: "Opportunity Split" },
              DashboardFilterErrors: {
                unknown:
                  "Warning: This filter is invalid for an unknown reason. Delete the filter and start again.",
              },
              Gear: { OnlineSalesTitle: "Your Account" },
              Copyright: {
                Copyright:
                  "Copyright  2000-2014 salesforce.com, inc. All rights reserved.",
              },
              EmailStream: {
                defaultSharingSettingsPanelTitle: "Activity Sharing",
                defaultSharingSettingsEventTitle: "New Product Demo",
                defaultSharingSettingsEmailToName: "Lei Chen",
                defaultSharingSettingsEmailTitle: "Re: Updated Proposals",
                defaultSharingSettingsEventLocation:
                  "300 Pike St, San Francisco, CA",
                defaultSharingSettingsEventAuthor: "Jason Dewar",
                defaultSharingSettingsEmailBodySummary:
                  "Hi guys, Thanks for meeting with the team today and going through the proposals we have made with...",
                defaultSharingSettingsEventBodySummary:
                  "Let's get together to see a demo from one...",
                You: "You",
              },
              SessionTimeout: { continueButton: "Continue Working" },
              Salesforce1App: { TemplateTitle: "Salesforce" },
              NoteAction: {
                New: "New",
                ImageUploadFailed: "Unable to upload the image.",
                ErrorNotesPrefOff:
                  "Your organization has disabled the new enhanced Salesforce note-taking feature. Please re-enable this feature in order to view this note.",
                ImageUploadTooLarge:
                  "The image exceeded the maximum size of 1 MB.",
                ImageUploadOfflineUnsupported:
                  "There is no connection to the server for image upload.",
              },
              IncidentManagementSetupTrailheadTile: {
                description:
                  "Learn how to fix widespread service disruptions and communicate resolutions quickly.",
                linkText: "Go to Trailhead",
                title: "Customer Service Incident Management Trails",
                navUrl:
                  "/HelpAndTrainingDoor?version=2&resource=https://trailhead.salesforce.com/en/content/learn/modules/customer-service-incident-management-quick-look",
              },
              ComponentInstance: {
                LightningComponentProblem:
                  "A Component Error has occured! Error: {0} Component: {1} ",
              },
              Lookup: {
                PickEntity: "Pick an object",
                noAccess: "No access",
                createNewEntity: "New <Entity>",
              },
              ErrorStateStandardMessages: {
                UnknownError: "An unknown error occurred.",
              },
              ObjectHomeListViewSettings: {
                DeleteListViewTitle: "Delete",
                NewListViewTitle: "New List View",
                ListViewControlsMenuLabel: "List View Controls",
                CopyOfListView: "Copy of {0}",
                CancelButtonLabel: "Cancel",
                EditVisibilityMenuLabel: "Sharing Settings",
                UpdateListViewSuccessMsg: "List view updated.",
                EditVisibleColumnsMenuLabel: "Select Fields to Display",
                CloneMenuLabel: "Clone",
                RenameMenuLabel: "Rename",
                CloneListViewTitle: "Clone List View",
                NewMenuLabel: "New",
                RenameListViewTitle: "Rename List View",
                ShowListFiltersMenuLabel: "Show List Filters",
                DeleteMenuLabel: "Delete",
                EditVisibilityListViewTitle: "Sharing Settings",
                DeleteListViewSuccessMsg: "List view deleted.",
                SaveButtonLabel: "Save",
                EditListFiltersMenuLabel: "Edit List Filters",
                DeleteButtonLabel: "Delete",
              },
              ForecastingShare: { Done: "Done" },
              exceptions_OpportunitySplit: {
                DuplicateSplitException:
                  "The user has already been entered for that split type.",
                CannotUpdateSplitWithValidation:
                  "Can't update splits: percentages don't add up to 100.00%.",
              },
              FormulaFieldExceptionMessages: {
                InvalidFieldReferenceException:
                  "Field {0} does not exist. Check spelling.",
              },
              LightningPrimitiveCellActions: {
                showActions: "Show actions",
                loadingActions: "Loading actions",
              },
              LightningClickToDial: {
                disabled: "Click to dial disabled",
                enabled: "Click to dial",
              },
              Page_SearchResult: {
                invalid_search_term:
                  "Please enter a search string at least 2 characters long.",
              },
              ExpressionValidation: {
                malformedExpression:
                  "The expression '{0}' is formatted incorrectly. The correct format is '{!$Label.customLabelName}'.",
              },
              LightningPrimitiveCellTree: {
                expandBranch: "Expand {0}",
                collapseBranch: "Collapse {0}",
              },
              CopyToClipboardButton: {
                Copied: "Copied!",
                ButtonLabel: "Copy to Clipboard",
                CmdC: "Press ⌘-C to copy",
              },
              analyticsSharing: {
                defaultShareErrorMsg:
                  "Looks like there was a problem. Please try again.",
              },
              LightningInputFile: {
                bodyText: "Or drop files",
                buttonLabel: "Upload Files",
              },
              Page_RecordTypeSelector: {
                outputRecordTypeChangeLink: "Change Record Type",
              },
              ChatterNotes: { newNote: "New Note" },
              ChatterGroups: {
                unarchiveGroup_managersLabel: "Managers: ",
                membersCount: "{0} Members",
                group_is_archived: "This group has been archived",
                memberCount: "{0} Member",
                unarchiveGroup_ownerLabel: "Owner: ",
                unarchiveGroupBtn: "Activate Group",
                group_is_archived_info_manager:
                  "You can no longer create new posts or share files with this group. Activate the group to enable all features.",
                group_is_archived_info_member:
                  "You can no longer create new posts or share files with this group. To request activations, contact the group owner or manager.",
              },
              LightningRedirectWarningPage: {
                redirectBodySalesforce1:
                  "Because of your browser settings, we need your permission to open {0}... in a new tab.",
                redirectNoSalesforce: "Cancel",
                redirectBodySalesforce2:
                  "To prevent this message from displaying in the future, disable your browser\u2019s popup blocker.",
                redirectYesSalesforce: "Open",
                redirectHeaderSalesforce: "Open this page?",
              },
              ChooseDataSourceTypeModal: {
                ConnectExchangePleaseWait:
                  "Connecting to your Microsoft® Exchange account\u2026 We\u2019ll let you know when we\u2019re done.",
              },
              CadenceStepsCardStepLabel: {
                SendAnEmail: "Send Email",
                BranchValueNoCategory: "No Category? {0}",
                ListenerBranchValueListenUpTo: "Listen up to {0}",
                WaitSkipped: "Wait Skipped",
                UpcomingStepWarningBody:
                  "You're taking action before the recommended start time.",
                WaitCompleted: "Wait Complete",
                CallCompleted: "Call Complete",
                EmailSendFailed: "We couldn't send this email.",
                StepSkipped: "Step Skipped",
                BranchValueEmailReply: "Email Reply",
                UpcomingStepWarningTakeAction: "Take Action",
                UpNext: "Up Next",
                InternalActionError:
                  "Something went wrong. Advance the cadence manually, or try completing the action again.",
                EmailFailed: "Email delivery failed",
                NoMoreSteps: "Completed",
                StepFailed: "Step Failed",
                BranchValueMultipleCondition: "Multiple Branch Conditions",
                CallFailed: "Call Failed",
                BranchValueEmailNoReplyOutcome: "Email Reply Not Received",
                InProgress: "In progress...",
                LeadConverted: "Lead Converted",
                WaitingForAction: "Waiting for action...",
                DaisyChain: "Exit to Linked Cadence",
                LinkedInMailCompleted: "Send InMail Complete",
                LinkedInConnectionFailed: "Send Connection Request Failed",
                Root: "Cadence Completed",
                BranchValueEmailOpen: "Email Open",
                LinkedInMail: "Send InMail",
                ListenerBranchValueListenFor: "Listen and wait for {0}",
                PlatformScreenFlow: "Custom Step (Screen Flow)",
                BranchValueCallUnqualified: "Unqualified? {0}",
                LinkedInConnection: "Send Connection Request",
                CreateTask: "Custom Step",
                RetryAutoSendAnEmail: "Send Manually",
                ManuallyRemoved: "Manually removed from ",
                BranchCall: "Branch on Call Result",
                BranchValueEmailReplyOutcome: "Email Reply Received",
                PlatformScreenFlowModalTitle: "Run Screen Flow",
                AutoSendAnEmailCompleted: "Sent Automated Email",
                ScheduledEmailFromMailAppError:
                  "The email was composed outside of Salesforce. Go there to make changes.",
                Wait: "Wait",
                BranchValueCallLeftVoicemail: "Left Voicemail? {0}",
                WaitFailed: "Wait action failed",
                ListenerBranch: "Listener Branch",
                LinkedInMailFailed: "Send InMail Failed",
                BranchValueEmailOpenOutcome: "Email Opened",
                BranchOutcomeFailure: "No",
                BranchGeneric: "Branch",
                EmptyStepComments: "No description provided.",
                BranchValueCallNotInterested: "Not Interested? {0}",
                BranchValueEmailLinkNotClickOutcome: "Email Link Not Clicked",
                EditScheduledSend: "Edit Scheduled Send",
                BranchValueEmailLinkClick: "Email Link Click",
                EmailCompleted: "Email Sent",
                EmailSentNoConfirmation: "We're still sending your email.",
                BranchOutcomeSuccess: "Yes",
                PlatformScreenFlowFailed: "Run Screen Flow Failed",
                LinkedInConnectionCompleted: "Send Connection Request Complete",
                MakeACall: "Call",
                CreateTaskCompleted: "Step Complete",
                AutoSendAnEmailFailed: "Automated Email Failed",
                RetryCall: "Retry Call",
                NoAccessToDaisyChain:
                  "You don\u2019t have access to the linked cadence.",
                AutoSendAnEmail: "Send Automated Email",
                WaitTimeRemaining: "{0} remaining",
                CreateTaskAction: "Show Details",
                PlatformScreenFlowAction: "Take Action",
                ScheduledSend: "Scheduled Send",
                BranchValueCallMeaningfulConnect: "Call Connected? {0}",
                AutoSendAnEmailInProgress: "Sending Automated Email...",
                BranchValueEmailNotOpenOutcome: "Email Not Opened",
                BranchValueEmailLinkClickOutcome: "Email Link Clicked",
                AutomaticallyExited: "Exited due to cadence rule",
                PlatformScreenFlowCompleted: "Run Screen Flow Complete",
                UpcomingStepWarningTitle: "Start this upcoming step now?",
                RetryEmail: "Retry Email",
                LinkedInConnectionRetry: "Retry Send Connection Request",
                PlatformScreenFlowRetry: "Retry Run Screen Flow",
                BranchValueCallBackLater: "Call Back Later? {0}",
                LinkedInMailRetry: "Retry Send InMail",
              },
              ProjectOne_TaskDetail: {
                CannotAddLeadWhenWhatPresent:
                  "You can\u2019t relate a lead to a task already related to an account, opportunity, or other object.",
                CannotChangeContactWhenShared:
                  "You can't change the primary contact for this shared task.",
                CannotAddWhatWhenLeadPresent:
                  "You can\u2019t relate an account, opportunity, or other object to a task already related to a lead.",
              },
              LightningNoticeFooter: { okButton: "OK" },
              LightningOutputField: {
                helptextAlternativeText: "{0} Help Info",
              },
              DeleteEventActions: {
                UndoToastActionLabel: "Undo",
                UndoDeleteFallbackMessage: "Record was deleted.",
              },
              LightningPillContainer: {
                more: "+{0} more",
                label: "Selected Options:",
              },
              TaskCardActions: {
                emailActionName: "Send Email",
                assignTaskLabelActionName: "Apply labels",
                mobilePhone: "Mobile",
                otherPhone: "Other",
                phone: "Phone",
                homePhone: "Home",
                callActionName: "Call",
                assistantPhone: "Assistant",
                noActionAvailable: "No Actions Available",
                openRelatedRecordHome: "Open Related Record Home",
                markCompleteActionName: "Mark Complete",
                dropDownHeaderMenuTitle: "Task actions",
              },
              ActionLinksMessages: { ExecutingUserLabel: "Performed by: {0}" },
              RelatedListQuickLinks: {
                Customize:
                  "To customize quick links, go to your personal settings. Enter Customize My Pages in the Quick Find box, select Customize My Pages, and then select {0}.",
              },
              Error: {
                toastTitleGenericLabelForRecord:
                  "You encountered some errors when trying to save this record",
                selectAStage: "Select a {0}",
                toastTitle:
                  'You encountered some errors when trying to save "{0}"',
              },
              Landing: {
                OpportunityNoAccess:
                  "To see your opportunity-related data, contact your Salesforce admin.",
                Title: "Home",
                ErrorLoadingPage: "Error loading home page. Try again later.",
              },
              LightningDatatable: {
                cancel: "Cancel",
                rowActionsDefaultAriaLabel: "Actions",
                save: "Save",
                sortDesc: "Sorted Descending",
                error: "Fix the errors and try saving again",
                closeButtonAssistiveText: "Close dialog",
                columnWidth: "column width",
                rowNumber: "Row Number",
                wrapText: "Wrap text",
                sortAsc: "Sorted Ascending",
                showActions: "Show actions",
                updateSelectedItems: "Update {0} selected items",
                apply: "Apply",
                edit: "Edit",
                chooseARow: "Choose a Row to Select",
                editHasError: "has error",
                false: "False",
                selectItem: "Select Item",
                clipText: "Clip text",
                sort: "Sort by:",
                ariaLiveActionMode: "Action Mode",
                loading: "Loading",
                rowLevelErrorAssistiveText: "{0} has {1} errors",
                selectAll: "Select All",
                chooseARowSelectAll: "Choose a Row",
                true: "True",
                ariaLiveNavigationMode: "Navigation Mode",
                sortNone: "Sorted: None",
              },
              ObjectHomeCharts: {
                ToggleCharts: "Toggle Charts",
                ToggleFilters: "Toggle Filters",
                Disabledcharts: "Charts are not available for this list view",
                Disabledfilters: "Filters are not available for this list view",
                ShowFieldsAndGuidance: "Show more details",
                Showcharts: "Show charts",
                Showfilters: "Show filters",
                Hidecharts: "Hide charts",
                Hidequickfilters: "Hide quick filters",
                Hidefilters: "Hide filters",
                HideFieldsAndGuidance: "Hide details",
                Showquickfilters: "Show quick filters",
              },
              DesktopTemplate: { Home: "Home" },
              Collaboration: { ChatterNoun: "Chatter" },
              TodoItemSummary: {
                completeTaskOnStartDate: "Complete task on {2}",
                linkedInConnWithWhoByDueDate:
                  "Send a LinkedIn connection request to <strong>{0}</strong> by {2}",
                emailWithWhoFromAccountOnStartDate:
                  "Email <strong>{0}</strong> from <strong>{1}</strong> on {2}",
                linkedInMailWithWhatByDueDate:
                  "Send a LinkedIn InMail related to <strong>{1}</strong> by {2}",
                makeACallWithWhat: "Call related to <strong>{1}</strong>",
                linkedInConn: "Send a LinkedIn connection request",
                screenFlowWithWhoOnStartDate:
                  "Complete screen flow for <strong>{0}</strong> on {2}",
                emailWithWhoFromAccount:
                  "Email <strong>{0}</strong> from <strong>{1}</strong>",
                linkedInMailOnStartDate: "Send a LinkedIn InMail on {2}",
                completeWorkItemWithWhatByDueDate:
                  "$Label.TodoItemSummary.completeWorkItemWithWhatByDueDate does not exist.",
                completeWorkItemWithWhoWithWhatByDueDate:
                  "$Label.TodoItemSummary.completeWorkItemWithWhoWithWhatByDueDate does not exist.",
                linkedInConnOnStartDate:
                  "Send a LinkedIn connection request on {2}",
                emailWithWhatOnStartDate:
                  "Email related to <strong>{1}</strong> on {2}",
                completeWorkItemWithWhoFromAccountByDueDate:
                  "$Label.TodoItemSummary.completeWorkItemWithWhoFromAccountByDueDate does not exist.",
                linkedInMailWithWhoFromAccountByDueDate:
                  "Send a LinkedIn InMail to <strong>{0}</strong> from <strong>{1}</strong> by {2}",
                linkedInConnWithWho:
                  "Send a LinkedIn connection request to <strong>{0}</strong>",
                screenFlowWithWhoFromAccount:
                  "Complete screen flow for <strong>{0}</strong> from <strong>{1}</strong>",
                completeWorkItemWithWhoFromAccountOnStartDate:
                  "$Label.TodoItemSummary.completeWorkItemWithWhoFromAccountOnStartDate does not exist.",
                screenFlowWithWho:
                  "Complete screen flow for <strong>{0}</strong>",
                linkedInConnWithWhat:
                  "Send a LinkedIn connection request related to <strong>{1}</strong>",
                emailWithWhoFromAccountByDueDate:
                  "Email <strong>{0}</strong> from <strong>{1}</strong> by {2}",
                screenFlowWithWhoFromAccountOnStartDate:
                  "Complete screen flow for <strong>{0}</strong> from <strong>{1}</strong> on {2}",
                linkedInMailWithWhat:
                  "Send a LinkedIn InMail related to <strong>{1}</strong>",
                linkedInConnWithWhoFromAccount:
                  "Send a LinkedIn connection request to <strong>{0}</strong> from <strong>{1}</strong>",
                completeWorkItemWithWhoWithWhat:
                  "Complete work item for <strong>{0}</strong> related to <strong>{1}</strong>",
                completeTaskWithWhatOnStartDate:
                  "Complete task related to <strong>{1}</strong> on {2}",
                emailWithWhatByDueDate:
                  "Email related to <strong>{1}</strong> by {2}",
                completeWorkItemWithWhatOnStartDate:
                  "$Label.TodoItemSummary.completeWorkItemWithWhatOnStartDate does not exist.",
                completeTaskWithWhoByDueDate:
                  "Complete task for <strong>{0}</strong> by {2}",
                completeTaskWithWho: "Complete task for <strong>{0}</strong>",
                linkedInConnWithWhoWithWhat:
                  "Send a LinkedIn connection request to <strong>{0}</strong> related to <strong>{1}</strong>",
                linkedInConnWithWhatByDueDate:
                  "Send a LinkedIn connection request related to <strong>{1}</strong> by {2}",
                screenFlowWithWhoWithWhatByDueDate:
                  "Complete screen flow for <strong>{0}</strong> related to <strong>{1}</strong> by {2}",
                linkedInMailWithWho:
                  "Send a LinkedIn InMail to <strong>{0}</strong>",
                email: "Send an email",
                emailWithWhoWithWhat:
                  "Email <strong>{0}</strong> related to <strong>{1}</strong>",
                screenFlowWithWhoWithWhatOnStartDate:
                  "Complete screen flow for <strong>{0}</strong> related to <strong>{1}</strong> on {2}",
                makeACallWithWhoWithWhat:
                  "Call <strong>{0}</strong> related to <strong>{1}</strong>",
                linkedInConnWithWhoFromAccountOnStartDate:
                  "Send a LinkedIn connection request to <strong>{0}</strong> from <strong>{1}</strong> on {2}",
                screenFlowWithWhoByDueDate:
                  "Complete screen flow for <strong>{0}</strong> by {2}",
                completeTaskWithWhoFromAccount:
                  "Complete task for <strong>{0}</strong> from <strong>{1}</strong>",
                linkedInMailWithWhoOnStartDate:
                  "Send a LinkedIn InMail to <strong>{0}</strong> on {2}",
                makeACallWithWhoWithWhatByDueDate:
                  "Call <strong>{0}</strong> related to <strong>{1}</strong> by {2}",
                linkedInConnWithWhoWithWhatByDueDate:
                  "Send a LinkedIn connection request to <strong>{0}</strong> related to <strong>{1}</strong> by {2}",
                screenFlowByDueDate: "Complete screen flow by {2}",
                linkedInMailWithWhoWithWhatOnStartDate:
                  "Send a LinkedIn InMail to <strong>{0}</strong> related to <strong>{1}</strong> on {2}",
                emailWithWhoWithWhatByDueDate:
                  "Email <strong>{0}</strong> related to <strong>{1}</strong> by {2}",
                screenFlowWithWhoWithWhat:
                  "Complete screen flow for <strong>{0}</strong> related to <strong>{1}</strong>",
                emailWithWho: "Email <strong>{0}</strong>",
                completeTaskWithWhatByDueDate:
                  "Complete task related to <strong>{1}</strong> by {2}",
                completeWorkItemWithWho:
                  "Complete work item for <strong>{0}</strong>",
                emailOnStartDate: "Email on {2}",
                linkedInMail: "Send a LinkedIn InMail",
                screenFlowWithWhat:
                  "Complete screen flow related to <strong>{1}</strong>",
                linkedInConnByDueDate:
                  "Send a LinkedIn connection request by {2}",
                completeTaskByDueDate: "Complete task by {2}",
                makeACallWithWhoFromAccount:
                  "Call <strong>{0}</strong> from <strong>{1}</strong>",
                makeACallWithWho: "Call <strong>{0}</strong>",
                makeACallOnStartDate: "Call on {2}",
                linkedInConnWithWhatOnStartDate:
                  "Send a LinkedIn connection request related to <strong>{1}</strong> on {2}",
                completeTaskWithWhoWithWhat:
                  "Complete task for <strong>{0}</strong> related to <strong>{1}</strong>",
                screenFlowWithWhoFromAccountByDueDate:
                  "Complete screen flow for <strong>{0}</strong> from <strong>{1}</strong> by {2}",
                linkedInConnWithWhoOnStartDate:
                  "Send a LinkedIn connection request to <strong>{0}</strong> on {2}",
                completeWorkItemWithWhoFromAccount:
                  "Complete work item for <strong>{0}</strong> from <strong>{1}</strong>",
                emailWithWhat: "Email related to <strong>{1}</strong>",
                screenFlow: "Complete screen flow",
                completeWorkItemByDueDate:
                  "$Label.TodoItemSummary.completeWorkItemByDueDate does not exist.",
                emailWithWhoByDueDate: "Email <strong>{0}</strong> by {2}",
                linkedInMailWithWhoFromAccountOnStartDate:
                  "Send a LinkedIn InMail to <strong>{0}</strong> from <strong>{1}</strong> on {2}",
                linkedInMailWithWhoWithWhat:
                  "Send a LinkedIn InMail to <strong>{0}</strong> related to <strong>{1}</strong>",
                priorityHigh: "Priority: High",
                completeTaskWithWhat:
                  "Complete task related to <strong>{1}</strong>",
                makeACall: "Make a call",
                makeACallByDueDate: "Call by {2}",
                completeTaskWithWhoOnStartDate:
                  "Complete task for <strong>{0}</strong> on {2}",
                completeWorkItem: "Complete work item",
                makeACallWithWhatByDueDate:
                  "Call related to <strong>{1}</strong> by {2}",
                completeWorkItemWithWhoOnStartDate:
                  "$Label.TodoItemSummary.completeWorkItemWithWhoOnStartDate does not exist.",
                emailWithWhoWithWhatOnStartDate:
                  "Email <strong>{0}</strong> related to <strong>{1}</strong> on {2}",
                completeWorkItemOnStartDate:
                  "$Label.TodoItemSummary.completeWorkItemOnStartDate does not exist.",
                linkedInMailWithWhoFromAccount:
                  "Send a LinkedIn InMail to <strong>{0}</strong> from <strong>{1}</strong>",
                completeTask: "Complete task",
                completeTaskWithWhoFromAccountByDueDate:
                  "Complete task for <strong>{0}</strong> from <strong>{1}</strong> by {2}",
                screenFlowWithWhatOnStartDate:
                  "Complete screen flow related to <strong>{1}</strong> on {2}",
                linkedInConnWithWhoFromAccountByDueDate:
                  "Send a LinkedIn connection request to <strong>{0}</strong> from <strong>{1}</strong> by {2}",
                makeACallWithWhoOnStartDate: "Call <strong>{0}</strong> on {2}",
                completeTaskWithWhoWithWhatOnStartDate:
                  "Complete task for <strong>{0}</strong> related to <strong>{1}</strong> on {2}",
                linkedInMailWithWhoByDueDate:
                  "Send a LinkedIn InMail to <strong>{0}</strong> by {2}",
                emailByDueDate: "Email by {2}",
                linkedInMailWithWhoWithWhatByDueDate:
                  "Send a LinkedIn InMail to <strong>{0}</strong> related to <strong>{1}</strong> by {2}",
                completeTaskWithWhoFromAccountOnStartDate:
                  "Complete task for <strong>{0}</strong> from <strong>{1}</strong> on {2}",
                linkedInMailWithWhatOnStartDate:
                  "Send a LinkedIn InMail related to <strong>{1}</strong> on {2}",
                completeTaskWithWhoWithWhatByDueDate:
                  "Complete task for <strong>{0}</strong> related to <strong>{1}</strong> by {2}",
                emailWithWhoOnStartDate: "Email <strong>{0}</strong> on {2}",
                completeWorkItemWithWhat:
                  "Complete work item related to <strong>{1}</strong>",
                makeACallWithWhoFromAccountOnStartDate:
                  "Call <strong>{0}</strong> from <strong>{1}</strong> on {2}",
                makeACallWithWhatOnStartDate:
                  "Call related to <strong>{1}</strong> on {2}",
                screenFlowWithWhatByDueDate:
                  "Complete screen flow related to <strong>{1}</strong> by {2}",
                makeACallWithWhoWithWhatOnStartDate:
                  "Call <strong>{0}</strong> related to <strong>{1}</strong> on {2}",
                linkedInConnWithWhoWithWhatOnStartDate:
                  "Send a LinkedIn connection request to <strong>{0}</strong> related to <strong>{1}</strong> on {2}",
                completeWorkItemWithWhoByDueDate:
                  "$Label.TodoItemSummary.completeWorkItemWithWhoByDueDate does not exist.",
                makeACallWithWhoFromAccountByDueDate:
                  "Call <strong>{0}</strong> from <strong>{1}</strong> by {2}",
                makeACallWithWhoByDueDate: "Call <strong>{0}</strong> by {2}",
                screenFlowOnStartDate: "Complete screen flow on {2}",
                completeWorkItemWithWhoWithWhatOnStartDate:
                  "$Label.TodoItemSummary.completeWorkItemWithWhoWithWhatOnStartDate does not exist.",
                linkedInMailByDueDate: "Send a LinkedIn InMail by {2}",
              },
              sfdc_cms__cadenceBlocks: {
                CallTitle: "Make a Call",
                AutomatedEmailStepTitle: "Send Automated Email",
                CustomStepTitle: "Custom Step",
                LinkedinConnectionStepTitle: "Send Connection Request",
                ManualEmailStepTitle: "Send Manual Email",
                LinkedinInMailStepTitle: "Send InMail",
              },
              LexOnIpad: {
                unsupportedFooter:
                  '<a href="https://help.salesforce.com/articleView?id=lex_ipad_browser.htm" target="_blank">Tell Me More</a>',
                ipad: "Ipad",
              },
              TopicAssignment: {
                maxTopicsMsg: "You've reached the maximum number of topics.",
                removeTopic: "Remove topic",
                save: "Save",
                assignTopicInfo:
                  "Type topic names below. To quickly add several, insert commas or press Enter.",
              },
              LightningRichTextButton: {
                number: "Numbered list",
                indent: "Indent",
                underline: "Underline",
                rightAlign: "Right align text",
                removeFormatting: "Remove formatting",
                leftAlign: "Left align text",
                strike: "Strikethrough",
                outdent: "Outdent",
                bold: "Bold",
                bullet: "Bulleted list",
                italic: "Italic",
                centerAlign: "Center align text",
              },
              LightningPicklist: {
                noneLabel: "--None--",
                available: "Available",
                chosen: "Chosen",
              },
              Activity: {
                log_a_call: "Log a Call",
                send_email: "Send an Email",
              },
              Edit: {
                RequiredWithFieldList: "Required fields are missing: {0}",
              },
              RemoveFromCadence: {
                RemoveFromCadenceActionName: "Remove from Cadence",
              },
              QuickActionErrors: {
                unableToLoadQuickAction: "Unable to load Quick Action {0}",
              },
              RelateRecordsModal: { title: "Add Note to Records" },
              EasySetup: { SetupPanelTitle: "Quick Settings" },
              ObjectAttribution: {
                Maturation:
                  "$Label.ObjectAttribution.Maturation does not exist.",
                Activation:
                  "$Label.ObjectAttribution.Activation does not exist.",
              },
              ContentDistributionLocalizedLabel: {
                download:
                  "$Label.ContentDistributionLocalizedLabel.download does not exist.",
                downloadAsPDF:
                  "$Label.ContentDistributionLocalizedLabel.downloadAsPDF does not exist.",
              },
              MobileWebError: {
                NoCreateAccess:
                  "Oops...you don't have the necessary privileges to create this record. See your administrator for help.",
                TemplateErrorTitle: "Looks like there's a problem.",
                NoPreEditAccess:
                  "Oops...you don't have the necessary privileges to edit this record. See your administrator for help.",
              },
              QuipPreview: {
                QuipPreviewNotAccessible:
                  "Open Quip to request access to this file",
              },
              TemplateVariantTest: {
                SelectRandomCallVariantError:
                  "We couldn't select a call script for this step. Please try again.",
              },
              Infotip: { info: "Info" },
              UnsupportedDetector: {
                unsupportedTitle: "Things to consider before you continue",
                unsupportedBrowser: "You aren't using the recommended browser.",
                unsupportedHeader: "You can improve your Lightning Experience.",
                unsupportedPerformance:
                  "Your {0} isn't getting the best performance. Check to see if you're using a recommended model.",
              },
              ObjectHomeListViewPicker: {
                SelectListView: "Select a List View",
                ListViewSelectedCheckmarkIconAltText: "Selected",
                MaxListsShownTrySearch:
                  "That\u2019s all we can show. Try using specific search terms.",
                PinnedList: "(Pinned list)",
                FindListInputPlaceholder: "Search lists...",
                SectionRecent: "Recent List Views",
                RefineSearch:
                  "Not what you're looking for? Try changing your search conditions.",
                ListViewPickerTooltip: "Select a List View: {0}",
                NoResultsFound: "No results found.",
                SectionLessThanTen: "List Views",
                SectionAll: "All Other Lists",
              },
              FilesRLPreview: { dropFiles: "Drop Files" },
              ListViewManagerColumnHeaderMenu: {
                clipText: "Clip text",
                menu: "Column Actions",
                wrapText: "Wrap text",
              },
              EntityFeed: { MoreMenu: "More" },
              ListEmailOAuthConfirm: {
                GoogleMessage:
                  "Connecting your Gmail account to Salesforce gives your list emails better deliverability and open rates. Plus, see all sent list emails in your Gmail sent folder.",
                Title: "Send List Email Through Your Connected Account",
                ConnectToButton: "Connect Account",
                MicrosoftMessage:
                  "Connecting your Microsoft account to Salesforce gives your list emails better deliverability and open rates. Plus, see all sent list emails in your Microsoft sent folder.",
              },
              ConflictResolutionPage: { nullValue: "-- no value specified --" },
              udd_Event: {
                Entity: "Event",
                Description: "Description",
                Location: "Location",
              },
              NudgeCadence: {
                applyCadenceCheckboxToggleAltText:
                  "Choose to add the recipient to a cadence.",
                emailTemplateCadenceWasAddedMessage:
                  "$Label.NudgeCadence.emailTemplateCadenceWasAddedMessage does not exist.",
                addTargetToCadenceSuggestion: "Add {0} to cadence? ",
                buyerAddedToCadenceToastMessage: "{0} was added to {1}.",
                dismissNudge: "Dismiss Nudge",
                emailTemplateTooltipText:
                  "A cadence that starts with a manual email uses the same email template.",
                switchCadence: "Switch Cadence",
                callScriptCadenceSuggestionTitlePlural:
                  "Some cadences use the call script you selected.",
                moreOptionsButtonMenuAltText: "Show menu",
                emailTemplateCadenceWillBeAddedMessage:
                  "After you send the email, we'll add {0} to this cadence: ",
                callScriptCadenceSuggestionTitle:
                  "A cadence uses the call script you selected.",
                callScriptCadenceWillBeAddedMessage:
                  "After you log the call, we'll add {0} to this cadence: ",
                emailTemplateCadenceSuggestionTitle:
                  "A cadence uses the email template you selected.",
                callScriptTooltipText:
                  "A cadence that starts with a call uses the same call script.",
                emailTemplateCadenceSuggestionTitlePlural:
                  "Some cadences use the email template you selected.",
              },
              Tab_Home: { setup: "Setup" },
              AssessmentRuntime: {
                startAssessment: "Start",
                resumeAssessment: "Resume",
                SelectAssessment: "Select Assessment",
                CaptureAssessment: "Capture Assessment",
              },
              dockingPanel: {
                limitTitle: "You're Maxed Out",
                composerOverflow: "{0} more composer windows",
                limitMessage:
                  "You can open up to {0} composer windows.  To open another window, first close one.",
              },
              QuestionFeedItem: {
                BestAnswer: "Selected as Best by",
                QuestionEscalated: "Question escalated",
                RemoveAsBestVerb: "Remove as Best",
                MarkAsBestVerb: "Select as Best",
              },
              LightningDashboard: { measureWithCurrency: "{0} ({1})" },
              Page_ReminderSettings: {
                refresh_and_try_again:
                  "Hmm. That didn\u2019t work. Refresh the page and try again.",
              },
              EmailEditScreenData: { EMAIL_NO_SUBJECT: "[No subject]" },
              Page_Forecast_Detail: {
                quarterNameFormat: "Q{0}-{1,number,0000}",
              },
              LightningConsoleLayout: {
                selectList: "Select...",
                noRecordSelected: "No record selected",
                viewModeSplit: "Split view mode",
                persistenceMigration:
                  "Loading workspaces and subtabs. Please wait...",
                pleaseSelectRecord:
                  "Open a record from the list to get started.",
                persistenceRollback:
                  "Unable to load saved Console state, including workspaces and subtabs, due to a configuration change.",
              },
              SalesforceInboxOAuthConfirm: {
                Message_InboxAndEAC:
                  "Your Salesforce admin gave you access to Einstein Activity Capture and Inbox. These additions keep your email and calendar in sync with Salesforce and add productivity features.",
                Title_AcceptTOS: "You Have New Email Features",
                Message2:
                  "Before you can send email, connect your Google™ or Microsoft® account to Salesforce.",
                Message_Inbox:
                  "Your Salesforce admin gave you access to Inbox, which adds productivity features to your email and calendar.",
                ReviewTermsOfServiceButton: "Review Terms of Service",
                SelfServiceLabel2:
                  "We also help you add Salesforce to Outlook or Gmail. That way you can work with your Salesforce data and access time-saving tools, such as email tracking, directly from your email application.",
                SelfServiceLabel:
                  "To send email from Salesforce, connect your Microsoft or Google account. You have the option to automatically sync your contacts, events, and email. ",
                Title: "Connect Your Email and Calendar with Salesforce",
                Message2_AcceptTOS:
                  "Before you can send email, review and accept the new terms of service.",
                Message_EAC:
                  "Your Salesforce admin gave you access to Einstein Activity Capture, which helps keep your email and calendar in sync with Salesforce.",
                ConnectToButton: "Connect Account",
              },
              udd_ListView: { Entity: "List View", Entities: "List Views" },
              Insert_Free_Time: {
                meetingDetailsDuration00: "0 mins",
                meetingDetailsDuration30: "30 mins",
                meetingDetailsDuration15: "15 mins",
                meetingDetailsDuration120: "120 mins",
                meetingDetailsDuration45: "45 mins",
                meetingDetailsDuration90: "90 mins",
                meetingDetailsDuration60: "60 mins",
              },
              LightningLookup: {
                add: "Add",
                searchPlaceholder: "Search...",
                panelHeaderMobile: "Relate {0} To",
                noAccess: "No access",
                searchObjectsPlaceholder: "Search {0}...",
                searchObjectsPlaceholderMobile: "Search {0}",
                typeaheadResultsListHeaderMobile: 'Initial Results for "{0}"',
                resultsListHeaderMobile: 'All Results for "{0}"',
                emptyStateNoResultMRUText: "No results yet...",
                messageWhenMissingInformation:
                  "Review this lookup configuration. Your Salesforce admin can help with this.",
                messageWhenBadInputDefault:
                  "Select an option from the picklist or remove the search term.",
                currentSelection: "Current Selection",
                none: "None",
                selectObject: "Choose an object",
                recentObject: "Recent {0}",
                emptyStateNoResultMRUWithoutText: "Try entering a search term.",
                emptyStateNoResultText: 'No results for "{0}"',
                search: "Search",
                advancedSearchMobile: 'Show All Results for "{0}"',
                unknownRecord: "Unknown record",
                createNewObject: "New {0}",
                recentItems: "Recent Items",
              },
              ContentHubInS1Error: {
                CONTENT_HUB_FILE_HAS_NO_URL_EXCEPTION_desc:
                  "The external source hasn't provided a URL for this file, so it can't be opened.",
                CONTENT_HUB_FILE_HAS_NO_URL_EXCEPTION: "Can't open file",
              },
              NoteTasks: { TaskTextAreaPlaceholder: "Add a Task..." },
              MassQuickActions: {
                noRecordsSelected: "Select at least one record.",
                errorsTitle: "Quick Action Errors",
                toastTitle: "Couldn't save updates.",
                toastMessage: "Review the quick action errors.",
                tooManyRecordsSelected:
                  "That's a lot of records! Select up to 100 records and try again.",
                confirmSubmitMessageUpdate:
                  "Update {0} records and change these fields: {1}?",
                confirmSubmitMessage: "Perform this action on {0} records?",
                confirmSubmitTitle: "Perform action",
                multipleRecordTypeIdsError:
                  "To update multiple records at a time, select records belonging to the same record type.",
                updateActionNoChangesToShow: "No changes yet",
                updateActionFieldsToUpdate: "Fields to update",
              },
              MerchantAccountPaymentMethodType: {
                BACS_DEBIT: "BACS Debit",
                ACH_DIRECT_DEBIT: "ACH Debit",
                AFTERPAY_CLEARPAY: "Afterpay/Clearpay",
                EPS: "EPS",
                KLARNA: "Klarna",
                CREDIT_CARD: "Credit Cards",
                BECS_DEBIT: "BECS Debit",
                IDEAL: "iDEAL",
                PAYPAL: "PayPal",
                APPLE_PAY: "Apple Pay",
                BANCONTACT: "Bancontact",
                VENMO: "Venmo",
                GOOGLE_PAY: "Google Pay",
                SEPA_DEBIT: "SEPA Debit",
              },
              POneDrillToReport: {
                ChartNotFilterable:
                  "To filter this report via the chart, edit the report and group all date fields by either Day, Calendar Week, Calendar Month, Calendar Quarter, Calendar Year, Fiscal Quarter, or Fiscal Year. If your org set up a custom fiscal year, then Fiscal Quarter and Fiscal Year may not work.",
              },
              RecordHomeCards: {
                ShowLess: "Show Less",
                ShowAll: "Show All ({0})",
                ViewAll: "View All",
                RelatedListQuickLinks: "Related List Quick Links",
                NoCards: "No related lists to display",
              },
              MultiSelectPicklist: {
                defaultPlaceholder: "Select options...",
                clear: "Clear",
                validityValueMissing: "Select at least one option.",
                multipleOptionsSelected: "{0} options selected",
                done: "Done",
                required: "Required",
              },
              insightActions: {
                postText: "Say something or @mention someone",
                post: "Post a comment",
                scheduleMeeting: "Create Event",
                viewExecutiveProfile: "View Executive Profile",
                postFailureMessage:
                  "Can't post the comment. Try posting again.",
                postOnChatter: "Post on Chatter",
                postSuccessMessage: "The comment was posted.",
                to: "To",
                createTask: "Create Task",
                email: "Reply",
              },
              Feeds: {
                ShowMoreBodyText: "More",
                FeedPostRechatVerb: "Share",
                ShowPreviousAnswers: "Show previous answers",
                moreLinkTitle: "Show more text",
                "2Like": "{0} and {1} like this.",
                UpVoteCountSingular: "{0} upvote",
                StreamsListingEmpty:
                  "Try creating a stream. Then add feeds to it to see all activity on a topic you care about.",
                Follow: "Follow",
                EditedByJustNow: "Edited by {0} just now",
                VerifyVerb: "Company Verify",
                StreamNameRequired: "Enter a stream name.",
                invalidUrlError: "Start the URL with http:// or https://.",
                UnverifyVerb: "Remove Verification",
                CompanyAndUserVerifiedAnswerByUsers:
                  "Company Verified by {0} & Selected as Best by {1}",
                notifyMentionText:
                  "Notify a person or group about this update.",
                FeedPostBookmarkVerb: "Bookmark",
                AddEntitiesToStreamInfoBubble:
                  "Choose a type of record to follow, then search for a record.",
                TagTopics: "Add Topic",
                FeedPostUnlikeVerb: "Unlike",
                morelink: "Show More",
                RemoveFromStreamToggle: "Remove from Stream",
                UpVotedStateActionDescription: "Remove your upvote",
                CommentsSummarySingular: "{0} comment",
                LikedState: "Liked",
                CommentActionsTitle: "Actions for this Feed Item Comment",
                NoStreamsYetText: "Try creating one!",
                EditedByHoursAgo: "Edited by {0} {1}h ago",
                StreamNotificationsNever: "Never",
                TranslationGenericErrorMessage:
                  "We couldn't translate this content. Try again later.",
                ShowMoreAnswers: "Show more answers",
                LoadingStreams: "Loading Streams",
                StreamNotificationsTitle: "Set Notifications",
                ManyNewLiveComments: "You have new comments.",
                "1TypingAccessibility": "{0} is typing on {1}'s post...",
                ShareToGroupAction: "Share with Group",
                FeedPostDeleteNonCreatorMsg:
                  "This post was created by another user. Deleting it permanently removes it from everyone's view, not just your own.",
                shareToDirectMessageQuestionPostSubject: "Re: {0}",
                EndOfFeedMarker: "End of Feed",
                FeedPostLogInToCommentLink: "Log In to Comment",
                StreamsListingNoRecordsYet: "No records yet",
                FeedPostCloseQuestionVerb: "Close Question",
                timeStampHover: "Click for single-item view of this post.",
                ViewAllAttachments: "View all attachments",
                sort_label: "Sort by:",
                youOthersLike: "You and {0} like this.",
                CommentDeleteConfirmation:
                  "Are you sure you want to delete this comment?",
                expandPost: "Expand Post",
                ShowLikes: "Show Likes",
                UpVoteVerb: "Upvote",
                FeedPostOpenPollVerb: "Open Poll",
                FeedHomeTitle: "Chatter Home",
                ViewMoreAltText: "View More Posts",
                ShareAsDirectMessageAction: "Send as Message",
                UpVotedVerb: "Upvoted",
                AnswerLikersDialogTitle: "Liked By",
                FeedPostUnpinVerb: "Unpin",
                MoreCommentsRatio: "{0} of {1}",
                IncludedInStream: "In Stream",
                SharedPostLabel: "Shared Post",
                youLike: "You like this.",
                StreamToastLatency:
                  "Posts from records you just added might not show up right away.",
                MaxStreamsAdded: "Maximum streams added",
                ChatterStreamName: "Stream Name",
                FeedPostComment: "Comment on this post",
                SingleNewPosts: "{0} New Post",
                ViewCase: "View Case",
                AllAnswers: "All Answers",
                "2TypingAccessibility":
                  "{0} and {1} are typing on {2}'s post...",
                CommunityStreamIndicator: "From site:",
                StreamNotificationsEveryPost: "Every Post",
                EditedHoursAgo: "Edited {0}h ago",
                "1other": "1 other",
                UpdatedThisRecord: "{0} updated this record.",
                StreamsListingRecordCellIncluding: "including",
                StreamsListingRecords: "Records Followed",
                ShowMoreComments: "Show more comments",
                noUserFoundText: 'No results for "{0}".',
                FeedPostUnhideVerbConfirmation: "Post was unmuted.",
                LoadingFeedItems: "Loading Items",
                EditChatterStream: "Edit Stream",
                "3OthersLike": "{0}, {1}, {2}, and {3} like this.",
                MissingChatterGroupText: "Why not create or join some now?",
                AddToStreamToggle: "Add to Stream",
                Unfollow: "Unfollow",
                ViewMore: "View More",
                loadingText: "Loading...",
                GIFImageButtonText: "GIF",
                ShowUpvotes: "Show Upvotes",
                EntitiesNotStreamable:
                  "You don't have access to these entities or their feeds: {0}.",
                CommentSummary: "Comment",
                ThisRecordWasUpdated: "This record was updated.",
                RemoveUpVoteVerb: "Remove Upvote",
                MultipleTypingAccessibility:
                  "Wow, this post is on fire! A lot of people are typing on {0}'s post...",
                CommentsSummaryPlural: "{0} comments",
                RechatDropDownWithFollowers: "My Followers",
                StreamNotifications: "Notifications",
                StreamsDialogInfoText:
                  "Create your own flow of feed posts from records, people, and groups you choose.",
                you1OthersLike: "You, {0}, and {1} like this.",
                EditedJustNow: "Edited just now",
                ChangedOldToNew: "{0} to {1}",
                LikesBasicSingular: "1 like",
                unknownHandledFeedException:
                  "Sorry! We encountered an unexpected error. Please try reloading the page. If the error persists, contact customer support.",
                minutesago: "{0}m ago",
                ViewsPlural: "{0} views",
                "2OthersLike": "{0}, {1}, and {2} like this.",
                FeedPostBookmarked: "Feeditem is bookmarked",
                FeedPostPinHeader: "Pinned Post",
                yesterday: "Yesterday",
                ShowAllCommentsNoCount: "Show All Comments",
                NewChatterGroup: "New Group",
                now: "Just now",
                FeedItemActionsTitle: "Actions for this Feed Item ",
                ChatterStreams: "Streams",
                StreamsListingEmptyTitle: "Streams can take you places",
                emptyUrlError: "The URL should not be empty.",
                ShowAllUpdates: "Show All Updates",
                CompanyAndUserVerifiedAnswer:
                  "Company Verified & Selected as Best",
                RefreshComments: "{0}+ New Comments",
                ClosedConversationMessagePost: "This post is closed.",
                StreamNotificationsInNewStream: "Notify Me",
                QuestionLikersDialogTitle: "Liked By",
                RechatDropDownWithAGroup: "A Group",
                FeedPostDeleteConfirmation:
                  "Are you sure you want to delete this post?",
                MoreAnswers: "More answers",
                LinkPreviewDesc: "This content is a preview of a link.",
                hoursago: "{0}h ago",
                EditedYesterdayAtTime: "Edited yesterday at {0}",
                FeedPostBookmarkAddedConfirmation: "Bookmark was added.",
                FollowingInStream: "Following in Stream",
                FeedPostHideVerb: "Mute",
                FeedPostBookmarkRemovedConfirmation: "Bookmark was removed.",
                FeedConversationDeleteConfirmation:
                  "Are you sure you want to delete this post and its comments?",
                LikersDialogTitle2: "Liked By",
                FeedPostClosePollVerb: "Close Poll",
                DownVotedStateActionDescription: "Remove your downvote",
                FeedPostUnhideVerb: "Unmute",
                DownVotedVerb: "Downvoted",
                LikesBasicPlural: "{0} likes",
                PostVerb: "Post",
                TopRankedAnswers: "Top Rated Answers",
                TranslationExceedsCharacterLimitMessage:
                  "We can't translate the content because it\u2019s over 5,000 characters.",
                companyHighlights: "Company Highlights",
                DownVoteVerb: "Downvote",
                DeleteStreamTitle: "Delete stream?",
                NewChatterStream: "New Stream",
                EditedByMinutesAgo: "Edited by {0} {1}m ago",
                RecentGroups: "Recent Groups",
                ShowPreviousComments: "Show previous comments",
                UserVerifiedAnswer: "Selected as Best",
                FeedPostHideVerbConfirmation: "Post was muted.",
                PublishDraftPostActionConfirmation:
                  "Are you sure you want to publish this post?",
                EditedByYesterdayAtTime: "Edited by {0} yesterday at {1}",
                CommentDeleteNonCreatorMsg:
                  "This comment was created by another user. Deleting it permanently removes it from everyone's view, not just your own.",
                ChangedBlankToNew: "A blank value to {1}",
                tomorrow: "Tomorrow",
                CompanyVerifiedAssistiveText:
                  "Question has a company-verified answer",
                NewPosts: "New Posts",
                DeleteStreamAreYouSure:
                  "Deleting a stream doesn\u2019t delete the records or posts it contains. It only deletes the stream, which frees up space for you to create new streams.",
                UpVotersDialogTitle: "Upvoted By",
                SeenBy: "Seen by {0}",
                OpenLinkPreview: "Click to open rich preview",
                CommentVerb: "Comment",
                MissingChatterGroupTitle: "Aw, you don't have any groups!",
                DeleteAction: "Press delete or backspace to remove",
                StreamActionsTitle: "Actions for this Stream",
                PublishDraftPostActionTitle: "Publish",
                UserVerifiedAnswerByUser: "Selected as Best by {0}",
                AddEntitiesToStream: "Records to Follow",
                OneNewLiveComment: "You have a new comment.",
                CompanyVerifiedAnswerByUser: "Company Verified by {0}",
                Cancel: "Cancel",
                CommentDefaultText: "Write a comment...",
                EditedByAndDate: "Edited by {0} {1}",
                "3TypingAccessibility":
                  "{0}, {1}, and {2} are typing on {3}'s post...",
                pendingReview: " Pending Review",
                "1Typing": "{0} is typing...",
                QuestionHasBestAnswer: "Best Answer",
                ShowRepliesCount: "{0} replies",
                SeenByDialogTitle: "Seen By",
                ShareViaLinkTitle: "Copy Link to Thread",
                ShareAsPostAction: "Share with Followers",
                CopyLinkAction: "Copy Link",
                RemoveDownVoteVerb: "Remove Downvote",
                FeedRefresh: "Refresh this feed",
                unavailableFileMessage:
                  "1 of the attached file is no longer available",
                CUFCommentPostAtmentionPrivateGroupMsg:
                  "You're commenting on a post that is visible outside of this private group.",
                "2Typing": "{0} and {1} are typing...",
                Following: "Following",
                StreamsListingRecordCellRecords: "records",
                FeedPostUnbookmarkVerb: "Remove Bookmark",
                StreamUpdatedToast: 'Stream "{0}" was updated.',
                Play: "Play",
                EditPostTitle: "Edit Post",
                EditedMinutesAgo: "Edited {0}m ago",
                UpVoteStateActionDescription: "Upvote this item",
                ChatterNotEnabled: "Chatter is not enabled",
                SearchPeople: "Search people and groups",
                StreamsListingName: "Name",
                EditCommentTitle: "Edit Comment",
                FeedEntitySharePostUnavailableError:
                  "The shared item isn't shown because it was deleted or you no longer have access to it.",
                CommentDateAtTime: "{0} at {1}",
                ClosedConversationMessageQuestion: "This question is closed.",
                ChangedUndefined: "Changed",
                ViewsSingular: "{0} view",
                MultipleTyping:
                  "Wow, this post is on fire! A lot of people are typing...",
                EditAnswerTitle: "Edit Answer",
                DisplayNameAndTimestamp: "{0}, {1}",
                you2OthersLike: "You, {0}, {1}, and {2} like this.",
                FeedPostLikeVerb: "Like",
                "3Typing": "{0}, {1}, and {2} are typing...",
                TooManyInlineImages:
                  "You cannot include more than {0} inline images on a single feed entity",
                Items: "Items",
                StreamLimitErrorMessage: "You can have up to {0} streams.",
                EditedDate: "Edited {0}",
                UpVoteCountPlural: "{0} upvotes",
                FakeFilterTitle: "Filter Feed",
                FeedPostOpenPostVerb: "Open Post",
                bannerAnnouncement: "Announcement",
                ChangedOldToBlank: "{0} to a blank value",
                SkipPastTheFeedOnTabbingLink: "Skip Feed",
                MoreComments: "More comments",
                PluralNewPosts: "{0} New Posts",
                nothers: "{0} others",
                FeedPostClosePostVerb: "Close Post",
                "1Like": "{0} likes this.",
                InsufficientPermissions:
                  "You don't have permission to do this.",
                RechatTo: "To:",
                ClosedConversationMessagePoll: "This poll is closed.",
                CommentLikersDialogTitle: "Liked By",
                IncludedInFeed: "In Feed",
                FeedElementUnflaggedConfirmation: "Flag was removed.",
                MyDrafts: "My Drafts",
                ViewOriginalPost: "View Original Post",
                today: "Today",
                StreamsListingRecordCellTitle: "Following {0} Records",
                CompanyVerifiedAnswer: "Company Verified",
                NoStreamsYetTitle: "You don't have any streams yet.",
                FeedPostOpenQuestionVerb: "Open Question",
                DraftPublishedConfirmation: "Draft was published.",
                unavailableFilesMessage:
                  "{0} of the attached files are no longer available",
                StreamCreatedToast: 'Stream "{0}" was created.',
                ErrorMissingInlineImage: "Image is not available",
                FeedPostPinVerb: "Pin",
                InlineImageMaxErrorTitle: "Unable to Insert Image",
                Ok: "Ok",
                ShowOneReply: "1 reply",
                ExternalGroupPostWarning: "Sharing with customers",
              },
              DetailTabs: { detail: "Details" },
              Forecasting_Tab: {
                pencil_alt: "Adjust",
                dropdown_TerritoryOpptyQuantity:
                  "Opportunity Quantity by Territory",
                dropdown_TerritoryOpportunityRevenue:
                  "Opportunity Revenue by Territory",
                adjustment_note: "Adjustment Note",
                dropdown_OpportunityOverlayRevenue: "Overlay Splits",
                owners_subordinates: "{0}'s Subordinates",
                save_success: "Your changes are saved.",
                dropdown_PfQuantityByProductDate:
                  "Product Family Quantity by Product Date",
                dropdown_OpptyRevenue: "Opportunity Revenue",
                all_product_families: "All Product Families",
                dropdown_TerritoryLineItemRevenue:
                  "Product Family Revenue by Territory",
                dropdown_OpptyRevenueByProductDate:
                  "Opportunity Revenue by Product Date",
                dropdown_TerritoryPfRevenueByScheduleDate:
                  "Product Family Revenue by Territory and Schedule Date",
                dropdown_OpportunitySplitRevenue: "Revenue Splits",
                dropdown_PfRevenueByProductDate:
                  "Product Family Revenue by Product Date",
                all_categories: "All Forecast Categories",
                user_and_subordinates: "{0} and Subordinates",
                dropdown_PfQuantityByScheduleDate:
                  "Product Family Quantity by Schedule Date",
                products_not_categorized: "Products Not Categorized",
                dropdown_OpptyQuantity: "Opportunity Quantity",
                before_adjustment: "Without Adjustments",
                forecasting_quota: "Quota",
                dropdown_territoryOpptyRevenueByScheduleDate:
                  "Opportunity Revenue by Territory and Schedule Date",
                dropdown_OpportunityLineItemQuantity: "Product Family Quantity",
                dropdown_PfRevenueByScheduleDate:
                  "Product Family Revenue by Schedule Date",
                dropdown_OpptyQuantityByScheduleDate:
                  "Opportunity Quantity by Schedule Date",
                adjustment_note_description:
                  "Adjustment note with max length of 255 characters",
                dropdown_OpptyQuantityByProductDate:
                  "Opportunity Quantity by Product Date",
                dropdown_OpportunityLineItemRevenue: "Product Family Revenue",
                dropdown_TerritoryPfQuantity:
                  "Product Family Quantity by Territory",
                dropdown_TerritoryOpptyQuantityByScheduleDate:
                  "Opportunity Quantity by Territory and Schedule Date",
                dropdown_OpptyRevenueByScheduleDate:
                  "Opportunity Revenue by Schedule Date",
                dropdown_TerritoryPfQuantityByScheduleDate:
                  "Product Family Quantity by Territory and Schedule Date",
              },
              DuplicateListErrors: {
                RetrieveObjectApiError:
                  "Error on retrieving entity api information.",
                SomeRecordsFound:
                  "The record you\u2019re about to create looks like a duplicate, but some of the existing records couldn\u2019t be displayed. Contact your Salesforce admin.",
                ZeroRecordsFound:
                  "The record you\u2019re about to create looks like a duplicate, but the existing records couldn\u2019t be displayed. Contact your Salesforce admin.",
              },
              FlexipageEditorToolbar: { Save: "Save" },
              LightningColorPickerPanel: {
                defaultTab: "Default",
                customTab: "Custom",
              },
              PhotoUpload: { titleForUpdateBannerPhoto: "Update Banner Photo" },
              TrendingTopics: { header: "Trending Topics" },
              UtilityBar: {
                popOut: "Pop-out",
                itemPoppedOut: "Utility item is popped out.",
                highlighted: "Highlighted",
              },
              ListViewManagerFooter: { cancel: "Cancel", save: "Save" },
              IncidentManagementSetupConnectedApps: {
                mulesoftTitle: "MuleSoft Composer Templates (Beta)",
                cadalysLink: "a0N3A00000G0sLfUAJ",
                mulesoftDocId: "sf.incident_mgmt_integrations",
                datadogLink: "a0N3u00000QtK48EAF",
                criticalIncientCenterButton: "Go to AppExchange",
                mulesoftDesc:
                  "Keep your agents productive in Service Cloud with synchronized incidents between ServiceNow\u2019s CMDB and Customer Service Incident Management. And with the MuleSoft Composer Jira Template, help engineers align their Jira epics, stories, and tasks with Customer Service Incident Management to efficiently resolve incidents. To get started, learn more about MuleSoft Composer, then reach out to your account executive.",
                dashboardDesc:
                  "Quickly glean how your company addresses and resolves incidents with Customer Service Incident Management reports and dashboard.",
                helpDocLinkType: "helpDocLinks",
                criticalIncientCenterLink: "a0N4V00000JdwSGUAZ",
                pagerDutyTitle: "PagerDuty",
                cadalysTitle: "Cadalys Service Management",
                slackLink: "/lightning/setup/CaseSwarming/home",
                pagerDutyButton: "Go to AppExchange",
                datadogButton: "Go to AppExchange",
                slackButton: "Go to Slack Setup",
                cadalysDesc:
                  "Cadalys Service Management offers ITIL workflows and automations for customers to take advantage of Incident, Problem, Change Request, Service Request, and CMDB best practices, right from Salesforce.",
                slackType: "slack",
                dashboardLink: "a0N4V00000GyOkUUAV",
                datadogDesc:
                  "Datadog for Service Cloud helps engineering teams and service teams get ahead of issues before customers report them. Agents and engineers can partner to resolve incidents with Datadog event monitoring for engineers and corresponding incident creation in Salesforce for agents.",
                mulesoftButton: "Learn More in Help",
                criticalIncientCenterDesc:
                  "Manage incidents with Salesforce\u2019s Critical Incident Center best practices. Use their custom page layouts, fields, and Lightning components to manage your incident response.",
                slackDesc:
                  "Use Slack as a collaboration tool to swarm on incidents.",
                dashboardTitle:
                  "Customer Service Incident Management Dashboard",
                pagerDutyLink: "a0N3A00000FK9u7UAD",
                dashboardButton: "Go to AppExchange",
                pagerDutyDesc:
                  "PagerDuty for Service Cloud breaks down silos with a single source of truth for engineering and service teams. Agents and engineers can partner to resolve incidents with PagerDuty alerts for engineers and easy incident monitoring in Salesforce.",
                slackTitle: "Service Cloud for Slack App",
                cadalysButton: "Go to AppExchange",
                datadogTitle: "Datadog",
                criticalIncientCenterTitle:
                  "Salesforce Critical Incident Center",
                appExchangeType: "appexchange",
              },
              LightningModalBase: {
                waitstate: "Processing",
                cancelandclose: "Cancel and close",
              },
              LightningComponentsErrors: {
                ComponentErrorLineField: "Line",
                ComponentErrorComponentDescriptorField: "Component Descriptor",
                ComponentErrorTitle: "A Component Error has occurred!",
                ComponentErrorFunctionField: "Function",
                ComponentErrorStackTraceButton: "Stack Trace",
                ComponentErrorFileNameField: "File Name",
                ComponentErrorMessageField: "Message",
                ComponentErrorColumnField: "Column",
              },
              EmailTemplateInsertConfirmDialog: {
                Message:
                  "Inserting this template will overwrite the current email.",
              },
              StandardFeedLabel: { FeedHeader: "Feed" },
              ListFileUpload: {
                AllowedFilesMessage:
                  "That file type isn't supported here. Upload a {0} file instead.",
                NoExtensionError:
                  "The file doesn't have an extension. Upload a file with a {0} extension.",
                Uploading: "Uploading...",
              },
              SessionTimeoutWarn: {
                timeoutTextPortal:
                  "For security, we suspend your session if you're inactive too long. If you don't click Continue Working within approximately 30 seconds, we log you out.",
                browserNotificationBody:
                  "Still there? We're about to log you out...",
                logoutButtonLabel: "Log Out",
                title: "Still there?",
                browserNotificationTitle: "Salesforce",
              },
              ActionBar: {
                ShowMore: "Show More",
                Close: "Close",
                ShowActions: "Show Actions",
              },
              EmailSalesforceFileWarningDialog: {
                Title: "Attach files and send?",
              },
              PaymentMethodType: {
                MASTER: "Master Card",
                AMERICANEXPRESS: "American Express",
                ACH: "ACH",
                AFTERPAYCLEARPAY: "Afterpay / Clearpay",
                JCB: "Jcb",
                VISA: "Visa",
                EPS: "Eps",
                KLARNA: "Klarna",
                BECS: "Becs",
                OTHER: "Other",
                MAESTRO: "Maestro",
                BACS: "Bacs",
                IDEAL: "iDEAL",
                PAYPAL: "Paypal",
                GOOGLEPAY: "Google Pay",
                SEPADEBIT: "SEPA Debit",
                APPLEPAY: "Apple Pay",
                BANCONTACT: "Bancontact",
                VENMO: "Venmo",
                DINERSCLUB: "Diners Club",
              },
              SidePanel: { DefaultPanelTitle: "Guidance Center" },
              TopicPage: { TalkingAboutLabel: "{0} discussing" },
              UnscheduledDisbursement: {
                StepOne: "Specify Disbursement Details.",
                Cancel: "Cancel",
                Next: "Next",
                Previous: "Previous",
                Save: "Save",
                StepTwo: "Select Recipients.",
              },
              MyList: {
                ActionError:
                  "Something went wrong performing the action you requested. Please try refreshing the page.",
                CallActionError:
                  "This record does not have an associated phone number.",
              },
              ListViewManager: {
                unsearchableField3:
                  "{0}, {1}, and {2} aren't searchable. Use filters or sort on these fields instead.",
                longLoading2_generic:
                  "Hang tight. We're still loading your data.",
                longLoading2_pinnedList:
                  "Looks like this is taking a while. Try checking your recently viewed list instead.",
                Loading: "Loading...",
                searchList: "Search this list...",
                unsearchableField1:
                  "{0} isn't searchable. Use filters or sort on this field instead.",
                longLoading2_pinnedListGo: "Take Me There",
                unsearchableField2:
                  "{0} and {1} aren't searchable. Use filters or sort on these fields instead.",
                longLoading1: "Loading...",
                longLoading2_list:
                  "Hang tight or select a different list view.",
                searchListAriaLabel: "Search {0} list view.",
              },
              LightningConsoleTabs: {
                subtabsFor: "{0} for {1}",
                dirtyState: "Unsaved Changes",
                primaryList: "primary",
                subtab: "Subtab",
                assistiveText: "{0} in tab: {1}",
                error: "Error",
                subtabs: "Subtabs",
                dndKeyboardInstructions: "Press Spacebar to reorder.",
                activeSubtabAnnouncement: "{0} subtab opened",
                activeWorkspaceAnnouncement: "{0} workspace tab opened",
                customizeForTab: "Customize Tab {0}",
                workspaceTab: "Workspace tab",
                customizeSuccess: 'Tab "{0}" has been customized.',
                pinTab: "Pin Tab",
                warning: "Warning",
                dndKeyboardStarted:
                  "{0}, grabbed. Current position in {1} list: {2} of {3}. Press up and down arrow keys to change position, Spacebar to drop, Escape key to cancel.",
                closeTab: "Close Tab",
                info: "Info",
                addtionalTabHighlighted: "An additional tab is highlighted",
                actionsFor: "Actions for {0}",
                dndKeyboardEnded:
                  "{0}, dropped. Final position in {1} list: {2} of {3}.",
                assistiveTextWithLevel: "{0}: {1} in tab: {2}",
                customizeTab: "Customize Tab",
                dndKeyboardCancelled: "{0}, canceled.",
                unpinTab: "Unpin Tab",
                refreshTab: "Refresh Tab",
                backgroundWorkspaceAnnouncement:
                  "{0} workspace tab opened in background",
                workspaceTabs: "Workspace tabs",
                promoteTab: "Set As Workspace Tab",
                pinnedList: "pinned",
                success: "Success",
                workspaceTabsFor: "{0} for {1}",
                backgroundSubtabAnnouncement: "{0} subtab opened in background",
                showMoreTabs: "Show additional tabs",
                newActivity: "New Activity",
                dndKeyboardMoved:
                  "{0}. Current position in {1} list: {2} of {3}.",
                actions: "Actions",
                closeForTab: "Close {0}",
              },
              FileSearchPanel: {
                NoImagesYet:
                  "You don't have any images here. Try a different filter, or upload an image.",
              },
              SaveDraftErrors: {
                ActionDisabledAssistiveText: "Action Disabled",
                DraftsDisabledDueToIssue:
                  "Offline Edit has been disabled due to an issue with your device. Contact Support for help.",
                Generic:
                  "There was an error saving your pending change. Please try again or contact Salesforce for help.",
                PendingSync:
                  "Offline records can't be edited while your device is syncing to Salesforce.",
                DeleteEditDraft:
                  "You can't delete this record while create or edit is pending.",
                DeleteIrreconcilableDraft:
                  "You can't delete this record while an unresolvable error is present.",
                NoDraftLookupToDraftId:
                  "You can't save this record with a reference to a record created offline.",
                DifferentActionThanDraft:
                  "You've already edited this record using a different action. To save this record, make the changes again with the first action.",
                EditDeleteDraft:
                  "You can't edit this record while deletion is pending.",
              },
              InlineEditPanelBody: {
                inlineEditUpdateSelectedMessage: "Update {0} selected items",
              },
              ImportContact: {
                ImportButton: "Import from Device",
                AddressBookAccessDenied:
                  "Access to your device's contact list is turned off. To allow Salesforce for iOS to access your contact list, go to iOS Settings > Privacy > Contacts.",
                AddressBookAccessRestricted:
                  "Unfortunately, your organization blocks access to the contact list on your device. Ask your Salesforce administrator for help.",
              },
              LightningControl: {
                inactiveCapitalized: "Inactive",
                clear: "Clear",
                loading: "Loading",
                activeCapitalized: "Active",
                required: "required",
              },
              TodoListTaskField: {
                assignedLabelsAriaLabel:
                  "List of assigned labels for the task.",
                whoCountMessagePlural: "+ {0} others",
                whoCountMessageSingular: "+ {0} other",
              },
              Icons: { List: "List" },
              PipelineInspectionPriorityRecord: {
                ToggleOn: "Mark Important: {0}",
              },
              ObjectManager: { topLevelBreadcrumb: "Object Manager" },
              WorkItemActions: {
                FlowOrchestrationWorkItemReassign:
                  "Reassign Orchestration Work Item",
              },
              SyncDraftsMessages: {
                SyncErrorMessage: "Pending changes require your attention.",
                SuccessMultipleDeletes: "{0} records were deleted.",
                SuccessMultipleSaves: "{0} records were saved.",
              },
              TodoListTaskStar: {
                starred: "Starred",
                unstarred: "Not starred",
              },
              UnifiedFileList: { SalesforceFiles: "Salesforce Files" },
              ProjectOne_TaskList: {
                TaskDeletedErrorMessage:
                  "You can\u2019t save this task because someone deleted it.",
                RecurringTask: "Recurring Task",
                InactiveOwnerOrUser: "The owner or user is inactive.",
                HighPriority: "High-Priority task",
                InsufficientPermissions:
                  "You no longer have permission to view this task.",
                EditCollision:
                  "Someone has just updated this task. Refresh the page to see the updates, then try making your change again.",
                TaskUpdateError: "There was a problem updating this task.",
                NoEditAccessToOneTask:
                  "You don\u2019t have permission to change this task.",
                TaskReminder: "Task Reminder",
                InvalidCrossReferenceKey:
                  "An invalid foreign key cannot be set on a field.",
                emailMessageInActivityHistoryEdit:
                  "Email messages in Activity History aren't available for editing.",
                NoCRUDAccessError:
                  "You no longer have permission to change tasks.",
              },
              inMailAction: { modal_title: "Sales Navigator InMail" },
              EmailComposerHeaders: {
                EmailSent: "Email was sent.",
                CadenceModalApply: "Select",
                CadenceModalCancel: "Cancel",
                ExternalEmailSentOutlook: "Email was sent with Outlook server.",
                DoNotEnroll: "Don\u2019t add to a cadence",
                VisualPickerLearnMore: "Learn more about cadences.",
                VisualPickerEmailLegend:
                  "Select a cadence. After you send the email, we'll add the recipient to the cadence, mark the first step complete, and start the second cadence step.",
                CadenceDescription: "Created By: {0}, Last Used: {1}",
                GeneratedEmailCheckbox: "I reviewed the generated email.",
                MatchingCadencesModalHeader: "Recommended Cadences",
                SendEmailOptionsButton: "Send Options",
                ExternalEmailSentGmail: "Email was sent with Gmail server.",
                VisualPickerCallLegend:
                  "Select a cadence. After you log the call, we'll add the recipient to the cadence, mark the first step complete, and start the second cadence step.",
                SendEmailButton: "Send",
                EmailScheduled: "Email was scheduled.",
                RelatedToTooltip:
                  "To use email templates and merge fields associated with a record, select that record here. Your email won't be related to the record that you select. You connected your email to Salesforce with Einstein Activity Capture which automatically determines which records are related to your emails and adds your emails to those records.",
                SendEmailLaterButton: "Send Later",
                End: "End",
                None: "None",
                RelatedTo: "Related To",
                NextStep: "Next Cadence Step: <strong>{0}</strong>",
              },
              Page_View_Converted_Lead: {
                noAccessToLeadAndContact:
                  "You don't have access to this record. For help, talk to your administrator.",
              },
              ProjectOne_Task_Actions: {
                StatusLegend: "Select a Status",
                SelectTaskStatus: "Choose Status",
              },
              ForecastingItemCategories: { OPEN_PIPELINE: "Open Pipeline" },
              UserNavItems: {
                CMNdisabledForAlohaApps:
                  "Ask your admin to upgrade this app to Lightning Experience so you can personalize it",
              },
              LWRSiteSearch: {
                ReadLessText: "Show Less",
                ReadMoreText: "Show More",
              },
              RelatedList: { Empty: "There are no records in this list." },
              Buttons: {
                cancel: "Cancel",
                new: "New",
                apply: "Apply",
                edit: "Edit",
                save: "Save",
                save_and_new: "Save & New",
                update: "Update",
                delete: "Delete",
                done: "Done",
                remove: "Remove",
                closeWindow: "Close this window",
                ins: "Insert",
                switch: "Switch",
                continue: "Continue",
                new_custom_object: "New Custom Object",
                ok: "OK",
                close: "Close",
              },
              ContentHubFileDetailPage: {
                openInTargetTooltip:
                  "Open this file directly in the external data source",
              },
              ModernRptPage: { untitled: "Untitled" },
              LightningSearchUI: {
                ExpandList: "Expand List",
                LookupValueClearAssistiveText:
                  "To remove the selected record, press Backspace or Del.",
                MRURecentRecords: "Recent Items",
                MRUSearchForInObject: '"{0}" in {1}',
                ApplyFilter: "Apply filter",
                PreScopingAllHeader: "All Searchable Items",
                FilterLoadingError:
                  "Couldn't load search filters. Try again later.",
                TopResultsNoResultsMessage:
                  'We searched the objects you use most and didn\'t find any matches for "{0}". ',
                SearchResults: "Search Results",
                ExternalResults: "External Results",
                ResultsFiltersLoading: "Loading...",
                MRUObjectRecent: "Recent {0}",
                LastModified: "Last Modified",
                PreScopingLabelText: "Search by object type",
                LookupEditInvalidOptionMessage:
                  "Select an option from the picklist or remove the search term.",
                SearchResultsBrowserTitle: "Search Results",
                PicklistChooseOption: "Choose...",
                NoResultsTip:
                  "You may find what you're looking for under Search Results or Show More.",
                ActionSearchFor: '"{0}"',
                SearchResultsBrowserTitleWithTerm: "{0} - Search",
                GlobalSearchTooltip: "Search...",
                ScopedSearchTooltip: "Search {0} and more",
                ResultsFeedbackNo: "No",
                TopResultsNoResultsTip:
                  "Know which object you're looking for? Select it in the dropdown next to the search box, or in the sidebar.",
                SearchResultsByObject: "Search Results by Object",
                ViewMore: "View More",
                FilteredBySingle: "Filtered by 1 filter",
                ScopeRibbonTopResultsItem: "Top Results",
                LastPublished: "Last Published",
                InputClear: "Clear",
                SingleEntityLookupPlaceholder: "Search <Entity>...",
                PreScopingNoResults: "Enter a valid term and try again",
                SortedByField: "Sorted by {0}",
                ShowMoreSearchableObjectsForAccessibility:
                  "Show more searchable objects",
                ScopedResults: "{0} Results",
                SingleEntityLookupTooltip: "Search <Entity>",
                ScopeOverflowEmpty: "No other objects",
                ESAriaLabel: "Search",
                ShowMore: "Show More",
                ScopeRibbonMoreObjects: "More objects",
                AdvancedSearch: "Advanced Search",
                RefineBy: "Refine By",
                FilteredSearchTooltip: "Search {0}",
                SingleFilter: "1 Filter",
                ViewMoreTooltip: "View more {0} search results",
                ManyFilters: "{0} Filters",
                ClearAll: "Clear All",
                RemoveAdvancedFilters: "Remove {0} Filters",
                LookupSelectedRecordAriaLabel: "{0} - Current Selection: {1}",
                ActionFilteredSearch: "Limit search to {0}",
                RecommendedBestResult: "Recommended Result",
                DirectionDescending: "Descending",
                ResultsFeedbackPrompt: "Did you find these results useful?",
                TopResultsDoNotGiveUpTitle: "Don't give up yet!",
                SortBy: "Sort by",
                SearchPrefixLabel: "Search: <Entities>",
                ScopedSearchPlaceholder: "Search {0} and more...",
                GlobalSearchPlaceholder: "Search...",
                NoFilteredResultsTitle:
                  'We couldn\u2019t find results for "{0}" in {1} with your filters',
                GlobalSearchLoading: "Loading...",
                FilteredSearchPlaceholder: "Search...",
                LookupEntitySelectorAriaLabel:
                  "{0}\u2014Current Selection: <Entity>",
                ScopeRibbonMoreItem: "More",
                TopResultsSearchMoreScopeSearchHint:
                  "Know which object you\u2019re looking for? Select it in the dropdown next to the search box, or in the sidebar.",
                TopResultsSearchMoreTitle: "Don\u2019t see your result?",
                SetupSearchPlaceholder: "Search Setup",
                PreScopingAll: "All",
                DirectionAscending: "Ascending",
                ActionSearchForInScope: '"{0}" in {1}',
                PreScopingFilterHeader: "Suggested For You",
                ShowLessSearchableObjectsForAccessibility:
                  "Show less searchable objects",
                AutocompleteNoQuickResults:
                  "No quick results. Type at least 2 characters and press ENTER to search",
                assistantAdvancedFilterButtonAssistiveText:
                  "View and apply filters",
                ShowLess: "Show Less",
                ResultsFeedbackConfirmationNo:
                  "Thanks for letting us know. We'll keep working to make this feature smarter.",
                Filter: "Filter",
                CollapseList: "Collapse List",
                FilteredByMany: "Filtered by {0} filters",
                TopResultsSearchMoreNotEverythingWasSearchedHint:
                  "We searched the objects you use most, but we didn\u2019t search everything.",
                NoFilteredResultsMessage:
                  "Try clearing filters to see results.",
                FilteredByFields: "Filtered by {0}",
                SortedBy: "Sorted by",
                ResultsFeedbackYes: "Yes",
                ResultsFeedbackConfirmationYes:
                  "Excellent! This feature is getting smarter because of you.",
              },
              Density: { sectionHeader: "Display Density" },
              LightningRichTextAssist: { composeText: "Compose text" },
              ProgramMgmtEntityValidations: {
                ProgramEnrollmentInvalidDateValidation:
                  "Select either the application date or start date.",
                ProgramEnrollmentPastDateValidation:
                  "Select a date that\u2019s on or after the current date.",
                ProgramEnrollmentApplicationDateValidation:
                  "Select a date that\u2019s on or after the application date.",
                ProgramEnrollmentStartDateValidation:
                  "Select a date that\u2019s on or after the start date. ",
              },
              SalesEinsteinScoringBuckets: {
                NegativeChangeAlertAltText: "Negative Change",
                BucketTextHigh: "High",
                BucketTextMedium: "Med",
                BucketTextLow: "Low",
                PositiveChangeAlertAltText: "Positive Change",
              },
              FilePreview: {
                ofX: "of {0}",
                previousPage: "Previous Page",
                OpenLink: "Open Link",
                nextPage: "Next Page",
                OpenIn: "Open in {0}",
                Page: "Page",
                fullScreen: "Full Screen",
                PageXofY: "Page {0} of {1}",
                OpenAlt: "Open",
                NextFile: "Next file",
                Loading: "Loading preview...",
                exitFullScreen: "Exit Full Screen",
                ShowMore: "Show More",
                Generating: "We're getting your preview ready...",
                Close: "Close",
                FileNotAvailable: "This file isn't available anymore.",
                PreviewNotAvailable: "No preview available",
                GeneratingSubHeaderText:
                  "This might take a while, so feel free to carry on with your day and check back in a bit.",
                OpenNote: "Open Note",
                PreviousFile: "Previous file",
              },
              LEXCelebrations: { altText: "It's a celebration!" },
              Content_SearchContentFormat: { snote: "Note" },
              ChangeTargetAssignee: {
                ChangeTargetAssigneeName: "Change Target Assignee",
                ChangeTargetAssigneeOption3: "Another Sales Engagement user",
                ChangeTargetAssigneeOption1: "Record owner",
                ChangeTargetAssigneeOption2: "Me",
              },
              DynamicFormsFieldVisibility: {
                FieldsAdded:
                  "The following fields were <strong>added</strong> to the record",
                FieldsRemoved:
                  "The following fields were <strong>removed</strong> from the record",
                FieldsAddedScreenReader:
                  "The following fields were added to the record: {0}.",
                FieldsRemovedScreenReader:
                  "The following fields were removed from the record: {0}.",
                FieldsChangedHeader: "A change has occurred",
              },
              TopicsFeed: { new: "Press ENTER to add" },
              LightningTabs: {
                errorStateAlternativeText: "This item has an error",
                overflowMoreTitle: "More Tabs",
                overflowMoreAlternativeText: "Tabs",
                overflowMore: "More",
              },
              InfiniteLoading: {
                noDataLabel: "No more data to display",
                loadingLabel: "Loading more...",
              },
              LightningFormattedEmail: { emailIconLabel: "Email" },
              ChatterFilesTabPage: {
                connectedSources: "Connected Sources",
                upload: "Upload",
                fileNoLongerAvailable: "The file is no longer available.",
                title: "Files",
              },
              SFX_OwnerChangeCmp: {
                massownerchange_description_singular:
                  "You've selected {0} record.",
                massownerchange_description: "You've selected {0} records.",
                nonEditableOptionsDesc_you: "you",
                nonEditableOptionsDesc_You: "You",
                transfer_title: "Change Owner",
                search_owner_placeholder: "Search owners...",
                nonEditableOptionsDesc_defaultNewOwnerName: "The new owner",
                nonEditableOptionsDesc:
                  "{0} will also become the owner of these records related to {1} that are owned by {2}.",
                ownerchange_successfulTransferLoseAccess:
                  "User {1} now owns the {0} record. Because you lost access, we closed the record tab.",
                nonEditableOptionsDesc_defaultCurrentOwnerName:
                  "the current record owner",
                ownerchange_successfulTransfer:
                  "{1} now owns the record for {0}.",
              },
              GoogleStaticMapLabels: {
                MapFrame: "{0} map area",
                MapDefaultFrame: "Map area",
                LoadingMessage: "Loading Map...",
              },
              GlobalActionsMenu: { GlobalActions: "Global Actions" },
              Offline: {
                NoConnectionCSRFProblemTitle:
                  "$Label.Offline.NoConnectionCSRFProblemTitle does not exist.",
                NoConnectionDescription:
                  "Check your Internet connection and try again.",
                Retry: "Try Again",
                NoConnectionTitle: "No Network Connection",
                NoConnectionToast: "You're currently offline.",
              },
              mailapp_association_message: {
                email_server_unavailable:
                  "Hmm. The email server is unavailable. Try again later. {0} ",
                exchange_connect_failure:
                  "Something happened when we tried to connect to the Exchange server. {0}",
                exchange_connect_failure_details_link: "View more details.",
              },
              PocketGuide: { InAppHelp: "In-App Help" },
              RenderEnhancedTemplateApiErrors: {
                SystemError: "An unexpected error occurred. Try again.",
              },
              ContactLeadInspectorErrors: {
                SendEmailNotConfigured:
                  "Global Action for Send Email is not configured.",
              },
              ForecastingLightning_Error: {
                Adjustment_Error_Dialog_Title: "Something went wrong",
                Salesforce_Article_Forecast_Charts_Link:
                  "Get to Know Forecast Charts",
                Current_Chart_HT_Not_Enabled_Descr:
                  "To see how the forecast has changed in this period, ask your Salesforce Admin to turn on Historical Trending for the ForecastingItem. Then, check back here.",
                Adjustment_Error_Dialog_Text_Save:
                  "We can't save this record right now. Please refresh the page and try again.",
                Adjustment_Error_Input_Text_Max:
                  "Enter a number with fewer than 17 digits.",
                Historical_Chart_HT_Not_Enabled_Descr:
                  "To see how the forecast compares to the same time in previous forecast periods, ask your Salesforce Admin to enable Historical Trending for the ForecastingItem. Then, check back here.",
                Adjustment_Error_Input_Text: "Must be a number",
                Adjustment_Error_Holdout_Text_Save:
                  "You can't adjust this forecast because the opportunity owner isn't assigned to the territory.",
                Chart_HT_Not_Enabled_Title:
                  "A picture is worth a thousand... spreadsheets!",
                Adjustment_Error_Dialog_Text_Delete:
                  "We can't delete this record right now. Please refresh the page and try again.",
                Adjustment_Error_Dialog_Button: "Got It",
              },
              ApprovalProcessActions: { highlightName: "{0} Approval" },
              EmailGoogleOAuthConfirm: {
                NoThankYouButton: "No, Send through Salesforce",
                Message:
                  "Start here to connect your Gmail account to Salesforce so you can send email through that account for better deliverability and open rates. You can also see the emails you\u2019ve sent in your Gmail account\u2019s Sent Mail folder.",
                Title: "Do you want to send emails through your Gmail account?",
                ConnectToButton: "Yes, Connect Gmail",
              },
              udd_FeedItem: { Entity: "Feed Item" },
              IncidentManagementSetup: {
                integrationTabCollaborateSectionHeader: "Collaborate",
                integrationTabOptimizeSectionHeader: "Optimize and Report",
                integrationTabAutomateSectionHeader: "Automate",
                integrationTabMonitorSectionHeader: "Monitor",
              },
              ActivityTimelineMetrics: {
                LastActivityDateTime: "Last Activity",
                ActivityMetricsTitle: "Activity Metrics",
                MetricErrorBannerClose: "Close",
                FirstEmailDateTime: "First Email",
                LastTaskDateTime: "Last Task",
                LastEventDateTime: "Last Event",
                LastCallDateTime: "Last Call",
                Title: "Title",
                Error: "Failed to load top 3 contacts",
                TotalActivities7Days: "Last 7 days Activities",
                MetricContactCardEmptyBody:
                  "When there\u2019s activity with this account\u2019s contacts, we show you who\u2019s\n            most engaged.\n        ",
                MetricContactCardEmptyHeading: "Start engaging",
                NoMetricsHeading: "No metrics to report",
                Unavailable: "Unavailable",
                MetricContactCardTitle: "Most Engaged Contacts",
                MetricErrorBannerError: "Error",
                LastEmailDateTime: "Last Email",
                NoMetricsBody:
                  "As you start engaging, watch this space for helpful activity metrics.",
                MetricErrorBannerMsg: "Error in retrieving metrics.",
                NextActivityDateTime: "Next Activity",
                FirstCallDateTime: "First Call",
                InactiveDays: "Inactive Days",
                TotalActivities30Days: "Last 30 Days",
                TotalActivitiesDay: "Today's Activities",
              },
              IdentityDialog: {
                Title: "Switch to User {0}",
                Confirmation: "I don't need to see this message again.",
                Body: "User {0} must be logged out in order to login as {1}. Would you like to proceed?",
              },
              OneHeader: {
                AlohaSettings: "Settings",
                Options: "OPTIONS",
                ViewProfile: "View profile",
                SalesforceLogo: "Salesforce",
                Usernames: "USERNAMES",
                SkipToMain: "Skip to Main Content",
                ToggleSidebar: "Toggle SideBar",
                SwitchInfoIconAltText: "Switch information",
                ToggleNotifications: "Notifications",
                AddAccount: "Add Username",
                More: "{0} More Usernames",
                LoadError: "An error occured while retrieving data.",
                QuickFind: "Quick Find",
                Logout: "Log Out",
                Back: "Back",
                SkipToNavigation: "Skip to Navigation",
                SwitchInfo:
                  "Meet the Switcher. Use this link to switch between Salesforce Classic and Lightning Experience whenever you want.",
                SwitchToAloha: "Switch to Salesforce Classic",
                SingleMore: "{0} More Username",
              },
              Favorites: {
                cannotFavoriteTooltip: "This item doesn't support favorites",
                addFavoriteTooltip: "Add favorite",
                addedRenameTemplate: '"{0}" was added to your favorites.  {1}',
                top_favorites_section: "Top Favorites",
                edit: "Edit Favorites",
                dropdown_nofavorites:
                  "You don't have any favorites yet, but you should add some! Favorites are shortcuts to the things you use the most. When you're on a record, dashboard, or something else that you like, just click the Add favorite button.",
                dropdown_noresults: "No favorites found.",
                removeFavoriteTooltip: "Remove favorite",
                my_favorites_section: "My Favorites",
                favoritesModalDone: "Done",
                cannotFavoriteAppTypeTooltip:
                  "You can't add favorites from this app",
                search: "Find Favorite",
                dropdown_nofavorites_title: "No favorites yet",
                favoriteList: "Favorites list",
                editNewFavorite: "Edit",
                dropdown_learnmore_link: "Learn More",
                buttonAltText: "Favorite/unfavorite this item",
                favorited: "This item has been favorited.",
              },
              Help: { Title: "Salesforce Help" },
              udd_ActionCadenceStepTracker: {
                StepType: "Cadence Step Type",
                State: "State",
                DueDateTime: "Due Date Time",
              },
              sfdcSwitchToText: { sfdcSwitchToTextAlt: "Use plain text" },
              ListviewLogic: {
                ErrorMaxSelectionExceeded:
                  "You can select only {0} records at a time.",
              },
              UserBadgeType: { c: "Customer" },
              LightningDateTimePicker: {
                nextMonth: "Next Month",
                yearSelector: "Pick a Year",
                minAndMaxRangeMessage: "Select a date between {0} and {1}",
                minRangeMessage: "Select a date after {0}",
                invalidDate:
                  "Your entry does not match the allowed format {0}.",
                maxRangeMessage: "Select a date before {0}",
                dateLabel: "Date",
                ariaLabelMonth: "Date picker: ",
                today: "Today",
                previousMonth: "Previous Month",
                selectDateFor: "Select a date for {0}",
                rangeOverflow: "Value must be {0} or earlier.",
                rangeUnderflow: "Value must be {0} or later.",
                timeLabel: "Time",
              },
              SelfServiceCase: { CaseConfirmationClose: "Close" },
              MobileWebNav: { LoadingText: "Sfdclogo" },
              EmailBounce: {
                Bounced:
                  "Email bounced. Update the email address and try again.",
              },
              MassEmailComposer: { RecentMRU: "Recently Viewed" },
              SearchDiscoveryInsights: {
                NoConceptualQueryResultsMessage:
                  '\n        We interpreted your search as a natural language search, and we didn\u2019t find any results. But you can try a keyword search to find what you\u2019re looking for.\n        <br><br>Natural language searches are different from regular keyword searches. For example, a natural language search for "my open opportunities" finds opportunities that are owned by you, but a keyword search finds records that contain the words "my open opportunities"\n        ',
              },
              TodoListTaskList: { spinnerText: "Loading" },
              Page_User: { LightningLogin: "Lightning Login" },
              ChatterFileFeeds: {
                ViewFile: "View File",
                ViewFileOf: "View file {0}",
              },
              page_voiceui: { called_record: "Called {0}" },
              LightningErrorMessage: {
                validityStepMismatch: "Your entry isn't a valid increment.",
                validityBadInput: "Enter a valid value.",
                validityRangeOverflow: "The number is too high.",
                validityTooLong: "Your entry is too long.",
                validityTypeMismatch: "You have entered an invalid format.",
                validityRangeUnderflow: "The number is too low.",
                validityTooShort: "Your entry is too short.",
                validitySelectAtleastOne:
                  "You must select at least one choice from this set.",
                validityValueMissing: "Complete this field.",
                validityPatternMismatch:
                  "Your entry does not match the allowed pattern.",
              },
              FormLegend: { RequiredFields: "= Required Information" },
              PublisherAutoComplete: {
                limitSlash: "You reached the {0} record limit for this post.",
                groupCannotReadPlural:
                  "This post is visible to any members of {0} and {1} who are also members of this group.",
                limitMention:
                  "You can only mention up to {0} people or groups at a time.",
                slashHelperMessage:
                  "To link to a record, enter / then start typing the record name.",
                groupCannotReadSingular:
                  "This post is visible to any members of {0} who are also members of this group.",
                typeSomethingHashTag:
                  "Type a topic name and press ENTER to add it.",
                allCannotReadNoEntitySingular:
                  "{0} doesn't have access and won't see this update.",
                allCannotReadNoEntityPlural:
                  "{0} and {1} don't have access and won't see this update.",
              },
              ListViewManagerGrid: {
                inlineEditLeaveMessage_Title: "Editing item(s) in {0}",
                inlineEditErrorsSummary: "Can't save records with errors.",
                inlineEditErrorsMessage:
                  "Item {0} has errors in these fields: {1}.",
                inlineEditEditLimit:
                  "You've edited 200 records in your list view, which is the maximum. Save your list view, and then continue.",
                inlineEditTriggerEdit: "Edit {0}: Item {1}",
                listPinned: "{0} was pinned.",
                inlineEditErrorsGenericError: "Item {0} has errors.",
                inlineEditErrorsFieldsNotDisplayedOnList:
                  "These fields have invalid values: {0}. Open the full item to fix them.",
                inlineEditWouldExceedEditLimit:
                  "You can edit only up to 200 items. To update the selected items, save your edits first.",
                inlineEditSaveSuccess: "Your changes are saved.",
                resetColumnWidths: "Reset Column Widths",
                inlineEditLeaveMessage_Confirmation:
                  "Are you sure you want to discard these changes?",
                action: "Action",
                inlineEditTriggerLock: "Locked {0}: Item {1}",
                inlineEditTriggerError: "Edit {0}: Item {1} Error",
                inlineEditLeaveMessage_Title_NoListName: "Editing items",
                inlineEditErrorsPageErrors: "Item {0} has errors. {1}",
                inlineEditButton: "Edit List",
                pinnedListAltText: "This list is pinned",
                selectOneItem: "Select 1 item",
                selectItem: "Select item {0}",
                inlineEditLeaveMessage_StayButton: "Stay on this List",
                columnWidthResetStatus: "Column widths were reset",
                inlineEditLeaveMessage_LeaveButton: "Discard Changes",
                selectNItems: "Select {0} items",
                inlineEditLeaveMessage_Body: "You have unsaved changes.",
                unpinnedListAltText: "Pin this list view.",
                pinnedList: "To unpin, pin another list view",
                inlineEditTriggerEdited: "Edit {0}: Item {1} Edited",
                unpinnedList: "Pin this list view",
                selectFirst200Items: "Select first 200 items",
              },
              EmailExchangeOAuthConfirm: {
                NoThankYouButton: "No, Send through Salesforce",
                Message:
                  "Start here to connect your Office 365 account to Salesforce so you can send email through that account for better deliverability and open rates. You can also see the emails you\u2019ve sent in your Office 365 account\u2019s Sent Items folder.",
                Title:
                  "Do you want to send emails through your Office 365 account?",
                ConnectToButton: "Yes, Connect Office 365",
              },
              SalesEngagementBody: {
                SalesCadenceIcon: "Sales Cadence Icon",
                noCadenceAccessTitle: "Unavailable Cadence",
                errorNoCadenceAccess:
                  "You currently do not have access to view this cadence.",
                stepCompletedLabel: "{0} completed",
                viewStepsLabel: "View Steps",
              },
              FileIconAlt: {
                psd: "Photoshop Document",
                note: "Note",
                gdoc: "Google Document",
                csv: "CSV",
                link: "Link",
                video: "Video file",
                unknown: "Unknown file type",
                gsheet: "Google Spreadsheet",
                exe: "Executable",
                attachment: "Attachment",
                xml: "XML",
                html: "HTML",
                audio: "Audio file",
                zip: "Zip",
                image: "Image file",
                rtf: "Rich Text Format",
                ai: "Illustrator Document",
                eps: "Encapsulated PostScript",
                snote: "Note",
                pack: "Content Pack",
                excel: "Excel spreadsheet",
                mp4: "Video",
                gform: "Google Form",
                txt: "Plain Text",
                folder: "Folder",
                pdf: "Adobe PDF",
                ppt: "Powerpoint",
                slide: "Powerpoint Slide",
                visio: "Visio",
                gpres: "Google Presentation",
                gdocs: "Google Document",
                content_workspace: "Library",
                webex: "WebEx Recording",
                word: "Word document",
                flash: "Flash Movie",
              },
              TaskCardTaskLabelPopover: {
                searchBoxLabel: "Search labels...",
                searchCreateNewLabel: '"<strong>{0}</strong>" (create new)',
                applySelectedLabeMenuItem: "Apply",
                newLabelMenuItem: "New Label",
              },
              ExternalEmailOAuthWarningDialog: {
                Message:
                  "Any unsaved work will be lost. Are you sure you want to continue?",
                CancelButton: "Cancel",
                Title: "Warning",
                AcceptButton: "Continue",
              },
              Forecasting_Prediction: {
                einstein_prediction: "Einstein Prediction",
              },
              DefaultWorkflowTemplates: {
                ApprovalRequest_subj: "Approval Request",
              },
              WorkCalibration: { ErrorTitle: "Error" },
              NoteRelations: {
                NMoreRelations: "{0} more",
                Relate: "Add to Records",
                CurrentRecord: "Current Record",
              },
              LightningMessageChannel: {
                invalidScope:
                  "Lightning Message Service - Cannot subscribe to channel {0} with invalid scope: {1}",
                publishWithoutContext:
                  "Lightning Message Service - Your component must be rendered before you can publish to channel: {0}",
              },
              Page_PicklistTranslation: {
                CaseContactRole: "Case Contact Role",
              },
              ForceRecord: {
                RecordDataCannotUseEntity:
                  "This entity is not currently supported by force:recordData.",
                dependentViewAllForField: "View all dependencies for {0}",
                invalidRecordLibraryUse:
                  "This application contains a reference to the force:record component, which is not supported by this application.",
                dependentViewAll: "View all dependencies",
                dependentEditModal: "Edit Dependencies",
              },
              sales_email_assistant: {
                noMultipleRecipientRecordMatchError:
                  "We can't find these email addresses. Einstein writes drafts only for your contacts and leads. Enter a different recipient and try again.",
                noRecipientRecordMatchError:
                  "We can't find {0}. Einstein writes drafts only for your contacts and leads. Enter a different recipient and try again.",
                genericErrorMessage: "Hmm, that didn't work. Try again.",
                noRecipientError:
                  "Enter a recipient in the To field and try again.",
                hourlyLimitReachedMessage:
                  "Your company reached the hourly limit for generating email drafts. Try again later. It can take up to an hour before the limit resets.",
                promptLoadingError: "Hmm, that didn't work. Try again.",
              },
              Tree: { shortExpand: "Expand", shortCollapse: "Collapse" },
              PrivateNotes: {
                visibleToRecords: "Visibility Set by Record",
                private: "Private",
                privatelyShared: "Privately Shared",
              },
              Global_Cases: { escalated: "Escalated" },
              FeedNotification: { defaultImageAltText: "Insert {0}" },
              EmailMessage: {
                Cc: "Cc",
                MoreEmailActions: "More Email Actions",
                ForwardMessage:
                  "--------------- Forwarded Message ---------------",
                ReplyAll: "Reply All",
                Reply: "Reply",
                Forward: "Forward",
                From: "From",
                To: "To",
                OriginalMessage:
                  "--------------- Original Message ---------------",
                Subject: "Subject",
                TimeStamp: "Sent",
              },
              RelatedLists: {
                relatedListOffline:
                  "Unable to load Related List. You are currently offline.",
                relatedListsOffline:
                  "Unable to load Related Lists. You are currently offline.",
              },
              LightningConsoleDialogs: {
                WorkspaceScopedModalAssistiveText: "Dialog for {0}: {1}",
                PopoutBlocked:
                  "Popup blocked. Check your browser's popup settings.",
                SubtabScopedModalAssistiveText: "Dialog for {0}: {1}",
                FailedToLoadPersistence:
                  "We couldn\u2019t load your tabs. Refresh the page to try again.",
                EnterValidURL: "Enter a valid URL and try again",
                PopoutErrorTitle: "Popout Error",
                SomethingWentWrongTitle: "Hmm, something went wrong",
                PopoutParentTimeout:
                  "Hmm, we\u2019re having trouble communicating with the child window. Please try again.",
                PageNotExist: "Page doesn't exist",
                UsingFallbackApp:
                  "The app you\u2019re trying to view is invalid or inaccessible. We're taking you to your default app instead.",
              },
              UserProfilePage: {
                ExternalLabel: "External",
                ExternalUserLabel: "External User",
              },
              Errors: {
                UserInputPlaceholder:
                  "What was going on right before this error happened?",
                ClientOutOfSync_Body:
                  "Refresh the page, or return to the page to copy any unsaved text.",
                AlertErrorInstructions:
                  "This page has an error. You might just need to refresh it.",
                GenericErrorFormat:
                  "Something has gone wrong. {0}.\nPlease try again.\n",
                EditErrorHelp: "Review the errors on this page.",
                EC_PanelTitleNew: "Error Console ({0} new)",
                NoRecordDataFoundShort:
                  "This record is no longer available. Ask your administrator for help.",
                InvalidSessionTimeout_Body:
                  "You've been inactive too long. Log in again, or return to the page to copy any unsaved text.",
                InvalidSessionUnexpected_Header: "Your session has ended",
                UserNotSupported:
                  "Your Salesforce edition or user license isn't supported yet.",
                ErrorDetails: "First, would you give us some details?",
                CloseError: "Close error dialog",
                FatalErrorInstructions:
                  "Your session has an error. Please log out and contact Salesforce Support or your Salesforce admin, providing the error ID.",
                SwitchToFullLink: "Switch to Full Site",
                Reload: "Reload",
                EC_PanelTitle: "Error Console",
                UnhandledExceptionError:
                  "Unfortunately, there was a problem. Please try again. If the problem continues, get in touch with your administrator with the error ID shown here and any other related details.",
                ErrorPopoverHeading: "We hit a snag.",
                RecordDeletedNoAccess:
                  "The record you're trying to access was deleted.",
                InvalidSessionTimeout_Header: "Your session has timed out",
                InvalidSession_ReturnToPage: "Return to Page",
                FatalErrorTitle: "Sorry to interrupt",
                AlertErrorTitle: "Sorry to interrupt",
                InvalidSession_LogIn: "Log In",
                NoRecordDataFound:
                  "We couldn't find the record you're trying to access. It may have been deleted by another user, or there may have been a system error. Ask your administrator for help.",
                OkButton: "OK",
                InvalidSession_Refresh: "Refresh",
                ErrorId: "(We're reporting this as error ID: {0})",
                ErrorDetailsLabel: "Technical Stuff",
                InvalidSessionUnexpected_Body:
                  "We're sorry to report that something has happened to your session. Log in again, or return to the page to copy any unsaved text.",
                ClientOutOfSync_Header: "The application has updates",
                AppLoadFail:
                  "We couldn't load your app. Try refreshing the page or contact Salesforce Customer Support if the problem continues.",
              },
              EmailErrorMessage: {
                RestrictedRecipientSingle:
                  "You are restricted from sending email to {0}.",
                OptedOutRecipientPlural:
                  "At least one recipient opted out of commercial email.",
                ExchangeAuthorizationError:
                  "We couldn\u2019t connect to Office 365. Please try again.",
                IFTRecipientsChanged:
                  "Email recipients have changed. Add your availability again.",
                CreateQuickCadenceComponentCreationFailed:
                  "We couldn\u2019t create a quick cadence. Try again later.",
                RequiredToAddress: "Add a recipient to send an email.",
                INSERT_UPDATE_DELETE_NOT_ALLOWED_DURING_MAINTENANCE:
                  "Updates can\u2019t be made during maintenance. Try again when maintenance is complete.",
                CantAssotiateCustomEmailToRecord:
                  "{0} isn't the recipient's primary email address, so this email won't be associated with the recipient.",
                NotSupportedInS1: "This action isn't supported on mobile.",
                UserPreferenceResetError:
                  "We couldn\u2019t reset the user preference to send emails through Salesforce.",
                RestrictedRecipientPlural:
                  "You are restricted from sending email to at least one of the recipients.",
                OptedOutRecipientSingle: "{0} opted out of commercial email.",
                EmailLimitExceeded: "Email limit exceeded.",
                IFTFromAddressChanged:
                  "The From address has changed. Add your availability again.",
                RequiredEitherEmailSubjectOrBody:
                  "To send this email, add a subject or body content.",
                GoogleAuthorizationError:
                  "We couldn\u2019t connect to Google. Please try again.",
              },
              SFX_OwnerChangeCmp_Errors: {
                generic_error_message:
                  "We encountered an error. Please try again, and if the issue persists, contact Salesforce customer support.",
                missing_new_owner_field: "Enter a new owner for this record.",
                same_new_owner_field: "{0} already owns this record.",
              },
              RtcLightningRedirectWarningPage: {
                redirectBodySalesforce:
                  "We'd like to open the page {0}... in a new tab. Because of your browser settings, we need your permission first.",
                redirectHeaderSalesforce: "Navigate to this page?",
              },
              VoicePhoneSettings: { VoiceSettings: "Dialer Settings" },
              Content: {
                PullToRefresh: "Pull to Refresh",
                RefreshFailed: "Unfortunately, there was a problem.",
                ShowMoreUpdating: "Updating...",
                TapToShowMore: "Tap to Show More",
                TapToRefresh: "Tap to Refresh",
                Updating: "Refreshing...",
                PullToShowMore: "Pull to Show More",
                ReleaseToShowMore: "Release to Show More",
                ReleaseToRefresh: "Release to Refresh",
              },
              udd_UserFavorite: { Entities: "Favorites" },
              EclairConfig: {
                showChartDataset: "Read Chart Dataset (Screen Reader)",
                other: "Other",
                chartSelectorTitle: "Display As",
                unknownEclairError:
                  "We can't draw this chart right now. Try rebuilding the chart's report, or check back later.",
                range: "{0} to {1}",
                percentTooltip: "{0} of {1}",
                cumulative: "Cumulative",
                segmentRanges: "Segment Ranges",
                referenceLineValue: "Reference Line Value",
                total: "Total",
                measure: "Measure",
                colorPalettePicker: "Color palette picker",
                percentTooltipWithGroup: "{0} of {1} for {2}",
                chartTitle: "Chart Title",
                showReferenceLine: "Show Reference Line",
                eclairChartAltText: "Chart: {0}",
                enableTabNavigation: "Turn On Accessibility Navigation",
                noData: "We can't draw this chart because there is no data.",
                colorPicker: "Color picker",
                noValues: "No data.",
                enableDataTable:
                  "Enable table equivalent for screen reader users",
                rangeBreakpointInput: "Segment {0}",
              },
              Notifications: {
                TrayTitle: "Notifications",
                TrayMarkAllRead: "Mark all as read",
                NotificationMaxCountExceeded: "20+",
              },
              ActionLinks: { Join_Success: "Joined", Join_New: "Join" },
              DynamicRelatedList: {
                QuickFilterHeader: "Filters",
                AdminFilterInfo:
                  "Only an admin can change or remove these filters. You can't apply additional filters on these fields.",
                QuickFilterSubHeader: "Quick Filters",
                AdminFilterSubHeader: "Admin-Defined Filters",
                QuickFilterInfo:
                  "Quick filters can't be saved and apply only to your current session. Quick filters that you apply don't affect anyone else's view.",
              },
              LightningDesktop: { TemplateTitle: "Lightning Experience" },
              SharingSettings: {
                ShareWithGroupsRequireAtLeastOneGroup:
                  "To share with groups, you must select at least one group.",
              },
              RecordFieldGenAI: {
                PanelTitle: "Einstein",
                PanelWelcomeMessage:
                  "Need help filling out the details? Einstein helps you fill out generative AI-enabled fields. \n           Click any generative AI-enabled field icon ✨ to create field values. Not perfect? Tell Einstein how to fix it using natural language like, \u201cMake it shorter.\u201d",
                ShowPanel: "Show Einstein Panel",
                PanelInputPlaceholder:
                  "Describe your task or ask a question\u2026",
                ClosePanel: "Close Einstein Panel",
                PanelDescription: "{0} Field",
              },
              Accessibility: {
                AppNavObjects: "Searchable objects from navigation bar",
                ScopeObjects: "Review scoped objects.",
                Selected: "Selected",
                AllObjects: "All searchable objects",
              },
              GuidanceHub: { sidebarTitle: "Guidance Center" },
              ProjectOne_FilterList: {
                SorterApplyLabel: "Apply",
                FiltersApplied: "{0} Filters Applied",
                SorterTitle: "Sort",
                CountSingular: "1 item",
                CountPlural: "{0} items",
                FilteredBy: "Filtered by {0}",
                SelectionSingular: "1 item selected",
                listOffline:
                  "Unable to load List View. You are currently offline.",
                SorterDescDefault: "Descending",
                SortedByUppercase: "Sorted by {0}",
                SorterCancelLabel: "Cancel",
                Loading: "Loading...",
                SelectionPlural: "{0} items selected",
                SorterAscDefault: "Ascending",
                MoreFiltersApplied: "{0} more filters applied",
              },
              Content_Val_DocEntityLink: {
                multiAttachShareErrorOnPublisher:
                  "One or more attached files can't be shared. Please remove the invalid files and try again.",
              },
              PipelineView: {
                NullRecordTypeTabName: "Uncategorized",
                MultipleRecordTypeInfoTooltip:
                  "Your records are organized by record type. Switch to a different record type by clicking that type's name.",
                NoEntities: "You don't have any {0}.",
              },
              GlobalNavigation: {
                OverflowMenu: "Overflow Menu",
                NavigationMenu: "Navigation Menu",
                UnableToLoad: "Unable to load",
                DndInstructions: "Press Spacebar to reorder.",
                More: "More",
                OpenViewInTab2: 'Open "{0}" in New Tab',
                ShowNavigationMenu: "Show Navigation Menu",
                cmn_editPanel_successToast_console:
                  "Navigation bar was updated.",
                NavInfoEmptyApp:
                  "This app doesn't have any viewable nav items. But you can still add and personalize your own nav items.",
                NoItems: "No Items",
                EditTitle: "Edit {0} App Navigation Items",
                NavInfoTooManyAppTabs:
                  "Your nav bar is full! To add nav items, ask your admin to remove some default items.",
                PageNotFound: "Page not found",
                DropdownNewAction: "New {0}",
                DropdownMRURecent: "Recent records",
                EditTabs: "Personalize your nav bar",
                CloseTab: "Close tab",
                CantAddToNav:
                  "Can't add nav item. To add this item, remove another one first.",
                DropdownTriggerLabel: "{0} List",
                LogoLinkAssistiveText: "Home",
                A11yNavRegion: "Global Header",
                OpenViewInTab: "Open in New Tab",
                DropdownMRULists: "Recent lists",
                cmn_editPanel_successToast: "Nav bar was updated.",
                ExternalWebpage: "External Web Page",
                NoRecentRecords: "No recent records to show.",
                EditTabsAssistiveText: "Edit nav items",
                GlobalNav: "Global",
                EditItems: "Edit",
                ShowMoreNavItems: "Show more navigation items",
                AddToNav: "Add to Nav Bar",
                AddToNav2: 'Add "{0}" to Nav Bar',
                TabNotSaved: "Not added to nav bar",
              },
              WorkQueue: {
                RemoveTargetsModalBlurb:
                  "You no longer have access to the selected targets\u2019 cadence. Removing targets lets you add them to a different cadence.",
                LinkedInConnectionRequestButtonTitle:
                  "Sales Navigator Connection Request",
                LinkedInMailButtonTitle: "Sales Navigator InMail",
                ActiveSectionTitle: "Active",
                PlatformScreenFlowButtonTitle: "Run Screen Flow",
              },
              activityTimeline: {
                timelineEmailSummarySecondPersonPastEmailAddressToFromManyWho:
                  "{4} sent an email to {5} and 1 other",
                involvesEveryone: "All activities",
                requestAccessSuccessToastSingleOwner:
                  "Share request was sent to {0}.",
                noPastActivitesInPeriod: "No past activities for this period.",
                circles: "Shared with {0} Activity Groups",
                resetFilters: "Restore Defaults",
                timelineEmailSummarySecondPersonPastEmailAddressFromManyWhoPlural:
                  "{4} sent an email to {1} and {6} others",
                loadingLabel: "Loading...",
                CherryPickingEventToast: "Event sharing settings were updated.",
                sixSelectedFilters: "{0}, {1}, {2}, {3}, {4}, and {5}",
                unrelateAllModalCancel: "Cancel",
                viewAllLinkTitle: "Show all past activities in a new tab",
                timelineSiqEventSummary: "Upcoming event with {0}",
                yearsAgo: "{0} Years Ago",
                ignoreFiltersButtonLabel: "Show All Activities",
                timelineEmailSummaryThirdPersonPastEmailAddressFromManyWho:
                  "{4} sent an email to {1} and 1 other",
                thisMonth: "This Month",
                activityHistoryMenu: "Number of activities to load",
                events: "Events",
                myIqTeamsNone: "(You have no groups to share with.)",
                tasks: "Tasks",
                timelineEmailSummaryThirdPersonPastManyWho:
                  "{0} sent an email to {1} and 1 other",
                everyoneWarningHeader: "Email was not being shared",
                attendees: "Attendees",
                requestAccessSomethingWentWrong: "Something went wrong.",
                replySubjectPrefix: "Re:",
                activityTimelineSIQDatasourceError:
                  "Not all your emails and events are showing up. Try refreshing the page.",
                last6Months: "Last 6 months",
                requestAccessToThisEmail: "This email",
                einsteinToggleLabel: "Only show activities with insights",
                activityHistoryEmailEmptyMessage:
                  "No emails sent yet. Consider reaching out to this customer.",
                timelineExpandError:
                  "Something went wrong. Refresh your activity timeline, and try expanding the item again.",
                EndOfTimelineMarker: "Skip to the top of the activity timeline",
                requestAccessToThisEvent: "This event",
                activityHistoryEventEmptyMessage: "No past meetings.",
                timelineEmailSummaryThirdPersonPastEmailAddressToManyWhoPlural:
                  "{0} sent an email to {5} and {6} others",
                sortOrder: "SORT UPCOMING & OVERDUE ACTIVITIES",
                activityTimelineFiltersError:
                  "This is taking a while. Refresh the activity timeline, or change your filters and try again.",
                showMore: "View More",
                emailIsPrivate: "This email isn\u2019t shared with you.",
                circle: "Shared with 1 Activity Group",
                activityHistoryCallEmptyMessage:
                  "No calls made yet. Consider reaching out to this customer.",
                loadMoreInlineOptions: "{0} activities",
                numberValue30: "30",
                myIqTeamsOption: "Share with My Chatter Groups",
                automatedEmailInfoMessage:
                  "We didn't share this email with other users because Einstein identified it as an automated email reply. But you can share the email if you choose.",
                newFirst: "Newest dates first",
                requestAccessTryAgain: "Try again",
                dateRange: "Date Range",
                timelineEmailSummaryThirdPersonPastEmailAddressToFrom:
                  "{4} sent an email to {5}",
                noSubjectActivityLabel: "[No subject]",
                fiveSelectedFilters: "{0}, {1}, {2}, {3}, and {4}",
                expandGroupToSeeActivities:
                  "There\u2019s more! To see more activities, expand the last section.",
                requestAccessSent: "Your request was sent.",
                timelineSiqEventSummaryPastManyWho:
                  "Event with {0} and 1 other",
                activityHistoryLoadMoreInline: "Load {0} More Past Activities",
                lastxDays: "Last {0} days",
                relativeEmailsInfoMessage:
                  "This synced event has 10 attendees or fewer. We\u2019ve filtered the emails in the activity timeline to only include those that are associated with the attendees.",
                defaultNonSIQ: "All time",
                timelineEmailSummaryThirdPersonPast: "{0} sent an email to {1}",
                next7Days: "Next 7 days",
                SkipPastTheTimeline:
                  "Skip to the bottom of the activity timeline",
                timelineEmailSummarySecondPersonPastEmailAddressFromManyWho:
                  "{4} sent an email to {1} and 1 other",
                requestAccessToOwnerSuccessToast:
                  "You asked {0} to share all emails and events with you.",
                emailIconLabel: "Email",
                onlyYou: "Not Shared",
                requestAccessPrivateLink: "...ask to share",
                activityTimelineEmailInsightError:
                  "Hmm, that didn't work. Please try again in a bit.",
                upcomingSectionLabel: "Upcoming & Overdue",
                timelineSettings: "Timeline Settings",
                timelineEmailSummarySecondPersonPastEmailAddressTo:
                  "You sent an email to {5}",
                fourSelectedFilters: "{0}, {1}, {2}, and {3}",
                timelineRowDetails: "Details for ",
                numberValue8: "8",
                threeSelectedFilters: "{0}, {1}, and {2}",
                timelineTaskSummary:
                  "$Label.activityTimeline.timelineTaskSummary does not exist.",
                involvesOnlyMe: "My activities",
                timelineEmailSummarySecondPersonPastEmailAddressToManyWhoPlural:
                  "You sent an email to {5} and {6} others",
                allTimeSIQ: "All time",
                calls: "Logged calls",
                numberValue7: "7",
                plusNOthers: " + {0} others",
                privateWarningBody:
                  "{0}{1} already shared this email. If you continue, you will no longer share this email. However, other owners will continue to share it.",
                requestAccessSuccessToastMultipleOwners:
                  "Share request was sent to {0} and {1} others.",
                timelineEmailSummaryThirdPersonPastEmailAddressFrom:
                  "{4} sent an email to {1}",
                listemails: "List email",
                timelineEmailSummarySecondPersonPastEmailAddressToFrom:
                  "{4} sent an email to {5}",
                openActivitiesEmptyMessage:
                  "No activities to show.<br/> Get started by sending an email, scheduling a task, and more.",
                voice: "Voice Calls",
                monthsAgo: "{0} Months Ago",
                timelineCallSummary:
                  "$Label.activityTimeline.timelineCallSummary does not exist.",
                defaultEnhancedFiltering: "Within 1 month",
                selectedFiltersPrefix: "Filters: ",
                lastMonth: "Last Month",
                numberValue15: "15",
                filterOnMessage:
                  "To change what's shown, try changing your filters.",
                requestAccessSuccessToastFallback: "Share request was sent.",
                noMorePastActivitiesToLoad: "No more past activities to load.",
                allActivities: "All types",
                timelineEmailSummaryThirdPersonPastManyWhoPlural:
                  "{0} sent an email to {1} and {6} others",
                timelineEventSummary:
                  "$Label.activityTimeline.timelineEventSummary does not exist.",
                activityHistoryTaskEmptyMessage: "No tasks completed yet.",
                noEventsMsg: "Select at least one activity type",
                everyoneWarningBody:
                  "{0}{1} already elected not to share this email. If you continue, the email will be shared with others.",
                requestAccessErrorToast:
                  "Share request wasn't sent. Try again.",
                timelineEmailSummarySecondPersonPastManyWho:
                  "You sent an email to {1} and 1 other",
                noAccess:
                  "Looks like you don\u2019t have access to the parent record. Your Salesforce admin can help with that.",
                everyone: "Shared with Everyone",
                onlyMeOption: "Don't Share",
                defaultSIQ: "Within 2 months",
                activityTimelineSFDCDatasourceError:
                  "Error: The timeline isn't displaying all the logged calls, tasks, events, and emails from the Salesforce database.",
                linkedInIconLabel: "LinkedIn",
                listEmailIconLabel: "List Email",
                numberValue25: "25",
                requestAccessSuccessToastTwoOwners:
                  "Share request was sent to {0} and 1 other.",
                timelineListEmailSummary:
                  "$Label.activityTimeline.timelineListEmailSummary does not exist.",
                viewAll: "View All",
                noDueDateActivityLabel: "No due date",
                relativeEmails: "Email (Attendees only)",
                twoSelectedFilters: "{0} and {1}",
                activityOwner: "Activities to Show",
                activityTimelineHeading: "Activity Timeline",
                oldFirst: "Oldest dates first",
                salesforceInboxSettingsLink: "Update Sharing Settings",
                einsteinToggleActive: "Enabled",
                sevenSelectedFilters: "{0}, {1}, {2}, {3}, {4}, {5}, and {6}",
                callLogIconLabel: "Logged Call",
                timelineLinkedInSummary:
                  "$Label.activityTimeline.timelineLinkedInSummary does not exist.",
                timelineEmailSummarySecondPersonPastEmailAddressToManyWho:
                  "You sent an email to {5} and 1 other",
                openActivitiesEmailEmptyMessage:
                  "Emails you\u2019ve sent appear below under Past Activity.",
                noDateActivityLabel: "No date",
                requestAccessToAllEmails: "All of {0}'s Emails and Meetings",
                timelineEmailSummarySecondPersonPastEmailAddressToFromManyWhoPlural:
                  "{4} sent an email to {5} and {6} others",
                allIqUsersOption: "Share with Everyone",
                activityHistoryShowMore: "Load More Past Activities",
                privateWarningHeader: "Email will continue to be shared",
                openActivitiesEventEmptyMessage:
                  "No meetings scheduled. Create one to keep things moving.",
                video: "Video Calls",
                linkedin: "LinkedIn",
                activityPublisherHeading: "Activity Publisher",
                timelineTaskEmailSummary:
                  "$Label.activityTimeline.timelineTaskEmailSummary does not exist.",
                timelineEmailSummary:
                  "$Label.activityTimeline.timelineEmailSummary does not exist.",
                openActivitiesTaskEmptyMessage:
                  "No open tasks. Create one to keep things moving.",
                emails: "Email",
                eightSelectedFilters:
                  "{0}, {1}, {2}, {3}, {4}, {5}, {6}, and {7}",
                plusOneOther: " + 1 other",
                cherrypickingRadioButtonLegend: "Share with:",
                einsteinToggleInactive: "Disabled",
                timelineEmailSummarySecondPersonPastEmailAddressFrom:
                  "{4} sent an email to {1}",
                eventIsPrivate: "This event isn't shared with you.",
                load: "Load...",
                timelineEmailSummarySecondPersonPast:
                  "You sent an email to {1}",
                timelineEmailSummaryThirdPersonPastEmailAddressFromManyWhoPlural:
                  "{4} sent an email to {1} and {6} others",
                CherryPickingEmailToast: "Email sharing settings were updated.",
                sensitiveEmailInfoMessage:
                  "We didn't share this email with other users because Einstein detected what may be sensitive information in it. But you can share the email if you choose.",
                viewMore: "Show more past activity",
                activityHistoryEmptyMessage:
                  "No past activity. Past meetings and tasks marked as done show up here.",
                timelineEmailSummarySecondPersonPastManyWhoPlural:
                  "You sent an email to {1} and {6} others",
                timelineEmailSummaryThirdPersonPastEmailAddressToFromManyWhoPlural:
                  "{4} sent an email to {5} and {6} others",
                apply: "Apply",
                completedCadence: "Completed cadence tasks",
                message: "Message",
                applyAndSaveFilters: "Apply & Save",
                timelineEmailSummaryThirdPersonPastEmailAddressToFromManyWho:
                  "{4} sent an email to {5} and 1 other",
                viewMoreButton: "View More",
                timelineExpandAll: "Expand All",
                timelineEmailSummaryThirdPersonPastEmailAddressToManyWho:
                  "{0} sent an email to {5} and 1 other",
                openActivitiesCallEmptyMessage:
                  "Calls you\u2019ve made appear below under Past Activity.",
                activities: "Activity Type",
                alternativeTextInformation: "Information",
                lastYear: "Last Year",
                timelineCollapseAll: "Collapse All",
                timelineEmailSummaryThirdPersonPastEmailAddressTo:
                  "{0} sent an email to {5}",
                time: "When",
                forwardSubjectPrefix: "Fw:",
                multipleToMore: "+ {0} More",
              },
              DashboardTableComponent: { total: "Total" },
              MultiSelectElement: { Selected: "Selected" },
              RecommendedGeneral: {
                dismiss: "Don't show again",
                not_interested: "I'm not interested",
              },
              SetupFlowFramework: {
                confirmLeaveDialogMessage2:
                  "You will lose any unsaved changes.",
                confirmLeaveDialogMessage1:
                  "Are you sure you want to leave {0}?",
                confirmLeaveDialogMessage1Empty:
                  "Are you sure you want to leave this screen?",
                confirmLeaveDialogHeader: "Leave {0}",
                buttonConfirm: "Confirm",
                confirmLeaveDialogHeaderEmpty: "Leave this screen",
              },
              NotificationsClient: {
                unsupportedCommunitiesNavigationTarget:
                  "Visit your Salesforce org to view this notification.",
                dateInNetworkNameText: "{0} in {1}",
                unreadNotification: "Unread",
                unseenNotifications: "{0} new notifications",
                moreNotificationsError:
                  "That's all we can show. Try scrolling again.",
                noNotificationsMessage:
                  "You don't have any notifications right now.",
                closePanel: "Close Notifications",
              },
              InlineExpandableContainer: {
                ViewLess: "View Less",
                ViewMore: "View More",
                Loading: "Loading",
                ErrorMessage: "Failed to load. Tap View More to retry.",
              },
              LightningKeyboardShortcuts: {
                CopyUrlForWorkspaceAndSubtabsSuccess:
                  "The active workspace tab and its subtabs were copied to the clipboard.",
                keyboardShortcuts: "Keyboard Shortcuts",
                CloseTabs_Success_SingleTab: "1 tab was closed",
                CopyUrlUnsupported:
                  "Copy to clipboard isn\u2019t supported in your browser. Contact your Salesforce admin.",
                CloseAllTabs_Description:
                  "Are you sure you want to close all tabs?<br/>Don't worry, pinned tabs stay open.",
                CloseAllTabs_Button: "Close All",
                CloseTabs_Error:
                  "We couldn\u2019t close your tabs. Try closing them manually.",
                CopyUrlFailed:
                  "We couldn't copy the tab URL to the clipboard. Refresh the page and try again.",
                CopyUrlForTabSuccess:
                  "The active tab was copied to the clipboard.",
                CopyUrlNoFocusedTab: "Click on a tab to copy its URL.",
                CloseTabs_Success_MultipleTabs: "{0} tabs were closed",
                CloseAllTabs_Title: "Close all tabs?",
              },
              DetailError: {
                RequiredWithFieldList:
                  "These required fields must be completed: {0}",
                NewConflictingChangesErrorHeader: "New conflicts detected",
                EntitySaveErrorSummary: "Looks like there's a problem.",
                Required: "Complete this field.",
                GenericSaveError:
                  "We couldn\u2019t save your work. Please refresh the page and try again.",
                NewConflictingChangesError:
                  "New changes by others have been saved. Some of these changes conflict with your changes. Please save the page again.",
              },
              MobileWebRecordActions: {
                ToasterMessageDelete: '{0} "{1}" was deleted.',
                AdditionalRecordActions: "Additional Record Actions",
                ToasterMessageCreate: '{0} "{1}" was created.',
                ToasterMessageUpdate: '{0} "{1}" was saved.',
                ToasterMessageDeleteWithoutName: "{0} was deleted.",
                ToasterMessageCreateWithoutName: "{0} was created.",
                ToasterMessageUpdateWithoutName: "{0} was saved.",
                ToasterMessageMassQuickActionUpdate:
                  "{0} actions were completed.",
                ToasterMessageUpdateWithMergeDetail:
                  "Another user also made changes to this record.",
              },
              QuickCadence: {
                ManualEmail: "Manual Email",
                AutomatedEmail: "Automated Email",
                LinkedInMail: "LinkedIn InMail",
                LinkedInConnection: "LinkedIn Connection Request",
                CreateCustomTask: "Custom Task",
                MakeACall: "Make a Call",
              },
              SIQOutbox: {
                Or: "or",
                Cancel: "Cancel",
                Title: "Email Errors",
                Resend: "Resend",
                OutboxError: "Email couldn't be sent. Do you want to",
              },
              RecentActivityField: {
                IntelligencePanelAssistiveText:
                  "Activity Insights Summary: {0}",
              },
              QuickCadencePrompt: {
                CadenceFeature2: "Automatically log your actions",
                CreateQuickCadenceButton: "Create Quick Cadence",
                CadenceFeature1: "Get  reminder in your To Do list",
                CadenceFeature3: "Track your customer's engagement",
                LearnMore: "Learn More",
                ClosingInFormat: "Closing in {0} seconds...",
                SkipButton: "Not Now",
                Line1: "Want to quickly repeat what you just did?",
                Line2: "Create a quick cadence to:",
              },
              Exception: {
                NoAccessException_desc:
                  "You do not have the level of access necessary to perform the operation you requested. Please contact the owner of the record or your administrator if access is necessary.",
                OracleRowLockedException_desc:
                  "The record you are attempting to edit, or one of its related records, is currently being modified by another user. Please try again.",
                InvalidReadOnlyUserDmlException_desc:
                  "Updates can\u2019t be made during maintenance.",
                FeatureDisabledException: "Feature Disabled",
              },
              CopyPasteImageLogLable: {
                LogPastedImage: "Pasted and uploaded image successfully.",
              },
              EinsteinChart: {
                windowTooSmall: "Not enough space to display the chart.",
              },
              ChangeColumn: {
                ChangePopoverIconTrendingDownAssistiveText: "{0} trending down",
                ChangePopoverIconTrendingUpAssistiveText: "{0} trending up",
              },
              MerchAccPaymentMethodSetConfig: {
                SetContactUsLabel:
                  'Can\'t find what you\'re looking for? <a href="{0}" target="_blank">Please contact us.</a>',
                SetInfoLabel:
                  'Some payment methods require additional setup. <a href="{0}" target="_blank">Learn more.</a>',
                MethodTypeSelectionHelp:
                  "Only eligible payment methods for the merchant account are shown in the Available list.\n            The order of payment methods in the Selected list determines their order at checkout\n        ",
                SetKeyHelp:
                  "Shows a configured set of payment methods at checkout. Find the key on the Merchant Account related list page.",
                SetKeyLabel: "Payment Method Set Key",
                SetKeyPlaceholderLabel: "Example: AMER-US",
                MethodTypeMissing: "Select at least one payment method",
                MethodTypeAvailableLabel: "Available Payment Methods",
                SetKeyValueMissing: "Please enter Payments Method Set Key",
                SetKeyInvalidLabel:
                  "Payment Method Set Key can only contain letter, number, hyphen, or underscore.",
                DuplicatePaymentMethodSetError:
                  "Key already exists. Enter a unique value.",
                MethodTypeSelectionLabel: "Payment Methods",
                MethodTypeSelectedLabel: "Selected Payment Methods (in order)",
              },
              CustomField: {
                FieldCalculatedUponSave: "This field is calculated upon save",
              },
              Global_Setup: {
                NoAccessException_Modal_Button: "Go Home",
                NoAccessException_Modal_Title: "Hmm, that didn\u2019t work",
                NoAccessException_Modal_Message:
                  "Looks like you don't have access to this page.",
              },
              ChatterFileVersions: {
                reasonForChangeOptional: "What Changed? (optional)",
              },
              udd_ForecastingItem: {
                QuantityWithoutManagerAdjustment:
                  "Quantity Without Manager Adjustment",
                Period: "Period",
                AmountWithoutAdjustments: "Amount Without Adjustments",
                ForecastAmount: "Forecast Amount",
                ForecastCategoryName: "Forecast Category",
                ForecastQuantity: "Forecast Quantity",
                QuantityWithoutAdjustments: "Quantity Without Adjustments",
              },
              listviewMessages: { selectall: "Select All" },
            },
          },
        ],
        enableAccessChecks: true,
        dns: "c",
        ls: 1,
        lairn: [],
        laerc: [],
        lav: "59",
        ln: 1,
        csp: 1,
        ch: "https://static.lightning.force.com/na207",
        mna: { lightning: "interop" },
        lff: {
          ENABLE_MIXED_SHADOW_MODE: false,
          DISABLE_LIGHT_DOM_UNSCOPED_CSS: true,
          ENABLE_LEGACY_SCOPE_TOKENS: false,
        },
        arse: 1,
        acaf: 1,
        services: [
          "markup://force:initServiceSfdc",
          "markup://lightning:configProvider",
          "markup://force:salesforceScopedModuleResolver",
          "markup://force:ldsEngineCreator",
          "markup://instrumentation:locatorService",
          "markup://force:lwcReportingService",
        ],
      },
      MaxParallelXHRCount: 6,
      XHRExclusivity: false,
      applyCssVarPolyfill: false,
    },
    cn = auraConfig["eikoocnekot"];
  if (cn) {
    // Read cookie and convert it to the token config value. This is being done early so the cookie is deleted and reduces the chance the cookie unnecessarily sent to the server with subsequent requests.
    var cookies = "; " + document.cookie + ";",
      value,
      key = "; " + cn + "=",
      begin = cookies.indexOf(key);
    if (begin !== -1) {
      var end = cookies.indexOf(";", begin + key.length);
      value = cookies.substring(begin + key.length, end);
    }
    if (!value) {
      throw new Error("Unable to read the Aura token from the response.");
    }
    auraConfig["token"] = value;
    // Delete cookie
    var cookie = cn + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    if (cn.indexOf("__Host-") === 0) {
      cookie += "; secure";
    }
    document.cookie = cookie;
    auraConfig["csrfV2"] = true;
    delete auraConfig["eikoocnekot"];
  }
  auraConfig.context.styleContext = {
    c: "webkit",
    x: ["isDesktop"],
    tokens: [
      "markup://force:sldsTokens",
      "markup://force:base",
      "markup://force:oneSalesforceSkin",
      "markup://force:levelOneDensity",
      "markup://force:themeTokens",
      "markup://force:formFactorLarge",
    ],
    tuid: "p6mIVypQ1Wfk_CdKnpG69Q",
    cuid: 1474136371,
  };

  function auraPreInitBlock() {
    $A.storageService.setIsolation("00D8W000004Lymu0058W00000BAlWS");
    $A.storageService.setVersion("59.0");
    (function (debug, key) {
      function setCryptoKey(key) {
        var buffer, view;
        if (Array.isArray(key) && (key.length === 32 || key.length === 16)) {
          try {
            buffer = new ArrayBuffer(key.length);
            view = new Uint8Array(buffer);
            view.set(key);
          } catch (ignored) {}
        }
        CryptoAdapter.setKey(buffer);
      }
      debug && $A.log("CryptoAdapter registering");
      var CryptoAdapter = $A.storageService.CryptoAdapter;
      CryptoAdapter.register();
      if (!$A.storageService.isRegisteredAdapter(CryptoAdapter.NAME)) {
        $A.log("CryptoAdapter was not registered");
        return;
      }
      setCryptoKey(key);
    })(
      true,
      [
        116, 117, 111, -47, -2, -104, -8, 26, 20, -5, 77, 122, 59, 7, 17, -109,
        -115, -99, -79, -101, -35, 65, -47, 62, -53, 73, 78, -1, 2, -81, -100,
        30,
      ]
    );
    $A.clientService.setParallelBootstrapLoad(true);
    $A.storageService.initStorage({
      name: "actions",
      persistent: true,
      secure: true,
      maxSize: 209715200,
      expiration: 900,
      autoRefreshInterval: 30,
      debugLogging: false,
      clearOnInit: false,
      version: "",
    });

    $A.metricsService.skipBootstrapLogging();
    $A.log("one/template.cmp: aura.js and app.js not loaded yet");
    window.FORCE = $A.one = (function (Aura) {
      var CONTAINER_CLASS = ".center",
        PREFIX = (function () {
          var styles = window.getComputedStyle(document.documentElement, ""),
            pre = (Array.prototype.slice
              .call(styles)
              .join("")
              .match(/-(moz|webkit|ms)-/) ||
              (styles.OLink === "" && ["", "o"]))[1],
            dom = "WebKit|Moz|MS|O".match(new RegExp("(" + pre + ")", "i"))[1];
          /*W-2599121*/ if (window.navigator.userAgent.indexOf("Edge") != -1) {
            pre = "webkit";
          }
          return {
            dom: dom,
            lowercase: pre,
            css: "-" + pre + "-",
            js: pre[0].toUpperCase() + pre.substr(1),
          };
        })();
      var ANIMATION_END_EVENT_NAMES = {
          webkit: "webkitAnimationEnd",
          o: "oAnimationEnd",
          moz: "animationend",
          ms: "animationend",
        },
        TRANSITION_END_EVENT_NAMES = {
          webkit: "webkitTransitionEnd",
          o: "oTransitionEnd",
          moz: "transitionend",
          ms: "transitionend",
        },
        ONE_OBJ = {
          getPrefixCSS: function () {
            return PREFIX.css;
          },
          getPrefixJS: function () {
            return PREFIX.js;
          },
          getPrefix: function (upperCase) {
            var prefix = PREFIX.lowercase,
              up = $A.util.isIE && upperCase;
            return up ? prefix.toUpperCase() : prefix;
          },
          getAnimationEndEventName: function () {
            return (
              ANIMATION_END_EVENT_NAMES[this.getPrefix()] || "animationend"
            );
          },
          getTransitionEndEventName: function () {
            return (
              TRANSITION_END_EVENT_NAMES[this.getPrefix()] || "transitionend"
            );
          },
          layouts: { PHONE: "phone", TABLET: "tablet", DESKTOP: "desktop" },
          mark: function (msg) {
            if (window.console && window.console.markTimeline)
              window.console.markTimeline(msg);
          },
          cookies: {
            getCookie: function (e) {
              for (
                var t, o = e + "=", i = document.cookie.split(";"), n = 0;
                n < i.length;
                n++
              )
                for (t = i[n]; " " == t.charAt(0); )
                  if (((t = t.substring(1, t.length)), 0 == t.indexOf(o)))
                    return t.substring(o.length, t.length);
              return null;
            },
            setCookie: function (e, t, o) {
              var i;
              if (o) {
                var n = new Date();
                n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3),
                  (i = "; expires=" + n.toGMTString());
              } else i = "";
              document.cookie = e + "=" + t + i + "; path=/";
            },
            removeCookie: function (e) {
              this.setCookie(e, "", -1);
            },
          },
          getContainer: function () {
            return document.querySelector(CONTAINER_CLASS);
          },
          getContainerWidth: function () {
            var container = document.querySelector(CONTAINER_CLASS);
            if (container) {
              return container.offsetWidth;
            }
          },
          getContainerHeight: function () {
            var container = document.querySelector(CONTAINER_CLASS);
            if (container) {
              return container.offsetHeight;
            }
          },
          spinnerLagTime: { spinner: 300, toast: 9000 },
          viewport: { height: window.innerHeight, width: window.innerWidth },
        };
      window.addEventListener("beforeinstallprompt", function (e) {
        ONE_OBJ.androidBannerPromise = e.userChoice;
      }); // W-2900934
      return ONE_OBJ;
    })($A);
  }

  function initFramework() {
    window.Aura = window.Aura || {};
    window.Aura.app = auraConfig["context"]["app"];
    window.Aura.beforeFrameworkInit = Aura.beforeFrameworkInit || [];
    window.Aura.beforeFrameworkInit.push(auraPreInitBlock);
    window.Aura.inlineJsReady = time();

    if (!window.Aura.frameworkJsReady) {
      window.Aura.initConfig = auraConfig;
    } else {
      if (auraConfig.context) {
        if (auraConfig.context.dpbp) {
          // Set a data attribute on document.body to signal engine to bypass global patching
          document.body.setAttribute(
            "data-global-patching-bypass",
            "temporary-bypass"
          );
        }
        $A.componentService.initLwcFeatureFlags(auraConfig.context);
      }

      // LockerService must be initialized before scripts can be executed.
      $A.lockerService.initialize(auraConfig.context);

      // scripts inside custom templates with Locker active are stored
      // until now since we need LockerService before running

      var scripts = window.Aura.inlineJsLocker;
      if (scripts) {
        for (var i = 0; i < scripts.length; i++) {
          $A.lockerService.runScript(
            scripts[i]["callback"],
            scripts[i]["namespace"]
          );
        }

        delete window.Aura.inlineJsLocker;
      }

      if (true) {
        $A.initAsync(auraConfig);
      } else if (false) {
        $A.initConfig(auraConfig);
      }
    }
  }

  // Error msg
  var x = document.getElementById("dismissError");
  if (x) {
    x.addEventListener("click", function () {
      var auraErrorMask = document.getElementById("auraErrorMask");
      if (window["$A"]) {
        $A.util.removeClass(auraErrorMask, "auraForcedErrorBox");
        $A.util.removeClass($A.util.getElement("auraErrorReload"), "show");
      } else {
        document.body.removeChild(auraErrorMask);
      }
    });
  }

  setTimeout(initFramework, 0); // ensure async

  function isWindowed() {
    return location.search.match(/(\?|&)?0\.windowed=true(&.*)?$/);
  }
  function showMascot() {
    var header = document.querySelector("#iconstage > header");
    var splash = document.querySelector("#iconstage .splash-container");
    var spinner = document.getElementById("spinner-container");
    var verticalNav = document.querySelector(
      "#verticalNav .vertical-nav-template_container"
    );
    if (splash) {
      if (verticalNav) {
        // vertical nav jumps between apps often, so wait before showing splash to reduce repetitive transitions
        splash.className = splash.className.replace(
          "hidden",
          "splash-delayed-fade-in"
        );
      } else {
        // by default show splash immediately
        splash.className = splash.className.replace("hidden", "");
      }
    }
    if (header) {
      header.className = header.className.replace("hidden", "");
    }
    if (verticalNav) {
      verticalNav.className = verticalNav.className.replace("hidden", "");
      var waffle = document.querySelector("#iconstage .splashPage-icon-waffle");
      if (waffle) {
        waffle.className += " hidden";
      }
    }
    if (spinner) {
      spinner.className += " hidden";
    }
  }
  if (!isWindowed()) {
    showMascot();
  }

  Aura.PreloadLayout = (function (config) {
    function buildParams(o) {
      return Object.keys(o)
        .reduce(function (r, k) {
          r.push(encodeURIComponent(k) + "=" + encodeURIComponent(o[k]));
          return r;
        }, [])
        .join("&");
    }

    function prefetchAuraActions(actions, callback) {
      var buildToken = function (key) {
        if (!key) {
          return null;
        }
        var cookies = "; " + document.cookie + ";";
        key = "; " + key + "=";
        var begin = cookies.indexOf(key);
        if (begin === -1) {
          return undefined;
        }
        var end = cookies.indexOf(";", begin + key.length);
        var value = cookies.substring(begin + key.length, end);
        if (!value) {
          throw new Error("Unable to read the Aura token from the response.");
        }
        return value;
      };

      var ctx = config.context;
      var contextToSend = {
        mode: ctx.mode,
        fwuid: ctx.fwuid,
        loaded: ctx.loaded,
        app: ctx.app,
      };
      if (ctx.m) {
        contextToSend["m"] = 1;
      }
      var payload = {
        "aura.token": config.eikoocnekot
          ? buildToken(config.eikoocnekot)
          : config.token,
        "aura.context": JSON.stringify(contextToSend),
        message: JSON.stringify({ actions: actions }),
      };

      function onPrefetchError(e) {
        callback(e, this);
      }
      var params = buildParams(payload);

      var xhr = new XMLHttpRequest();
      xhr.open("POST", config.host + "/aura?preloadActions");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      xhr.addEventListener("error", onPrefetchError);
      xhr.addEventListener("timeout", onPrefetchError);
      xhr.addEventListener("load", function (e) {
        if (this.status === 200) {
          callback(null, this);
        } else {
          onPrefetchError.call(this, e);
        }
      });

      xhr.send(params);
    }

    function hookAfterDefsReady(callback) {
      if (Aura.afterAppDefsReady) {
        callback();
      } else {
        Aura.afterAppDefsReady = Aura.afterAppDefsReady || [];
        Aura.afterAppDefsReady.push(callback);
      }
    }

    function preloadActionMap(actions, actionsToPreload) {
      var map = {};

      if (actions) {
        for (var i = 0; i < actions.length; i++) {
          var action = actions[i];
          if (action) {
            var key = action.getStorageKey();

            if (!actionsToPreload[key]) {
              return;
            }

            map[action.getId()] = actionsToPreload[key].id;
          }
        }
      }

      return map;
    }

    function enqueueActions(actions) {
      $A.run(function () {
        actions.forEach(function (action) {
          $A.enqueueAction(action);
        });
      });
    }

    return {
      // state
      actionsKeys: {},
      actionsToPreload: {},
      actionsPrefetched: false,
      actionsStorageChecked: false,
      actionsDispatched: false,
      actionsOnStorage: null,
      queueActionsHydration: null,
      preloadFromCache: false,

      preload: function (actions) {
        actions.forEach(
          function (action, i) {
            var key = action.descriptor + ":" + JSON.stringify(action.params);
            action.id = i + ";p";
            this.actionsKeys[key] = true;
            this.actionsToPreload[key] = action;
          }.bind(this)
        );

        prefetchAuraActions(actions, this._afterPrefetch.bind(this));
        hookAfterDefsReady(this._afterDefsReady.bind(this));
      },
      _afterPrefetch: function (error, xhr) {
        this.actionsPrefetched = true;
        this.xhrResponse = xhr;

        if (!this.actionsDispatched && this.queueActionsHydration) {
          if (this.actionsOnStorage === null) {
            // network arrive earlier than cache so is kind of cached
            this.preloadFromCache = true;
          }

          return this.queueActionsHydration();
        }
      },
      _afterDefsReady: function () {
        var actionStorage = $A.storageService.getStorage("actions");
        var actionKeys = Object.keys(this.actionsKeys);

        if (actionStorage) {
          actionStorage.getAll(actionKeys).then(
            function (storedActions) {
              this.actionsStorageChecked = true;
              if (Object.keys(storedActions).length === actionKeys.length) {
                this.actionsOnStorage = true;
                this.preloadFromCache = true;
                if (!this.actionsDispatched && this.queueActions) {
                  this.queueActions();
                }
              }
            }.bind(this)
          );
        } else {
          this.actionsStorageChecked = true;
        }
      },
      enqueue: function (actions) {
        var actionsToPreload = this.actionsToPreload;
        var preloadMapId = preloadActionMap(actions, actionsToPreload);

        var hydrate = function () {
          this.actionsDispatched = true;
          $A.clientService.hydrateActions(
            actions,
            preloadMapId,
            this.xhrResponse
          );
        }.bind(this);

        var enqueue = function () {
          this.actionsDispatched = true;
          enqueueActions(actions);
        }.bind(this);

        if (preloadMapId) {
          // If we already got the results from the server, just hydrate
          if (this.actionsPrefetched) {
            this.preloadFromCache = true;
            setTimeout($A.getCallback(hydrate), 0); // ensure asyncronizity
            return;
          } else {
            this.queueActionsHydration = hydrate;
          }

          if (this.actionsStorageChecked) {
            if (this.actionsOnStorage) {
              enqueue();
              return;
            }
          } else {
            this.queueActions = enqueue;
          }
        } else {
          $A.log(
            "Preloads not found for the give actions, doing regular enqueing"
          );
          this.actionsDispatched = true;
          enqueueActions(actions);
        }
      },
    };
  })(auraConfig);

  function getAppFromUrl() {
    // If the URL format changes such that this logic needs to be updated, inAppGuidanceBuilderHelper.js also needs to be updated.
    var appSegmentMatcher = location.pathname.match(
      /\/lightning\/app\/([^\/]+)/
    );
    if (appSegmentMatcher && appSegmentMatcher.length > 1) {
      return appSegmentMatcher[1];
    }
    return null;
  }

  function skipPreload() {
    var authority =
      location.protocol +
      "//" +
      location.hostname +
      (location.port ? ":" + location.port : "");
    var exp = new RegExp(
      authority + "(?:/[^/]+)?/(one/one.app|lightning)(?:\\?|$)"
    );
    var referrer = document.referrer || "";
    // check for (1) same authority and (2) one.app with optional site prefix
    return exp.test(referrer);
  }

  var key = "appContextId";
  var appIdOrName = getAppFromUrl();
  if (!appIdOrName) {
    try {
      appIdOrName =
        window.sessionStorage.getItem(key) || window.localStorage.getItem(key);
    } catch (e) {
      appIdOrName = null;
    }
  } else {
    try {
      window.sessionStorage.setItem(key, appIdOrName);
    } catch (e) {}
  }

  if (skipPreload()) {
    delete Aura.PreloadLayout;
  } else {
    var action = {
      descriptor:
        "serviceComponent://ui.global.components.one.one.controller.OneController/ACTION$getCurrentApp",
      params: {},
    };
    if (appIdOrName) {
      // only set appContextId param if it has a value, otherwise the gvp gets hosed (W-4158012)

      // It is critical to keep the params consistent with how they are sent in oneHelper.js's getCurrentApp logic.
      // Any changes to logic should be reflected both here and in oneHelper.js
      action.params = { appContextIdOrName: appIdOrName };
    }
    Aura.PreloadLayout.preload([action]);
  }

  var appCssLoadingCount = 0;
  function onLoadStyleSheets(event) {
    if (event) {
      var element = event.target;
      element.removeEventListener("load", onLoadStyleSheets);
      element.removeEventListener("error", onLoadStyleSheetsError);
    }
    window.Aura.bootstrap.appCssLoading = --appCssLoadingCount > 0;
    if (!window.Aura.bootstrap.appCssLoading) {
      if (typeof window.Aura.bootstrap.appCssLoadedCallback === "function") {
        window.Aura.bootstrap.appCssLoadedCallback();
        window.Aura.bootstrap.appCssLoadedCallback = undefined;
      }
    }
  }
  function onLoadStyleSheetsError(event) {
    window.Aura.bootstrap.hasCssLoadError = true;
    onLoadStyleSheets(event);
  }

  var auraCss = document.getElementsByClassName("auraCss");
  var current;
  window.Aura.bootstrap.appCssLoading = auraCss.length > 0;
  for (var c = 0, length = auraCss.length; c < length; c++) {
    current = auraCss[c];
    appCssLoadingCount++;
    if (auraConfig.applyCssVarPolyfill) {
      loadViaAjax(current, auraConfig.cssVariables);
    } else {
      current.addEventListener("load", onLoadStyleSheets);
      current.addEventListener("error", onLoadStyleSheetsError);
      current.href = current.getAttribute("data-href");
    }
  }

  function rewriteCssVars(css, varLookup) {
    var VAR_BEGINNING = "var(--",
      VAR_PATTERN = /var\(--[^-]+-(.*?)\)/g,
      startIndex = 0,
      output = [],
      result;

    function processInContext(css, start, delimiter) {
      while (start++ && start < css.length) {
        if (css[start] === delimiter) {
          return start;
        }
      }
    }

    function processParenthesesInContext(css, start) {
      var opens = 0;
      var closes = 0;
      while (start < css.length) {
        // This allows us to support nested variables.
        // Count "open" and "close" parentheses. These must match before we return.
        // Note: this assumes parentheses formatting is valid.
        if (css[start] === "(") {
          opens++;
        } else if (css[start] === ")") {
          closes++;
        }
        if (opens === closes) {
          return start;
        }
        start++;
      }
    }

    function findVarEnd(css) {
      for (var idx = VAR_BEGINNING.length; idx < css.length; idx++) {
        switch (css[idx]) {
          case "'":
            idx = processInContext(css, idx, "'");
            break;
          case '"':
            idx = processInContext(css, idx, '"');
            break;
          case "(":
            // we process parentheses differently because open/close must match
            idx = processParenthesesInContext(css, idx);
            break;
          case ")":
            //end of var
            return idx + 1;
          default:
          //continue
        }
      }
    }

    function extractValue(declaration, lookup) {
      var parts = declaration.split(",");
      // try to get value from the lookup
      if (lookup) {
        var match = /var\(--(.*)(?:$|\))/.exec(parts[0]);
        if (match && match.length > 1) {
          var value = lookup[match[1]];
          if (value) {
            return value;
          }
        }
      }
      // get hard coded fallback value
      if (parts.length > 1) {
        var val = declaration.substring(declaration.indexOf(",") + 1);
        var fallback = val.substring(0, val.length - 1);

        // if the fallback is another variable, resolve the value recursively
        if (fallback.indexOf("var(") != -1) {
          return extractValue(fallback, lookup);
        }
        return fallback;
      }
    }

    function replaceBlobUrlSubresources(css) {
      var anchor = document.createElement("a");
      return css.replace(
        /\b(url\s*\(\s*['"]?)([^)"']+)(['"]?\))/g,
        function (match, left, url, right) {
          anchor.href = url;
          return left + anchor.href + right;
        }
      );
    }

    while ((result = VAR_PATTERN.exec(css))) {
      output.push(css.substring(startIndex, result.index));
      startIndex = result.index;

      var endIndex = startIndex + findVarEnd(css.substring(startIndex));
      var declaration = css.substring(startIndex, endIndex);
      var value = extractValue(declaration, varLookup);

      if (value) {
        output.push(value);
      } else {
        output.push(declaration);
      }
      startIndex = endIndex;
    }

    if (startIndex === 0) {
      return replaceBlobUrlSubresources(css);
    }

    output.push(css.substring(startIndex));

    return replaceBlobUrlSubresources(output.join(""));
  }

  function injectStyles(linkEl, css) {
    var cssEl;

    if (auraConfig.applyCssVarPolyfillViaBlob) {
      var blob = new Blob([css], { type: "text/css" });
      cssEl = document.createElement("link");
      cssEl.addEventListener("load", onLoadStyleSheets);
      cssEl.addEventListener("error", onLoadStyleSheetsError);
      cssEl.setAttribute("rel", "stylesheet");
      cssEl.setAttribute("href", URL.createObjectURL(blob));
      linkEl.parentElement.insertBefore(cssEl, linkEl);
    } else {
      cssEl = document.createElement("style");
      cssEl.textContent = css;
      linkEl.parentElement.insertBefore(cssEl, linkEl);
      onLoadStyleSheets();
    }
  }

  function rewriteAndInjectCss(linkEl, source, varLookup) {
    var css = rewriteCssVars(source, varLookup);
    injectStyles(linkEl, css);
  }

  function loadViaAjax(linkEl, cssVariables) {
    var url = linkEl.getAttribute("data-href");
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("error", onLoadStyleSheetsError);
    xhr.addEventListener("load", function (e) {
      if (this.status === 200) {
        rewriteAndInjectCss(linkEl, xhr.responseText, cssVariables);
      } else {
        onLoadStyleSheets(e);
      }
    });
    xhr.open("GET", url);
    xhr.withCredentials = true;
    xhr.send();
  }

  window.Aura.rewriteCssVars = rewriteCssVars;
})();
