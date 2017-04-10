angular.module('profile')
    .controller('profileCtrl', ['$scope', '$state', '$location', '$stateParams', 'serverLocalStorageService', 'profileService', ProfileController])

function ProfileController($scope, $state, $location, $stateParams, serverLocalStorageService, profileService) {

    $scope.employees = profileService.getEmp();

    if($stateParams.id){
       $scope.edit_user_details = profileService.EditempInfo($stateParams.id);
    }

    $scope.updateRecord = function(user_id) {
        if(user_id){
            profileService.UpdateEmpInfo(user_id);
        }
        $state.go('profile');
    }

    $scope.cancel = function() {
        $state.go('profile');
    };

    $scope.deleteProfile = function(index) {
        var confirmDelete = confirm("Are you sure want to delete?");
        if (confirmDelete) {
            $scope.employees.splice(index, 1)
        }
    };

    $scope.logout = function() {
        serverLocalStorageService.clearAll();
        $location.path('/login');
        serverLocalStorageService.get('tokenid');
    };

};
