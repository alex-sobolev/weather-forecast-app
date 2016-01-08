weatherApp.directive('weatherReport', function("cityService") {

    return {
        restrict: 'E',
        templateUrl: './../../directives_templates/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: '=',
            base: "=",
            convertToStandard: '&',
            convertToDate: '&',
            dateFormat: '@'
        },
    }
});