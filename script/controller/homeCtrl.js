
define(['app','swiper','angular-swiper'], function(app){
    app.factory('MathService',function(){
        var factory = {};
        var nowtime = new Date();
        var endtime = new Date("2016/9/27,00:00:00");//设置结束时间
        factory.showTime = function(){
                nowtime.setTime(nowtime.getTime() + 1000);
                lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000);
                d=Math.floor(lefttime/(60*60*24));
                h=Math.floor(lefttime/(60*60)%24);
                m=Math.floor(lefttime/60%60);
                s=Math.floor(lefttime%60);
                h = this.checkTime(h);
                m = this.checkTime(m);
                s = this.checkTime(s);
            return "仅剩"+h+":"+m+":"+s;
        };
        factory.checkTime = function(i){
            if(i < 10){
                i = '0' + i;
            }
            return i;
        };
        return factory;
    });


    return app.controller('homeCtrl',['$scope','$http','$interval','MathService', function ($scope,$http,$interval,MathService) {

        $http.get('data/1.json').success(function(res){
            $scope.data = res.goodsInfo;
        });
        $scope.swiper = {};
        $interval(function(){
            $scope.date = MathService.showTime();
        },1000);

    }]);
});

