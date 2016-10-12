define(['app'], function(app){
    return app.controller('orderCtrl',['$scope','$css','$http', function ($scope,$css,$http) {
        $css.add('css/order.css');
        $scope.flag = true;
        $scope.tag1 = true;
        $scope.tag2 = false;
        $scope.tag3 = false;
        $scope.tag4 = false;
        $scope.tag5 = false;
        $scope.changeClass = function(t){
            $scope.tag1 = false;
            $scope.tag2 = false;
            $scope.tag3 = false;
            $scope.tag4 = false;
            $scope.tag5 = false;
            switch(t){
                case 'tag1':
                    $scope.tag1 = $scope.tag1 ? $scope.tag1 : !$scope.tag1;
                    break;
                case 'tag2':
                    $scope.tag2 = $scope.tag2 ? $scope.tag2 : !$scope.tag2;
                    break;
                case 'tag3':
                    $scope.tag3 = $scope.tag3 ? $scope.tag3 : !$scope.tag3;
                    break;
                case 'tag4':
                    $scope.tag4 = $scope.tag4 ? $scope.tag4 : !$scope.tag4;
                    break;
                case 'tag5':
                    $scope.tag5 = $scope.tag5 ? $scope.tag5 : !$scope.tag5;
                    break;
            }


        }
        $http.get('data/shop.json').success(function(res){
            $scope.data = res['1098'];
            console.log($scope.data)
        })
    }]);
});

