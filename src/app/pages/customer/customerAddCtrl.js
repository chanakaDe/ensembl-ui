(function () {
    'use strict';

    angular.module('BlurAdmin.pages.customer')
        .controller('CustomerAddCtrl', CustomerAddCtrl);

    /** @ngInject */
    function CustomerAddCtrl($scope, customerService, toastr) {
        var vm = this;

        $scope.customer = {
            name: '',
            address: '',
            telephone: '',
            contact_person: '',
            fax: '',
            email: '',
            remark: ''
        };

        $scope.saveNewCustomer = function () {

            if ($scope.customer.name == '' || $scope.customer.address == '' || $scope.customer.telephone == '' || $scope.customer.contact_person == '' || $scope.customer.fax == '' || $scope.customer.email == '' || $scope.customer.remark == '') {
                toastr.error('All fields are required', 'ERROR', {
                    "positionClass": "toast-top-right",
                    "timeOut": "5000",
                    "newestOnTop": true,
                    "maxOpened": 0
                });
                return;
            }

            if (validateEmail($scope.customer.email) == false) {
                toastr.error('Enter Valid Email', 'ERROR', {
                    "positionClass": "toast-top-right",
                    "timeOut": "5000",
                    "newestOnTop": true,
                    "maxOpened": 0
                });
                return;
            }

            if (phonenumber($scope.customer.telephone) == false || phonenumber($scope.customer.fax) == false) {
                toastr.error('Enter Valid Phone No and Fax of 8 digits', 'ERROR', {
                    "positionClass": "toast-top-right",
                    "timeOut": "5000",
                    "newestOnTop": true,
                    "maxOpened": 0
                });
                return;
            }

            var customer = $scope.customer;
            console.log(customer);
            customerService.saveCustomerService(customer).then(function (data) {
                console.log(data);
                toastr.success('New Customer Added Successfully', 'SUCCESS', {
                    "positionClass": "toast-top-right",
                    "timeOut": "5000",
                    "newestOnTop": true,
                    "maxOpened": 0
                });
                $scope.customer = {};
            });
        };

        function validateEmail(email) {
            var x = email;
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
                return false;
            }
        }

        function phonenumber(inputtxt) {
            var phoneno = /^\d{8}$/;
            if ((inputtxt.match(phoneno))) {
                return true;
            }
            else {
                return false;
            }
        }

    }

})();
