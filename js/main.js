"use strict";

console.log("main.js for foodie is working");

// let data = require("./foodie-list");

var restaurants = {}; //restaurant.json data goes in this array
var cities = {};//cities.json data goes in this array
var restCard = document.getElementById("restaurant-cards"); // want the dom restaurant cards to appear here?


// function to get data XHR 

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

//apply the function to the variable
restaurants = get("restaurants.json")
    .then( (restaurants) => {
        console.log( "this is what I get when I run the request:", restaurants);
        populateCard(restaurants);
        // cardGrid(restaurants);
    }, function(error){
        console.log("Doh! Failed!", error);
    });


    function populateCard (restaurants) {

        for(let i = 0 ; i <restaurants.length; i++){

            let Cards = "",
                wrapper =  `<div class="card col-4" id="rest-${restaurants.id}">`,
                header =  `<div class="card-header"><b>City:</b> ${restaurants.city_id}</div>`,
                title = `<div class="card-body"><h5 class="card-title">${restaurants.restaurant}</h5>`,
                rating = `<p><b>Rating:</b> ${restaurants.my_rating}</p>`,
                description = `<p class="card-text">Restaurants.trip_purpose</p>`,
                footer = `<small class="text-muted">Date visited: ${restaurants.date_visited}</small> </div>`;
                
            // for(let i = 0; i < data.length; i++){
                
            
                restCard.innerHTML =  `${wrapper + header + title + rating+ description + footer}</div>`;
                
            }    
            
            // }
        // return restaurant;
    } 
//     let cGrid = buildGrid(restaurants);
//         restCards.innerHTML += cardGrid;
// };  

// let restPromise = data.card.loadRestaurant()
// .then(
//     (resolve) => { return resolve;
//     },(reject) => {
//         console.log("DOH! something went wrong", reject);
//     }).then(
//         (resolve) => {
//             console.log("Yeah! it worked", resolve);
//             showCards(resolve);
//         },
//         () => {
//             console.log("There was a promblem somewhere!");
//         });


        // Select  button options
// function selectCity (string) {
//     var xhrCity;
//     var selectCity = document.getElementById("restaurant-cards");
//     if(string == "") {
//         selectCity.innerHTML = "";
//         return;
//     }

//     xhrCity = new XMLHttpRequest();
//     xhrCity.onreadystatechange = function() {
//         if(this.readyState == 4 && this.status == 200){
//             selectCity.innerHTML = this.responseText;
//         }
//     };
//     xhrCity.open("GET", "cities.json", true);
//     xhrCity.send();
//     }  
// }; 
        