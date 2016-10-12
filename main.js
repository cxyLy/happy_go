require.config({
    paths: {
        "jquery": "lib/jquery-1.12.3",
        "angular" : "lib/angular.min",
        'angular-css':'lib/angular-css.min',
        "angular-route" : "lib/angular-route",
        "angular-animate" : "lib/angular-animate",
        'angular-swiper': 'lib/angular-swiper',
        'bootstrap':'lib/bootstrap.min',
        'swiper':'./lib/swiper-3.3.1.min',
        'touch':'lib/touch.min',
        'homeCtrl':'./script/controller/homeCtrl',
        'leyuanCtrl':'./script/controller/leyuanCtrl',
        'cartCtrl':'./script/controller/cartCtrl',
        'mineCtrl':'./script/controller/mineCtrl',
        'cosmeticsCtrl':'./script/controller/cosmeticsCtrl',
        'comdCtrl':'./script/controller/comdCtrl',
        'kitchenCtrl':'./script/controller/kitchenCtrl',
        'timesCtrl':'./script/controller/timesCtrl',
        'clothesCtrl':'./script/controller/clothesCtrl',
        'drygoodsCtrl':'./script/controller/drygoodsCtrl',
        'digitalCtrl':'./script/controller/digitalCtrl',
        'babyCtrl':'./script/controller/babyCtrl',
        'searchCtrl':'./script/controller/searchCtrl',
        'addrCtrl':'./script/controller/addrCtrl',
        'cityCtrl':'./script/controller/cityCtrl',
        'orderCtrl':'./script/controller/orderCtrl',
        'helpCtrl':'./script/controller/helpCtrl',
        'loginCtrl':'./script/controller/loginCtrl',
        'registCtrl':'./script/controller/registCtrl',
        'goodsItemCtrl':'./script/controller/goodsItemCtrl',
        'cartfullCtrl':'./script/controller/cartfullCtrl',
        'submitOrderCtrl':'./script/controller/submitOrder',
         'classifyCtrl':'./script/controller/classifyCtrl',
        'classifyCtrlBord':'./script/controller/classifyCtrlBord',
        'cf_shopCtrl':'./script/controller/cf_shopCtrl',
        'cf_faceCtrl':'./script/controller/cf_faceCtrl',
        'cf_bodyCtrl':'./script/controller/cf_bodyCtrl',
        'cf_hairCtrl':'./script/controller/cf_hairCtrl',
        "app" : "app",
        "route" : "route"
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route':{
            deps: ["angular"],
            exports: 'angular-route'
        },
        'angular-swiper':{
        	deps:['angular'],
        	exports: 'angular-swiper'
        },
        deps: ['bootstrap'],
        'angular-css':{
            deps: ["angular",'angular-route'],
            exports: 'angular-css'
        },
        'angular-animate':{
            deps: ["angular",'angular-route'],
            exports: 'angular-animate'
        }
    }
});






require(['jquery','angular','touch','angular-route','angular-css','route','homeCtrl','leyuanCtrl','registCtrl','cartCtrl','mineCtrl','cosmeticsCtrl','comdCtrl','kitchenCtrl','timesCtrl','clothesCtrl','drygoodsCtrl','digitalCtrl','babyCtrl','helpCtrl','addrCtrl','cityCtrl','angular-animate','orderCtrl','loginCtrl','searchCtrl','goodsItemCtrl','cartfullCtrl','submitOrderCtrl','classifyCtrl','mineCtrl','classifyCtrlBord','cf_shopCtrl','cf_faceCtrl', 'cf_bodyCtrl','cf_hairCtrl'],function (jq,angular){



    $(function () {
        document.documentElement.style.fontSize = innerWidth/3.2 + 'px';
        window.onresize = function(){
            document.documentElement.style.fontSize = innerWidth/3.2 + 'px';
        };
        angular.bootstrap(document,["myApp"]);
        $('html').addClass('ng-app:myApp');
    })

});
