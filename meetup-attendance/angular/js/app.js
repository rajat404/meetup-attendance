angular.module('attendanceApp',['ngRoute', 'mainController', 'mainService', 'ui.bootstrap'])
.config(['$routeProvider', '$locationProvider', function($routeProvider) {
  $routeProvider.
        when("/", {templateUrl: "views/home.html", controller: "postController"}).
        when("/:event_id/home", {templateUrl: "views/home.html", controller: "postController"}).
        otherwise({redirectTo: '/'});
}]);
