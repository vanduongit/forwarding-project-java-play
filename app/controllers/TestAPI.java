package controllers;

import play.mvc.Result;

public class TestAPI extends APIController{

    public Result loginUser(){
        return ok("accesstoken:111xxxxxx,xxxxxxx,refreshtoken:222iiiiiiiiiii");
    }
}
