# swagger_client.AccountApi

All URIs are relative to *https://cjaas-devus1-admin.azurewebsites.net/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_app**](AccountApi.md#create_app) | **POST** /v1/organizations/apps | Create App
[**delete_app**](AccountApi.md#delete_app) | **DELETE** /v1/organizations/apps/{appname} | Delete App
[**list_apps**](AccountApi.md#list_apps) | **GET** /v1/organizations/apps | List Apps
[**rotate_app_key**](AccountApi.md#rotate_app_key) | **PUT** /v1/organizations/apps/{appname}/key | Rotate App Key
[**update_app_attributes**](AccountApi.md#update_app_attributes) | **PUT** /v1/organizations/apps/{appname}/attributes | Update App Attributes

# **create_app**
> HttpGenericObjectResponseCreateApp create_app(authorization)

Create App

Create an application for a particular organization.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AccountApi()
authorization = 'authorization_example' # str | Common Identity Bearer Token Prefix token with 'Bearer '

try:
    # Create App
    api_response = api_instance.create_app(authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AccountApi->create_app: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Common Identity Bearer Token Prefix token with &#x27;Bearer &#x27; | 

### Return type

[**HttpGenericObjectResponseCreateApp**](HttpGenericObjectResponseCreateApp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_app**
> HttpSimpleMessageObjectResponse delete_app(authorization)

Delete App

Delete an application from a particular organization.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AccountApi()
authorization = 'authorization_example' # str | Cisco CI Bearer Token Prefix token with 'Bearer '

try:
    # Delete App
    api_response = api_instance.delete_app(authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AccountApi->delete_app: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Cisco CI Bearer Token Prefix token with &#x27;Bearer &#x27; | 

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_apps**
> HttpGenericListObjectResponseAppsDocumentSwagger list_apps(authorization)

List Apps

Lists Apps for a particular organization.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AccountApi()
authorization = 'authorization_example' # str | Cisco CI Bearer Token Prefix token with 'Bearer '

try:
    # List Apps
    api_response = api_instance.list_apps(authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AccountApi->list_apps: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Cisco CI Bearer Token Prefix token with &#x27;Bearer &#x27; | 

### Return type

[**HttpGenericListObjectResponseAppsDocumentSwagger**](HttpGenericListObjectResponseAppsDocumentSwagger.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rotate_app_key**
> HttpGenericObjectResponseCreateApp rotate_app_key(authorization)

Rotate App Key

Rotates a secret key for a particular application.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AccountApi()
authorization = 'authorization_example' # str | Cisco CI Bearer Token Prefix token with 'Bearer '

try:
    # Rotate App Key
    api_response = api_instance.rotate_app_key(authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AccountApi->rotate_app_key: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Cisco CI Bearer Token Prefix token with &#x27;Bearer &#x27; | 

### Return type

[**HttpGenericObjectResponseCreateApp**](HttpGenericObjectResponseCreateApp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_app_attributes**
> HttpSimpleMessageObjectResponse update_app_attributes(authorization)

Update App Attributes

Updates an Apps Attributes

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AccountApi()
authorization = 'authorization_example' # str | Common Identity Bearer Token

try:
    # Update App Attributes
    api_response = api_instance.update_app_attributes(authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AccountApi->update_app_attributes: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Common Identity Bearer Token | 

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

