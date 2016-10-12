define(['app'], function(app){
    return app.controller('addrCtrl',['$scope','$css','$rootScope', function ($scope,$css,$rootScope) {
        $css.add('css/addr.css');
        console.log($rootScope.ctname == null);
        $scope.ct_name = ($rootScope.ctname == null) ? '请选择街道' : $rootScope.ctname;
        $scope.flag = true;
    }]);
});
