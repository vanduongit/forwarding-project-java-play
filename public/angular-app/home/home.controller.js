(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope','AuthenticationService','FlashService','$location'];
    function HomeController(UserService, $rootScope, AuthenticationService, FlashService, $location) {
        var vm = this;

        vm.user = {};

        vm.logout = logout;

        initController();

        function initController() {
            loadCurrentUser();
            console.log($rootScope);
            // loadAllUsers();
        }

        function logout(){
            $location.path('/login');
            return;
            vm.dataLoading = true;
            AuthenticationService.logout().then(function(res){
                let data = res.data;
                let status = res.data;
                if(status == 200){
                    if(data.isLowerCase() == "true"){
                        AuthenticationService.ClearCredentials();
                        FlashService.success("Successful Logout");
                        $location.path('/login');
                    }else{
                        FlashService.error("Failed Logout");
                    }
                }
                vm.dataLoading = false;
            });
        }

        function loadCurrentUser() {
            // UserService.GetByUsername($rootScope.globals.currentUser.username)
            //     .then(function (user) {
            //         vm.user = user;
            //     });
            vm.user = $rootScope.globals.currentUser;
            console.log(vm.user);
            console.log(vm.user);
        }
    }

})();