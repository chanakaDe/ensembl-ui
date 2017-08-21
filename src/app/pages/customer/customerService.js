
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.customer')
        .factory('customerService', function ($http) {

            var customerService = {

                saveCustomerService: function (data) {
                    return $http({
                        method: "POST",
                        data: data,
                        url: host.customer_manage + '/customer'
                    }).then(function (response) {
                        return response.data;
                    });
                },
                updateCustomerService: function (data) {
                    return $http({
                        method: "PUT",
                        data: data,
                        url: host.customer_manage + '/customer'
                    }).then(function (response) {
                        return response.data;
                    });
                },
                getAllCustomers: function (limit, offset) {
                    return $http({
                        method: "GET",
                        url: host.customer_manage + '/customer/' + limit + '/' + offset
                    }).then(function (response) {
                        return response.data;
                    });
                },
                getSpecificCustomer: function (id) {
                    return $http({
                        method: "GET",
                        url: host.customer_manage + '/customer/' + id
                    }).then(function (response) {
                        return response.data;
                    });
                }
            };
            return customerService;
        });

})();

