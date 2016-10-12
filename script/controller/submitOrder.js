define(['app'], function(app){
    app.factory('locals',['$window',function($window){
      return{
        //存储单个属性
        set :function(key,value){
          $window.localStorage[key]=value;
        },
        //读取单个属性
        get:function(key,defaultValue){
          return  $window.localStorage[key] || defaultValue;
        },
        //存储对象，以JSON格式存储
        setObject:function(key,value){
          $window.localStorage[key]=JSON.stringify(value);
        },
        //读取对象
        getObject: function (key) {
          return JSON.parse($window.localStorage[key] || '{}');
        }

      }
  }]);
    return app.controller('submitOrderCtrl',['$scope','$window','$timeout','$http','$rootScope',function ($scope,$window,$timeout,$http,$rootScope) {
        // 接收来自cartfull页面的数据
        $scope.modelThree = angular.fromJson($rootScope.model3);
        
        // 接收来自goodsItem页面的数据
         $scope.modelFour = angular.fromJson($rootScope.model2);
         console.log($scope.modelFour);
        // 解析自己造的数据
        $http.get("./data/2.json").success(function(res){
            $scope.dataset = res.goodsInfo;
            // console.log($scope.dataset);

        })

        // 返回按钮
       $scope.name="submitOrderCtrl";
        $scope.back = function(){
            $window.history.back();
        }
        
        $scope.flag = false;
        $scope.usePoints = function(){
        	$('.wraning').stop().fadeIn(500);
        	$('.wraning span').text("积分使用失败，最小使用积分为200");
			$timeout(function(){
				$('.wraning').stop().fadeOut(500);
			},1000)
        }
        $scope.payStyle = function(){
        	$('.wraning').stop().fadeIn(500);
        	$('.wraning span').text("该商品只支持在线支付");
			$timeout(function(){
				$('.wraning').stop().fadeOut(500);
			},1000)
        }
        $scope.bill = function(){
        	$('.wraning').stop().fadeIn(500);
        	$('.wraning span').text("发票功能暂时还未开通");
			$timeout(function(){
				$('.wraning').stop().fadeOut(500);
			},1000)
        }
         $scope.submit = function(){
        	$('.wraning').stop().fadeIn(500);
        	$('.wraning span').text("订单提交失败，无法获取到收货地址");
			$timeout(function(){
				$('.wraning').stop().fadeOut(500);
			},1000)
        }
        $scope.show_yhq = function(){
        	$scope.flag = !$scope.flag;
        	if($scope.flag){
        		$('.youhuiquan').animate({'left':0},300);

        	}else{
        		$('.youhuiquan').animate({'left':'3.2rem'},300);

        	}
        }
        
        $('.youhuiquan-list-inner li').on('mousedown',function(){
        	$scope.flag = !$scope.flag;
        	$('.youhuiquan').animate({'left':'3.2rem'},300);
        	$('.youhuiquan-desc').text($(this).find('span').eq(1).text());
        })
    }]);
});