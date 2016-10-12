define(['app','swiper','angular-swiper'], function(app){
	
	 app.controller('classifyCtrl',['$scope','$http', function ($scope,$http) {
		$http.get('data/car.json').success(function(res){
			$scope.data = res.ListContents; 
		});
		$scope.swiper={};
		$http.get('data/20.json').success(function(res){
			$scope.data_2 = res.ListContents;
		})
		$scope.flag = true;
    }]);
});
