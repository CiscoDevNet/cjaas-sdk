# swagger_client.JourneyApi

All URIs are relative to *https://cjaas-devus1-admin.azurewebsites.net/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_or_update_an_alias**](JourneyApi.md#create_or_update_an_alias) | **POST** /v1/journey/identities/{id}/aliases | Create or Update an Alias
[**delete_identity**](JourneyApi.md#delete_identity) | **DELETE** /v1/journey/identities/{id} | Delete Identity
[**delete_identity_aliases**](JourneyApi.md#delete_identity_aliases) | **DELETE** /v1/journey/identities/{id}/aliases | Delete Identity Aliases
[**get_identity_by_id**](JourneyApi.md#get_identity_by_id) | **GET** /v1/journey/identities/{id} | Get Identity By Id
[**list_identities**](JourneyApi.md#list_identities) | **GET** /v1/journey/identities | List Identities

# **create_or_update_an_alias**
> HttpSimpleMessageObjectResponse create_or_update_an_alias(body, authorization, id)

Create or Update an Alias

Every event in the Journey has an Identity of the originating individual, different channels can have their own unique Identities, API consumers can tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape. Once aliased, all duplicates are treated as a single Identity for any purpose (Query or View).  SAS Token Requirements:  - ss=idmt  - sp=w

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.JourneyApi()
body = swagger_client.IdentityAliasesRequestBody() # IdentityAliasesRequestBody | 
authorization = 'authorization_example' # str | SAS Signature.
id = 'id_example' # str | Identity identifier to apply action/query upon.

try:
    # Create or Update an Alias
    api_response = api_instance.create_or_update_an_alias(body, authorization, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->create_or_update_an_alias: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IdentityAliasesRequestBody**](IdentityAliasesRequestBody.md)|  | 
 **authorization** | **str**| SAS Signature. | 
 **id** | **str**| Identity identifier to apply action/query upon. | 

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_identity**
> HttpSimpleMessageObjectResponse delete_identity(authorization, id)

Delete Identity

Deletes a specific Identity using provided ID.  SAS Token Requirements:  - ss=idmt  - sp=w

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
id = 'id_example' # str | Unique Identity ID to retrieve data.

try:
    # Delete Identity
    api_response = api_instance.delete_identity(authorization, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->delete_identity: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| SAS Signature | 
 **id** | **str**| Unique Identity ID to retrieve data. | 

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_identity_aliases**
> str delete_identity_aliases(authorization, id)

Delete Identity Aliases

Delete an Identity's Aliases.  SAS Token Requirements:  - ss=idmt  - sp=w

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
id = 'id_example' # str | Unique Identity ID to retrieve data.

try:
    # Delete Identity Aliases
    api_response = api_instance.delete_identity_aliases(authorization, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->delete_identity_aliases: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| SAS Signature. | 
 **id** | **str**| Unique Identity ID to retrieve data. | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_identity_by_id**
> HttpGenericObjectResponseIdentityById get_identity_by_id(authorization, id)

Get Identity By Id

Journeys are built around a concept of Identity. An Identity shapes how a Journey is connected together. Retrieve an Identity of an individual by providing their ID.  SAS Token Requirements:  - ss=idmt  - sp=r

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
id = 'id_example' # str | Unique Identity ID to retrieve data.

try:
    # Get Identity By Id
    api_response = api_instance.get_identity_by_id(authorization, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->get_identity_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| SAS Signature | 
 **id** | **str**| Unique Identity ID to retrieve data. | 

### Return type

[**HttpGenericObjectResponseIdentityById**](HttpGenericObjectResponseIdentityById.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_identities**
> HttpGenericListObjectResponseIdentity list_identities(authorization)

List Identities

Journeys are built around a concept of Identity. An Identity shapes how a Journey is connected together. Get all identities.  SAS Token Requirements:  - ss=idmt  - sp=r

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

try:
    # List Identities
    api_response = api_instance.list_identities(authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling JourneyApi->list_identities: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| SAS Signature | 

### Return type

[**HttpGenericListObjectResponseIdentity**](HttpGenericListObjectResponseIdentity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

