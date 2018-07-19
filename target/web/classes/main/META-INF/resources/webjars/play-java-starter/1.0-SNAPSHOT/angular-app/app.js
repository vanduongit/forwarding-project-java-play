(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies','ui.router','angular-md5'])
        .constant("host",function getUrl(url){
            return `http://localhost:9000${url}`
        })
        .config(config)
        .run(run)
        .config(function ($qProvider) {
            $qProvider.errorOnUnhandledRejections(false);
        });

    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider'];
    function config($routeProvider, $locationProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
        // $routeProvider
        //     .when('/', {
        //         controller: 'HomeController',
        //         templateUrl: 'assets/angular-app/home/home.view.html',
        //         controllerAs: 'vm',
        //         abstract: true
        //     })
        //     .when('/menu1',{
        //         parent : "",
        //         template : "<div><h3>Menu 1</h3></div>"
        //     })
            
        //     .when('/login', {
        //         controller: 'LoginController',
        //         templateUrl: 'assets/angular-app/login/login.view.html',
        //         controllerAs: 'vm'
        //     })

        //     .when('/register', {
        //         controller: 'RegisterController',
        //         templateUrl: 'assets/angular-app/register/register.view.html',
        //         controllerAs: 'vm'
        //     })

        //     .otherwise({ redirectTo: '/login' });

        $stateProvider
            .state('common', {
                controller: 'HomeController',
                templateUrl: 'assets/angular-app/home/home.view.html',
                controllerAs: 'vm',
                abstract: true
            })    

            .state('home', { 
                url: '/home',
                parent: 'common',
                //templateUrl: 'assets/angular-app//app/crm/crm.html',
                template: '<div><h4>Home Page</h4></div>',
                //controller: 'CrmCtrl'
            })

            .state('login', {
                url: '/login',
                controller: 'LoginController',
                templateUrl: 'assets/angular-app/login/login.view.html',
                controllerAs: 'vm'
            })

            .state('register', { 
                url: '/register',   
                parent: 'common',             
                controller: 'RegisterController',
                templateUrl: 'assets/angular-app/register/register.view.html',                                
                controllerAs: 'vm'
            })

            .state('resetPwdAgent', { 
                url: '/resetPwdAgent',   
                parent: 'common',                             
                templateUrl: 'assets/angular-app/resetFirstTimeLoginForAgentAPI/resetFirstTimeLoginForAgentAPI.view.html'                                               
            })

            .state('resetAgentPassword', { 
                url: '/resetPwdAgent/resetAgentPassword',   
                parent: 'common',    
                controller : 'ResetAgentPasswordController',
                controllerAs : 'vm',
                templateUrl: 'assets/angular-app/resetFirstTimeLoginForAgentAPI/resetAgentPassword/resetAgentPassword.view.html'                                               
            })

            .state('firstTimeLogin', { 
                url: '/resetPwdAgent/firstTimeLogin',   
                parent: 'common',    
                controller : 'FirstTimeLoginController',
                controllerAs : 'vm',
                templateUrl: 'assets/angular-app/resetFirstTimeLoginForAgentAPI/firstTimeLogin/firstTimeLogin.view.html'                                               
            })

            .state('extendSession', { 
                url: '/extendSession',   
                parent: 'common',    
                controller : 'ExtendSessionController',
                controllerAs : 'vm',
                templateUrl: 'assets/angular-app/extendSession/extendSession.view.html'                                               
            })

            .state('checkAccountBalance', { 
                url: '/checkAccountBalance',   
                parent: 'common',    
                controller : 'CheckAccountBalanceController',
                controllerAs : 'vm',
                templateUrl: 'assets/angular-app/checkAccountBalance/checkAccountBalance.view.html'                                               
            })

            .state('updateUserGeneralProfile', { 
                url: '/updateUserGeneralProfile',   
                parent: 'common',    
                controller : 'UpdateProfileController',
                controllerAs : 'vm',
                templateUrl: 'assets/angular-app/updateUserGeneralProfile/update.view.html'                                               
            })

            .state('depositTopUp', { 
                url: '/depositTopUp',   
                parent: 'common',                    
                templateUrl: 'assets/angular-app/depositTopUp/deposit.view.html'                                               
            })

            .state('agentDeposit', { 
                url: '/deposit/agent',   
                parent: 'common',   
                controller : 'AgentDepositController',
                controllerAs : 'vm',                 
                templateUrl: 'assets/angular-app/depositTopUp/agentDeposit/agent.view.html'                                               
            })

            .state('userDeposit', { 
                url: '/deposit/user',   
                parent: 'common',   
                controller : 'UserDepositController',
                controllerAs : 'vm',                 
                templateUrl: 'assets/angular-app/depositTopUp/userDeposit/user.view.html'                                               
            })

            .state('cancelDeposit', { 
                url: '/cancelDeposit',   
                parent: 'common',   
                controller : 'CancelDepositController',
                controllerAs : 'vm',                 
                templateUrl: 'assets/angular-app/cancelDeposit/cancel.view.html'                                               
            })

            .state('withdrawal', { 
                url: '/withdrawal',   
                parent: 'common',                                   
                templateUrl: 'assets/angular-app/withdrawal/withdrawal.view.html'                                               
            })

            .state('withdrawalAgent', { 
                url: '/withdrawal/agent',   
                parent: 'common',    
                controller: 'AgentWithdrawalController',
                controllerAs : 'vm',                               
                templateUrl: 'assets/angular-app/withdrawal/agent/withdrawal.view.html'                                               
            })

            .state('withdrawalUser', { 
                url: '/withdrawal/user',   
                parent: 'common',    
                controller: 'UserWithdrawalController',
                controllerAs : 'vm',                               
                templateUrl: 'assets/angular-app/withdrawal/user/withdrawal.view.html'                                               
            })

            .state('drawResult', { 
                url: '/drawResult',   
                parent: 'common',    
                controller: 'DrawController',
                controllerAs : 'vm',                               
                templateUrl: 'assets/angular-app/drawResultAPI/draw.view.html'                                               
            })

            .state('drawOpen', { 
                url: '/drawOpen',   
                parent: 'common',    
                controller: 'DrawOpenController',
                controllerAs : 'vm',                               
                templateUrl: 'assets/angular-app/drawOpenAPI/draw.view.html'                                               
            })

            .state('viewWinning', { 
                url: '/viewWinning',   
                parent: 'common',    
                controller: 'ViewWinningController',
                controllerAs : 'vm',                               
                templateUrl: 'assets/angular-app/viewWinning/viewWinning.view.html'                                               
            })

            .state('transactionHistory', { 
                url: '/transactionHistory',   
                parent: 'common',                                                  
                templateUrl: 'assets/angular-app/transactionHistory/menu.view.html'                                               
            })

            .state('transactionHistoryAgent', { 
                url: '/transactionHistory/agent',   
                parent: 'common',              
                controller: 'TransactionHistoryAgentController',
                controllerAs : 'vm',   
                templateUrl: 'assets/angular-app/transactionHistory/agent/history.view.html'                                               
            })

            .state('transactionHistoryUser', { 
                url: '/transactionHistory/user',   
                parent: 'common',              
                controller: 'TransactionHistoryUserController',
                controllerAs : 'vm',   
                templateUrl: 'assets/angular-app/transactionHistory/user/history.view.html'                                               
            })

            .state('getGames', { 
                url: '/getGames',   
                parent: 'common',              
                controller: 'GetGamesController',
                controllerAs : 'vm',   
                templateUrl: 'assets/angular-app/getGames/games.view.html'                                               
            })

            .state('validateSession', { 
                url: '/validateSession',   
                parent: 'common',              
                controller: 'ValidateSessionController',
                controllerAs : 'vm',   
                templateUrl: 'assets/angular-app/validateSession/validate.view.html'                                               
            })

            .state('betting', { 
                url: '/betting',   
                parent: 'common',              
                controller: 'BettingController',
                controllerAs : 'vm',   
                templateUrl: 'assets/angular-app/betting/betting.view.html'                                               
            })

            .state('upload', { 
                url: '/upload',   
                parent: 'common',              
                controller: 'UploadController',
                controllerAs : 'vm',   
                templateUrl: 'assets/angular-app/uploadFile/uploadFile.view.html'                                               
            })
            ;

            $urlRouterProvider.otherwise('/home');
    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();