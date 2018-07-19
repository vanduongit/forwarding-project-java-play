package controllers;

import play.Logger;
import play.mvc.Result;
import services.ApiService;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;

public class HomeAPI extends APIController{

    @Inject
    private ApiService apiService;

    public CompletionStage<Result> loginUser(){
        Logger.info("Headers: {}", toJson(getHeaders()));
        return apiService.get("EbsUserWS/services/apis/login",getHeaders()).thenApply(res -> {
            int status = res.getStatus();
            Logger.info("Status {}", status);
            return ok(res.getBody());
        });
    }

}
