define(['app'], function(app){
    app.factory('tc1',function(){
        return {
            add:function(t,p){
                console.log(t);
                console.log(p);
                $.ajax({
                    type: "post",
                    url: "data/server.php",
                    async: true,
                    data:{"type":"register","username":t,"psd":p,"time":999,"state":'0'},
                    success: function(res) {
                        if(JSON.parse(res) == true){
                            alert('注册成功');
                            $('#regist').css({'display':'none'});
                            $('#displaybtn').css({'display':'block'});
                        }
                    }
                });
            }
        }
    })


    return app.controller('registCtrl',['$scope','$css','tc1', function ($scope,$css,tc1) {
        $css.add('css/regist.css');
        $scope.flag = true; $scope.err ='';$scope.err1 = ''; $scope.t = '';
        $scope.p = ''; $scope.rp = '';
        $scope.juge = function(){
            $scope.err = $scope.t.length <= 2 ? '用户名长度要大于2' : '';
            if($scope.t.length > 2){
                $scope.err1 = $scope.p == $scope.rp ? '' : '两次输入密码不一样';
            }
            ($scope.err || $scope.err1) ? ($scope.check = function(){}) : ($scope.check = tc1.add);
        }
    }]);
});
