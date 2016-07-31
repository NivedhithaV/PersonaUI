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

            $scope.data = {
                "connection_list": [
                    {
                        "connection_id": 2,
                        "country_origin": "Canada",
                        "created_at": "Sun, 31 Jul 2016 10:11:52 GMT",
                        "description": "Hello there!!!! Description is here",
                        "email": "helloworld@gmail.com",
                        "first_name": "Second",
                        "helper": 0,
                        "helper_id": 1,
                        "id": 2,
                        "last_name": "Person",
                        "newcomer_id": 2,
                        "password": "$2b$12$tVG4ojdZRMlmirQ7R1rZOOKJtxFD5YgFLyXsIXkfCfEImM12d6Wou",
                        "updated_at": "Sun, 31 Jul 2016 10:11:52 GMT",
                        "username": "helloworld",
                        "zipcode": "12345"
                    },
                    {
                        "connection_id": 2,
                        "country_origin": "Canada",
                        "created_at": "Sun, 31 Jul 2016 10:11:52 GMT",
                        "description": "Hello there!!!! Description is here",
                        "email": "helloworld@gmail.com",
                        "first_name": "Second",
                        "helper": 0,
                        "helper_id": 1,
                        "id": 2,
                        "last_name": "Person",
                        "newcomer_id": 2,
                        "password": "$2b$12$tVG4ojdZRMlmirQ7R1rZOOKJtxFD5YgFLyXsIXkfCfEImM12d6Wou",
                        "updated_at": "Sun, 31 Jul 2016 10:11:52 GMT",
                        "username": "helloworld",
                        "zipcode": "12345"
                    }
                ]
            };

            $scope.searchResults = $scope.data.connection_list;
            var btnText = { 'btnText' : 'Connect' };

            $scope.searchResults = $scope.searchResults.map(function(obj) {
                return angular.extend(obj, btnText);
            });

            $scope.delete = function (e) {
                var el = e.target;
                console.log(angular.element(el).parent().parent());
                angular.element(el).parent().parent().remove();
            }
        }]
    );