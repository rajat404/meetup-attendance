angular.module('mainController', [])
    
    .controller('postController', ['$scope','$http', '$routeParams', 'postService', function($scope, $http, $routeParams, postService) {
        $scope.event_id = $routeParams.event_id;
        $scope.$on('$viewContentLoaded', function(){
              $scope.selected = undefined;
  $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

            $scope.home();

        });


        $scope.home = function(){



            postService.getRoster($scope.event_id).success(function(data) {

                $scope.response = data;
                window.console.log("$scope.response:",$scope.response);
                // if ($scope.response != null){
                // }
                // else{
                //     alert("No Data Available");
                // }

            });
        }

        $scope.submitName = function(){
            console.log("inside submitName function")
        }
    }]);
