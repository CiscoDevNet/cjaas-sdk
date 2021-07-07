# DefaultApi

All URIs are relative to *https://uswest-nonprod.cjaas.cisco.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearTape**](DefaultApi.md#clearTape) | **DELETE** /ClearTape | Delete All Events Collected within Namespace(i.e Org)
[**clearTapeByPerson**](DefaultApi.md#clearTapeByPerson) | **DELETE** /ClearTape/{person} | Delete Events Collected on Specific Person
[**dataSink**](DefaultApi.md#dataSink) | **POST** /DataSink | Data sink accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications
[**dataSinkGet**](DefaultApi.md#dataSinkGet) | **GET** /DataSink | Data sink accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications
[**identities**](DefaultApi.md#identities) | **GET** /Identities | Journeys are built around a concept of Identity. An identity shapes how Journey is connected together. Get Identity by Id
[**identitiesAlias**](DefaultApi.md#identitiesAlias) | **GET** /Identities/alias | Tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape
[**identitiesDelete**](DefaultApi.md#identitiesDelete) | **DELETE** /Identities | Delete a Identity
[**journeys**](DefaultApi.md#journeys) | **GET** /Journey | The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums
[**journeysByPerson**](DefaultApi.md#journeysByPerson) | **GET** /Journey/{person} | The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums
[**keys**](DefaultApi.md#keys) | **GET** /Keys/{operation}/{id} | Create or Rotate or Delete a Specific Key
[**keysDelete**](DefaultApi.md#keysDelete) | **DELETE** /Keys/{id} | CJaaS APIs are designed to be accessed with Shared Access Signature(SAS) to resources without transmitting any actual sensitive keys(hello! API Keys) or even exchanging a password for a proxy such as oAuth bearer
[**keysList**](DefaultApi.md#keysList) | **GET** /Keys/list | List All SAS Keys
[**onlineOrchestrationTrigger**](DefaultApi.md#onlineOrchestrationTrigger) | **POST** /Orchestration/Trigger/{person} | Trigger a Online Orchestration such as Webex Walkin or Display Offer Or Chat Bot to intercept and modify your Customer&#x27;s Journey Midway
[**profileBuilder**](DefaultApi.md#profileBuilder) | **POST** /Profileview | A Profile is a bespoke view of a customer&#x27;s journey
[**realTimeSSE**](DefaultApi.md#realTimeSSE) | **GET** /Real-time | Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination
[**realTimeSSEPerson**](DefaultApi.md#realTimeSSEPerson) | **GET** /Real-time/{person} | Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination
[**settings**](DefaultApi.md#settings) | **GET** /Settings | API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints
[**updateSettings**](DefaultApi.md#updateSettings) | **POST** /Settings | API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints
[**webexWalkinSSE**](DefaultApi.md#webexWalkinSSE) | **GET** /Walkin/{person} | SSE Channel for Webex Walkin Orchestration to Modify Journeys Midway

<a name="clearTape"></a>
# **clearTape**
> String clearTape(authorization)

Delete All Events Collected within Namespace(i.e Org)

Delete All Events Collected for Org

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String authorization = "authorization_example"; // String | SAS Signature
try {
    String result = apiInstance.clearTape(authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#clearTape");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clearTapeByPerson"></a>
# **clearTapeByPerson**
> String clearTapeByPerson(authorization, person)

Delete Events Collected on Specific Person

Delete Events on Specific Person

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String authorization = "authorization_example"; // String | SAS Signature
String person = "person_example"; // String | Unique Person ID to filter by
try {
    String result = apiInstance.clearTapeByPerson(authorization, person);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#clearTapeByPerson");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |
 **person** | **String**| Unique Person ID to filter by |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dataSink"></a>
# **dataSink**
> dataSink(body, authorization)

Data sink accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications

Data Ingestion is based on Cloud Events specification for describing event data in a common way. Data Sink accepts data in the form of POST or GET with support for both Header based authorization and as-well via Query string

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
CloudEvent body = new CloudEvent(); // CloudEvent |
String authorization = "authorization_example"; // String | SAS Signature
try {
    apiInstance.dataSink(body, authorization);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#dataSink");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CloudEvent**](CloudEvent.md)|  |
 **authorization** | **String**| SAS Signature |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/cloudevents+json
 - **Accept**: Not defined

<a name="dataSinkGet"></a>
# **dataSinkGet**
> dataSinkGet(sig, data)

Data sink accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications

Data Ingestion is based on Cloud Events specification for describing event data in a common way. Data Sink accepts data in the form of POST or GET with support for both Header based authorization and as-well via Query string

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String sig = "sig_example"; // String | SAS Signature within QueryString
String data = "data_example"; // String | CloudEvent Serialized as Base64 UTF8 String
try {
    apiInstance.dataSinkGet(sig, data);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#dataSinkGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sig** | **String**| SAS Signature within QueryString |
 **data** | **String**| CloudEvent Serialized as Base64 UTF8 String |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="identities"></a>
# **identities**
> String identities(authorization, id)

Journeys are built around a concept of Identity. An identity shapes how Journey is connected together. Get Identity by Id

Every event in the Journey has an Identity of the originating individual, different channels can have their own unique Identities, API consumers can tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape. Once aliased, all duplicates are treated as a single Identity for any purpose (Query or View)

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String authorization = "authorization_example"; // String | SAS Signature
String id = "id_example"; // String | Unique Person ID to clear data
try {
    String result = apiInstance.identities(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#identities");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |
 **id** | **String**| Unique Person ID to clear data |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="identitiesAlias"></a>
# **identitiesAlias**
> String identitiesAlias(authorization, id, alias)

Tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape

Every event in the Journey has an Identity of the originating individual, different channels can have their own unique Identities, API consumers can tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape. Once aliased, all duplicates are treated as a single Identity for any purpose (Query or View)

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String authorization = "authorization_example"; // String | SAS Signature
String id = "id_example"; // String | Unique Person ID to apply action/query upon
String alias = "alias_example"; // String | Unique Person ID to apply action/query upon
try {
    String result = apiInstance.identitiesAlias(authorization, id, alias);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#identitiesAlias");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |
 **id** | **String**| Unique Person ID to apply action/query upon |
 **alias** | **String**| Unique Person ID to apply action/query upon | [optional]

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="identitiesDelete"></a>
# **identitiesDelete**
> String identitiesDelete(authorization, id)

Delete a Identity

Remove a soft merge

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String authorization = "authorization_example"; // String | SAS Signature
String id = "id_example"; // String | Unique Person ID to clear data
try {
    String result = apiInstance.identitiesDelete(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#identitiesDelete");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |
 **id** | **String**| Unique Person ID to clear data |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="journeys"></a>
# **journeys**
> List&lt;CloudEvent&gt; journeys(authorization, $filter, $top)

The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums

Tape is a append-only, immutable data ledger that can be queried to retrieve snapshot of latest events that moment in time or historically to play-back events as they occurred to understand or analyze Journeys using ML/AI models

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String authorization = "authorization_example"; // String | SAS Signature
String $filter = "$filter_example"; // String | oData Filter Expressions to Slice/Dice Search, ex: type eq 'Add To Cart'
Integer $top = 56; // Integer | Limit to return latest x events
try {
    List<CloudEvent> result = apiInstance.journeys(authorization, $filter, $top);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#journeys");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |
 **$filter** | **String**| oData Filter Expressions to Slice/Dice Search, ex: type eq &#x27;Add To Cart&#x27; | [optional]
 **$top** | **Integer**| Limit to return latest x events | [optional]

### Return type

[**List&lt;CloudEvent&gt;**](CloudEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="journeysByPerson"></a>
# **journeysByPerson**
> List&lt;CloudEvent&gt; journeysByPerson(authorization, person, $filter, $top)

The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums

Tape is a append-only, immutable data ledger that can be queried to retrieve snapshot of latest events that moment in time or historically to play-back events as they occurred to understand or analyze Journeys using ML/AI models

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String authorization = "authorization_example"; // String | SAS Signature
String person = "person_example"; // String | Unique Person ID to filter by
String $filter = "$filter_example"; // String | oData Filter Expressions to Slice/Dice Search, ex: type eq 'Add To Cart'
Integer $top = 56; // Integer | Limit to return latest x events
try {
    List<CloudEvent> result = apiInstance.journeysByPerson(authorization, person, $filter, $top);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#journeysByPerson");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |
 **person** | **String**| Unique Person ID to filter by |
 **$filter** | **String**| oData Filter Expressions to Slice/Dice Search, ex: type eq &#x27;Add To Cart&#x27; | [optional]
 **$top** | **Integer**| Limit to return latest x events | [optional]

### Return type

[**List&lt;CloudEvent&gt;**](CloudEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="keys"></a>
# **keys**
> String keys(authorization, operation, id)

Create or Rotate or Delete a Specific Key

With Shared Access Signatures API consumers get choice of granular control on how to access API(paths), which resources to scope(ex:datasink), with what permissions the request needs(read / write), from which  source (ex: website) and how long(10s to 10 years) among many other parameters.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String authorization = "authorization_example"; // String | SAS Signature
String operation = "operation_example"; // String | Key Operation Type: list or create or rotate
String id = "id_example"; // String | Unique Key name as set
try {
    String result = apiInstance.keys(authorization, operation, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#keys");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |
 **operation** | **String**| Key Operation Type: list or create or rotate |
 **id** | **String**| Unique Key name as set |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="keysDelete"></a>
# **keysDelete**
> String keysDelete(authorization, id)

CJaaS APIs are designed to be accessed with Shared Access Signature(SAS) to resources without transmitting any actual sensitive keys(hello! API Keys) or even exchanging a password for a proxy such as oAuth bearer

With Shared Access Signatures API consumers get choice of granular control on how to access API(paths), which resources to scope(ex:datasink), with what permissions the request needs(read / write), from which  source (ex: website) and how long(10s to 10 years) among many other parameters.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String authorization = "authorization_example"; // String | SAS Signature
String id = "id_example"; // String | Unique Key name to delete
try {
    String result = apiInstance.keysDelete(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#keysDelete");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |
 **id** | **String**| Unique Key name to delete |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="keysList"></a>
# **keysList**
> String keysList(authorization)

List All SAS Keys

With Shared Access Signatures API consumers get choice of granular control on how to access API(paths), which resources to scope(ex:datasink), with what permissions the request needs(read / write), from which  source (ex: website) and how long(10s to 10 years) among many other parameters.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String authorization = "authorization_example"; // String | SAS Signature
try {
    String result = apiInstance.keysList(authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#keysList");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="onlineOrchestrationTrigger"></a>
# **onlineOrchestrationTrigger**
> String onlineOrchestrationTrigger(body, person, authorization, sig)

Trigger a Online Orchestration such as Webex Walkin or Display Offer Or Chat Bot to intercept and modify your Customer&#x27;s Journey Midway

Trigger a Online Orchestration such as Webex Walkin or Display Offer Or Chat Bot to modify your Customer&#x27;s Journey Midway

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
OnlineOrchestration body = new OnlineOrchestration(); // OnlineOrchestration |
String person = "person_example"; // String | Unique Person ID to filter by
String authorization = "authorization_example"; // String | Optional SAS Signature within Header
String sig = "sig_example"; // String | Optional SAS Signature within QueryString
try {
    String result = apiInstance.onlineOrchestrationTrigger(body, person, authorization, sig);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#onlineOrchestrationTrigger");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OnlineOrchestration**](OnlineOrchestration.md)|  |
 **person** | **String**| Unique Person ID to filter by |
 **authorization** | **String**| Optional SAS Signature within Header | [optional]
 **sig** | **String**| Optional SAS Signature within QueryString | [optional]

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

<a name="profileBuilder"></a>
# **profileBuilder**
> ProfileViewQueryResponse profileBuilder(body, authorization, personId)

A Profile is a bespoke view of a customer&#x27;s journey

The profile view is created based on a view template that is provided as input.   **Sample request**: *GET /profileview?customer&#x3D;123XX*   {   &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;Name\&quot;: \&quot;Test Template 2\&quot;,   &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;DatapointCount\&quot;: 7,   &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;Attributes\&quot;: [{   &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;Version\&quot;: \&quot;0.1\&quot;,   &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;Event\&quot;: \&quot;Add to Cart\&quot;,   &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;Metadata\&quot;: \&quot;sku\&quot;,   &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;Limit\&quot;: 3,   &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;DisplayName\&quot;: \&quot;Items added\&quot;,   &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;AggregationMode\&quot;: \&quot;Value\&quot;   &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;}]   }

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
ProfileViewBuilderTemplate body = new ProfileViewBuilderTemplate(); // ProfileViewBuilderTemplate |
String authorization = "authorization_example"; // String | SAS Signature
String personId = "personId_example"; // String | Identifies the person for whom the profile view is requested
try {
    ProfileViewQueryResponse result = apiInstance.profileBuilder(body, authorization, personId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#profileBuilder");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProfileViewBuilderTemplate**](ProfileViewBuilderTemplate.md)|  |
 **authorization** | **String**| SAS Signature |
 **personId** | **String**| Identifies the person for whom the profile view is requested |

### Return type

[**ProfileViewQueryResponse**](ProfileViewQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="realTimeSSE"></a>
# **realTimeSSE**
> String realTimeSSE(sig, authorization)

Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination

Optionally accepts $filter to slice/dice further (ex: type eq &#x27;Add to Cart&#x27;)

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String sig = "sig_example"; // String | Optional SAS Signature within QueryString
String authorization = "authorization_example"; // String | Optional SAS Signature within Header
try {
    String result = apiInstance.realTimeSSE(sig, authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#realTimeSSE");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sig** | **String**| Optional SAS Signature within QueryString | [optional]
 **authorization** | **String**| Optional SAS Signature within Header | [optional]

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream

<a name="realTimeSSEPerson"></a>
# **realTimeSSEPerson**
> String realTimeSSEPerson(person, sig, authorization)

Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination

Optionally accepts $filter to slice/dice further (ex: type eq &#x27;Add to Cart&#x27;)

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String person = "person_example"; // String | Unique Person ID to filter by
String sig = "sig_example"; // String | Optional SAS Signature within QueryString
String authorization = "authorization_example"; // String | Optional SAS Signature within Header
try {
    String result = apiInstance.realTimeSSEPerson(person, sig, authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#realTimeSSEPerson");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **String**| Unique Person ID to filter by |
 **sig** | **String**| Optional SAS Signature within QueryString | [optional]
 **authorization** | **String**| Optional SAS Signature within Header | [optional]

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream

<a name="settings"></a>
# **settings**
> AccountSettings settings(authorization)

API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints

Update, get data retention, destinations and more

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String authorization = "authorization_example"; // String | SAS Signature
try {
    AccountSettings result = apiInstance.settings(authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#settings");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |

### Return type

[**AccountSettings**](AccountSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateSettings"></a>
# **updateSettings**
> AccountSettings updateSettings(body, authorization)

API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints

Update, get data retention, destinations and more

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
AccountSettings body = new AccountSettings(); // AccountSettings |
String authorization = "authorization_example"; // String | SAS Signature
try {
    AccountSettings result = apiInstance.updateSettings(body, authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#updateSettings");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AccountSettings**](AccountSettings.md)|  |
 **authorization** | **String**| SAS Signature |

### Return type

[**AccountSettings**](AccountSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webexWalkinSSE"></a>
# **webexWalkinSSE**
> String webexWalkinSSE(person, sig, authorization)

SSE Channel for Webex Walkin Orchestration to Modify Journeys Midway

Major browsers offer built-in class EventSource, with the EventSource object API consumers can automatically establishes a persistent connection and transparently allow for automatic reconnects with tunable retry timeout &amp; Message ids to resume events.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String person = "person_example"; // String | Unique Person ID to filter by
String sig = "sig_example"; // String | Optional SAS Signature within QueryString
String authorization = "authorization_example"; // String | Optional SAS Signature within Header
try {
    String result = apiInstance.webexWalkinSSE(person, sig, authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#webexWalkinSSE");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **String**| Unique Person ID to filter by |
 **sig** | **String**| Optional SAS Signature within QueryString | [optional]
 **authorization** | **String**| Optional SAS Signature within Header | [optional]

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream

