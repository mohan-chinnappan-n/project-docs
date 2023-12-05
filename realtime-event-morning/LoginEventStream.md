
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
## Listen to the event: LoginEventStream
- Has EPT and PageUrl 

```
sfdx mohanc:streaming:sub  -u mohan.chinnappan.n.sel2@gmail.com -t '/event/LoginEventStream' 
```
```json
{
    "schema": "VEb7_SnuXFTJ7g1PLe_aYw",
    "payload": {
        "EventDate": "2023-12-05T12:00:57.000Z",
        "AuthServiceId": null,
        "CountryIso": null,
        "Platform": "Mac OSX",
        "EvaluationTime": 0,
        "CipherSuite": "ECDHE-RSA-AES256-GCM-SHA384",
        "PostalCode": null,
        "ClientVersion": "N/A",
        "LoginGeoId": "04F8W00008x1xIP",
        "LoginUrl": "d8w000004lymuuac-dev-ed.develop.my.salesforce.com",
        "LoginHistoryId": "0Ya8W0000CMszZ3SQJ",
        "LoginSubType": null,
        "CreatedById": "0058W00000CGsFSQA1",
        "SessionKey": null,
        "ApiType": "N/A",
        "AuthMethodReference": null,
        "LoginType": "Application",
        "PolicyOutcome": null,
        "Status": "Success",
        "AdditionalInfo": "{}",
        "ApiVersion": "N/A",
        "EventIdentifier": "8a1b3218-6405-451b-be62-e05e507fbac0",
        "RelatedEventIdentifier": null,
        "LoginLatitude": null,
        "City": null,
        "Subdivision": null,
        "SourceIp": "Salesforce.com IP",
        "Username": "mohan.chinnappan.n.sel2@gmail.com",
        "UserId": "0058W00000BAlWSQA1",
        "CreatedDate": "2023-12-05T12:01:05.558Z",
        "Country": null,
        "LoginLongitude": null,
        "TlsProtocol": "TLS 1.2",
        "LoginKey": "35wFTPL4jVZ0ne73",
        "Application": "Browser",
        "UserType": "Standard",
        "PolicyId": null,
        "HttpMethod": "POST",
        "SessionLevel": "STANDARD",
        "Browser": "Chrome 119"
    },
    "event": {
        "EventUuid": "59ebff93-6ac2-42ee-b1a6-3ded4d03e4e4",
        "replayId": 7711181
    }
}
```
