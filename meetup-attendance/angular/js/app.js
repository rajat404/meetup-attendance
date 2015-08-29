angular.module('singularApp',['ngRoute', 'mainController', 'mainService'])
.config(['$routeProvider', '$locationProvider', function($routeProvider) {
  $routeProvider.
        when("/", {templateUrl: "views/home.html"}).
        when("/:region_id/feed", {templateUrl: "views/feed.html", controller: "postController"}).
        when("/:region_id/:cat_id/cat", {templateUrl: "views/cat.html", controller: "catController"}).
        when("/home", {templateUrl: "views/home.html"}).
        when("/cathome", {templateUrl: "views/cathome.html"}).
        otherwise({redirectTo: '/'});
}]);
