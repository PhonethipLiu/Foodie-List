"use strict";

console.log("main.js for foodie is working");

var dataRest = require("./foodie-list");
var dataCity = require("./cities");



function restCards(data){
    return`
    <div class="card col-4" id="rest-${data.id}>
        <div class="card-header"><b>City:</b> ${data.city_id}</div>
        <div class="card-body">
        <h5 class="card-title">${data.restaurant}</h5>
        <p><b>Rating:</b> ${data.my_rating}</p>
        <p class="card-text"> Restaurants.trip_purpose</p> 
        <small class="text-muted">Date visited: ${data.date_visited}</small> </div>
    </div>`;
}


// function to display data XHR 
function displayRestaurants() {

    dataRest.restaurants.then ( ()=>{

        for(let i = 0 ; i <dataRest.length; i++){
        
            document.getElementById("restaurant-cards").innerHTML = `
            <h1 class="rest-list">Restaurants I have visited(${dataRest.length})</h1>
            ${dataRest.map(restCards).join('')}`;
        } 
    });
}






// restData.addEventListener("load", restDataLoad);
// restData.addEventListener("error", restDataError);
// function getdata(){
//     return new Promise ( (resolve, reject) => {
//         var restxhr = new XMLHttpRequest();
//         restxhr.open("GET", "restaurants.json");

//         restxhr.onload = function() {
//             if (restxhr.status == 200){
//                 restaurants = JSON.parse(this.responseText);
//                 resolve(restaurants);
//                 console.log(restaurants);
//             } else {
//                 reject(Error(restxhr.statusText));
//             }
//         };
//         // handles network errors
//         restxhr.onerror = function(){
//             reject(Error(restxhr.statusText));
//         };

//         //make request
//         restxhr.send();
//     });    
// }

// getdata();
// // apply callbacks 

// function showRestData () {
   
//     getdata().then( (restaurants) => {
//         console.log( "this is what I get when I run the restaurants request:", restaurants);
//         for(let i = 0 ; i <restaurants.length; i++){
//             restCard.innerHTML = restaurants[i].restaurant;

//             console.log("what is in restaurants?", restaurants);
    
   
//     }); reject( (error) => {
//         console.log("Doh! Failed!", error);
//     });


            // let Cards = "",
            //     wrapper =  `<div class="card col-4" id="rest-${restaurants.id}">`,
            //     header =  `<div class="card-header"><b>City:</b> ${restaurants.city_id}</div>`,
            //     title = `<div class="card-body"><h5 class="card-title">${restaurants.restaurant}</h5>`,
            //     rating = `<p><b>Rating:</b> ${restaurants.my_rating}</p>`,
            //     description = `<p class="card-text">Restaurants.trip_purpose</p>`,
            //     footer = `<small class="text-muted">Date visited: ${restaurants.date_visited}</small> </div>`;
                
            // for(let i = 0; i < data.length; i++){
                
            
                // restCard.innerHTML =  `${wrapper + header + title + rating+ description + footer}</div>`;
                
            // }    
            
            // }
        // return restaurant;
    // } 
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

 
// return get("cities.json");
// }).then( (cities) => {
//     console.log( "this is the array of cities request:", cities);
// }). catch( (error) => {
//     console.log("Doh! Failed!", error);
// });
        