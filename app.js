var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
    })

    .when('/forecast', {
        templateUrl: 'templates/forecast.html',
        controller: 'forecastController'
    })

    .when('/forecast/:days', {
        templateUrl: 'templates/forecast.html',
        controller: 'forecastController'
    })

    .otherwise('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
    });



});









