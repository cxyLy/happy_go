define(['app'],function(app){
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
	return app.controller('cartfullCtrl', ['$scope','$window', '$http','$rootScope',function($scope,$window,$http,$rootScope){
        // 接收来自goodsItem页面传递的数据
        $scope.modelTwo = angular.fromJson($rootScope.model2);
        console.log($scope.modelTwo);

		$http.get("./data/2.json").success(function(res){
            $scope.dataset = res.goodsInfo;
        })
		
		$scope.name = 'cartfull';
		$scope.price = 99;
		$scope.num = 1;
		$scope.add = function(){
				$scope.num = $scope.num + 1;
			},
		$scope.sub = function(){
			if($scope.num <= 1){
				$scope.num = 1;
			}else{
				return $scope.num =  $scope.num - 1;
			}
		}
		$scope.back = function(){
            $window.history.back();
        }
        $scope.flag = true;
        $scope.go = "去结算";
        $scope.editAddr = "#/submitOrder";
        $scope.edit = function(){
        	$scope.flag = !$scope.flag;
        	if($scope.flag){
        		
        			$scope.go = "去结算";
        			$scope.editAddr = "#/submitOrder";
                    // 把数据再传递给提交订单页面
                    $rootScope.model3 =  $scope.modelTwo;
        			return;
        	}else{
        		
        			$scope.go = "删除";
        			$scope.delate = function(){
        				$('.cartfull-list-desc').empty();
        				$scope.num = 0;
        			}
        			$scope.editAddr = "javascript:void(0)";

        			return;
        	}
        }
        
	}])
})