define(['app'], function(app) {
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {templateUrl: './pages/home.html', controller: 'homeCtrl'})
            .when('/classify', {templateUrl: './pages/classify.html', controller: 'classifyCtrl'})
            .when('/classifyBord',{templateUrl:'./pages/classifyBord.html',controller:'classifyCtrlBord'})
            .when('/cf_shop', {templateUrl: './pages/cf_shop.html', controller: 'cf_shopCtrl'})
            .when('/cf_face', {templateUrl: './pages/cf_face.html', controller: 'cf_faceCtrl'})
            .when('/cf_hair',{templateUrl:'./pages/cf_hair.html',controller:'cf_hairCtrl'})
            .when('/cf_body', {templateUrl: './pages/cf_body.html', controller: 'cf_bodyCtrl'})
            .when('/shoppingCart', {templateUrl: './pages/shoppingCart.html', controller: 'cartCtrl'})
            .when('/mine', {templateUrl: './pages/mine.html', controller: 'mineCtrl'})
            .when('/cosmetics', {templateUrl: './pages/cosmetics.html', controller: 'cosmeticsCtrl'})
            .when('/comd', {templateUrl: './pages/comd.html', controller: 'comdCtrl'})
            .when('/kitchen', {templateUrl: './pages/kitchen.html', controller: 'kitchenCtrl'})
            .when('/times',{templateUrl:'./pages/times.html',controller:'timesCtrl'})
            .when('/clothes',{templateUrl:'./pages/clothes.html',controller:'clothesCtrl'})
            .when('/drygoods',{templateUrl:'./pages/drygoods.html',controller:'drygoodsCtrl'})
            .when('/digital',{templateUrl:'./pages/digital.html',controller:'digitalCtrl'})
            .when('/baby',{templateUrl:'./pages/baby.html',controller:'babyCtrl'})
            .when('/address',{templateUrl:'pages/addr.html',controller:'addrCtrl'})
            .when('/city',{templateUrl:'pages/city.html',controller:'cityCtrl'})
            .when('/order',{templateUrl:'pages/order.html',controller:'orderCtrl'})
            .when('/help',{templateUrl:'pages/help.html',controller:'helpCtrl'})
            .when('/login',{templateUrl:'pages/login.html',controller:'loginCtrl'})
            .when('/regist',{templateUrl:'pages/regist.html',controller:'registCtrl'})
            .when('/search',{templateUrl:'pages/search.html',controller:'searchCtrl'})
             .when('/goodsItem', {templateUrl: './pages/goodsItem.html', controller: 'goodsItemCtrl'})
            .when('/cartfull', {templateUrl: './pages/cartfull.html', controller: 'cartfullCtrl'})
            .when('/submitOrder', {templateUrl: './pages/submitOrder.html', controller: 'submitOrderCtrl'})
            .otherwise({redirectTo: '/home'});
    }])

})
