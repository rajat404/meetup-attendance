angular.module('mainController', [])
    
    .controller('postController', ['$scope','$http', '$routeParams', 'postService', function($scope, $http, $routeParams, postService) {
        $scope.event_id = $routeParams.event_id;
        window.console.log("$scope.event_id:",$scope.event_id);
        $scope.$on('$viewContentLoaded', function(){
            $scope.home();
        });

        $scope.home = function(){
            postService.getRoster($scope.event_id).success(function(data) {
                window.console.log("$scope.event_id2:",$scope.event_id);

                $scope.response = data;
                window.console.log("$scope.response:",$scope.response);
                if ($scope.response != null){
                }
                else{
                    alert("No Data Available");
                }
            });
        }

        $scope.submitName = function(){
            console.log("inside submitName function")
        }
    }]);
