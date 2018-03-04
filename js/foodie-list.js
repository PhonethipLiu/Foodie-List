"use strict";

console.log("foodie-list.js is working");


// var restaurants = []; //restaurant.json data goes in this array
// var cities = [];//cities.json data goes in this array
// var restCard = document.getElementById("restaurant-cards"); // want the dom restaurant cards to appear here?


// // function to get data

// function get(url){
//     return new Promise ( (resolve, reject) => {
//         var xhr = new XMLHttpRequest();
//         xhr.open("GET", url);

//         xhr.onload = function() {
//             if (xhr.status == 200){
//                 resolve(JSON.parse(xhr.response));
//             } else {
//                 reject(Error(xhr.statusText));
//             }
//         };
//         // handles network errors
//         xhr.onerror = function(){
//             reject(Error(xhr.statusText));
//         };

//         //make request
//         xhr.send();
//     });    
// }

// restaurants = get("restaurants.json")
//     .then( (restaurants) => {
//         console.log( "this is what I get when I run the request:", restaurants);
//         restCard.innerHTML += restaurants ;
//     }, function(error){
//         console.log("Doh! Failed!", error);
//     });


// var promise = get("restaurants.json");
//     promise.then( (restaurants) => {
//         console.log(restaurants);
//         return get("cities.json") ;
//     }).then( (cities) => {
//         console.log(cities);
//     }).catch(function(error){
//         console.log(error);
// });

// console.log("what is card", restaurant);

