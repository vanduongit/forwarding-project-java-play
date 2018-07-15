// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/phanvanduong/Projects/windy/forwarding-project-java-play/conf/routes
// @DATE:Mon Jul 16 06:41:19 ICT 2018


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
