/**
 * Created by chanaka on 8/1/17.
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.track')
        .factory('trackService', function ($http) {

            var trackService = {

                getAllTracks: function (text, species, type, release, division) {
                    return $http({
                        method: "GET",
                        url: host.track + '/search_advanced?text=' + text + '&species=' + species + '&type=' + type + '&release=' + release + '&division=' + division
                    }).then(function (response) {
                        return response.data;
                    });
                }
            };
            return trackService;
        });

})();

