
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.customer', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('customer', {
                url: '/customer',
                template: '<ui-view></ui-view>',
                abstract: true,
                title: 'Customer',
                sidebarMeta: {
                    icon: 'ion-person-stalker',
                    order: 800,
                },
            })
            .state('customer.add', {
                url: '/add',
                templateUrl: 'app/pages/customer/customer.html',
                controller: 'CustomerAddCtrl',
                title: 'Add Customer',
                sidebarMeta: {
                    order: 0,
                },
            })
            .state('customer.view', {
                url: '/view',
                templateUrl: 'app/pages/customer/view-customer.html',
                controller: 'CustomerViewCtrl',
                title: 'View Customer',
                sidebarMeta: {
                    order: 100
                }
            })
            .state('customer.update', {
                url: '/update/:id',
                templateUrl: 'app/pages/customer/update-customer.html',
                controller: 'CustomerUpdateCtrl',
                title: 'Update Customer'
            });
    }

})();