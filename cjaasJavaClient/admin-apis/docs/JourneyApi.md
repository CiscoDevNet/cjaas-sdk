# JourneyApi

All URIs are relative to *https://cjaas-devus1-admin.azurewebsites.net/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrUpdateAnAlias**](JourneyApi.md#createOrUpdateAnAlias) | **POST** /v1/journey/identities/{id}/aliases | Create or Update an Alias
[**deleteIdentity**](JourneyApi.md#deleteIdentity) | **DELETE** /v1/journey/identities/{id} | Delete Identity
[**deleteIdentityAliases**](JourneyApi.md#deleteIdentityAliases) | **DELETE** /v1/journey/identities/{id}/aliases | Delete Identity Aliases
[**getIdentityById**](JourneyApi.md#getIdentityById) | **GET** /v1/journey/identities/{id} | Get Identity By Id
[**listIdentities**](JourneyApi.md#listIdentities) | **GET** /v1/journey/identities | List Identities

<a name="createOrUpdateAnAlias"></a>
# **createOrUpdateAnAlias**
> HttpSimpleMessageObjectResponse createOrUpdateAnAlias(body, authorization, id)

Create or Update an Alias

Every event in the Journey has an Identity of the originating individual, different channels can have their own unique Identities, API consumers can tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape. Once aliased, all duplicates are treated as a single Identity for any purpose (Query or View).  SAS Token Requirements:  - ss&#x3D;idmt  - sp&#x3D;w

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
IdentityAliasesRequestBody body = new IdentityAliasesRequestBody(); // IdentityAliasesRequestBody | 
String authorization = "authorization_example"; // String | SAS Signature.
String id = "id_example"; // String | Identity identifier to apply action/query upon.
try {
    HttpSimpleMessageObjectResponse result = apiInstance.createOrUpdateAnAlias(body, authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#createOrUpdateAnAlias");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IdentityAliasesRequestBody**](IdentityAliasesRequestBody.md)|  |
 **authorization** | **String**| SAS Signature. |
 **id** | **String**| Identity identifier to apply action/query upon. |

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteIdentity"></a>
# **deleteIdentity**
> HttpSimpleMessageObjectResponse deleteIdentity(authorization, id)

Delete Identity

Deletes a specific Identity using provided ID.  SAS Token Requirements:  - ss&#x3D;idmt  - sp&#x3D;w

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
String authorization = "authorization_example"; // String | SAS Signature
String id = "id_example"; // String | Unique Identity ID to retrieve data.
try {
    HttpSimpleMessageObjectResponse result = apiInstance.deleteIdentity(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#deleteIdentity");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |
 **id** | **String**| Unique Identity ID to retrieve data. |

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteIdentityAliases"></a>
# **deleteIdentityAliases**
> String deleteIdentityAliases(authorization, id)

Delete Identity Aliases

Delete an Identity&#x27;s Aliases.  SAS Token Requirements:  - ss&#x3D;idmt  - sp&#x3D;w

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
String authorization = "authorization_example"; // String | SAS Signature.
String id = "id_example"; // String | Unique Identity ID to retrieve data.
try {
    String result = apiInstance.deleteIdentityAliases(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#deleteIdentityAliases");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature. |
 **id** | **String**| Unique Identity ID to retrieve data. |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIdentityById"></a>
# **getIdentityById**
> HttpGenericObjectResponseIdentityById getIdentityById(authorization, id)

Get Identity By Id

Journeys are built around a concept of Identity. An Identity shapes how a Journey is connected together. Retrieve an Identity of an individual by providing their ID.  SAS Token Requirements:  - ss&#x3D;idmt  - sp&#x3D;r

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
String authorization = "authorization_example"; // String | SAS Signature
String id = "id_example"; // String | Unique Identity ID to retrieve data.
try {
    HttpGenericObjectResponseIdentityById result = apiInstance.getIdentityById(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#getIdentityById");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |
 **id** | **String**| Unique Identity ID to retrieve data. |

### Return type

[**HttpGenericObjectResponseIdentityById**](HttpGenericObjectResponseIdentityById.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listIdentities"></a>
# **listIdentities**
> HttpGenericListObjectResponseIdentity listIdentities(authorization)

List Identities

Journeys are built around a concept of Identity. An Identity shapes how a Journey is connected together. Get all identities.  SAS Token Requirements:  - ss&#x3D;idmt  - sp&#x3D;r

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
String authorization = "authorization_example"; // String | SAS Signature
try {
    HttpGenericListObjectResponseIdentity result = apiInstance.listIdentities(authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#listIdentities");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |

### Return type

[**HttpGenericListObjectResponseIdentity**](HttpGenericListObjectResponseIdentity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

