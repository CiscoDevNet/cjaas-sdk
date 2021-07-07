# AccountApi

All URIs are relative to *https://cjaas-devus1-admin.azurewebsites.net/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApp**](AccountApi.md#createApp) | **POST** /v1/organizations/apps | Create App
[**deleteApp**](AccountApi.md#deleteApp) | **DELETE** /v1/organizations/apps/{appname} | Delete App
[**listApps**](AccountApi.md#listApps) | **GET** /v1/organizations/apps | List Apps
[**rotateAppKey**](AccountApi.md#rotateAppKey) | **PUT** /v1/organizations/apps/{appname}/key | Rotate App Key
[**updateAppAttributes**](AccountApi.md#updateAppAttributes) | **PUT** /v1/organizations/apps/{appname}/attributes | Update App Attributes

<a name="createApp"></a>
# **createApp**
> HttpGenericObjectResponseCreateApp createApp(authorization)

Create App

Create an application for a particular organization.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AccountApi;


AccountApi apiInstance = new AccountApi();
String authorization = "authorization_example"; // String | Common Identity Bearer Token Prefix token with 'Bearer '
try {
    HttpGenericObjectResponseCreateApp result = apiInstance.createApp(authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AccountApi#createApp");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Common Identity Bearer Token Prefix token with &#x27;Bearer &#x27; |

### Return type

[**HttpGenericObjectResponseCreateApp**](HttpGenericObjectResponseCreateApp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteApp"></a>
# **deleteApp**
> HttpSimpleMessageObjectResponse deleteApp(authorization)

Delete App

Delete an application from a particular organization.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AccountApi;


AccountApi apiInstance = new AccountApi();
String authorization = "authorization_example"; // String | Cisco CI Bearer Token Prefix token with 'Bearer '
try {
    HttpSimpleMessageObjectResponse result = apiInstance.deleteApp(authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AccountApi#deleteApp");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Cisco CI Bearer Token Prefix token with &#x27;Bearer &#x27; |

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listApps"></a>
# **listApps**
> HttpGenericListObjectResponseAppsDocumentSwagger listApps(authorization)

List Apps

Lists Apps for a particular organization.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AccountApi;


AccountApi apiInstance = new AccountApi();
String authorization = "authorization_example"; // String | Cisco CI Bearer Token Prefix token with 'Bearer '
try {
    HttpGenericListObjectResponseAppsDocumentSwagger result = apiInstance.listApps(authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AccountApi#listApps");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Cisco CI Bearer Token Prefix token with &#x27;Bearer &#x27; |

### Return type

[**HttpGenericListObjectResponseAppsDocumentSwagger**](HttpGenericListObjectResponseAppsDocumentSwagger.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rotateAppKey"></a>
# **rotateAppKey**
> HttpGenericObjectResponseCreateApp rotateAppKey(authorization)

Rotate App Key

Rotates a secret key for a particular application.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AccountApi;


AccountApi apiInstance = new AccountApi();
String authorization = "authorization_example"; // String | Cisco CI Bearer Token Prefix token with 'Bearer '
try {
    HttpGenericObjectResponseCreateApp result = apiInstance.rotateAppKey(authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AccountApi#rotateAppKey");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Cisco CI Bearer Token Prefix token with &#x27;Bearer &#x27; |

### Return type

[**HttpGenericObjectResponseCreateApp**](HttpGenericObjectResponseCreateApp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateAppAttributes"></a>
# **updateAppAttributes**
> HttpSimpleMessageObjectResponse updateAppAttributes(authorization)

Update App Attributes

Updates an Apps Attributes

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AccountApi;


AccountApi apiInstance = new AccountApi();
String authorization = "authorization_example"; // String | Common Identity Bearer Token
try {
    HttpSimpleMessageObjectResponse result = apiInstance.updateAppAttributes(authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AccountApi#updateAppAttributes");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Common Identity Bearer Token |

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

