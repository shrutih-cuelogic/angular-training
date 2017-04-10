(function() {
    'use strict';

    angular.module('auth')
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: '/src/modules/auth/views/login.html',
                    controller: 'loginCtrl'
                })
                .state('registration', {
                    url: '/registration',
                    templateUrl: '/src/modules/auth/views/registration.html',
                    controller: 'registrationCtrl'
                });
        }]);

})();
