define(['app'],function(app){
	app.controller('cf_hairCtrl',function($scope,$http){
			$scope.flag = true;
		$http.get('data/3.json').success(function(res){
			$scope.data=res.data_4
		})
	})
})