# CloudEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**specVersion** | **String** | The Spec Version for this event. |  [optional]
**source** | **String** | what is the source of this event. |  [optional]
**id** | [**UUID**](UUID.md) | source generated GUID that uniquely identifies this event. |  [optional]
**person** | **String** | User ID for the person to whose journey this event will be linked to. |  [optional]
**previously** | **String** | if any other user id was used in the previous context. this will serve as alias going forward. |  [optional]
**type** | **String** | type of event. |  [optional]
**data** | **String** | Embedded JSON string. Could contain any valid JSON document. |  [optional]
**dataContentType** | **String** | Content Type of Data. |  [optional]
**time** | [**OffsetDateTime**](OffsetDateTime.md) | timestamp at source system at time of publishing. |  [optional]
