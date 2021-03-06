/*
 * Azure Functions OpenAPI Extension
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://openapi-generator.tech
 */




#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct HttpGenericObjectResponseJourneyAction {
    #[serde(rename = "meta", skip_serializing_if = "Option::is_none")]
    pub meta: Option<Box<crate::models::HttpResponseMeta>>,
    #[serde(rename = "data", skip_serializing_if = "Option::is_none")]
    pub data: Option<Box<crate::models::JourneyAction>>,
}

impl HttpGenericObjectResponseJourneyAction {
    pub fn new() -> HttpGenericObjectResponseJourneyAction {
        HttpGenericObjectResponseJourneyAction {
            meta: None,
            data: None,
        }
    }
}


