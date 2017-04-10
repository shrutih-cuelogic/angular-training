angular.module('auth')
    .controller('registrationCtrl', ['$scope', '$location', 'profileService', RegistrationController])


function RegistrationController($scope, $location, profileService) {
    $scope.employees = {};
    employee_details = profileService.getEmp();
    
    $scope.checkPassword = function() {
        $scope.registerForm.confirm_password.$error.dontMatch = $scope.password !== $scope.confirm_password;
    };

    $scope.registration = function() {
        flag = 0;
        for (var i = 0; i < employee_details.length; i++) {
            if (employee_details[i].id == $scope.id) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            $scope.employees = {
                id: parseInt($scope.id),
                firstname: $scope.firstname,
                lastname: $scope.lastname,
                username: $scope.username,
                password: $scope.password,
                confirm_password: $scope.confirm_password,
                gender: $scope.gender,
                address: $scope.address,
                emp_img: $scope.emp_img
            }
            profileService.getEmp().push($scope.employees);
            console.log(profileService.getEmp());
            $location.path('/login')
            alert('You are successfully registered.Please click on login');
        } else {
            alert("This id already exists..!!!");
        }
    };
};
