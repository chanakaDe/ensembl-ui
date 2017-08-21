/**
 * Created by chanaka on 8/1/17.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.track', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('track', {
                url: '/track',
                templateUrl: 'app/pages/track/track.html',
                controller: 'TrackViewCtrl',
                title: 'Track',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0,
                },
            });
    }

})();