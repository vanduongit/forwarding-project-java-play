
package views.html

import _root_.play.twirl.api.TwirlFeatureImports._
import _root_.play.twirl.api.TwirlHelperImports._
import _root_.play.twirl.api.Html
import _root_.play.twirl.api.JavaScript
import _root_.play.twirl.api.Txt
import _root_.play.twirl.api.Xml
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import java.lang._
import java.util._
import scala.collection.JavaConverters._
import play.core.j.PlayMagicForJava._
import play.mvc._
import play.api.data.Field
import play.mvc.Http.Context.Implicit._
import play.data._
import play.core.j.PlayFormsMagicForJava._

object index extends _root_.play.twirl.api.BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,_root_.play.twirl.api.Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with _root_.play.twirl.api.Template1[String,play.twirl.api.HtmlFormat.Appendable] {

  /*
 * This template takes a single argument, a String containing a
 * message to display.
 */
  def apply/*5.2*/(message: String):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*6.1*/("""
"""),format.raw/*7.1*/("""<!DOCTYPE html>
<html ng-app="app">
    <head>
        <meta charset="utf-8" />
        <title>AngularJS User Registration and Login Example</title>
        <link rel="stylesheet" href="assets/angular-app/lib/bootstrap.min.css">
        <link href="assets/angular-app/app-content/app.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div class="col-sm-8 col-sm-offset-1">
                <div ui-view=""></div>
            </div>
        </div>
            <!-- <div class="credits text-center">
        <p>
            <a href="http://jasonwatmore.com/post/2015/03/10/angularjs-user-registration-and-login-example-tutorial">AngularJS User Registration and Login Example</a>
        </p>
        <p>
            <a href="http://jasonwatmore.com">JasonWatmore.com</a>
        </p>
    </div> -->
        <script src="assets/angular-app/lib/jquery-3.1.1.min.js"></script>
        <script src="assets/angular-app/lib/bootstrap.min.js"></script>
        <script src="assets/angular-app/lib/angular.min.js"></script>
        <script src="assets/angular-app/lib/angular-route.min.js"></script>
        <script src="assets/angular-app/lib/angular-ui-router.js"></script>
        <script src="assets/angular-app/lib/angular-cookies.min.js"></script>
        <script src="assets/angular-app/angular-md5.js"></script>

        <script src="assets/angular-app/app.js"></script>
        <script src="assets/angular-app/app-services/authentication.service.js"></script>
        <script src="assets/angular-app/app-services/flash.service.js"></script>

            <!-- Real user service that uses an api -->
            <!-- <script src="assets/angular-app/app-services/user.service.js"></script> -->

            <!-- Fake user service for demo that uses local storage -->
        <script src="assets/angular-app/app-services/status.service.js"></script>
        <script src="assets/angular-app/app-services/session.service.js"></script>

        <script src="assets/angular-app/app-services/user.service.js"></script>

        <script src="assets/angular-app/home/home.controller.js"></script>
        <script src="assets/angular-app/login/login.controller.js"></script>
        <script src="assets/angular-app/login/login.service.js"></script>
        <script src="assets/angular-app/register/register.controller.js"></script>
        <script src="assets/angular-app/resetFirstTimeLoginForAgentAPI/resetAgentPassword/resetAgentPassword.controller.js"></script>
        <script src="assets/angular-app/resetFirstTimeLoginForAgentAPI/firstTimeLogin/firstTimeLogin.controller.js"></script>
        <script src="assets/angular-app/extendSession/extendSession.controller.js"></script>
        <script src="assets/angular-app/checkAccountBalance/checkAccountBalance.controller.js"></script>
        <script src="assets/angular-app/updateUserGeneralProfile/update.controller.js"></script>
        <script src="assets/angular-app/depositTopUp/agentDeposit/agentDeposit.controller.js"></script>
        <script src="assets/angular-app/depositTopUp/userDeposit/userDeposit.controller.js"></script>
        <script src="assets/angular-app/cancelDeposit/cancel.controller.js"></script>
        <script src="assets/angular-app/withdrawal/agent/withdrawal.controller.js"></script>
        <script src="assets/angular-app/withdrawal/user/withdrawal.controller.js"></script>
        <script src="assets/angular-app/drawResultAPI/draw.controller.js"></script>
        <script src="assets/angular-app/drawOpenAPI/draw.controller.js"></script>
        <script src="assets/angular-app/viewWinning/viewWinning.controller.js"></script>
        <script src="assets/angular-app/transactionHistory/agent/history.controller.js"></script>
        <script src="assets/angular-app/transactionHistory/user/history.controller.js"></script>
        <script src="assets/angular-app/getGames/games.controller.js"></script>
        <script src="assets/angular-app/validateSession/validate.controller.js"></script>
        <script src="assets/angular-app/betting/betting.controller.js"></script>
        <script src="assets/angular-app/uploadFile/uploadFile.controller.js"></script>



    </body>
</html>"""))
      }
    }
  }

  def render(message:String): play.twirl.api.HtmlFormat.Appendable = apply(message)

  def f:((String) => play.twirl.api.HtmlFormat.Appendable) = (message) => apply(message)

  def ref: this.type = this

}


              /*
                  -- GENERATED --
                  DATE: Thu Jul 19 23:18:15 ICT 2018
                  SOURCE: /Users/phanvanduong/Projects/windy/forwarding-project-java-play/app/views/index.scala.html
                  HASH: 02cc3fd4e4f6f61b7ab6e7c9c84ee4737efde02c
                  MATRIX: 1037->95|1148->113|1175->114
                  LINES: 31->5|36->6|37->7
                  -- GENERATED --
              */
          