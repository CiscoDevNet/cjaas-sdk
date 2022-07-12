# \DefaultApi

All URIs are relative to *https://trycjaas.exp.bz*

| Method                                                                         | HTTP request                             | Description                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**clear_tape**](DefaultApi.md#clear_tape)                                     | **delete** /ClearTape                    | Delete All Events Collected within Namespace(i.e Org)                                                                                                                                                                |
| [**clear_tape_by_person**](DefaultApi.md#clear_tape_by_person)                 | **delete** /ClearTape/{person}           | Delete Events Collected on Specific Person                                                                                                                                                                           |
| [**data_sink**](DefaultApi.md#data_sink)                                       | **post** /events/v1/journey              | Journey Events accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications                                                                                  |
| [**data_sink_get**](DefaultApi.md#data_sink_get)                               | **get** /DataSink                        | Data sink accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications                                                                                       |
| [**identities**](DefaultApi.md#identities)                                     | **get** /Identities                      | Journeys are built around a concept of Identity. An identity shapes how Journey is connected together. Get Identity by Id                                                                                            |
| [**identities_alias**](DefaultApi.md#identities_alias)                         | **get** /Identities/alias                | Tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape                                                                                |
| [**identities_delete**](DefaultApi.md#identities_delete)                       | **delete** /Identities                   | Delete a Identity                                                                                                                                                                                                    |
| [**journeys**](DefaultApi.md#journeys)                                         | **get** /Journey                         | The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums                                                                                               |
| [**journeys_by_person**](DefaultApi.md#journeys_by_person)                     | **get** /Journey/{person}                | The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums                                                                                               |
| [**keys**](DefaultApi.md#keys)                                                 | **get** /Keys/{operation}/{id}           | Create or Rotate or Delete a Specific Key                                                                                                                                                                            |
| [**keys_delete**](DefaultApi.md#keys_delete)                                   | **delete** /Keys/{id}                    | CJaaS APIs are designed to be accessed with Shared Access Signature(SAS) to resources without transmitting any actual sensitive keys(hello! API Keys) or even exchanging a password for a proxy such as oAuth bearer |
| [**keys_list**](DefaultApi.md#keys_list)                                       | **get** /Keys/list                       | List All SAS Keys                                                                                                                                                                                                    |
| [**online_orchestration_trigger**](DefaultApi.md#online_orchestration_trigger) | **post** /Orchestration/Trigger/{person} | Trigger a Online Orchestration such as Webex Walkin or Display Offer Or Chat Bot to intercept and modify your Customer's Journey Midway                                                                              |
| [**profile_builder**](DefaultApi.md#profile_builder)                           | **post** /Profileview                    | A Profile is a bespoke view of a customer's journey                                                                                                                                                                  |
| [**real_time_sse**](DefaultApi.md#real_time_sse)                               | **get** /Real-time                       | Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination   |
| [**real_time_sse_person**](DefaultApi.md#real_time_sse_person)                 | **get** /Real-time/{person}              | Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination   |
| [**settings**](DefaultApi.md#settings)                                         | **get** /Settings                        | API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints                                                                                                    |
| [**update_settings**](DefaultApi.md#update_settings)                           | **post** /Settings                       | API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints                                                                                                    |
| [**webex_walkin_sse**](DefaultApi.md#webex_walkin_sse)                         | **get** /Walkin/{person}                 | SSE Channel for Webex Walkin Orchestration to Modify Journeys Midway                                                                                                                                                 |

## clear_tape

> String clear_tape(authorization)
> Delete All Events Collected within Namespace(i.e Org)

Delete All Events Collected for Org

### Parameters

| Name              | Type       | Description   | Required   | Notes |
| ----------------- | ---------- | ------------- | ---------- | ----- |
| **authorization** | **String** | SAS Signature | [required] |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## clear_tape_by_person

> String clear_tape_by_person(authorization, person)
> Delete Events Collected on Specific Person

Delete Events on Specific Person

### Parameters

| Name              | Type       | Description                   | Required   | Notes |
| ----------------- | ---------- | ----------------------------- | ---------- | ----- |
| **authorization** | **String** | SAS Signature                 | [required] |
| **person**        | **String** | Unique Person ID to filter by | [required] |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## data_sink

> data_sink(authorization, body)
> Data sink accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications

Data Ingestion is based on Cloud Events specification for describing event data in a common way. Data Sink accepts data in the form of POST or GET with support for both Header based authorization and as-well via Query string

### Parameters

| Name              | Type                            | Description   | Required   | Notes |
| ----------------- | ------------------------------- | ------------- | ---------- | ----- |
| **authorization** | **String**                      | SAS Signature | [required] |
| **body**          | [**CloudEvent**](CloudEvent.md) |               | [required] |

### Return type

(empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/cloudevents+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## data_sink_get

> data_sink_get(sig, data)
> Data sink accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications

Data Ingestion is based on Cloud Events specification for describing event data in a common way. Data Sink accepts data in the form of POST or GET with support for both Header based authorization and as-well via Query string

### Parameters

| Name     | Type       | Description                                 | Required   | Notes |
| -------- | ---------- | ------------------------------------------- | ---------- | ----- |
| **sig**  | **String** | SAS Signature within QueryString            | [required] |
| **data** | **String** | CloudEvent Serialized as Base64 UTF8 String | [required] |

### Return type

(empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## identities

> String identities(authorization, id)
> Journeys are built around a concept of Identity. An identity shapes how Journey is connected together. Get Identity by Id

Every event in the Journey has an Identity of the originating individual, different channels can have their own unique Identities, API consumers can tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape. Once aliased, all duplicates are treated as a single Identity for any purpose (Query or View)

### Parameters

| Name              | Type       | Description                    | Required   | Notes |
| ----------------- | ---------- | ------------------------------ | ---------- | ----- |
| **authorization** | **String** | SAS Signature                  | [required] |
| **id**            | **String** | Unique Person ID to clear data | [required] |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## identities_alias

> String identities_alias(authorization, id, alias)
> Tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape

Every event in the Journey has an Identity of the originating individual, different channels can have their own unique Identities, API consumers can tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape. Once aliased, all duplicates are treated as a single Identity for any purpose (Query or View)

### Parameters

| Name              | Type               | Description                                 | Required   | Notes |
| ----------------- | ------------------ | ------------------------------------------- | ---------- | ----- |
| **authorization** | **String**         | SAS Signature                               | [required] |
| **id**            | **String**         | Unique Person ID to apply action/query upon | [required] |
| **alias**         | Option<**String**> | Unique Person ID to apply action/query upon |            |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## identities_delete

> String identities_delete(authorization, id)
> Delete a Identity

Remove a soft merge

### Parameters

| Name              | Type       | Description                    | Required   | Notes |
| ----------------- | ---------- | ------------------------------ | ---------- | ----- |
| **authorization** | **String** | SAS Signature                  | [required] |
| **id**            | **String** | Unique Person ID to clear data | [required] |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## journeys

> Vec<crate::models::CloudEvent> journeys(authorization, filter, top)
> The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums

Tape is a append-only, immutable data ledger that can be queried to retrieve snapshot of latest events that moment in time or historically to play-back events as they occurred to understand or analyze Journeys using ML/AI models

### Parameters

| Name              | Type               | Description                                                              | Required   | Notes |
| ----------------- | ------------------ | ------------------------------------------------------------------------ | ---------- | ----- |
| **authorization** | **String**         | SAS Signature                                                            | [required] |
| **filter**        | Option<**String**> | oData Filter Expressions to Slice/Dice Search, ex: type eq 'Add To Cart' |            |
| **top**           | Option<**i32**>    | Limit to return latest x events                                          |            |

### Return type

[**Vec<crate::models::CloudEvent>**](cloudEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## journeys_by_person

> Vec<crate::models::CloudEvent> journeys_by_person(authorization, person, filter, top)
> The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums

Tape is a append-only, immutable data ledger that can be queried to retrieve snapshot of latest events that moment in time or historically to play-back events as they occurred to understand or analyze Journeys using ML/AI models

### Parameters

| Name              | Type               | Description                                                              | Required   | Notes |
| ----------------- | ------------------ | ------------------------------------------------------------------------ | ---------- | ----- |
| **authorization** | **String**         | SAS Signature                                                            | [required] |
| **person**        | **String**         | Unique Person ID to filter by                                            | [required] |
| **filter**        | Option<**String**> | oData Filter Expressions to Slice/Dice Search, ex: type eq 'Add To Cart' |            |
| **top**           | Option<**i32**>    | Limit to return latest x events                                          |            |

### Return type

[**Vec<crate::models::CloudEvent>**](cloudEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## keys

> String keys(authorization, operation, id)
> Create or Rotate or Delete a Specific Key

With Shared Access Signatures API consumers get choice of granular control on how to access API(paths), which resources to scope(ex:datasink), with what permissions the request needs(read / write), from which source (ex: website) and how long(10s to 10 years) among many other parameters.

### Parameters

| Name              | Type       | Description                                  | Required   | Notes |
| ----------------- | ---------- | -------------------------------------------- | ---------- | ----- |
| **authorization** | **String** | SAS Signature                                | [required] |
| **operation**     | **String** | Key Operation Type: list or create or rotate | [required] |
| **id**            | **String** | Unique Key name as set                       | [required] |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## keys_delete

> String keys_delete(authorization, id)
> CJaaS APIs are designed to be accessed with Shared Access Signature(SAS) to resources without transmitting any actual sensitive keys(hello! API Keys) or even exchanging a password for a proxy such as oAuth bearer

With Shared Access Signatures API consumers get choice of granular control on how to access API(paths), which resources to scope(ex:datasink), with what permissions the request needs(read / write), from which source (ex: website) and how long(10s to 10 years) among many other parameters.

### Parameters

| Name              | Type       | Description               | Required   | Notes |
| ----------------- | ---------- | ------------------------- | ---------- | ----- |
| **authorization** | **String** | SAS Signature             | [required] |
| **id**            | **String** | Unique Key name to delete | [required] |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## keys_list

> String keys_list(authorization)
> List All SAS Keys

With Shared Access Signatures API consumers get choice of granular control on how to access API(paths), which resources to scope(ex:datasink), with what permissions the request needs(read / write), from which source (ex: website) and how long(10s to 10 years) among many other parameters.

### Parameters

| Name              | Type       | Description   | Required   | Notes |
| ----------------- | ---------- | ------------- | ---------- | ----- |
| **authorization** | **String** | SAS Signature | [required] |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## online_orchestration_trigger

> String online_orchestration_trigger(person, body, sig, authorization)
> Trigger a Online Orchestration such as Webex Walkin or Display Offer Or Chat Bot to intercept and modify your Customer's Journey Midway

Trigger a Online Orchestration such as Webex Walkin or Display Offer Or Chat Bot to modify your Customer's Journey Midway

### Parameters

| Name              | Type                                              | Description                               | Required   | Notes |
| ----------------- | ------------------------------------------------- | ----------------------------------------- | ---------- | ----- |
| **person**        | **String**                                        | Unique Person ID to filter by             | [required] |
| **body**          | [**OnlineOrchestration**](OnlineOrchestration.md) |                                           | [required] |
| **sig**           | Option<**String**>                                | Optional SAS Signature within QueryString |            |
| **authorization** | Option<**String**>                                | Optional SAS Signature within Header      |            |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## profile_builder

> crate::models::ProfileViewQueryResponse profile_builder(authorization, person_id, body)
> A Profile is a bespoke view of a customer's journey

The profile view is created based on a view template that is provided as input. **Sample request**: _GET /profileview?customer=123XX_ { &nbsp;&nbsp;&nbsp;&nbsp;\"Name\": \"Test Template 2\", &nbsp;&nbsp;&nbsp;&nbsp;\"DatapointCount\": 7, &nbsp;&nbsp;&nbsp;&nbsp;\"Attributes\": [{ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Version\": \"0.1\", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Event\": \"Add to Cart\", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Metadata\": \"sku\", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Limit\": 3, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"DisplayName\": \"Items added\", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"AggregationMode\": \"Value\" &nbsp;&nbsp;&nbsp;&nbsp;}] }

### Parameters

| Name              | Type                                                            | Description                                                  | Required   | Notes |
| ----------------- | --------------------------------------------------------------- | ------------------------------------------------------------ | ---------- | ----- |
| **authorization** | **String**                                                      | SAS Signature                                                | [required] |
| **person_id**     | **String**                                                      | Identifies the person for whom the profile view is requested | [required] |
| **body**          | [**ProfileViewBuilderTemplate**](ProfileViewBuilderTemplate.md) |                                                              | [required] |

### Return type

[**crate::models::ProfileViewQueryResponse**](profileViewQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## real_time_sse

> String real_time_sse(sig, authorization)
> Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination

Optionally accepts $filter to slice/dice further (ex: type eq 'Add to Cart')

### Parameters

| Name              | Type               | Description                               | Required | Notes |
| ----------------- | ------------------ | ----------------------------------------- | -------- | ----- |
| **sig**           | Option<**String**> | Optional SAS Signature within QueryString |          |
| **authorization** | Option<**String**> | Optional SAS Signature within Header      |          |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## real_time_sse_person

> String real_time_sse_person(person, sig, authorization)
> Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination

Optionally accepts $filter to slice/dice further (ex: type eq 'Add to Cart')

### Parameters

| Name              | Type               | Description                               | Required   | Notes |
| ----------------- | ------------------ | ----------------------------------------- | ---------- | ----- |
| **person**        | **String**         | Unique Person ID to filter by             | [required] |
| **sig**           | Option<**String**> | Optional SAS Signature within QueryString |            |
| **authorization** | Option<**String**> | Optional SAS Signature within Header      |            |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## settings

> crate::models::AccountSettings settings(authorization)
> API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints

Update, get data retention, destinations and more

### Parameters

| Name              | Type       | Description   | Required   | Notes |
| ----------------- | ---------- | ------------- | ---------- | ----- |
| **authorization** | **String** | SAS Signature | [required] |

### Return type

[**crate::models::AccountSettings**](accountSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## update_settings

> crate::models::AccountSettings update_settings(authorization, body)
> API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints

Update, get data retention, destinations and more

### Parameters

| Name              | Type                                      | Description   | Required   | Notes |
| ----------------- | ----------------------------------------- | ------------- | ---------- | ----- |
| **authorization** | **String**                                | SAS Signature | [required] |
| **body**          | [**AccountSettings**](AccountSettings.md) |               | [required] |

### Return type

[**crate::models::AccountSettings**](accountSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## webex_walkin_sse

> String webex_walkin_sse(person, sig, authorization)
> SSE Channel for Webex Walkin Orchestration to Modify Journeys Midway

Major browsers offer built-in class EventSource, with the EventSource object API consumers can automatically establishes a persistent connection and transparently allow for automatic reconnects with tunable retry timeout & Message ids to resume events.

### Parameters

| Name              | Type               | Description                               | Required   | Notes |
| ----------------- | ------------------ | ----------------------------------------- | ---------- | ----- |
| **person**        | **String**         | Unique Person ID to filter by             | [required] |
| **sig**           | Option<**String**> | Optional SAS Signature within QueryString |            |
| **authorization** | Option<**String**> | Optional SAS Signature within Header      |            |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
