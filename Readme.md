# Client SDK for CJAAS 

This will eventually be rolled out into its own public github repo. Until then come here to find the client SDK for CJAAS APIs in your favorite language. This is based on the Open API specs that are published for CJAAS 
- [CJAAS APIs](https://cjaas-devus1.azurewebsites.net/swagger/ui)
- [CJAAS Admin APIs](https://cjaas-devus1-admin.azurewebsites.net/swagger/ui)

## Generate your own Client SDK: 
* There is a chance the client SDK code here may be outdated from the latest APIs.
* If you don't find your favourite programming language SDK. 

In those cases please follow the below simple instruction to generate your own latest up-to-date SDK locally for yourself. 
  
* Download [Swagger codegen](https://swagger.io/tools/swagger-codegen/)
* If you are using Mac, use ```brew install swagger-codegen ```
* swagger-codegen supports the following languages: [dart, aspnetcore, csharp, csharp-dotnet2, go, go-server, dynamic-html, html, html2, java, jaxrs-cxf-client, jaxrs-cxf, inflector, jaxrs-cxf-cdi, jaxrs-spec, jaxrs-jersey, jaxrs-di, jaxrs-resteasy-eap, jaxrs-resteasy, micronaut, spring, nodejs-server, openapi, openapi-yaml, kotlin-client, kotlin-server, php, python, python-flask, r, ruby, scala, scala-akka-http-server, swift3, swift4, swift5, typescript-angular, typescript-axios, typescript-fetch, javascript]. 
* use this command to generate the client sdk inside your current working directory. 

CJAAS APIs
```
swagger-codegen generate -i https://cjaas-devus1.azurewebsites.net/swagger.json -l <programming-language>
``` 

CJAAS Admin APIs
```
swagger-codegen generate -i https://cjaas-devus1-admin.azurewebsites.net/swagger.json -l <programming-language>
```
* Once the code is generated use any IDE to load the project and use it. Good Luck ! 
