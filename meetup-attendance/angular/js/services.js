angular.module('mainService', [])

    .factory('postService', function($http) {
        var temp = {};

        temp.getRoster = function(event_id) {
            return $http({
            method: 'GET',
            url: '/api/roster/'+event_id+'/complete/',
          });
        }
        
        return temp;
    });
