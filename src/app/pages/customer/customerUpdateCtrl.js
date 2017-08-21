
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.customer')
        .controller('CustomerUpdateCtrl', CustomerUpdateCtrl);

    /** @ngInject */
    function CustomerUpdateCtrl($scope, $stateParams, customerService, toastr, $location) {

        var vm = this;
        var id = $stateParams.id;
        $scope.customer = {
            name: '',
            address: '',
            telephone: '',
            contact_person: '',
            fax: '',
            email: '',
            remark: ''
        };

        customerService.getSpecificCustomer(id).then(function (data) {
            console.log(data.data[0]);
            $scope.customer = data.data[0];
        });

        $scope.updateExistingCustomer = function () {
            var customer = $scope.customer;
            console.log(customer);
            customerService.updateCustomerService(customer).then(function (data) {
                console.log(data);
                toastr.success('Customer Details Updated Successfully', 'SUCCESS', {
                    "positionClass": "toast-top-right",
                    "timeOut": "5000",
                    "newestOnTop": true,
                    "maxOpened": 0
                });
                $location.path('/customer/view');
            });
        }

    }

})();
