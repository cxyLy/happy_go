define(['app'],function(app){
    app.service('ser',function(){
        this.block = function(){
            return $('.search').css('display','block');

        };
        this.blockHome = function(){
            $('.search_back').on('click',function(){
                $('.header').css('display','block');
                $('#header').css('display','block');
            })
        };
        this.addElement = function(content){
            $('.history_box').prepend($("<p>" + content + "</p>"));
        }
    });
    return app.controller('searchCtrl',['$scope','ser',function($scope,ser){
        ser.block();
        ser.blockHome();
        $scope.search = ser.addElement;
        $scope.empty = function(){
            $('.history_box').empty();
        }
    }]);
});
