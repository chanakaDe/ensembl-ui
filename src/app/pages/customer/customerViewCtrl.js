
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.customer')
        .controller('CustomerViewCtrl', CustomerViewCtrl);

    /** @ngInject */
    function CustomerViewCtrl($scope, customerService) {
        var vm = this;

        customerService.getAllCustomers(20, 0).then(function (data) {
            console.log(data);
            $scope.allCustomers = data.data;
        });

        $scope.printCustomers = function () {
            html2canvas(document.getElementById('allCustomers'), {
                onrendered: function (canvas) {
                    var data = canvas.toDataURL();
                    var docDefinition = {
                        content: [{
                            image: data,
                            width: 500
                        }]
                    };
                    pdfMake.createPdf(docDefinition).download("Customers.pdf");
                }
            });
        }

    }

})();
