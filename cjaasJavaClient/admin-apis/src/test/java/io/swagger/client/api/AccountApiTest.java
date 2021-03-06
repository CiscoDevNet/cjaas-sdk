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

package io.swagger.client.api;

import io.swagger.client.ApiException;
import io.swagger.client.model.HttpErrorResponse;
import io.swagger.client.model.HttpGenericListObjectResponseAppsDocumentSwagger;
import io.swagger.client.model.HttpGenericObjectResponseCreateApp;
import io.swagger.client.model.HttpSimpleMessageObjectResponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for AccountApi
 */
@Ignore
public class AccountApiTest {

    private final AccountApi api = new AccountApi();

    /**
     * Create App
     *
     * Create an application for a particular organization.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createAppTest() throws ApiException {
        String authorization = null;
        HttpGenericObjectResponseCreateApp response = api.createApp(authorization);

        // TODO: test validations
    }
    /**
     * Delete App
     *
     * Delete an application from a particular organization.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteAppTest() throws ApiException {
        String authorization = null;
        HttpSimpleMessageObjectResponse response = api.deleteApp(authorization);

        // TODO: test validations
    }
    /**
     * List Apps
     *
     * Lists Apps for a particular organization.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listAppsTest() throws ApiException {
        String authorization = null;
        HttpGenericListObjectResponseAppsDocumentSwagger response = api.listApps(authorization);

        // TODO: test validations
    }
    /**
     * Rotate App Key
     *
     * Rotates a secret key for a particular application.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void rotateAppKeyTest() throws ApiException {
        String authorization = null;
        HttpGenericObjectResponseCreateApp response = api.rotateAppKey(authorization);

        // TODO: test validations
    }
    /**
     * Update App Attributes
     *
     * Updates an Apps Attributes
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateAppAttributesTest() throws ApiException {
        String authorization = null;
        HttpSimpleMessageObjectResponse response = api.updateAppAttributes(authorization);

        // TODO: test validations
    }
}
