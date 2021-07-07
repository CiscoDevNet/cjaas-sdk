# JourneyApi

All URIs are relative to *https://cjaas-devus1.azurewebsites.net/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createJourneyAction**](JourneyApi.md#createJourneyAction) | **POST** /v1/journey/actions | Create/Replace Journey Action.
[**createProfileViewTemplate**](JourneyApi.md#createProfileViewTemplate) | **POST** /v1/journey/views/templates | Create Profile View Template
[**createView**](JourneyApi.md#createView) | **POST** /v1/journey/views | Starts job to generate Progressive Profile View for a person.
[**deleteJourneyAction**](JourneyApi.md#deleteJourneyAction) | **DELETE** /v1/journey/actions/{id} | Soft delete Journey Action.
[**deleteProfileViewTemplate**](JourneyApi.md#deleteProfileViewTemplate) | **DELETE** /v1/journey/views/templates | Delete Profile View Template
[**getJourneyAction**](JourneyApi.md#getJourneyAction) | **GET** /v1/journey/actions/{id} | Get specific Journey Action.
[**getJourneyActionList**](JourneyApi.md#getJourneyActionList) | **GET** /v1/journey/actions | Get all Journey Actions.
[**getProfileViewTemplates**](JourneyApi.md#getProfileViewTemplates) | **GET** /v1/journey/views/templates | Get Profile View Templates
[**getReportByName**](JourneyApi.md#getReportByName) | **GET** /v1/journey/reports/{reportname} | Get Report by Name
[**getViewStatus**](JourneyApi.md#getViewStatus) | **GET** /v1/journey/views | Get the status of a Progressive Profile View Job.
[**postEvents**](JourneyApi.md#postEvents) | **POST** /v1/journey/events | Post Events
[**profileBuilder**](JourneyApi.md#profileBuilder) | **POST** /v1/journey/profileview | A Profile is a bespoke view of a customer&#x27;s journey.
[**readEvents**](JourneyApi.md#readEvents) | **GET** /v1/journey/events | Read Events
[**readEventsByIdentity**](JourneyApi.md#readEventsByIdentity) | **GET** /v1/journey/events/{identity} | Read Events By Identity
[**readStreams**](JourneyApi.md#readStreams) | **GET** /v1/journey/streams | Read Streams
[**readStreamsByPerson**](JourneyApi.md#readStreamsByPerson) | **GET** /v1/journey/streams/{person} | Read Streams by Person

<a name="createJourneyAction"></a>
# **createJourneyAction**
> HttpSimpleMessageObjectResponse createJourneyAction(body, authorization)

Create/Replace Journey Action.

Create/Replace Journey Action.   SAS Token Requirements:  - ss&#x3D;action  - sp&#x3D;w

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
JourneyAction body = new JourneyAction(); // JourneyAction | 
String authorization = "authorization_example"; // String | SAS Signature
try {
    HttpSimpleMessageObjectResponse result = apiInstance.createJourneyAction(body, authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#createJourneyAction");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JourneyAction**](JourneyAction.md)|  |
 **authorization** | **String**| SAS Signature |

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createProfileViewTemplate"></a>
# **createProfileViewTemplate**
> HttpSimpleMessageObjectResponse createProfileViewTemplate(body, authorization)

Create Profile View Template

Create Profile View Template.   SAS Token Requirements:  - ss&#x3D;profile  - sp&#x3D;w

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
ProfileViewTemplateCreateModel body = new ProfileViewTemplateCreateModel(); // ProfileViewTemplateCreateModel | 
String authorization = "authorization_example"; // String | SAS Signature.
try {
    HttpSimpleMessageObjectResponse result = apiInstance.createProfileViewTemplate(body, authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#createProfileViewTemplate");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProfileViewTemplateCreateModel**](ProfileViewTemplateCreateModel.md)|  |
 **authorization** | **String**| SAS Signature. |

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createView"></a>
# **createView**
> CreateProgressiveProfileViewJobResponseModel createView(authorization, viewId, personId, searchFilter, skipCache, X_CACHE_MAXAGE_HOUR, X_CACHE_MAXAGE_MIN)

Starts job to generate Progressive Profile View for a person.

Starts job to generate Progressive Profile View for a person. The HTTP response is intended to be compatible with the Polling Consumer Pattern.   SAS Token Requirements:  - ss&#x3D;profile  - p&#x3D;w

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
String authorization = "authorization_example"; // String | SAS Signature.
String viewId = "viewId_example"; // String | identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization.
String personId = "personId_example"; // String | identifies the Person, for which the Profile View needs to be created.
String searchFilter = "searchFilter_example"; // String | OData Filter expressions that will be used to search tapes. Example: type eq 'Add To Cart'
Boolean skipCache = true; // Boolean | If set to true, will indicate to not return any existing cached Profile View (default: false)
Integer X_CACHE_MAXAGE_HOUR = 56; // Integer | Controls the maximum age (in hours) of an existing cached view, that the API can return for this request. Default (0)
Integer X_CACHE_MAXAGE_MIN = 56; // Integer | Controls the maximum age (in hours) of an existing cached view, that the API can return for this request. Default (15)
try {
    CreateProgressiveProfileViewJobResponseModel result = apiInstance.createView(authorization, viewId, personId, searchFilter, skipCache, X_CACHE_MAXAGE_HOUR, X_CACHE_MAXAGE_MIN);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#createView");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature. |
 **viewId** | **String**| identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization. |
 **personId** | **String**| identifies the Person, for which the Profile View needs to be created. | [optional]
 **searchFilter** | **String**| OData Filter expressions that will be used to search tapes. Example: type eq &#x27;Add To Cart&#x27; | [optional]
 **skipCache** | **Boolean**| If set to true, will indicate to not return any existing cached Profile View (default: false) | [optional]
 **X_CACHE_MAXAGE_HOUR** | **Integer**| Controls the maximum age (in hours) of an existing cached view, that the API can return for this request. Default (0) | [optional]
 **X_CACHE_MAXAGE_MIN** | **Integer**| Controls the maximum age (in hours) of an existing cached view, that the API can return for this request. Default (15) | [optional]

### Return type

[**CreateProgressiveProfileViewJobResponseModel**](CreateProgressiveProfileViewJobResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteJourneyAction"></a>
# **deleteJourneyAction**
> HttpSimpleMessageObjectResponse deleteJourneyAction(authorization, id)

Soft delete Journey Action.

Soft delete Journey Action.   SAS Token Requirements:  - ss&#x3D;action  - sp&#x3D;w

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
String authorization = "authorization_example"; // String | SAS Signature.
String id = "id_example"; // String | Identifies a specific Journey Action.
try {
    HttpSimpleMessageObjectResponse result = apiInstance.deleteJourneyAction(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#deleteJourneyAction");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature. |
 **id** | **String**| Identifies a specific Journey Action. |

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteProfileViewTemplate"></a>
# **deleteProfileViewTemplate**
> HttpSimpleMessageObjectResponse deleteProfileViewTemplate(authorization, id)

Delete Profile View Template

Delete Profile View Template.   SAS Token Requirements:  - ss&#x3D;profile  - sp&#x3D;w

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
String authorization = "authorization_example"; // String | SAS Signature.
String id = "id_example"; // String | Identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization.
try {
    HttpSimpleMessageObjectResponse result = apiInstance.deleteProfileViewTemplate(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#deleteProfileViewTemplate");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature. |
 **id** | **String**| Identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization. | [optional]

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJourneyAction"></a>
# **getJourneyAction**
> HttpGenericObjectResponseJourneyAction getJourneyAction(authorization, id)

Get specific Journey Action.

Get specific Journey Action.   SAS Token Requirements:  - ss&#x3D;action  - sp&#x3D;r

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
String authorization = "authorization_example"; // String | SAS Signature
String id = "id_example"; // String | Identifies a specific Journey Action.
try {
    HttpGenericObjectResponseJourneyAction result = apiInstance.getJourneyAction(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#getJourneyAction");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |
 **id** | **String**| Identifies a specific Journey Action. |

### Return type

[**HttpGenericObjectResponseJourneyAction**](HttpGenericObjectResponseJourneyAction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJourneyActionList"></a>
# **getJourneyActionList**
> HttpGenericListObjectResponseJourneyAction getJourneyActionList(authorization, templateId)

Get all Journey Actions.

Get all Journey Actions.   SAS Token Requirements:  - ss&#x3D;action  - sp&#x3D;r

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
String authorization = "authorization_example"; // String | SAS Signature.
String templateId = "templateId_example"; // String | Identifies a template.
try {
    HttpGenericListObjectResponseJourneyAction result = apiInstance.getJourneyActionList(authorization, templateId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#getJourneyActionList");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature. |
 **templateId** | **String**| Identifies a template. | [optional]

### Return type

[**HttpGenericListObjectResponseJourneyAction**](HttpGenericListObjectResponseJourneyAction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProfileViewTemplates"></a>
# **getProfileViewTemplates**
> HttpGenericListObjectResponseProfileViewTemplate getProfileViewTemplates(authorization, id)

Get Profile View Templates

Get all/specific Profile View Templates, available for usage by the CJaaS Org and Organization.  SAS Token Requirements:  - ss&#x3D;profile  - sp&#x3D;r

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
String authorization = "authorization_example"; // String | SAS Signature.
String id = "id_example"; // String | identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization.
try {
    HttpGenericListObjectResponseProfileViewTemplate result = apiInstance.getProfileViewTemplates(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#getProfileViewTemplates");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature. |
 **id** | **String**| identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization. | [optional]

### Return type

[**HttpGenericListObjectResponseProfileViewTemplate**](HttpGenericListObjectResponseProfileViewTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportByName"></a>
# **getReportByName**
> HttpReportObjectResponse getReportByName(authorization, reportname)

Get Report by Name

Get a certain usage report.   SAS Token Requirements:  - ss&#x3D;account  - sp&#x3D;r

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
String authorization = "authorization_example"; // String | SAS Signature
String reportname = "reportname_example"; // String | Report Name   Options: yearlyusage | monthlyusage
try {
    HttpReportObjectResponse result = apiInstance.getReportByName(authorization, reportname);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#getReportByName");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |
 **reportname** | **String**| Report Name   Options: yearlyusage | monthlyusage |

### Return type

[**HttpReportObjectResponse**](HttpReportObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getViewStatus"></a>
# **getViewStatus**
> getViewStatus(authorization, viewId, instanceId, personId, searchFilter)

Get the status of a Progressive Profile View Job.

Get the status of a Progressive Profile View Job.  SAS Token Requirements:  - ss&#x3D;profile  - p&#x3D;r

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
String authorization = "authorization_example"; // String | SAS Signature.
String viewId = "viewId_example"; // String | identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization.
String instanceId = "instanceId_example"; // String | Identifies the instance of the job.
String personId = "personId_example"; // String | identifies the Person, for which the Profile View needs to be created.
String searchFilter = "searchFilter_example"; // String | OData Filter expressions that will be used to search tapes. Example: type eq 'Add To Cart'
try {
    apiInstance.getViewStatus(authorization, viewId, instanceId, personId, searchFilter);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#getViewStatus");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature. |
 **viewId** | **String**| identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization. |
 **instanceId** | **String**| Identifies the instance of the job. |
 **personId** | **String**| identifies the Person, for which the Profile View needs to be created. | [optional]
 **searchFilter** | **String**| OData Filter expressions that will be used to search tapes. Example: type eq &#x27;Add To Cart&#x27; | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postEvents"></a>
# **postEvents**
> HttpSimpleMessageObjectResponse postEvents(body, authorization)

Post Events

API accepts events that describe what occurred, when, and by whom on every interaction across touch points and applications. Data Ingestion is based on Cloud Events specification for describing event data in a common way. API accepts data in the form of POST with support for Header based authorization.  SAS Token Requirements:  - ss&#x3D;ds  - sp&#x3D;w

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
CloudEvent body = new CloudEvent(); // CloudEvent | 
String authorization = "authorization_example"; // String | SAS Signature
try {
    HttpSimpleMessageObjectResponse result = apiInstance.postEvents(body, authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#postEvents");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CloudEvent**](CloudEvent.md)|  |
 **authorization** | **String**| SAS Signature |

### Return type

[**HttpSimpleMessageObjectResponse**](HttpSimpleMessageObjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/cloudevents+json
 - **Accept**: application/json

<a name="profileBuilder"></a>
# **profileBuilder**
> ProfileViewQueryResponse profileBuilder(body, authorization, personId)

A Profile is a bespoke view of a customer&#x27;s journey.

The profile view is created based on a view template that is provided as input.    **Sample request**: *GET /v1/journey/profileview?customer&#x3D;123XX*    {    &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;Name\&quot;: \&quot;Test Template 2\&quot;,    &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;DatapointCount\&quot;: 7,    &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;Attributes\&quot;: [{    &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;Version\&quot;: \&quot;0.1\&quot;,    &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;Event\&quot;: \&quot;Add to Cart\&quot;,    &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;Metadata\&quot;: \&quot;sku\&quot;,    &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;Limit\&quot;: 3,    &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;DisplayName\&quot;: \&quot;Items added\&quot;,    &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;Verbose\&quot;: false,    &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\&quot;AggregationMode\&quot;: \&quot;Value\&quot;    &amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;}]    }.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
ProfileViewBuilderTemplate body = new ProfileViewBuilderTemplate(); // ProfileViewBuilderTemplate | 
String authorization = "authorization_example"; // String | SAS Signature.
String personId = "personId_example"; // String | Identifies the person for whom the profile view is requested.
try {
    ProfileViewQueryResponse result = apiInstance.profileBuilder(body, authorization, personId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#profileBuilder");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProfileViewBuilderTemplate**](ProfileViewBuilderTemplate.md)|  |
 **authorization** | **String**| SAS Signature. |
 **personId** | **String**| Identifies the person for whom the profile view is requested. |

### Return type

[**ProfileViewQueryResponse**](ProfileViewQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readEvents"></a>
# **readEvents**
> TapeReaderResponse readEvents(authorization, $filter, $top)

Read Events

The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels, across mediums. Tape is an append-only, immutable data ledger that can be queried to retrieve snapshot of latest events that moment in time or historically to play-back events as they occurred to understand or analyze Journeys using ML/AI models.  SAS Token Requirements:  - ss&#x3D;tape  - sp&#x3D;r

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
String authorization = "authorization_example"; // String | SAS Signature
String $filter = "$filter_example"; // String | oData Filter Expressions to Slice/Dice Search, ex: type eq 'Add To Cart'
Integer $top = 56; // Integer | Limit to return latest x events
try {
    TapeReaderResponse result = apiInstance.readEvents(authorization, $filter, $top);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#readEvents");
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

[**TapeReaderResponse**](TapeReaderResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readEventsByIdentity"></a>
# **readEventsByIdentity**
> TapeReaderResponse readEventsByIdentity(authorization, identity, $filter, $top)

Read Events By Identity

The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums. Tape is a append-only, immutable data ledger that can be queried to retrieve snapshot of latest events that moment in time or historically to play-back events as they occurred to understand or analyze Journeys using ML/AI models.  SAS Token Requirements:  - ss&#x3D;tape  - sp&#x3D;r

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
String authorization = "authorization_example"; // String | SAS Signature
String identity = "identity_example"; // String | Unique Identity to filter by
String $filter = "$filter_example"; // String | oData Filter Expressions to Slice/Dice Search, ex: type eq 'Add To Cart'
Integer $top = 56; // Integer | Limit to return latest x events
try {
    TapeReaderResponse result = apiInstance.readEventsByIdentity(authorization, identity, $filter, $top);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#readEventsByIdentity");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| SAS Signature |
 **identity** | **String**| Unique Identity to filter by |
 **$filter** | **String**| oData Filter Expressions to Slice/Dice Search, ex: type eq &#x27;Add To Cart&#x27; | [optional]
 **$top** | **Integer**| Limit to return latest x events | [optional]

### Return type

[**TapeReaderResponse**](TapeReaderResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readStreams"></a>
# **readStreams**
> String readStreams(sig, authorization)

Read Streams

Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination. Optionally accepts $filter to slice/dice further (ex: type eq &#x27;Add to Cart&#x27;).  SAS Token Requirements:  - ss&#x3D;stream  - sp&#x3D;r

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
String sig = "sig_example"; // String | Optional SAS Signature within QueryString
String authorization = "authorization_example"; // String | Optional SAS Signature within Header
try {
    String result = apiInstance.readStreams(sig, authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#readStreams");
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
 - **Accept**: text/event-stream, application/json

<a name="readStreamsByPerson"></a>
# **readStreamsByPerson**
> String readStreamsByPerson(person, sig, authorization)

Read Streams by Person

Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination. Optionally accepts $filter to slice/dice further (ex: type eq &#x27;Add to Cart&#x27;).  SAS Token Requirements:  - ss&#x3D;stream  - sp&#x3D;r

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.JourneyApi;


JourneyApi apiInstance = new JourneyApi();
String person = "person_example"; // String | Unique Person ID to filter by
String sig = "sig_example"; // String | Optional SAS Signature within QueryString
String authorization = "authorization_example"; // String | Optional SAS Signature within Header
try {
    String result = apiInstance.readStreamsByPerson(person, sig, authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JourneyApi#readStreamsByPerson");
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
 - **Accept**: text/event-stream, application/json

