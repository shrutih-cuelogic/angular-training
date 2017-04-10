(function() {
    'use strict';

    angular.module('profile')
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider
                .state('profile', {
                    url: '/profile',
                    templateUrl: '/src/modules/profile/views/profile.html',
                    controller: 'profileCtrl'
                })
                .state('editprofile', {
                    url: '/editprofile/:id',
                    templateUrl: '/src/modules/profile/views/editprofile.html',
                    controller: 'profileCtrl'
                })
        }]);

})();
