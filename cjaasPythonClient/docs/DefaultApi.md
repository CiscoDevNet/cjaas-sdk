# swagger_client.DefaultApi

All URIs are relative to *https://trycjaas.azurewebsites.net/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clear_tape**](DefaultApi.md#clear_tape) | **DELETE** /ClearTape | Delete All Events Collected within Namespace(i.e Org)
[**clear_tape_by_person**](DefaultApi.md#clear_tape_by_person) | **DELETE** /ClearTape/{person} | Delete Events Collected on Specific Person
[**data_sink**](DefaultApi.md#data_sink) | **POST** /DataSink | Data sink accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications
[**data_sink_get**](DefaultApi.md#data_sink_get) | **GET** /DataSink | Data sink accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications
[**identities**](DefaultApi.md#identities) | **GET** /Identities | Journeys are built around a concept of Identity. An identity shapes how Journey is connected together. Get Identity by Id
[**identities_alias**](DefaultApi.md#identities_alias) | **GET** /Identities/alias | Tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape
[**identities_delete**](DefaultApi.md#identities_delete) | **DELETE** /Identities | Delete a Identity
[**journeys**](DefaultApi.md#journeys) | **GET** /Journey | The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums
[**journeys_by_person**](DefaultApi.md#journeys_by_person) | **GET** /Journey/{person} | The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums
[**keys**](DefaultApi.md#keys) | **GET** /Keys/{operation}/{id} | Create or Rotate or Delete a Specific Key
[**keys_delete**](DefaultApi.md#keys_delete) | **DELETE** /Keys/{id} | CJaaS APIs are designed to be accessed with Shared Access Signature(SAS) to resources without transmitting any actual sensitive keys(hello! API Keys) or even exchanging a password for a proxy such as oAuth bearer
[**keys_list**](DefaultApi.md#keys_list) | **GET** /Keys/list | List All SAS Keys
[**online_orchestration_trigger**](DefaultApi.md#online_orchestration_trigger) | **POST** /Orchestration/Trigger/{person} | Trigger a Online Orchestration such as Webex Walkin or Display Offer Or Chat Bot to intercept and modify your Customer&#x27;s Journey Midway
[**profile_builder**](DefaultApi.md#profile_builder) | **POST** /Profileview | A Profile is a bespoke view of a customer&#x27;s journey
[**real_time_sse**](DefaultApi.md#real_time_sse) | **GET** /Real-time | Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination
[**real_time_sse_person**](DefaultApi.md#real_time_sse_person) | **GET** /Real-time/{person} | Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination
[**settings**](DefaultApi.md#settings) | **GET** /Settings | API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints
[**update_settings**](DefaultApi.md#update_settings) | **POST** /Settings | API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints
[**webex_walkin_sse**](DefaultApi.md#webex_walkin_sse) | **GET** /Walkin/{person} | SSE Channel for Webex Walkin Orchestration to Modify Journeys Midway

# **clear_tape**
> str clear_tape(authorization)

Delete All Events Collected within Namespace(i.e Org)

Delete All Events Collected for Org

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
authorization = 'authorization_example' # str | SAS Signature

try:
    # Delete All Events Collected within Namespace(i.e Org)
    api_response = api_instance.clear_tape(authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->clear_tape: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| SAS Signature | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clear_tape_by_person**
> str clear_tape_by_person(authorization, person)

Delete Events Collected on Specific Person

Delete Events on Specific Person

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
authorization = 'authorization_example' # str | SAS Signature
person = 'person_example' # str | Unique Person ID to filter by

try:
    # Delete Events Collected on Specific Person
    api_response = api_instance.clear_tape_by_person(authorization, person)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->clear_tape_by_person: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| SAS Signature | 
 **person** | **str**| Unique Person ID to filter by | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_sink**
> data_sink(body, authorization)

Data sink accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications

Data Ingestion is based on Cloud Events specification for describing event data in a common way. Data Sink accepts data in the form of POST or GET with support for both Header based authorization and as-well via Query string

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
body = swagger_client.CloudEvent() # CloudEvent | 
authorization = 'authorization_example' # str | SAS Signature

try:
    # Data sink accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications
    api_instance.data_sink(body, authorization)
except ApiException as e:
    print("Exception when calling DefaultApi->data_sink: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CloudEvent**](CloudEvent.md)|  | 
 **authorization** | **str**| SAS Signature | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/cloudevents+json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_sink_get**
> data_sink_get(sig, data)

Data sink accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications

Data Ingestion is based on Cloud Events specification for describing event data in a common way. Data Sink accepts data in the form of POST or GET with support for both Header based authorization and as-well via Query string

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
sig = 'sig_example' # str | SAS Signature within QueryString
data = 'data_example' # str | CloudEvent Serialized as Base64 UTF8 String

try:
    # Data sink accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications
    api_instance.data_sink_get(sig, data)
except ApiException as e:
    print("Exception when calling DefaultApi->data_sink_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sig** | **str**| SAS Signature within QueryString | 
 **data** | **str**| CloudEvent Serialized as Base64 UTF8 String | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **identities**
> str identities(authorization, id)

Journeys are built around a concept of Identity. An identity shapes how Journey is connected together. Get Identity by Id

Every event in the Journey has an Identity of the originating individual, different channels can have their own unique Identities, API consumers can tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape. Once aliased, all duplicates are treated as a single Identity for any purpose (Query or View)

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
authorization = 'authorization_example' # str | SAS Signature
id = 'id_example' # str | Unique Person ID to clear data

try:
    # Journeys are built around a concept of Identity. An identity shapes how Journey is connected together. Get Identity by Id
    api_response = api_instance.identities(authorization, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->identities: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| SAS Signature | 
 **id** | **str**| Unique Person ID to clear data | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **identities_alias**
> str identities_alias(authorization, id, alias=alias)

Tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape

Every event in the Journey has an Identity of the originating individual, different channels can have their own unique Identities, API consumers can tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape. Once aliased, all duplicates are treated as a single Identity for any purpose (Query or View)

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
authorization = 'authorization_example' # str | SAS Signature
id = 'id_example' # str | Unique Person ID to apply action/query upon
alias = 'alias_example' # str | Unique Person ID to apply action/query upon (optional)

try:
    # Tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape
    api_response = api_instance.identities_alias(authorization, id, alias=alias)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->identities_alias: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| SAS Signature | 
 **id** | **str**| Unique Person ID to apply action/query upon | 
 **alias** | **str**| Unique Person ID to apply action/query upon | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **identities_delete**
> str identities_delete(authorization, id)

Delete a Identity

Remove a soft merge

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
authorization = 'authorization_example' # str | SAS Signature
id = 'id_example' # str | Unique Person ID to clear data

try:
    # Delete a Identity
    api_response = api_instance.identities_delete(authorization, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->identities_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| SAS Signature | 
 **id** | **str**| Unique Person ID to clear data | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **journeys**
> list[CloudEvent] journeys(authorization, filter=filter, top=top)

The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums

Tape is a append-only, immutable data ledger that can be queried to retrieve snapshot of latest events that moment in time or historically to play-back events as they occurred to understand or analyze Journeys using ML/AI models

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
authorization = 'authorization_example' # str | SAS Signature
filter = 'filter_example' # str | oData Filter Expressions to Slice/Dice Search, ex: type eq 'Add To Cart' (optional)
top = 56 # int | Limit to return latest x events (optional)

try:
    # The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums
    api_response = api_instance.journeys(authorization, filter=filter, top=top)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->journeys: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| SAS Signature | 
 **filter** | **str**| oData Filter Expressions to Slice/Dice Search, ex: type eq &#x27;Add To Cart&#x27; | [optional] 
 **top** | **int**| Limit to return latest x events | [optional] 

### Return type

[**list[CloudEvent]**](CloudEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **journeys_by_person**
> list[CloudEvent] journeys_by_person(authorization, person, filter=filter, top=top)

The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums

Tape is a append-only, immutable data ledger that can be queried to retrieve snapshot of latest events that moment in time or historically to play-back events as they occurred to understand or analyze Journeys using ML/AI models

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
authorization = 'authorization_example' # str | SAS Signature
person = 'person_example' # str | Unique Person ID to filter by
filter = 'filter_example' # str | oData Filter Expressions to Slice/Dice Search, ex: type eq 'Add To Cart' (optional)
top = 56 # int | Limit to return latest x events (optional)

try:
    # The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums
    api_response = api_instance.journeys_by_person(authorization, person, filter=filter, top=top)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->journeys_by_person: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| SAS Signature | 
 **person** | **str**| Unique Person ID to filter by | 
 **filter** | **str**| oData Filter Expressions to Slice/Dice Search, ex: type eq &#x27;Add To Cart&#x27; | [optional] 
 **top** | **int**| Limit to return latest x events | [optional] 

### Return type

[**list[CloudEvent]**](CloudEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **keys**
> str keys(authorization, operation, id)

Create or Rotate or Delete a Specific Key

With Shared Access Signatures API consumers get choice of granular control on how to access API(paths), which resources to scope(ex:datasink), with what permissions the request needs(read / write), from which  source (ex: website) and how long(10s to 10 years) among many other parameters.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
authorization = 'authorization_example' # str | SAS Signature
operation = 'operation_example' # str | Key Operation Type: list or create or rotate
id = 'id_example' # str | Unique Key name as set

try:
    # Create or Rotate or Delete a Specific Key
    api_response = api_instance.keys(authorization, operation, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->keys: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| SAS Signature | 
 **operation** | **str**| Key Operation Type: list or create or rotate | 
 **id** | **str**| Unique Key name as set | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **keys_delete**
> str keys_delete(authorization, id)

CJaaS APIs are designed to be accessed with Shared Access Signature(SAS) to resources without transmitting any actual sensitive keys(hello! API Keys) or even exchanging a password for a proxy such as oAuth bearer

With Shared Access Signatures API consumers get choice of granular control on how to access API(paths), which resources to scope(ex:datasink), with what permissions the request needs(read / write), from which  source (ex: website) and how long(10s to 10 years) among many other parameters.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
authorization = 'authorization_example' # str | SAS Signature
id = 'id_example' # str | Unique Key name to delete

try:
    # CJaaS APIs are designed to be accessed with Shared Access Signature(SAS) to resources without transmitting any actual sensitive keys(hello! API Keys) or even exchanging a password for a proxy such as oAuth bearer
    api_response = api_instance.keys_delete(authorization, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->keys_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| SAS Signature | 
 **id** | **str**| Unique Key name to delete | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **keys_list**
> str keys_list(authorization)

List All SAS Keys

With Shared Access Signatures API consumers get choice of granular control on how to access API(paths), which resources to scope(ex:datasink), with what permissions the request needs(read / write), from which  source (ex: website) and how long(10s to 10 years) among many other parameters.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
authorization = 'authorization_example' # str | SAS Signature

try:
    # List All SAS Keys
    api_response = api_instance.keys_list(authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->keys_list: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| SAS Signature | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **online_orchestration_trigger**
> str online_orchestration_trigger(body, person, authorization=authorization, sig=sig)

Trigger a Online Orchestration such as Webex Walkin or Display Offer Or Chat Bot to intercept and modify your Customer's Journey Midway

Trigger a Online Orchestration such as Webex Walkin or Display Offer Or Chat Bot to modify your Customer's Journey Midway

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
body = swagger_client.OnlineOrchestration() # OnlineOrchestration | 
person = 'person_example' # str | Unique Person ID to filter by
authorization = 'authorization_example' # str | Optional SAS Signature within Header (optional)
sig = 'sig_example' # str | Optional SAS Signature within QueryString (optional)

try:
    # Trigger a Online Orchestration such as Webex Walkin or Display Offer Or Chat Bot to intercept and modify your Customer's Journey Midway
    api_response = api_instance.online_orchestration_trigger(body, person, authorization=authorization, sig=sig)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->online_orchestration_trigger: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OnlineOrchestration**](OnlineOrchestration.md)|  | 
 **person** | **str**| Unique Person ID to filter by | 
 **authorization** | **str**| Optional SAS Signature within Header | [optional] 
 **sig** | **str**| Optional SAS Signature within QueryString | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profile_builder**
> ProfileViewQueryResponse profile_builder(body, authorization, person_id)

A Profile is a bespoke view of a customer's journey

The profile view is created based on a view template that is provided as input.   **Sample request**: *GET /profileview?customer=123XX*   {   &nbsp;&nbsp;&nbsp;&nbsp;\"Name\": \"Test Template 2\",   &nbsp;&nbsp;&nbsp;&nbsp;\"DatapointCount\": 7,   &nbsp;&nbsp;&nbsp;&nbsp;\"Attributes\": [{   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Version\": \"0.1\",   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Event\": \"Add to Cart\",   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Metadata\": \"sku\",   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Limit\": 3,   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"DisplayName\": \"Items added\",   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"AggregationMode\": \"Value\"   &nbsp;&nbsp;&nbsp;&nbsp;}]   }

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
body = swagger_client.ProfileViewBuilderTemplate() # ProfileViewBuilderTemplate | 
authorization = 'authorization_example' # str | SAS Signature
person_id = 'person_id_example' # str | Identifies the person for whom the profile view is requested

try:
    # A Profile is a bespoke view of a customer's journey
    api_response = api_instance.profile_builder(body, authorization, person_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->profile_builder: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProfileViewBuilderTemplate**](ProfileViewBuilderTemplate.md)|  | 
 **authorization** | **str**| SAS Signature | 
 **person_id** | **str**| Identifies the person for whom the profile view is requested | 

### Return type

[**ProfileViewQueryResponse**](ProfileViewQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **real_time_sse**
> str real_time_sse(sig=sig, authorization=authorization)

Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination

Optionally accepts $filter to slice/dice further (ex: type eq 'Add to Cart')

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
sig = 'sig_example' # str | Optional SAS Signature within QueryString (optional)
authorization = 'authorization_example' # str | Optional SAS Signature within Header (optional)

try:
    # Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination
    api_response = api_instance.real_time_sse(sig=sig, authorization=authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->real_time_sse: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sig** | **str**| Optional SAS Signature within QueryString | [optional] 
 **authorization** | **str**| Optional SAS Signature within Header | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **real_time_sse_person**
> str real_time_sse_person(person, sig=sig, authorization=authorization)

Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination

Optionally accepts $filter to slice/dice further (ex: type eq 'Add to Cart')

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
person = 'person_example' # str | Unique Person ID to filter by
sig = 'sig_example' # str | Optional SAS Signature within QueryString (optional)
authorization = 'authorization_example' # str | Optional SAS Signature within Header (optional)

try:
    # Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination
    api_response = api_instance.real_time_sse_person(person, sig=sig, authorization=authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->real_time_sse_person: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **str**| Unique Person ID to filter by | 
 **sig** | **str**| Optional SAS Signature within QueryString | [optional] 
 **authorization** | **str**| Optional SAS Signature within Header | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **settings**
> AccountSettings settings(authorization)

API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints

Update, get data retention, destinations and more

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
authorization = 'authorization_example' # str | SAS Signature

try:
    # API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints
    api_response = api_instance.settings(authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->settings: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| SAS Signature | 

### Return type

[**AccountSettings**](AccountSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_settings**
> AccountSettings update_settings(body, authorization)

API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints

Update, get data retention, destinations and more

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
body = swagger_client.AccountSettings() # AccountSettings | 
authorization = 'authorization_example' # str | SAS Signature

try:
    # API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints
    api_response = api_instance.update_settings(body, authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->update_settings: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AccountSettings**](AccountSettings.md)|  | 
 **authorization** | **str**| SAS Signature | 

### Return type

[**AccountSettings**](AccountSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webex_walkin_sse**
> str webex_walkin_sse(person, sig=sig, authorization=authorization)

SSE Channel for Webex Walkin Orchestration to Modify Journeys Midway

Major browsers offer built-in class EventSource, with the EventSource object API consumers can automatically establishes a persistent connection and transparently allow for automatic reconnects with tunable retry timeout & Message ids to resume events.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
person = 'person_example' # str | Unique Person ID to filter by
sig = 'sig_example' # str | Optional SAS Signature within QueryString (optional)
authorization = 'authorization_example' # str | Optional SAS Signature within Header (optional)

try:
    # SSE Channel for Webex Walkin Orchestration to Modify Journeys Midway
    api_response = api_instance.webex_walkin_sse(person, sig=sig, authorization=authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->webex_walkin_sse: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **str**| Unique Person ID to filter by | 
 **sig** | **str**| Optional SAS Signature within QueryString | [optional] 
 **authorization** | **str**| Optional SAS Signature within Header | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

