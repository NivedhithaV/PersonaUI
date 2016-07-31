'use strict';

angular.module('app')
    .directive('searchResults', function () {
        return {
            restrict: 'E',
            templateUrl: 'search-results.html',
            scope: {},
            controller: 'SearchResultsController'
        };
    });

angular.module('app')
    .controller('SearchResultsController', ['$log', '$scope', '$rootScope', '$location',
        function ($log, $scope, $rootScope, $location) {

            $scope.gotoProfile = function () {
                $location.url("/profile");
            };

            $scope.data =  {
                "searchresults": [
                    {
                        "country_origin": "Syria",
                        "created_at": "Sun, 31 Jul 2016 10:10:58 GMT",
                        "description": "Description is here",
                        "email": "firstperson@gmail.com",
                        "first_name": "First",
                        "helper": 1,
                        "id": 1,
                        "last_name": "Person",
                        "password": "$2b$12$W6LqIey7qNbMI550K5QzjuF.tZvoB0eKnh6KTNrNHsDswssR6jxNK",
                        "updated_at": "Sun, 31 Jul 2016 10:10:58 GMT",
                        "username": "first",
                        "zipcode": "93456"
                    },
                    {
                        "country_origin": "Germany",
                        "created_at": "Sun, 31 Jul 2016 10:12:27 GMT",
                        "description": "Description is here",
                        "email": "thirdhelper@gmail.com",
                        "first_name": "Third",
                        "helper": 1,
                        "id": 3,
                        "last_name": "Helper",
                        "password": "$2b$12$OG7q0pFH1GfYvIgApDtg0OU.0IpVJeoLUzwMzgGT5eNSpRv.uHyte",
                        "updated_at": "Sun, 31 Jul 2016 10:12:27 GMT",
                        "username": "thirdhelper",
                        "zipcode": "93456"
                    }
                ]
            };

            $scope.searchResults = $scope.data.searchresults;


                /*[
                    {
                        'username': 'Filza M.',
                        'country': 'Pakistan',
                        'services': ['Social Visits', 'Language Translator', 'English Tutoring']
                    },
                    {
                        'username': 'Filza M.',
                        'country': 'Pakistan',
                        'services': ['Social Visits', 'Language Translator', 'English Tutoring']
                    },
                    {
                        'username': 'Filza M.',
                        'country': 'Pakistan',
                        'services': ['Social Visits', 'Language Translator', 'English Tutoring']
                    },
                    {
                        'username': 'Filza M.',
                        'country': 'Pakistan',
                        'services': ['Social Visits', 'Language Translator', 'English Tutoring']
                    }
                ];*/

        }]
    );