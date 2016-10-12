define(['app'], function(app){
    return app.controller('cityCtrl',['$scope','$css',"$http",'$rootScope', function ($scope,$css,$http,$rootScope) {
        $css.add('css/city.css');
        $scope.city_name = "请选择省/市";
        $scope.pn = '';
        $scope.cn = '';
        $scope.bc = '';
        $http.get('data/city.json').success(function(res){
            $scope.citys = res['城市代码'];
        });
        $scope.getname = function(x,y){
            $scope.pn = x['省'];
            $scope.cn = y ? $scope.cn = y["市名"] : '';
            $scope.city_name = $scope.pn + '  ' + $scope.cn;
            if($scope.pn && $scope.cn){
                $scope.bc = '保存';
                $rootScope.ctname = $scope.city_name;
                console.log($rootScope.ctname)
            }


            //console.log(e['省']);
        }
        $scope.flag = false;

    }]);
});
