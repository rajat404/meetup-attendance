angular.module('mainController', [])
    
    .controller('postController', ['$scope','$http', '$routeParams', 'postService', function($scope, $http, $routeParams, postService) {
        $scope.region_id = $routeParams.region_id;

        $scope.$on('$viewContentLoaded', function(){
            $scope.home();
        });

        $scope.home = function(){
            postService.get($scope.region_id).success(function(data) {
                $scope.response = data['data']['data'];
                if ($scope.response != null){
                }
                else{
                    alert("No Data Available");
                }
            });
        }
    }])

    .controller('catController', ['$scope','$http', '$routeParams', 'catService', function($scope, $http, $routeParams, catService) {

        $scope.cat_id = $routeParams.cat_id;
        $scope.region_id = $routeParams.region_id;

        $scope.$on('$viewContentLoaded', function(){
            $scope.cat();
        });
        $scope.cat = function(){
            catService.get($scope.region_id, $scope.cat_id).success(function(data){ 
                $scope.response2 = data['data']['data'];
                if ($scope.response2 != null){
                }
                else{
                    alert("No Data Available");
                }
            });
        }
    }]);
