# ProfileViewTemplateAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | Option<**String**> | Attribute version. Depending on version the evaluation procedure might change. | [optional]
**event** | Option<**String**> | The Tape Event to search for. | [optional]
**metadata** | Option<**String**> | The specific metadata of the Tape Event, that needs to be evaluated. | [optional]
**limit** | Option<**i32**> | This will limit the number of matching tape events that are used, for building the view. | [optional]
**display_name** | Option<**String**> | Post evaluation the result to be generated using this display name. | [optional]
**lookback_duration_type** | Option<**String**> | One of the following: \"minutes\", \"hours\", \"days\" or \"none\" | [optional]
**lookback_period** | Option<**i32**> | Number of minutes, hours or days to look back into the past, to search for the matching events in Tape | [optional]
**aggregation_mode** | Option<**String**> | Indicates how the matching events will be aggregated. \"Value\": All the metadata will be concatenated in a comma-separated string.\"Count\": We will evaluate the count of occurrences of the event metadata in the specified time period.\"Sum\": We will attempt to parse the metadata as integer and add the values.\"Max\", \"Average\", \"Min\": The metadata will be parsed as integer and then Max/Avg/Min of the values will be calculated respectively.\"Distinct\": We will select only the unique items from the metadata.  | [optional]
**verbose** | Option<**bool**> | If set to true, indicates that the matching Journey Events to be included in the response as well. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


