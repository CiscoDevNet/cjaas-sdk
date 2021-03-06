/*
 * Azure Functions OpenAPI Extension
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * ProfileViewTemplateAttribute
 */

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2021-07-06T08:57:46.449-05:00[America/Chicago]")
public class ProfileViewTemplateAttribute {
  @SerializedName("version")
  private String version = null;

  @SerializedName("event")
  private String event = null;

  @SerializedName("metadata")
  private String metadata = null;

  @SerializedName("limit")
  private Integer limit = null;

  @SerializedName("displayName")
  private String displayName = null;

  @SerializedName("lookbackDurationType")
  private String lookbackDurationType = null;

  @SerializedName("lookbackPeriod")
  private Integer lookbackPeriod = null;

  @SerializedName("aggregationMode")
  private String aggregationMode = null;

  @SerializedName("verbose")
  private Boolean verbose = null;

  public ProfileViewTemplateAttribute version(String version) {
    this.version = version;
    return this;
  }

   /**
   * Attribute version. Depending on version the evaluation procedure might change.
   * @return version
  **/
  @Schema(description = "Attribute version. Depending on version the evaluation procedure might change.")
  public String getVersion() {
    return version;
  }

  public void setVersion(String version) {
    this.version = version;
  }

  public ProfileViewTemplateAttribute event(String event) {
    this.event = event;
    return this;
  }

   /**
   * The Tape Event to search for.
   * @return event
  **/
  @Schema(description = "The Tape Event to search for.")
  public String getEvent() {
    return event;
  }

  public void setEvent(String event) {
    this.event = event;
  }

  public ProfileViewTemplateAttribute metadata(String metadata) {
    this.metadata = metadata;
    return this;
  }

   /**
   * The specific metadata of the Tape Event, that needs to be evaluated.
   * @return metadata
  **/
  @Schema(description = "The specific metadata of the Tape Event, that needs to be evaluated.")
  public String getMetadata() {
    return metadata;
  }

  public void setMetadata(String metadata) {
    this.metadata = metadata;
  }

  public ProfileViewTemplateAttribute limit(Integer limit) {
    this.limit = limit;
    return this;
  }

   /**
   * This will limit the number of matching tape events that are used, for building the view.
   * @return limit
  **/
  @Schema(description = "This will limit the number of matching tape events that are used, for building the view.")
  public Integer getLimit() {
    return limit;
  }

  public void setLimit(Integer limit) {
    this.limit = limit;
  }

  public ProfileViewTemplateAttribute displayName(String displayName) {
    this.displayName = displayName;
    return this;
  }

   /**
   * Post evaluation the result to be generated using this display name.
   * @return displayName
  **/
  @Schema(description = "Post evaluation the result to be generated using this display name.")
  public String getDisplayName() {
    return displayName;
  }

  public void setDisplayName(String displayName) {
    this.displayName = displayName;
  }

  public ProfileViewTemplateAttribute lookbackDurationType(String lookbackDurationType) {
    this.lookbackDurationType = lookbackDurationType;
    return this;
  }

   /**
   * One of the following: \&quot;minutes\&quot;, \&quot;hours\&quot;, \&quot;days\&quot; or \&quot;none\&quot;
   * @return lookbackDurationType
  **/
  @Schema(description = "One of the following: \"minutes\", \"hours\", \"days\" or \"none\"")
  public String getLookbackDurationType() {
    return lookbackDurationType;
  }

  public void setLookbackDurationType(String lookbackDurationType) {
    this.lookbackDurationType = lookbackDurationType;
  }

  public ProfileViewTemplateAttribute lookbackPeriod(Integer lookbackPeriod) {
    this.lookbackPeriod = lookbackPeriod;
    return this;
  }

   /**
   * Number of minutes, hours or days to look back into the past, to search for the matching events in Tape
   * @return lookbackPeriod
  **/
  @Schema(description = "Number of minutes, hours or days to look back into the past, to search for the matching events in Tape")
  public Integer getLookbackPeriod() {
    return lookbackPeriod;
  }

  public void setLookbackPeriod(Integer lookbackPeriod) {
    this.lookbackPeriod = lookbackPeriod;
  }

  public ProfileViewTemplateAttribute aggregationMode(String aggregationMode) {
    this.aggregationMode = aggregationMode;
    return this;
  }

   /**
   * Indicates how the matching events will be aggregated. \&quot;Value\&quot;: All the metadata will be concatenated in a comma-separated string.\&quot;Count\&quot;: We will evaluate the count of occurrences of the event metadata in the specified time period.\&quot;Sum\&quot;: We will attempt to parse the metadata as integer and add the values.\&quot;Max\&quot;, \&quot;Average\&quot;, \&quot;Min\&quot;: The metadata will be parsed as integer and then Max/Avg/Min of the values will be calculated respectively.\&quot;Distinct\&quot;: We will select only the unique items from the metadata. 
   * @return aggregationMode
  **/
  @Schema(description = "Indicates how the matching events will be aggregated. \"Value\": All the metadata will be concatenated in a comma-separated string.\"Count\": We will evaluate the count of occurrences of the event metadata in the specified time period.\"Sum\": We will attempt to parse the metadata as integer and add the values.\"Max\", \"Average\", \"Min\": The metadata will be parsed as integer and then Max/Avg/Min of the values will be calculated respectively.\"Distinct\": We will select only the unique items from the metadata. ")
  public String getAggregationMode() {
    return aggregationMode;
  }

  public void setAggregationMode(String aggregationMode) {
    this.aggregationMode = aggregationMode;
  }

  public ProfileViewTemplateAttribute verbose(Boolean verbose) {
    this.verbose = verbose;
    return this;
  }

   /**
   * If set to true, indicates that the matching Journey Events to be included in the response as well.
   * @return verbose
  **/
  @Schema(description = "If set to true, indicates that the matching Journey Events to be included in the response as well.")
  public Boolean isVerbose() {
    return verbose;
  }

  public void setVerbose(Boolean verbose) {
    this.verbose = verbose;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProfileViewTemplateAttribute profileViewTemplateAttribute = (ProfileViewTemplateAttribute) o;
    return Objects.equals(this.version, profileViewTemplateAttribute.version) &&
        Objects.equals(this.event, profileViewTemplateAttribute.event) &&
        Objects.equals(this.metadata, profileViewTemplateAttribute.metadata) &&
        Objects.equals(this.limit, profileViewTemplateAttribute.limit) &&
        Objects.equals(this.displayName, profileViewTemplateAttribute.displayName) &&
        Objects.equals(this.lookbackDurationType, profileViewTemplateAttribute.lookbackDurationType) &&
        Objects.equals(this.lookbackPeriod, profileViewTemplateAttribute.lookbackPeriod) &&
        Objects.equals(this.aggregationMode, profileViewTemplateAttribute.aggregationMode) &&
        Objects.equals(this.verbose, profileViewTemplateAttribute.verbose);
  }

  @Override
  public int hashCode() {
    return Objects.hash(version, event, metadata, limit, displayName, lookbackDurationType, lookbackPeriod, aggregationMode, verbose);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProfileViewTemplateAttribute {\n");
    
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    event: ").append(toIndentedString(event)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    limit: ").append(toIndentedString(limit)).append("\n");
    sb.append("    displayName: ").append(toIndentedString(displayName)).append("\n");
    sb.append("    lookbackDurationType: ").append(toIndentedString(lookbackDurationType)).append("\n");
    sb.append("    lookbackPeriod: ").append(toIndentedString(lookbackPeriod)).append("\n");
    sb.append("    aggregationMode: ").append(toIndentedString(aggregationMode)).append("\n");
    sb.append("    verbose: ").append(toIndentedString(verbose)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
