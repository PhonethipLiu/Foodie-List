"use strict";

console.log("foodie-list.js is working");


var Restaurants = {}; //restaurant.json data goes in this array
let restItems = [];

var restaurants = []; //restaurant.json data goes in this array
var restCard = document.getElementById("restaurant-cards"); // want the dom restaurant cards to appear here
var restData;

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

 restaurants = get("restaurants.json")
    .then( (restaurants) => {
        restCard.innerHTML += restaurants.restaurants;
        console.log( "this is what I get when I run the request:", restaurants);
    }, function(error){
        console.log("Doh! Failed!", error);
    });

function cardTemplate(card){
    var restCard = card.restaurants;
    
    for(var i = 0; i < restCard.length; i++){
        var list = `<div class="card col-4" id="rest-${restCard[i].id}>
                    <div class="card-header"><b>City:</b> ${restCard[i].city_id}</div>
                    <div class="card-body">
                        <h5 class="card-title">${restCard[i].restaurant}</h5>
                        <p><b>Rating:</b> ${restCard[i].my_rating}</p>
                        <p class="card-text"> Restaurants.trip_purpose</p> 
                        <small class="text-muted">Date visited: ${restCard[i].date_visited}</small> 
                    </div>
                </div>`;
        return list;
    }   
}

let parseData = (data) => {
    data.cards.forEach( (element) => {
        restItems.push(element);
    });
    console.log("rest items:", restItems);
    return restItems;
};

module.exports = { Restaurants };

// restaurants = get("restaurants.json")
//     .then( (restaurants) => {
//             restCard.innerHTML += restaurants.create(cardTemplate);
//             // restCard.innerHTML += restaurants.restaurants[0].restaurant;
//         console.log( "this is what I get:", restaurants);
//     }, function (error){
//         console.log("Doh! Failed!", error);
// });

    



/* ---------------Extra thoughts --------------- */



// Restaurants.getRestaurants = () => {
//     return restItems;
// };
// console.log("rest items:", restItems);

// Restaurants.loadRestaurants = () => {
//     return new Promise( (resolve, reject) => {
//         let request =  new XMLHttpRequest();
//         request.onload = function (){
//             if(request.status === 200){
//                 let data = JSON.parse(request.responseText);
//                 console.log("new data", parseData(data));
//                 resolve(parseData(data));
//             } else{
//                 reject(new Error("XHR Error", request.statusText));
//             }
//         };
//         request.open('GET', "./restaurants.json");
//         request.send();
//     });
// };




// function cardTemplate(card){
//     return `<div class="card col-4" id="rest-${card[0].id}>
//     <div class="card-header"><b>City:</b> ${card[0].city_id}</div>
//     <div class="card-body">
//     <h5 class="card-title">${card[0].restaurant}</h5>
//     <p><b>Rating:</b> ${card[0].my_rating}</p>
//     <p class="card-text"> Restaurants.trip_purpose</p> 
//     <small class="text-muted">Date visited: ${card[0].date_visited}</small> </div>
//     </div>`;
// }

/* ---- not working because create card gets uncaught error -----*/
// restaurants = get("restaurants.json")
//     .then( (restaurants) => {
//             restCard.innerHTML += restaurants.create(cardTemplate);
//             // restCard.innerHTML += restaurants.restaurants[0].restaurant;
//         console.log( "this is what I get:", restaurants);
//     }, function (error){
//         console.log("Doh! Failed!", error);
// });


   
    

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