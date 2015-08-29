angular.module('mainService', [])

	.factory('postService', ['$http',function($http) {
		return {
			get : function(region_id) {
				payload = '/api/getscore/?region_id='+region_id;
				return $http.get(payload);
			}
		}
	}])

	.factory('catService', ['$http',function($http) {
		return {
			get : function(region_id, cat_id) {
				payload = '/api/getcatscore/?region_id='+region_id+'&category_id='+cat_id;
				return $http.get(payload);
			}
		}
	}]);
