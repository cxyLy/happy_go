define(['app'], function(app){
	app.value('name', '购物车');
    app.factory('locals',['$window',function($window){
      return{
        //存储单个属性
        set:function(key,value){
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
    return app.controller('cartCtrl',['$scope','$http','name','$rootScope','locals',function ($scope,$http,name,$rootScope,locals) {
        $scope.title = name;
        $http.get("./data/1.json").success(function(res){
        	$scope.datas = res.goodsInfo['1098'];
        	// console.log(res);
        	
        })
       $scope.transmit = function(data){
        $scope.data = angular.toJson(data);
         $rootScope.model = $scope.data;

          console.log($rootScope.model);
       }

       // $scope.transmit = locals.setObject('model','data');

    }]);
});
