(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService','LoginService'];
    function LoginController($location, AuthenticationService, FlashService, LoginService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            if (vm.role == "agent") {
                LoginService.loginAgent(vm.username, vm.password).then(function (res) {
                    console.log(res);
                    let data = res.data;
                    if (res.status === 200) {
                        let tokens = data.split(",");
                        if (tokens.length <= 1) {
                            FlashService.error("AgentLogin: Expect First Time Login data=" + JSON.stringify(res.data));
                        }
                        $location.path('/');
                        FlashService.success("Data token: ", data);
                    }
                });
            } else {

                LoginService.loginUser(vm.username, vm.password).then(function (res) {
                    let data = res.data;
                    if (res.status === 200) {
                        let tokens = data.split(",");
                        if (tokens.length <= 1) {
                            FlashService.error("UserLogin: Expect First Time Login data=" + JSON.stringify(res.data));
                        }
                        $location.path('/');
                        FlashService.success("Data token: ", data);
                    }
                });
            }
        };
    }
})();
