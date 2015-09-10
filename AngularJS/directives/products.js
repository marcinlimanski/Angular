/**
 * Created by mlimansk on 10/09/15.
 */

(function(){

    //Defining a new module for this directive collection
    var app = angular.module('store-products', []);

    app.directive('productTitle', function(){
        return{
            //We define how a directive will work here
            restrict: 'E', //Specyfying a type of a directive in this case an html element <>
            templateUrl: 'product-title.html' //here we specify the template we want to load to the page
        };
    });

    app.directive('tabsDirective', function(){

        return{
            restrict: 'E',
            templateUrl: 'tabs.html'
        }


    });

})();

