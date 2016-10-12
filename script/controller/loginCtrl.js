define(['app'], function(app){
    app.factory('tc',function(){
            return {
            add:function(u,p){
                console.log(u);
                console.log(p);
                //$.ajax({
                //    type:"post",
                //    url:"data/server.php",
                //    async:true,
                //    data:{"type":"login","username":u,"pwd":p},
                //    success:function(data){//data 是服务端返回的值
                //        var data = JSON.parse(data);//将data解析
                //        console.log(data);
                //        if(data == true){
                //            $('#login')['0'].href = '#/mine';
                //            sessionStorage.setItem('name',u);
                //        }
                //    }
                //});
                $('#login')['0'].href = '#/mine';
                sessionStorage.setItem('name',u);
            }
        }
    });
    return app.controller('loginCtrl',['$scope','$css','tc', function ($scope,$css,tc) {
        $css.add('css/login.css');
        $scope.flag = true;
        $scope.juge = tc.add;
        $scope.user = '';
        $scope.err = '';
        $scope.err1 = '';
        $scope.psw = '';
        $scope.username = function(){
            $scope.user.length < 3 ? $scope.err = '3位以上的用户名' : $scope.err = '';
            $scope.err == '3位以上的用户名' ? $scope.err1 = '' : ($scope.psw.length == 0 ? $scope.err1 = '请输入密码' : $scope.err1 = '');
        }
    }]);
});
