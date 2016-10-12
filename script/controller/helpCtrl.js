define(['app'],function(app){
    return app.controller('helpCtrl',['$scope','$css','$http', function ($scope,$css,$http) {
        $css.add('css/help.css');
        $http.get('data/help.json').success(function(res){
            $scope.data = res;
        });
        $scope.flag = true;
        $scope.tag = true;
    }]);
});
