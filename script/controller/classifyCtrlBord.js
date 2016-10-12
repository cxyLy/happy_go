define(['app'],function(app){
	return app.controller('classifyCtrlBord',function($scope,$http){
		$http.get('data/car.json').success(function(res){
		$scope.data = res.ListContents;
		})
	})
})
//define(['app'], function(app){
//  return app.controller('classifyCtrlBord',['$scope',"$http", function ($scope,$http) {
//      $http.get('data/car.json').success(function(res){
//		$scope.data = res.ListContents;
//		})
//  }]);
//});