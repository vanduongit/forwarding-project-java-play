package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import play.libs.Json;
import play.mvc.Controller;

import java.util.List;
import java.util.Map;

public class APIController extends Controller {

    protected Map<String,List<String>> getHeaders(){
        return request().getHeaders().toMap();
    }

    protected JsonNode toJson(Object obj){
        return Json.toJson(obj);
    }
}
