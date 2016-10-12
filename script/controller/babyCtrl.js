define(['app','swiper'],function(app){
    app.service('swiper',function(){
        this.mySwiper = function(){
            new Swiper ('.select section .swiper-container', {
                slidesPerView:3,
                //手机端测试可能会出现问题
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true//修改swiper的父元素时，自动初始化swiper
            });
        }
    });
    return app.controller('babyCtrl',['$scope','$http','swiper',function($scope,$http,swiper){
        $http.get('http://1.happygogogo.applinzi.com/data/babyData.php').success(function(res){
            //console.log(res);
            var myData=JSON.parse(res.split('<')[0]);
            //console.log(myData);
            $scope.babydata =  myData.goodsInfo;
            swiper.mySwiper();
        })
    }])
})
