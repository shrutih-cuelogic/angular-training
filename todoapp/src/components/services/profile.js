angular.module('profile.service', [])
    .service('profileService', ['$rootScope', '$location', profileService]);

function profileService($rootScope, $location) {

    var service = {};
    var employee_records = [{
        'id': 1,
        'username': 'deepali.bavi',
        'firstname': 'Deepali',
        'lastname': 'Bavi',
        'password': 'deepali',
        'gender': 'female',
        'address': 'KP road,Pune',
        'emp_img': "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
    }, {
        'id': 2,
        'username': 'shruti.hiremath',
        'password': 'shruti',
        'firstname': 'shruti',
        'lastname': 'Hiremath',
        'gender': 'female',
        'address': 'Sinhgad road,Pune',
        'emp_img': "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
    }, {
        'id': 3,
        'username': 'shweta.hiremath',
        'password': 'shweta49',
        'firstname': 'Shweta',
        'lastname': 'Hiremath',
        'gender': 'female',
        'address': 'Aundh road,Pune',
        'emp_img': "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
    }, {
        'id': 4,
        'username': 'tushar.mate',
        'password': 'tushar',
        'firstname': 'Tushar',
        'lastname': 'Mate',
        'gender': 'male',
        'address': 'Paud road,Pune',
        'emp_img': "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
    }, ]

    function getEmp() {
        return employee_records;
    }

    function EditempInfo(user_id){
        var employee_records = getEmp();
        for(var i = 0; i < employee_records.length; i++) {
            if(employee_records[i].id == user_id){
                employee_records = employee_records[i];
            }
        }
        return employee_records;
    }

    function UpdateEmpInfo(user_id) {
        var update_emp_record = {};
        for (var i = 0; i < employee_records.length; i++) {
            if (employee_records[i].id == user_id) {
                update_emp_record.id = employee_records[i].id;
                update_emp_record.emp_img = employee_records[i].emp_img;
                update_emp_record.firstname = employee_records[i].firstname;
                update_emp_record.lastname = employee_records[i].lastname;
                update_emp_record.username = employee_records[i].username;
                update_emp_record.address = employee_records[i].address;
            }
        }
        employee_records.push(update_emp_record);
    }

    service.getEmp = getEmp;
    service.EditempInfo = EditempInfo;
    service.UpdateEmpInfo = UpdateEmpInfo;
    return service
};
