package services;


import com.fasterxml.jackson.databind.JsonNode;
import play.Logger;
import play.libs.Json;
import play.libs.ws.WSClient;
import play.libs.ws.WSRequest;
import play.libs.ws.WSResponse;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletionStage;

@Singleton
public class ApiService {

    @Inject
    private WSClient ws;
    private String host = "http://localhost:9000/test";

    public CompletionStage<WSResponse> get(String url, Map<String,List<String>> headers){
        JsonNode json = Json.newObject();
        WSRequest request = ws.url(host(url));
        Logger.info("Url {}", host(url));
        request.setRequestTimeout(5*60*1000);
        request = setHeader(request,headers);
        CompletionStage<WSResponse> response = request.get();
        return response;

    }

    private String host(String url){
        return String.format("%s/%s",host,url);
    }

    private WSRequest setHeader(WSRequest request,Map<String,List<String>> hearders){
        for(String key : hearders.keySet()){
            request.addHeader(key,hearders.get(key).get(0));
        }
        return request;
    }


}
