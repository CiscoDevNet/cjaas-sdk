# \JourneyApi

All URIs are relative to *https://cjaas-devus1.azurewebsites.net*

| Method                                                                         | HTTP request                             | Description                                                   |
| ------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------- |
| [**create_journey_action**](JourneyApi.md#create_journey_action)               | **post** /v1/journey/actions             | Create/Replace Journey Action.                                |
| [**create_profile_view_template**](JourneyApi.md#create_profile_view_template) | **post** /v1/journey/views/templates     | Create Profile View Template                                  |
| [**create_view**](JourneyApi.md#create_view)                                   | **post** /v1/journey/views               | Starts job to generate Progressive Profile View for a person. |
| [**delete_journey_action**](JourneyApi.md#delete_journey_action)               | **delete** /v1/journey/actions/{id}      | Soft delete Journey Action.                                   |
| [**delete_profile_view_template**](JourneyApi.md#delete_profile_view_template) | **delete** /v1/journey/views/templates   | Delete Profile View Template                                  |
| [**get_journey_action**](JourneyApi.md#get_journey_action)                     | **get** /v1/journey/actions/{id}         | Get specific Journey Action.                                  |
| [**get_journey_action_list**](JourneyApi.md#get_journey_action_list)           | **get** /v1/journey/actions              | Get all Journey Actions.                                      |
| [**get_profile_view_templates**](JourneyApi.md#get_profile_view_templates)     | **get** /v1/journey/views/templates      | Get Profile View Templates                                    |
| [**get_report_by_name**](JourneyApi.md#get_report_by_name)                     | **get** /v1/journey/reports/{reportname} | Get Report by Name                                            |
| [**get_view_status**](JourneyApi.md#get_view_status)                           | **get** /v1/journey/views                | Get the status of a Progressive Profile View Job.             |
| [**post_events**](JourneyApi.md#post_events)                                   | **post** /events/v1/journey              | Post Events                                                   |
| [**profile_builder**](JourneyApi.md#profile_builder)                           | **post** /v1/journey/profileview         | A Profile is a bespoke view of a customer's journey.          |
| [**read_events**](JourneyApi.md#read_events)                                   | **get** /events/v1/journey               | Read Events                                                   |
| [**read_events_by_identity**](JourneyApi.md#read_events_by_identity)           | **get** /events/v1/journey/{identity}    | Read Events By Identity                                       |
| [**read_streams**](JourneyApi.md#read_streams)                                 | **get** /v1/journey/streams              | Read Streams                                                  |
| [**read_streams_by_person**](JourneyApi.md#read_streams_by_person)             | **get** /v1/journey/streams/{person}     | Read Streams by Person                                        |

## create_journey_action

> crate::models::HttpSimpleMessageObjectResponse create_journey_action(authorization, body)
> Create/Replace Journey Action.

Create/Replace Journey Action. SAS Token Requirements: - ss=action - sp=w

### Parameters

| Name              | Type                                  | Description   | Required   | Notes |
| ----------------- | ------------------------------------- | ------------- | ---------- | ----- |
| **authorization** | **String**                            | SAS Signature | [required] |
| **body**          | [**JourneyAction**](JourneyAction.md) |               | [required] |

### Return type

[**crate::models::HttpSimpleMessageObjectResponse**](httpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## create_profile_view_template

> crate::models::HttpSimpleMessageObjectResponse create_profile_view_template(authorization, body)
> Create Profile View Template

Create Profile View Template. SAS Token Requirements: - ss=profile - sp=w

### Parameters

| Name              | Type                                                                    | Description    | Required   | Notes |
| ----------------- | ----------------------------------------------------------------------- | -------------- | ---------- | ----- |
| **authorization** | **String**                                                              | SAS Signature. | [required] |
| **body**          | [**ProfileViewTemplateCreateModel**](ProfileViewTemplateCreateModel.md) |                | [required] |

### Return type

[**crate::models::HttpSimpleMessageObjectResponse**](httpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## create_view

> crate::models::CreateProgressiveProfileViewJobResponseModel create_view(authorization, view_id, person_id, search_filter, skip_cache, X_CACHE_MAXAGE_HOUR, X_CACHE_MAXAGE_MIN)
> Starts job to generate Progressive Profile View for a person.

Starts job to generate Progressive Profile View for a person. The HTTP response is intended to be compatible with the Polling Consumer Pattern. SAS Token Requirements: - ss=profile - p=w

### Parameters

| Name                    | Type               | Description                                                                                                            | Required   | Notes |
| ----------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------- | ---------- | ----- |
| **authorization**       | **String**         | SAS Signature.                                                                                                         | [required] |
| **view_id**             | **String**         | identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization.                    | [required] |
| **person_id**           | Option<**String**> | identifies the Person, for which the Profile View needs to be created.                                                 |            |
| **search_filter**       | Option<**String**> | OData Filter expressions that will be used to search tapes. Example: type eq 'Add To Cart'                             |            |
| **skip_cache**          | Option<**bool**>   | If set to true, will indicate to not return any existing cached Profile View (default: false)                          |            |
| **X_CACHE_MAXAGE_HOUR** | Option<**i32**>    | Controls the maximum age (in hours) of an existing cached view, that the API can return for this request. Default (0)  |            |
| **X_CACHE_MAXAGE_MIN**  | Option<**i32**>    | Controls the maximum age (in hours) of an existing cached view, that the API can return for this request. Default (15) |            |

### Return type

[**crate::models::CreateProgressiveProfileViewJobResponseModel**](createProgressiveProfileViewJobResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## delete_journey_action

> crate::models::HttpSimpleMessageObjectResponse delete_journey_action(authorization, id)
> Soft delete Journey Action.

Soft delete Journey Action. SAS Token Requirements: - ss=action - sp=w

### Parameters

| Name              | Type       | Description                           | Required   | Notes |
| ----------------- | ---------- | ------------------------------------- | ---------- | ----- |
| **authorization** | **String** | SAS Signature.                        | [required] |
| **id**            | **String** | Identifies a specific Journey Action. | [required] |

### Return type

[**crate::models::HttpSimpleMessageObjectResponse**](httpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## delete_profile_view_template

> crate::models::HttpSimpleMessageObjectResponse delete_profile_view_template(authorization, id)
> Delete Profile View Template

Delete Profile View Template. SAS Token Requirements: - ss=profile - sp=w

### Parameters

| Name              | Type               | Description                                                                                         | Required   | Notes |
| ----------------- | ------------------ | --------------------------------------------------------------------------------------------------- | ---------- | ----- |
| **authorization** | **String**         | SAS Signature.                                                                                      | [required] |
| **id**            | Option<**String**> | Identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization. |            |

### Return type

[**crate::models::HttpSimpleMessageObjectResponse**](httpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## get_journey_action

> crate::models::HttpGenericObjectResponseJourneyAction get_journey_action(authorization, id)
> Get specific Journey Action.

Get specific Journey Action. SAS Token Requirements: - ss=action - sp=r

### Parameters

| Name              | Type       | Description                           | Required   | Notes |
| ----------------- | ---------- | ------------------------------------- | ---------- | ----- |
| **authorization** | **String** | SAS Signature                         | [required] |
| **id**            | **String** | Identifies a specific Journey Action. | [required] |

### Return type

[**crate::models::HttpGenericObjectResponseJourneyAction**](httpGenericObjectResponse_journeyAction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## get_journey_action_list

> crate::models::HttpGenericListObjectResponseJourneyAction get_journey_action_list(authorization, template_id)
> Get all Journey Actions.

Get all Journey Actions. SAS Token Requirements: - ss=action - sp=r

### Parameters

| Name              | Type               | Description            | Required   | Notes |
| ----------------- | ------------------ | ---------------------- | ---------- | ----- |
| **authorization** | **String**         | SAS Signature.         | [required] |
| **template_id**   | Option<**String**> | Identifies a template. |            |

### Return type

[**crate::models::HttpGenericListObjectResponseJourneyAction**](httpGenericListObjectResponse_journeyAction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## get_profile_view_templates

> crate::models::HttpGenericListObjectResponseProfileViewTemplate get_profile_view_templates(authorization, id)
> Get Profile View Templates

Get all/specific Profile View Templates, available for usage by the CJaaS Org and Organization. SAS Token Requirements: - ss=profile - sp=r

### Parameters

| Name              | Type               | Description                                                                                         | Required   | Notes |
| ----------------- | ------------------ | --------------------------------------------------------------------------------------------------- | ---------- | ----- |
| **authorization** | **String**         | SAS Signature.                                                                                      | [required] |
| **id**            | Option<**String**> | identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization. |            |

### Return type

[**crate::models::HttpGenericListObjectResponseProfileViewTemplate**](httpGenericListObjectResponse_profileViewTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## get_report_by_name

> crate::models::HttpReportObjectResponse get_report_by_name(authorization, reportname)
> Get Report by Name

Get a certain usage report. SAS Token Requirements: - ss=account - sp=r

### Parameters

| Name              | Type       | Description                      | Required     | Notes      |
| ----------------- | ---------- | -------------------------------- | ------------ | ---------- |
| **authorization** | **String** | SAS Signature                    | [required]   |
| **reportname**    | **String** | Report Name Options: yearlyusage | monthlyusage | [required] |

### Return type

[**crate::models::HttpReportObjectResponse**](httpReportObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## get_view_status

> get_view_status(authorization, view_id, instance_id, person_id, search_filter)
> Get the status of a Progressive Profile View Job.

Get the status of a Progressive Profile View Job. SAS Token Requirements: - ss=profile - p=r

### Parameters

| Name              | Type               | Description                                                                                         | Required   | Notes |
| ----------------- | ------------------ | --------------------------------------------------------------------------------------------------- | ---------- | ----- |
| **authorization** | **String**         | SAS Signature.                                                                                      | [required] |
| **view_id**       | **String**         | identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization. | [required] |
| **instance_id**   | **String**         | Identifies the instance of the job.                                                                 | [required] |
| **person_id**     | Option<**String**> | identifies the Person, for which the Profile View needs to be created.                              |            |
| **search_filter** | Option<**String**> | OData Filter expressions that will be used to search tapes. Example: type eq 'Add To Cart'          |            |

### Return type

(empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## post_events

> crate::models::HttpSimpleMessageObjectResponse post_events(authorization, body)
> Post Events

API accepts events that describe what occurred, when, and by whom on every interaction across touch points and applications. Data Ingestion is based on Cloud Events specification for describing event data in a common way. API accepts data in the form of POST with support for Header based authorization. SAS Token Requirements: - ss=ds - sp=w

### Parameters

| Name              | Type                            | Description   | Required   | Notes |
| ----------------- | ------------------------------- | ------------- | ---------- | ----- |
| **authorization** | **String**                      | SAS Signature | [required] |
| **body**          | [**CloudEvent**](CloudEvent.md) |               | [required] |

### Return type

[**crate::models::HttpSimpleMessageObjectResponse**](httpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/cloudevents+json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## profile_builder

> crate::models::ProfileViewQueryResponse profile_builder(authorization, person_id, body)
> A Profile is a bespoke view of a customer's journey.

The profile view is created based on a view template that is provided as input. **Sample request**: _GET /v1/journey/profileview?customer=123XX_ { &nbsp;&nbsp;&nbsp;&nbsp;\"Name\": \"Test Template 2\", &nbsp;&nbsp;&nbsp;&nbsp;\"DatapointCount\": 7, &nbsp;&nbsp;&nbsp;&nbsp;\"Attributes\": [{ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Version\": \"0.1\", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Event\": \"Add to Cart\", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Metadata\": \"sku\", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Limit\": 3, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"DisplayName\": \"Items added\", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Verbose\": false, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"AggregationMode\": \"Value\" &nbsp;&nbsp;&nbsp;&nbsp;}] }.

### Parameters

| Name              | Type                                                            | Description                                                   | Required   | Notes |
| ----------------- | --------------------------------------------------------------- | ------------------------------------------------------------- | ---------- | ----- |
| **authorization** | **String**                                                      | SAS Signature.                                                | [required] |
| **person_id**     | **String**                                                      | Identifies the person for whom the profile view is requested. | [required] |
| **body**          | [**ProfileViewBuilderTemplate**](ProfileViewBuilderTemplate.md) |                                                               | [required] |

### Return type

[**crate::models::ProfileViewQueryResponse**](profileViewQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## read_events

> crate::models::TapeReaderResponse read_events(authorization, filter, top)
> Read Events

The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels, across mediums. Tape is an append-only, immutable data ledger that can be queried to retrieve snapshot of latest events that moment in time or historically to play-back events as they occurred to understand or analyze Journeys using ML/AI models. SAS Token Requirements: - ss=tape - sp=r

### Parameters

| Name              | Type               | Description                                                              | Required   | Notes |
| ----------------- | ------------------ | ------------------------------------------------------------------------ | ---------- | ----- |
| **authorization** | **String**         | SAS Signature                                                            | [required] |
| **filter**        | Option<**String**> | oData Filter Expressions to Slice/Dice Search, ex: type eq 'Add To Cart' |            |
| **top**           | Option<**i32**>    | Limit to return latest x events                                          |            |

### Return type

[**crate::models::TapeReaderResponse**](tapeReaderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## read_events_by_identity

> crate::models::TapeReaderResponse read_events_by_identity(authorization, identity, filter, top)
> Read Events By Identity

The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums. Tape is a append-only, immutable data ledger that can be queried to retrieve snapshot of latest events that moment in time or historically to play-back events as they occurred to understand or analyze Journeys using ML/AI models. SAS Token Requirements: - ss=tape - sp=r

### Parameters

| Name              | Type               | Description                                                              | Required   | Notes |
| ----------------- | ------------------ | ------------------------------------------------------------------------ | ---------- | ----- |
| **authorization** | **String**         | SAS Signature                                                            | [required] |
| **identity**      | **String**         | Unique Identity to filter by                                             | [required] |
| **filter**        | Option<**String**> | oData Filter Expressions to Slice/Dice Search, ex: type eq 'Add To Cart' |            |
| **top**           | Option<**i32**>    | Limit to return latest x events                                          |            |

### Return type

[**crate::models::TapeReaderResponse**](tapeReaderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## read_streams

> String read_streams(sig, authorization)
> Read Streams

Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination. Optionally accepts $filter to slice/dice further (ex: type eq 'Add to Cart'). SAS Token Requirements: - ss=stream - sp=r

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
- **Accept**: text/event-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## read_streams_by_person

> String read_streams_by_person(person, sig, authorization)
> Read Streams by Person

Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination. Optionally accepts $filter to slice/dice further (ex: type eq 'Add to Cart'). SAS Token Requirements: - ss=stream - sp=r

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
- **Accept**: text/event-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
