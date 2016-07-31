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

            $scope.searchResults =
                [
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
                ];

        }]
    );