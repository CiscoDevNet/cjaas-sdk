# CloudEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spec_version** | **str** | The Spec Version for this event. | [optional] 
**source** | **str** | what is the source of this event. | [optional] 
**id** | **str** | source generated GUID that uniquely identifies this event. | [optional] 
**person** | **str** | User ID for the person to whose journey this event will be linked to. | [optional] 
**previously** | **str** | if any other user id was used in the previous context. this will serve as alias going forward. | [optional] 
**type** | **str** | type of event. | [optional] 
**data** | **str** | Embedded JSON string. Could contain any valid JSON document. | [optional] 
**data_content_type** | **str** | Content Type of Data. | [optional] 
**time** | **datetime** | timestamp at source system at time of publishing. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

