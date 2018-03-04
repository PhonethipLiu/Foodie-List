"use strict";

console.log("foodie-list.js is working");


var restaurants = []; //restaurant.json data goes in this array
var restCard = document.getElementById("restaurant-cards"); // want the dom restaurant cards to appear here

// function to get data

function get(url){
    return new Promise ( (resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onload = function() {
            if (xhr.status == 200){
                resolve(JSON.parse(xhr.response));
            } else {
                reject(Error(xhr.statusText));
            }
        };
        // handles network errors
        xhr.onerror = function(){
            reject(Error(xhr.statusText));
        };

        //make request
        xhr.send();
    });    
}



function cardTemplate(card){
    return `<div class="card col-4" id="rest-${card.id}>
    <div class="card-header"><b>City:</b> ${card.city_id}</div>
    <div class="card-body">
    <h5 class="card-title">${card.restaurant}</h5>
    <p><b>Rating:</b> ${card.my_rating}</p>
    <p class="card-text"> Restaurants.trip_purpose</p> 
    <small class="text-muted">Date visited: ${card.date_visited}</small> </div>
    </div>`;
}


restaurants = get("restaurants.json")
    .then( (restaurants) => {
            restCard.innerHTML += restaurants.restaurants;
        console.log( "this is what I get:", restaurants);
    }, function (error){
        console.log("Doh! Failed!", error);
});
   


    




//  restaurants = get("restaurants.json")
//     .then( (restaurants) => {
//         restCard.innerHTML += restaurants.restaurants;
//         console.log( "this is what I get when I run the request:", restaurants);
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

// module.exports = { restaurants};