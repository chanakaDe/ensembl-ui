(function () {
    'use strict';

    angular.module('BlurAdmin.pages', [
            'ui.router',

            //'BlurAdmin.pages.customer',
            'BlurAdmin.pages.track'
            //'BlurAdmin.pages.dashboard',
            //'BlurAdmin.pages.ui'

        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
        $urlRouterProvider.otherwise('/track');

        //baSidebarServiceProvider.addStaticItem({
        //    title: 'Pages',
        //    icon: 'ion-document',
        //    subMenu: [{
        //        title: 'Sign In',
        //        fixedHref: 'auth.html',
        //        blank: true
        //    }, {
        //        title: 'Sign Up',
        //        fixedHref: 'reg.html',
        //        blank: true
        //    }, {
        //        title: 'User Profile',
        //        stateRef: 'profile'
        //    }, {
        //        title: '404 Page',
        //        fixedHref: '404.html',
        //        blank: true
        //    }]
        //});
        //baSidebarServiceProvider.addStaticItem({
        //    title: 'Menu Level 1',
        //    icon: 'ion-ios-more',
        //    subMenu: [{
        //        title: 'Menu Level 1.1',
        //        disabled: true
        //    }, {
        //        title: 'Menu Level 1.2',
        //        subMenu: [{
        //            title: 'Menu Level 1.2.1',
        //            disabled: true
        //        }]
        //    }]
        //});
    }

})();
