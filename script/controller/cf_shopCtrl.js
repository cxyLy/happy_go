define(['app'],function(app){
	
		app.factory('tap',function(){
			return {
				show:function(){
					$('#filter_icon').slideToggle();
				}
			}
		})
	
		app.controller('cf_shopCtrl',function($scope,$http,tap){
			$scope.flag = true;
			$scope.tap=tap.show;
			$http.get('data/3.json').success(function(res){
			$scope.data = res.combine;
		})
	})
})