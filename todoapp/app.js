'use strict';


angular.module('todoapp', [
        'ui.router',
        'LocalStorageModule',
        'auth',
        'profile',
        'services'
    ])
    .config(['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, localStorageServiceProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/login');
    }])
    .run(['$rootScope', '$state', '$stateParams', '$location', 'serverLocalStorageService', 'loginService', function($rootScope, $state, $stateParams, $location, serverLocalStorageService, loginService) {
        $rootScope.$on('$stateChangeStart', function(event, next, toState) {
            if (serverLocalStorageService.get('tokenid') == null || serverLocalStorageService.get('tokenid') == undefined) {
                $location.path('/login');
            } else if (next.originalPath == "/login" && serverLocalStorageService.get('tokenid') != null && serverLocalStorageService.get('tokenid') != undefined) {
                $location.path('/profile');
            }
        })

    }]);
