angular.module('auth')
    .controller('loginCtrl', ['$scope', '$location', '$rootScope', 'serverLocalStorageService', 'loginService', LoginCntrl])

function LoginCntrl($scope, $location, $rootScope, serverLocalStorageService, loginService) {
    $scope.error = "";

    $scope.validateLogin = function() {
        loginService.validateLogin($scope.username, $scope.password)
            .then(function(response) {
                if (serverLocalStorageService.isSupported) {
                    serverLocalStorageService.set('tokenid', $scope.username);
                    $location.path('/profile');
                    $rootScope.username = $scope.username;
                } else {
                    $scope.error = "Local storage not supported.";
                }
            }, function(rejected) {
                $scope.error = "Invalid username/password";
            })
    };
};

