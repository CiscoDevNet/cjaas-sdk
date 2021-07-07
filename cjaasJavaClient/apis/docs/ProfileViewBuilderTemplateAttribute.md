# ProfileViewBuilderTemplateAttribute

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **String** | Attribute version. Depending on version the evaluation procedure might change. |  [optional]
**event** | **String** | The Tape Event to search for. |  [optional]
**metadata** | **String** | The specific metadata of the Tape Event, that needs to be evaluated. |  [optional]
**limit** | **Integer** | This will limit the number of matching tape events that are used, for building the view. |  [optional]
**displayName** | **String** | Post evaluation the result to be generated using this display name. |  [optional]
**aggregationMode** | **String** | Indicates how the matching events will be aggregated. \&quot;Value\&quot;: All the metadata will be concatenated in a comma-separated string.\&quot;Count\&quot;: We will evaluate the count of occurrences of the event metadata in the specified time period.\&quot;Sum\&quot;: We will attempt to parse the metadata as integer and add the values.\&quot;Max\&quot;, \&quot;Average\&quot;, \&quot;Min\&quot;: The metadata will be parsed as integer and then Max/Avg/Min of the values will be calculated respectively.\&quot;Distinct\&quot;: We will select only the unique items from the metadata.  |  [optional]
**verbose** | **Boolean** | If set to true, indicates that the matching Journey Events to be included in the response as well. |  [optional]
