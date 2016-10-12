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
    return app.controller('goodsItemCtrl',['$scope','$http','$window','$rootScope',function ($scope,$http,$window,$rootScope) {
        // 接收来自商品列表的数据
        $scope.modelOne = angular.fromJson($rootScope.model);
        console.log($scope.modelOne);

       $scope.name="goodsItemCtrl";
        $http.get("./data/1.json").success(function(res){
        	$scope.dataset = res.goodsInfo['1099'];
        	

        })
        $http.get("./data/2.json").success(function(res2){
            $scope.dataset2 = res2.goodsInfo;
            $scope.dataset3 = res2.goodsInfo.goods_more;
        })
        // 计算折扣
        $scope.disNum = function(x,y){
            // if(x instanceof Number && y instanceof Number){
                return (x / y *10).toFixed(1);
            // }
            
        }
        $scope.flag = true;
        $scope.flag1 = false;
        $scope.flag2 = false;
        $scope.back = function(){
            $window.history.back();
        }
        // 购物车增加数量
        $scope.cNum = 0;
        // 搜藏按钮
        $scope.tag = true;
        // 判断购物车是否有东西，再跳转不同页面
        $scope.linkAddr = '#/shoppingCart';
        $scope.judgeCart = function(){
            $scope.cNum = $scope.cNum + 1;
            if($scope.cNum < 1){
               $scope.linkAddr = '#/shoppingCart';
            }else{
               $scope.linkAddr = '#/cartfull';
               $scope.transmit = function(){
                 $rootScope.model2 = angular.toJson($scope.modelOne);
               }
            }
            
            return;
        }
        // 立即购买页面
        $scope.flag3 = false;
        $scope.pageShow = function(){
            $scope.flag3 = !$scope.flag3;
            if($scope.flag3){
                $('.buyNow-page').fadeIn(300);
            }else{
                 $('.buyNow-page').fadeOut(300);
            }
        }
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
         $scope.transmitFast = function(){
                 $rootScope.model2 = angular.toJson($scope.modelOne);
               }
    }]);
});