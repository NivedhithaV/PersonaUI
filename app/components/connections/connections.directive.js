'use strict';

angular.module('app')
    .directive('connections', function () {
        return {
            restrict: 'E',
            templateUrl: 'connections.html',
            scope: {},
            controller: 'ConnectionsController'
        };
    });

angular.module('app')
    .controller('ConnectionsController', ['$log', '$scope', '$rootScope',
        function ($log, $scope, $rootScope) {
            $scope.searchResults =
                [
                    {
                        'username': 'Filza M.',
                        'country': 'Pakistan',
                        'btnText': 'Connect'
                    },
                    {
                        'username': 'Filza M.',
                        'country': 'Pakistan',
                        'btnText': 'Connect'
                    },
                    {
                        'username': 'Filza M.',
                        'country': 'Pakistan',
                        'btnText': 'Connect'
                    },
                    {
                        'username': 'Filza M.',
                        'country': 'Pakistan',
                        'btnText': 'Connect'
                    }
                ];

            $scope.delete = function (e) {
                var el = e.target;
                console.log(angular.element(el).parent().parent());
                angular.element(el).parent().parent().remove();
            }
        }]
    );