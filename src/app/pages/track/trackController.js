/**
 * Created by chanaka on 8/1/17.
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.track')
        .controller('TrackViewCtrl', TrackViewCtrl)
        .filter('unsafe', function ($sce) {
            return $sce.trustAsHtml;
        });

    /** @ngInject */
    function TrackViewCtrl($scope, trackService, $uibModal) {
        var vm = this;

        $scope.track = {
            text: '',
            species: '',
            type: '',
            release: '',
            division: ''
        };

        $scope.findTracks = function () {

            if ($scope.track.text == "") {
                document.getElementById('freeText').style.background = '#FF7276';
            } else {
                document.getElementById('freeText').style.background = '#FFFFFF';
                var track = $scope.track;
                console.log(track);

                trackService.getAllTracks(track.text, track.species, track.type, track.release, track.division).then(function (data) {
                    console.log(data);
                    $scope.allTracks = data;
                });
            }

        };

        $scope.expandDescription = function (indexNo) {
            document.getElementById("full_description" + indexNo).style.display = 'block';
            document.getElementById("cropped_description" + indexNo).style.display = 'none';
            console.log("Expand");
        };

        $scope.collapseDescription = function (indexNo) {
            document.getElementById("full_description" + indexNo).style.display = 'none';
            document.getElementById("cropped_description" + indexNo).style.display = 'block';
            console.log("Collapse");
        };

    }

})();
