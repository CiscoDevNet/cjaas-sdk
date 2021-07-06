# CloudEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spec_version** | Option<**String**> | The Spec Version for this event. | [optional]
**source** | Option<**String**> | what is the source of this event. | [optional]
**id** | Option<**String**> | source generated GUID that uniquely identifies this event. | [optional]
**person** | Option<**String**> | User ID for the person to whose journey this event will be linked to. | [optional]
**previously** | Option<**String**> | if any other user id was used in the previous context. this will serve as alias going forward. | [optional]
**_type** | Option<**String**> | type of event. | [optional]
**data** | Option<**String**> | Embedded JSON string. Could contain any valid JSON document. | [optional]
**data_content_type** | Option<**String**> | Content Type of Data. | [optional]
**time** | Option<**String**> | timestamp at source system at time of publishing. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


