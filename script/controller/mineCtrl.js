define(['app'], function(app){
    return app.controller('mineCtrl',['$scope','$css', function ($scope,$css) {
        $css.add('css/mine.css');
        $scope.name = sessionStorage.getItem('name');
        $scope.username = $scope.name ? $scope.name : '登录'
    }]);
});
