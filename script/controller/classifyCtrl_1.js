define(['app','swiper'], function(app){
	
	app.service('swiper',function(){
		this.mySwiper = function(){
			new Swiper ('.swiper-container', {
				slidesPerView : 6,
				observer: true,//修改swiper自己或子元素时，自动初始化swiper
       			 observeParents: true
		  })        
		}
	});
	
	 app.controller('classifyCtrl',['$scope','$http','swiper', function ($scope,$http,swiper) {
		$http.get('data/car.json').success(function(res){
			$scope.data = res.ListContents; 
			swiper.mySwiper();
		});
		
		$http.get('data/20.json').success(function(res){
			$scope.data_2 = res.ListContents;
		})
		$scope.flag = true;
    }]);
});
