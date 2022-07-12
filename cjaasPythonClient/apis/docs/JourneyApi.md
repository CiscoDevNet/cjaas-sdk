# swagger_client.JourneyApi

All URIs are relative to *https://cjaas-devus1.azurewebsites.net/*

| Method                                                                         | HTTP request                             | Description                                                   |
| ------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------- |
| [**create_journey_action**](JourneyApi.md#create_journey_action)               | **POST** /v1/journey/actions             | Create/Replace Journey Action.                                |
| [**create_profile_view_template**](JourneyApi.md#create_profile_view_template) | **POST** /v1/journey/views/templates     | Create Profile View Template                                  |
| [**create_view**](JourneyApi.md#create_view)                                   | **POST** /v1/journey/views               | Starts job to generate Progressive Profile View for a person. |
| [**delete_journey_action**](JourneyApi.md#delete_journey_action)               | **DELETE** /v1/journey/actions/{id}      | Soft delete Journey Action.                                   |
| [**delete_profile_view_template**](JourneyApi.md#delete_profile_view_template) | **DELETE** /v1/journey/views/templates   | Delete Profile View Template                                  |
| [**get_journey_action**](JourneyApi.md#get_journey_action)                     | **GET** /v1/journey/actions/{id}         | Get specific Journey Action.                                  |
| [**get_journey_action_list**](JourneyApi.md#get_journey_action_list)           | **GET** /v1/journey/actions              | Get all Journey Actions.                                      |
| [**get_profile_view_templates**](JourneyApi.md#get_profile_view_templates)     | **GET** /v1/journey/views/templates      | Get Profile View Templates                                    |
| [**get_report_by_name**](JourneyApi.md#get_report_by_name)                     | **GET** /v1/journey/reports/{reportname} | Get Report by Name                                            |
| [**get_view_status**](JourneyApi.md#get_view_status)                           | **GET** /v1/journey/views                | Get the status of a Progressive Profile View Job.             |
| [**post_events**](JourneyApi.md#post_events)                                   | **POST** /events/v1/journey              | Post Events                                                   |
| [**profile_builder**](JourneyApi.md#profile_builder)                           | **POST** /v1/journey/profileview         | A Profile is a bespoke view of a customer&#x27;s journey.     |
| [**read_events**](JourneyApi.md#read_events)                                   | **GET** /events/v1/journey               | Read Events                                                   |
| [**read_events_by_identity**](JourneyApi.md#read_events_by_identity)           | **GET** /events/v1/journey/{identity}    | Read Events By Identity                                       |
| [**read_streams**](JourneyApi.md#read_streams)                                 | **GET** /v1/journey/streams              | Read Streams                                                  |
| [**read_streams_by_person**](JourneyApi.md#read_streams_by_person)             | **GET** /v1/journey/streams/{person}     | Read Streams by Person                                        |

# **create_journey_action**

> HttpSimpleMessageObjectResponse create_journey_action(body, authorization)

Create/Replace Journey Action.

Create/Replace Journey Action. SAS Token Requirements: - ss=action - sp=w

### Example

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
body = swagger_client.JourneyAction() # JourneyAction |
authorization = 'authorization_example' # str | SAS Signature

try:
    # Create/Replace Journey Action.
    api_response = api_instance.create_journey_action(body, authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->create_journey_action: %s\n" % e)
```

### Parameters

| Name              | Type                                  | Description   | Notes |
| ----------------- | ------------------------------------- | ------------- | ----- |
| **body**          | [**JourneyAction**](JourneyAction.md) |               |
| **authorization** | **str**                               | SAS Signature |

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_profile_view_template**

> HttpSimpleMessageObjectResponse create_profile_view_template(body, authorization)

Create Profile View Template

Create Profile View Template. SAS Token Requirements: - ss=profile - sp=w

### Example

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
body = swagger_client.ProfileViewTemplateCreateModel() # ProfileViewTemplateCreateModel |
authorization = 'authorization_example' # str | SAS Signature.

try:
    # Create Profile View Template
    api_response = api_instance.create_profile_view_template(body, authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->create_profile_view_template: %s\n" % e)
```

### Parameters

| Name              | Type                                                                    | Description    | Notes |
| ----------------- | ----------------------------------------------------------------------- | -------------- | ----- |
| **body**          | [**ProfileViewTemplateCreateModel**](ProfileViewTemplateCreateModel.md) |                |
| **authorization** | **str**                                                                 | SAS Signature. |

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_view**

> CreateProgressiveProfileViewJobResponseModel create_view(authorization, view_id, person_id=person_id, search_filter=search_filter, skip_cache=skip_cache, x_cache_maxage_hour=x_cache_maxage_hour, x_cache_maxage_min=x_cache_maxage_min)

Starts job to generate Progressive Profile View for a person.

Starts job to generate Progressive Profile View for a person. The HTTP response is intended to be compatible with the Polling Consumer Pattern. SAS Token Requirements: - ss=profile - p=w

### Example

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
authorization = 'authorization_example' # str | SAS Signature.
view_id = 'view_id_example' # str | identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization.
person_id = 'person_id_example' # str | identifies the Person, for which the Profile View needs to be created. (optional)
search_filter = 'search_filter_example' # str | OData Filter expressions that will be used to search tapes. Example: type eq 'Add To Cart' (optional)
skip_cache = true # bool | If set to true, will indicate to not return any existing cached Profile View (default: false) (optional)
x_cache_maxage_hour = 56 # int | Controls the maximum age (in hours) of an existing cached view, that the API can return for this request. Default (0) (optional)
x_cache_maxage_min = 56 # int | Controls the maximum age (in hours) of an existing cached view, that the API can return for this request. Default (15) (optional)

try:
    # Starts job to generate Progressive Profile View for a person.
    api_response = api_instance.create_view(authorization, view_id, person_id=person_id, search_filter=search_filter, skip_cache=skip_cache, x_cache_maxage_hour=x_cache_maxage_hour, x_cache_maxage_min=x_cache_maxage_min)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->create_view: %s\n" % e)
```

### Parameters

| Name                    | Type     | Description                                                                                                            | Notes      |
| ----------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------- | ---------- |
| **authorization**       | **str**  | SAS Signature.                                                                                                         |
| **view_id**             | **str**  | identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization.                    |
| **person_id**           | **str**  | identifies the Person, for which the Profile View needs to be created.                                                 | [optional] |
| **search_filter**       | **str**  | OData Filter expressions that will be used to search tapes. Example: type eq &#x27;Add To Cart&#x27;                   | [optional] |
| **skip_cache**          | **bool** | If set to true, will indicate to not return any existing cached Profile View (default: false)                          | [optional] |
| **x_cache_maxage_hour** | **int**  | Controls the maximum age (in hours) of an existing cached view, that the API can return for this request. Default (0)  | [optional] |
| **x_cache_maxage_min**  | **int**  | Controls the maximum age (in hours) of an existing cached view, that the API can return for this request. Default (15) | [optional] |

### Return type

[**CreateProgressiveProfileViewJobResponseModel**](CreateProgressiveProfileViewJobResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_journey_action**

> HttpSimpleMessageObjectResponse delete_journey_action(authorization, id)

Soft delete Journey Action.

Soft delete Journey Action. SAS Token Requirements: - ss=action - sp=w

### Example

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
authorization = 'authorization_example' # str | SAS Signature.
id = 'id_example' # str | Identifies a specific Journey Action.

try:
    # Soft delete Journey Action.
    api_response = api_instance.delete_journey_action(authorization, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->delete_journey_action: %s\n" % e)
```

### Parameters

| Name              | Type    | Description                           | Notes |
| ----------------- | ------- | ------------------------------------- | ----- |
| **authorization** | **str** | SAS Signature.                        |
| **id**            | **str** | Identifies a specific Journey Action. |

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_profile_view_template**

> HttpSimpleMessageObjectResponse delete_profile_view_template(authorization, id=id)

Delete Profile View Template

Delete Profile View Template. SAS Token Requirements: - ss=profile - sp=w

### Example

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
authorization = 'authorization_example' # str | SAS Signature.
id = 'id_example' # str | Identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization. (optional)

try:
    # Delete Profile View Template
    api_response = api_instance.delete_profile_view_template(authorization, id=id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->delete_profile_view_template: %s\n" % e)
```

### Parameters

| Name              | Type    | Description                                                                                         | Notes      |
| ----------------- | ------- | --------------------------------------------------------------------------------------------------- | ---------- |
| **authorization** | **str** | SAS Signature.                                                                                      |
| **id**            | **str** | Identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization. | [optional] |

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_journey_action**

> HttpGenericObjectResponseJourneyAction get_journey_action(authorization, id)

Get specific Journey Action.

Get specific Journey Action. SAS Token Requirements: - ss=action - sp=r

### Example

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
authorization = 'authorization_example' # str | SAS Signature
id = 'id_example' # str | Identifies a specific Journey Action.

try:
    # Get specific Journey Action.
    api_response = api_instance.get_journey_action(authorization, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->get_journey_action: %s\n" % e)
```

### Parameters

| Name              | Type    | Description                           | Notes |
| ----------------- | ------- | ------------------------------------- | ----- |
| **authorization** | **str** | SAS Signature                         |
| **id**            | **str** | Identifies a specific Journey Action. |

### Return type

[**HttpGenericObjectResponseJourneyAction**](HttpGenericObjectResponseJourneyAction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_journey_action_list**

> HttpGenericListObjectResponseJourneyAction get_journey_action_list(authorization, template_id=template_id)

Get all Journey Actions.

Get all Journey Actions. SAS Token Requirements: - ss=action - sp=r

### Example

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
authorization = 'authorization_example' # str | SAS Signature.
template_id = 'template_id_example' # str | Identifies a template. (optional)

try:
    # Get all Journey Actions.
    api_response = api_instance.get_journey_action_list(authorization, template_id=template_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->get_journey_action_list: %s\n" % e)
```

### Parameters

| Name              | Type    | Description            | Notes      |
| ----------------- | ------- | ---------------------- | ---------- |
| **authorization** | **str** | SAS Signature.         |
| **template_id**   | **str** | Identifies a template. | [optional] |

### Return type

[**HttpGenericListObjectResponseJourneyAction**](HttpGenericListObjectResponseJourneyAction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_profile_view_templates**

> HttpGenericListObjectResponseProfileViewTemplate get_profile_view_templates(authorization, id=id)

Get Profile View Templates

Get all/specific Profile View Templates, available for usage by the CJaaS Org and Organization. SAS Token Requirements: - ss=profile - sp=r

### Example

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
authorization = 'authorization_example' # str | SAS Signature.
id = 'id_example' # str | identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization. (optional)

try:
    # Get Profile View Templates
    api_response = api_instance.get_profile_view_templates(authorization, id=id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->get_profile_view_templates: %s\n" % e)
```

### Parameters

| Name              | Type    | Description                                                                                         | Notes      |
| ----------------- | ------- | --------------------------------------------------------------------------------------------------- | ---------- |
| **authorization** | **str** | SAS Signature.                                                                                      |
| **id**            | **str** | identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization. | [optional] |

### Return type

[**HttpGenericListObjectResponseProfileViewTemplate**](HttpGenericListObjectResponseProfileViewTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_report_by_name**

> HttpReportObjectResponse get_report_by_name(authorization, reportname)

Get Report by Name

Get a certain usage report. SAS Token Requirements: - ss=account - sp=r

### Example

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
authorization = 'authorization_example' # str | SAS Signature
reportname = 'reportname_example' # str | Report Name   Options: yearlyusage | monthlyusage

try:
    # Get Report by Name
    api_response = api_instance.get_report_by_name(authorization, reportname)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->get_report_by_name: %s\n" % e)
```

### Parameters

| Name              | Type    | Description                      | Notes        |
| ----------------- | ------- | -------------------------------- | ------------ |
| **authorization** | **str** | SAS Signature                    |
| **reportname**    | **str** | Report Name Options: yearlyusage | monthlyusage |

### Return type

[**HttpReportObjectResponse**](HttpReportObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_view_status**

> get_view_status(authorization, view_id, instance_id, person_id=person_id, search_filter=search_filter)

Get the status of a Progressive Profile View Job.

Get the status of a Progressive Profile View Job. SAS Token Requirements: - ss=profile - p=r

### Example

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
authorization = 'authorization_example' # str | SAS Signature.
view_id = 'view_id_example' # str | identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization.
instance_id = 'instance_id_example' # str | Identifies the instance of the job.
person_id = 'person_id_example' # str | identifies the Person, for which the Profile View needs to be created. (optional)
search_filter = 'search_filter_example' # str | OData Filter expressions that will be used to search tapes. Example: type eq 'Add To Cart' (optional)

try:
    # Get the status of a Progressive Profile View Job.
    api_instance.get_view_status(authorization, view_id, instance_id, person_id=person_id, search_filter=search_filter)
except ApiException as e:
    print("Exception when calling JourneyApi->get_view_status: %s\n" % e)
```

### Parameters

| Name              | Type    | Description                                                                                          | Notes      |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------- | ---------- |
| **authorization** | **str** | SAS Signature.                                                                                       |
| **view_id**       | **str** | identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization.  |
| **instance_id**   | **str** | Identifies the instance of the job.                                                                  |
| **person_id**     | **str** | identifies the Person, for which the Profile View needs to be created.                               | [optional] |
| **search_filter** | **str** | OData Filter expressions that will be used to search tapes. Example: type eq &#x27;Add To Cart&#x27; | [optional] |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_events**

> HttpSimpleMessageObjectResponse post_events(body, authorization)

Post Events

API accepts events that describe what occurred, when, and by whom on every interaction across touch points and applications. Data Ingestion is based on Cloud Events specification for describing event data in a common way. API accepts data in the form of POST with support for Header based authorization. SAS Token Requirements: - ss=ds - sp=w

### Example

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
body = swagger_client.CloudEvent() # CloudEvent |
authorization = 'authorization_example' # str | SAS Signature

try:
    # Post Events
    api_response = api_instance.post_events(body, authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->post_events: %s\n" % e)
```

### Parameters

| Name              | Type                            | Description   | Notes |
| ----------------- | ------------------------------- | ------------- | ----- |
| **body**          | [**CloudEvent**](CloudEvent.md) |               |
| **authorization** | **str**                         | SAS Signature |

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/cloudevents+json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profile_builder**

> ProfileViewQueryResponse profile_builder(body, authorization, person_id)

A Profile is a bespoke view of a customer's journey.

The profile view is created based on a view template that is provided as input. **Sample request**: _GET /v1/journey/profileview?customer=123XX_ { &nbsp;&nbsp;&nbsp;&nbsp;\"Name\": \"Test Template 2\", &nbsp;&nbsp;&nbsp;&nbsp;\"DatapointCount\": 7, &nbsp;&nbsp;&nbsp;&nbsp;\"Attributes\": [{ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Version\": \"0.1\", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Event\": \"Add to Cart\", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Metadata\": \"sku\", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Limit\": 3, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"DisplayName\": \"Items added\", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Verbose\": false, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"AggregationMode\": \"Value\" &nbsp;&nbsp;&nbsp;&nbsp;}] }.

### Example

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
body = swagger_client.ProfileViewBuilderTemplate() # ProfileViewBuilderTemplate |
authorization = 'authorization_example' # str | SAS Signature.
person_id = 'person_id_example' # str | Identifies the person for whom the profile view is requested.

try:
    # A Profile is a bespoke view of a customer's journey.
    api_response = api_instance.profile_builder(body, authorization, person_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->profile_builder: %s\n" % e)
```

### Parameters

| Name              | Type                                                            | Description                                                   | Notes |
| ----------------- | --------------------------------------------------------------- | ------------------------------------------------------------- | ----- |
| **body**          | [**ProfileViewBuilderTemplate**](ProfileViewBuilderTemplate.md) |                                                               |
| **authorization** | **str**                                                         | SAS Signature.                                                |
| **person_id**     | **str**                                                         | Identifies the person for whom the profile view is requested. |

### Return type

[**ProfileViewQueryResponse**](ProfileViewQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **read_events**

> TapeReaderResponse read_events(authorization, filter=filter, top=top)

Read Events

The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels, across mediums. Tape is an append-only, immutable data ledger that can be queried to retrieve snapshot of latest events that moment in time or historically to play-back events as they occurred to understand or analyze Journeys using ML/AI models. SAS Token Requirements: - ss=tape - sp=r

### Example

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
authorization = 'authorization_example' # str | SAS Signature
filter = 'filter_example' # str | oData Filter Expressions to Slice/Dice Search, ex: type eq 'Add To Cart' (optional)
top = 56 # int | Limit to return latest x events (optional)

try:
    # Read Events
    api_response = api_instance.read_events(authorization, filter=filter, top=top)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->read_events: %s\n" % e)
```

### Parameters

| Name              | Type    | Description                                                                        | Notes      |
| ----------------- | ------- | ---------------------------------------------------------------------------------- | ---------- |
| **authorization** | **str** | SAS Signature                                                                      |
| **filter**        | **str** | oData Filter Expressions to Slice/Dice Search, ex: type eq &#x27;Add To Cart&#x27; | [optional] |
| **top**           | **int** | Limit to return latest x events                                                    | [optional] |

### Return type

[**TapeReaderResponse**](TapeReaderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **read_events_by_identity**

> TapeReaderResponse read_events_by_identity(authorization, identity, filter=filter, top=top)

Read Events By Identity

The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums. Tape is a append-only, immutable data ledger that can be queried to retrieve snapshot of latest events that moment in time or historically to play-back events as they occurred to understand or analyze Journeys using ML/AI models. SAS Token Requirements: - ss=tape - sp=r

### Example

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
authorization = 'authorization_example' # str | SAS Signature
identity = 'identity_example' # str | Unique Identity to filter by
filter = 'filter_example' # str | oData Filter Expressions to Slice/Dice Search, ex: type eq 'Add To Cart' (optional)
top = 56 # int | Limit to return latest x events (optional)

try:
    # Read Events By Identity
    api_response = api_instance.read_events_by_identity(authorization, identity, filter=filter, top=top)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->read_events_by_identity: %s\n" % e)
```

### Parameters

| Name              | Type    | Description                                                                        | Notes      |
| ----------------- | ------- | ---------------------------------------------------------------------------------- | ---------- |
| **authorization** | **str** | SAS Signature                                                                      |
| **identity**      | **str** | Unique Identity to filter by                                                       |
| **filter**        | **str** | oData Filter Expressions to Slice/Dice Search, ex: type eq &#x27;Add To Cart&#x27; | [optional] |
| **top**           | **int** | Limit to return latest x events                                                    | [optional] |

### Return type

[**TapeReaderResponse**](TapeReaderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **read_streams**

> str read_streams(sig=sig, authorization=authorization)

Read Streams

Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination. Optionally accepts $filter to slice/dice further (ex: type eq 'Add to Cart'). SAS Token Requirements: - ss=stream - sp=r

### Example

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
sig = 'sig_example' # str | Optional SAS Signature within QueryString (optional)
authorization = 'authorization_example' # str | Optional SAS Signature within Header (optional)

try:
    # Read Streams
    api_response = api_instance.read_streams(sig=sig, authorization=authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->read_streams: %s\n" % e)
```

### Parameters

| Name              | Type    | Description                               | Notes      |
| ----------------- | ------- | ----------------------------------------- | ---------- |
| **sig**           | **str** | Optional SAS Signature within QueryString | [optional] |
| **authorization** | **str** | Optional SAS Signature within Header      | [optional] |

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **read_streams_by_person**

> str read_streams_by_person(person, sig=sig, authorization=authorization)

Read Streams by Person

Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination. Optionally accepts $filter to slice/dice further (ex: type eq 'Add to Cart'). SAS Token Requirements: - ss=stream - sp=r

### Example

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
person = 'person_example' # str | Unique Person ID to filter by
sig = 'sig_example' # str | Optional SAS Signature within QueryString (optional)
authorization = 'authorization_example' # str | Optional SAS Signature within Header (optional)

try:
    # Read Streams by Person
    api_response = api_instance.read_streams_by_person(person, sig=sig, authorization=authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->read_streams_by_person: %s\n" % e)
```

### Parameters

| Name              | Type    | Description                               | Notes      |
| ----------------- | ------- | ----------------------------------------- | ---------- |
| **person**        | **str** | Unique Person ID to filter by             |
| **sig**           | **str** | Optional SAS Signature within QueryString | [optional] |
| **authorization** | **str** | Optional SAS Signature within Header      | [optional] |

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
