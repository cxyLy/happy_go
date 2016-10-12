define(['app'],function(app){
        return app.controller('clothesCtrl',['$scope','$http',function($scope,$http){
            $http.get('http://1.happygogogo.applinzi.com/data/clotData.php').success(function(res){
                //console.log(res);
                var myData=JSON.parse(res.split('<')[0]);
                //console.log(myData);
                $scope.clothesdata =  myData.goodsInfo;
            })
        }])
})

