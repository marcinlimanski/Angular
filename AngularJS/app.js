/**
 * Created by marcinlimanski on 07/09/15.
 */

//importing angular
//Wrapping app in a closure
(function(){
    //passing the name of the app and the array of dependencies
    var app = angular.module('store', []);


    //Creating controlers
    app.controller('StoreControler', function(){

        //this.product is a property of the controler
        this.products = gems;

    });


    app.controller('ReviewController', function(){
        this.review = {};

        //product is an object instance from StoreControler.products.product
        this.addReview = function(product){
            product.reviews.push(this.review);
            //This will clear the object
            this.review = {};
        }
    });

    //Creating array of  objects
    var gems = [
        {
            name : 'Crossbow',
            price : 27,
            description : 'crossbow is a very good gem',
            image : 'images/json.jpeg',
            //This beheiviour is binded to ng-show
            showTheButton : true,
            reviews : [
                {
                    starts : 5,
                    body : "I love this thing",
                    author : "marcin"
                },
                {
                    starts : 2,
                    body : "I thing",
                    author : "tom"
                }
            ]
        },
        {
            name : 'Bow',
            price : 24,
            description : 'bow is a very shit gem',
            image : 'images/wow.jpg',
            //This beheiviour is binded to ng-show
            showTheButton : true
        }
    ];


})();