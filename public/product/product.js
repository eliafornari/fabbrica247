
var Product = angular.module('myApp');


Product.controller('productCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce){


$rootScope.productDetail={};

  $rootScope.thisProduct=function(uid){

    for (f in $rootScope.Product){
      if ($rootScope.Product[f].uid == uid){
        $rootScope.productDetail = $rootScope.Product[f];
        $rootScope.detailImages = $rootScope.productDetail.data['product.image'].value;
        console.log($rootScope.detailImages);
      }
    }
  }



});
