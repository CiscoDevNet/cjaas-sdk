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
import java.util.UUID;
import org.threeten.bp.OffsetDateTime;
/**
 * ModifiedCloudEvent
 */

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2021-07-06T08:57:46.449-05:00[America/Chicago]")
public class ModifiedCloudEvent {
  @SerializedName("data")
  private Object data = null;

  @SerializedName("dataContentType")
  private String dataContentType = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("person")
  private String person = null;

  @SerializedName("previously")
  private String previously = null;

  @SerializedName("source")
  private String source = null;

  @SerializedName("specVersion")
  private String specVersion = null;

  @SerializedName("time")
  private OffsetDateTime time = null;

  @SerializedName("type")
  private String type = null;

  public ModifiedCloudEvent data(Object data) {
    this.data = data;
    return this;
  }

   /**
   * Get data
   * @return data
  **/
  @Schema(description = "")
  public Object getData() {
    return data;
  }

  public void setData(Object data) {
    this.data = data;
  }

  public ModifiedCloudEvent dataContentType(String dataContentType) {
    this.dataContentType = dataContentType;
    return this;
  }

   /**
   * Get dataContentType
   * @return dataContentType
  **/
  @Schema(description = "")
  public String getDataContentType() {
    return dataContentType;
  }

  public void setDataContentType(String dataContentType) {
    this.dataContentType = dataContentType;
  }

  public ModifiedCloudEvent id(UUID id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @Schema(description = "")
  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public ModifiedCloudEvent person(String person) {
    this.person = person;
    return this;
  }

   /**
   * Get person
   * @return person
  **/
  @Schema(description = "")
  public String getPerson() {
    return person;
  }

  public void setPerson(String person) {
    this.person = person;
  }

  public ModifiedCloudEvent previously(String previously) {
    this.previously = previously;
    return this;
  }

   /**
   * Get previously
   * @return previously
  **/
  @Schema(description = "")
  public String getPreviously() {
    return previously;
  }

  public void setPreviously(String previously) {
    this.previously = previously;
  }

  public ModifiedCloudEvent source(String source) {
    this.source = source;
    return this;
  }

   /**
   * Get source
   * @return source
  **/
  @Schema(description = "")
  public String getSource() {
    return source;
  }

  public void setSource(String source) {
    this.source = source;
  }

  public ModifiedCloudEvent specVersion(String specVersion) {
    this.specVersion = specVersion;
    return this;
  }

   /**
   * Get specVersion
   * @return specVersion
  **/
  @Schema(description = "")
  public String getSpecVersion() {
    return specVersion;
  }

  public void setSpecVersion(String specVersion) {
    this.specVersion = specVersion;
  }

  public ModifiedCloudEvent time(OffsetDateTime time) {
    this.time = time;
    return this;
  }

   /**
   * Get time
   * @return time
  **/
  @Schema(description = "")
  public OffsetDateTime getTime() {
    return time;
  }

  public void setTime(OffsetDateTime time) {
    this.time = time;
  }

  public ModifiedCloudEvent type(String type) {
    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @Schema(description = "")
  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ModifiedCloudEvent modifiedCloudEvent = (ModifiedCloudEvent) o;
    return Objects.equals(this.data, modifiedCloudEvent.data) &&
        Objects.equals(this.dataContentType, modifiedCloudEvent.dataContentType) &&
        Objects.equals(this.id, modifiedCloudEvent.id) &&
        Objects.equals(this.person, modifiedCloudEvent.person) &&
        Objects.equals(this.previously, modifiedCloudEvent.previously) &&
        Objects.equals(this.source, modifiedCloudEvent.source) &&
        Objects.equals(this.specVersion, modifiedCloudEvent.specVersion) &&
        Objects.equals(this.time, modifiedCloudEvent.time) &&
        Objects.equals(this.type, modifiedCloudEvent.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(data, dataContentType, id, person, previously, source, specVersion, time, type);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ModifiedCloudEvent {\n");
    
    sb.append("    data: ").append(toIndentedString(data)).append("\n");
    sb.append("    dataContentType: ").append(toIndentedString(dataContentType)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    person: ").append(toIndentedString(person)).append("\n");
    sb.append("    previously: ").append(toIndentedString(previously)).append("\n");
    sb.append("    source: ").append(toIndentedString(source)).append("\n");
    sb.append("    specVersion: ").append(toIndentedString(specVersion)).append("\n");
    sb.append("    time: ").append(toIndentedString(time)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
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