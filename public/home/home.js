
var Home = angular.module('myApp');


Home.controller('homeCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce){




$rootScope.Product=[];


//..........................................................GET




$rootScope.getContentType = function(type){

      Prismic.Api('https://fabbrica247.cdn.prismic.io/api', function (err, Api) {
          Api.form('everything')
              .ref(Api.master())
              .query(Prismic.Predicates.at("document.type", type)).submit(function (err, response) {

                  var Data = response;

                  setTimeout(function(){
                    $rootScope.firstLoading = false;
                    $scope.$apply();
                  }, 3000);


                  if (type =='product'){
                    $rootScope.Product = response.results;
                  }else if(type=='release'){
                    $rootScope.Release = response.results;
                  }else if(type =='journal'){
                    $rootScope.Journal = response.results;
                  }

                  // The documents object contains a Response object with all documents of type "product".
                  var page = response.page; // The current page number, the first one being 1
                  var results = response.results; // An array containing the results of the current page;
                  console.log(results);
                  // you may need to retrieve more pages to get all results
                  var prev_page = response.prev_page; // the URL of the previous page (may be null)
                  var next_page = response.next_page; // the URL of the next page (may be null)
                  var results_per_page = response.results_per_page; // max number of results per page
                  var results_size = response.results_size; // the size of the current page
                  var total_pages = response.total_pages; // the number of pages
                  var total_results_size = response.total_results_size; // the total size of results across all pages
                    return results;
              });
        });


};



$rootScope.getContentType('product');








});
