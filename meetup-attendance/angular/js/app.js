angular.module('attendanceApp',['ngRoute', 'mainController', 'mainService'])
.config(['$routeProvider', '$locationProvider', function($routeProvider) {
  $routeProvider.
        when("/", {templateUrl: "views/attendance.html", controller: "postController"}).
        when("/:event_id/attendance", {templateUrl: "views/attendance.html", controller: "postController"}).
        otherwise({redirectTo: '/'});
}]);
