/// <reference path="angular-1.3.13.js" />

var unlockerApp = angular.module('unlockerApp', ['duScroll','ngAnimate']);
unlockerApp.config([
     '$locationProvider', function($locationProvider) {

         $locationProvider.html5Mode({
             enabled: true,
             requireBase: false
         });
    }
]);

unlockerApp.controller('mainController', ['$scope', 'unlockService',
    function ($scope, unlockService) {

        $scope.imeiModel = {
            imeiNumber: "",
            unlockCode: null,
            hasError: null
    };

        $scope.calculateCode = function () {
            var unlockCode = unlockService.calculateUnlockCode($scope.imeiModel.imeiNumber);
            if (unlockCode) {
                $scope.imeiModel.unlockCode = unlockCode;
                $scope.imeiModel.hasError = null;
               
            } else {
                $scope.imeiModel.hasError = true;
                $scope.imeiModel.unlockCode = null;
               
              
            }
           
        };

    }]);

unlockerApp.directive('fullHeight', ['$window',function ($window) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            
            scope.initializeWindowSize = function () {
                $(element).css('min-height', $window.innerHeight);
            };
            scope.initializeWindowSize();
            angular.element($window).bind('resize', function () {
                scope.initializeWindowSize();
            });
        }
    };
}]);

