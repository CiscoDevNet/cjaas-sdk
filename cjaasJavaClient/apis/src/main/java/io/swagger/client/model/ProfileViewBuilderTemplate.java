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
import io.swagger.client.model.ProfileViewBuilderTemplateAttribute;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
/**
 * ProfileViewBuilderTemplate
 */

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2021-07-06T08:57:46.449-05:00[America/Chicago]")
public class ProfileViewBuilderTemplate {
  @SerializedName("name")
  private String name = null;

  @SerializedName("datapointCount")
  private Integer datapointCount = null;

  @SerializedName("attributes")
  private List<ProfileViewBuilderTemplateAttribute> attributes = null;

  public ProfileViewBuilderTemplate name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Name of the view to be built.
   * @return name
  **/
  @Schema(description = "Name of the view to be built.")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public ProfileViewBuilderTemplate datapointCount(Integer datapointCount) {
    this.datapointCount = datapointCount;
    return this;
  }

   /**
   * Number of Journey events to be considered, in order to build the view.
   * @return datapointCount
  **/
  @Schema(description = "Number of Journey events to be considered, in order to build the view.")
  public Integer getDatapointCount() {
    return datapointCount;
  }

  public void setDatapointCount(Integer datapointCount) {
    this.datapointCount = datapointCount;
  }

  public ProfileViewBuilderTemplate attributes(List<ProfileViewBuilderTemplateAttribute> attributes) {
    this.attributes = attributes;
    return this;
  }

  public ProfileViewBuilderTemplate addAttributesItem(ProfileViewBuilderTemplateAttribute attributesItem) {
    if (this.attributes == null) {
      this.attributes = new ArrayList<ProfileViewBuilderTemplateAttribute>();
    }
    this.attributes.add(attributesItem);
    return this;
  }

   /**
   * Get attributes
   * @return attributes
  **/
  @Schema(description = "")
  public List<ProfileViewBuilderTemplateAttribute> getAttributes() {
    return attributes;
  }

  public void setAttributes(List<ProfileViewBuilderTemplateAttribute> attributes) {
    this.attributes = attributes;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProfileViewBuilderTemplate profileViewBuilderTemplate = (ProfileViewBuilderTemplate) o;
    return Objects.equals(this.name, profileViewBuilderTemplate.name) &&
        Objects.equals(this.datapointCount, profileViewBuilderTemplate.datapointCount) &&
        Objects.equals(this.attributes, profileViewBuilderTemplate.attributes);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, datapointCount, attributes);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProfileViewBuilderTemplate {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    datapointCount: ").append(toIndentedString(datapointCount)).append("\n");
    sb.append("    attributes: ").append(toIndentedString(attributes)).append("\n");
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