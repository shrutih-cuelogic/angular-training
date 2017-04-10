angular.module('login.service', [])
    .service('loginService', ['$q', 'serverLocalStorageService', 'profileService', loginService]);


function loginService($q, serverLocalStorageService, profileService) {

    var service = {};

    function validateLogin(username, password) {
        return $q(function(resolve, reject) {
            valid = false;
            var emp_credentials = profileService.getEmp();
            console.log(emp_credentials)
            for (var i = 0; i < emp_credentials.length; i++) {
                if (emp_credentials[i]['username'] == username && emp_credentials[i]['password'] == password) {
                    valid = true;
                    break;
                }
            }
            if (valid) {
                resolve(emp_credentials[i]);
            } else {
                reject(false);
            }
        });
    }
    service.validateLogin = validateLogin;
    return service;
};
