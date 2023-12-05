
## Query RealTimeEventSettings (Tooling)
```sql
SELECT
Id
,DurableId
,Metadata
,FullName
FROM RealTimeEventSettings

```

```json
{
  "size": 1,
  "totalSize": 1,
  "done": true,
  "queryLocator": null,
  "entityTypeName": "RealTimeEventSettings",
  "records": [
    {
      "attributes": {
        "type": "RealTimeEventSettings",
        "url": "/services/data/v58.0/tooling/sobjects/RealTimeEventSettings/bWRjLzBIRS9SZWFsVGltZUV2ZW50U2V0dGluZ3M%3D"
      },
      "Id": "000000000000000AAA",
      "DurableId": "bWRjLzBIRS9SZWFsVGltZUV2ZW50U2V0dGluZ3M=",
      "Metadata": {
        "realTimeEvents": [
          {
            "entityName": "ApiEvent",
            "isEnabled": true
          },
          {
            "entityName": "ApiEventStream",
            "isEnabled": true
          },
          {
            "entityName": "ApiAnomalyEventStore",
            "isEnabled": true
          },
          {
            "entityName": "ApiAnomalyEvent",
            "isEnabled": true
          },
          {
            "entityName": "BulkApiResultEventStore",
            "isEnabled": true
          },
          {
            "entityName": "BulkApiResultEvent",
            "isEnabled": true
          },
          {
            "entityName": "ConcurLongRunApexErrEvent",
            "isEnabled": true
          },
          {
            "entityName": "CredentialStuffingEventStore",
            "isEnabled": false
          },
          {
            "entityName": "CredentialStuffingEvent",
            "isEnabled": true
          },
          {
            "entityName": "FileEventStore",
            "isEnabled": false
          },
          {
            "entityName": "FileEvent",
            "isEnabled": false
          },
          {
            "entityName": "IdentityVerificationEvent",
            "isEnabled": false
          },
          {
            "entityName": "IdentityProviderEventStore",
            "isEnabled": false
          },
          {
            "entityName": "LightningUriEvent",
            "isEnabled": true
          },
          {
            "entityName": "LightningUriEventStream",
            "isEnabled": true
          },
          {
            "entityName": "ListViewEvent",
            "isEnabled": true
          },
          {
            "entityName": "ListViewEventStream",
            "isEnabled": true
          },
          {
            "entityName": "LoginEvent",
            "isEnabled": true
          },
          {
            "entityName": "LoginEventStream",
            "isEnabled": true
          },
          {
            "entityName": "LoginAsEvent",
            "isEnabled": false
          },
          {
            "entityName": "LoginAsEventStream",
            "isEnabled": false
          },
          {
            "entityName": "LogoutEvent",
            "isEnabled": false
          },
          {
            "entityName": "LogoutEventStream",
            "isEnabled": false
          },
          {
            "entityName": "PermissionSetEventStore",
            "isEnabled": false
          },
          {
            "entityName": "PermissionSetEvent",
            "isEnabled": false
          },
          {
            "entityName": "ReportEvent",
            "isEnabled": false
          },
          {
            "entityName": "ReportEventStream",
            "isEnabled": false
          },
          {
            "entityName": "ReportAnomalyEventStore",
            "isEnabled": false
          },
          {
            "entityName": "ReportAnomalyEvent",
            "isEnabled": false
          },
          {
            "entityName": "SessionHijackingEventStore",
            "isEnabled": false
          },
          {
            "entityName": "SessionHijackingEvent",
            "isEnabled": false
          },
          {
            "entityName": "UriEvent",
            "isEnabled": false
          },
          {
            "entityName": "UriEventStream",
            "isEnabled": false
          }
        ],
        "urls": null
      },
      "FullName": "RealTimeEvent"
    }
  ]
}
```
## Listen to the event: LightningUriEventStream
- Has EPT and PageUrl 

```
sfdx mohanc:streaming:sub  -u mohan.chinnappan.n.sel2@gmail.com -t '/event/LightningUriEventStream'

```
```json
{
    "schema": "yF6E8knapPAvywtc1N76Ig",
    "payload": {
        "DevicePlatform": "SFX:BROWSER:DESKTOP",
        "EventDate": "2023-12-05T11:46:13.000Z",
        "DeviceId": null,
        "PreviousPageUrl": "/lightning/o/Lead/list",
        "OsVersion": "10.15.7",
        "PreviousPageEntityId": null,
        "SdkVersion": null,
        "Operation": "Read",
        "EffectivePageTimeDeviationErrorType": null,
        "AppName": "one:one",
        "SdkAppType": null,
        "SdkAppVersion": null,
        "PageUrl": "/lightning/r/Lead/00Q8W00000eM5QfUAK/view",
        "CreatedById": "0058W00000CGsFSQA1",
        "HasEffectivePageTimeDeviation": false,
        "SessionKey": "xhKouL3zA4Y0nWJM",
        "UserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "EffectivePageTime": 1689,
        "EffectivePageTimeDeviationReason": null,
        "DeviceSessionId": "611610ce2d9cdbed",
        "RecordId": "00Q8W00000eM5QfUAK",
        "DeviceModel": null,
        "EventIdentifier": "65df867a-a791-4ccb-8eaf-421a9b3e54d2",
        "ConnectionType": null,
        "RelatedEventIdentifier": null,
        "PageStartTime": "2023-12-05T11:46:02.000Z",
        "OsName": "OSX",
        "Duration": 1691,
        "SourceIp": "Salesforce.com IP",
        "Username": "mohan.chinnappan.n.sel2@gmail.com",
        "UserId": "0058W00000BAlWSQA1",
        "CreatedDate": "2023-12-05T11:46:17.681Z",
        "PreviousPageAppName": "LightningSales",
        "PreviousPageEntityType": "Lead",
        "LoginKey": "qciwKAFsx1s/Uq0a",
        "UserType": "Standard",
        "SessionLevel": "STANDARD",
        "QueriedEntities": "Lead"
    },
    "event": {
        "EventUuid": "d968aef7-60cb-4a66-aa74-dcf437ed372d",
        "replayId": 7711177
    }
}
```
