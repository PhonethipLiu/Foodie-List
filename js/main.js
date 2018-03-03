"use strict";

console.log("main.js for foodie is working");

let data = require("./foodie-list");

let showCards = (restData) => {
    let restCards = document.getElementById("restaurant-cards");

    // restData.forEach( (data) => {
        
//     });
// };

    let buildGrid = (restaurant) => {
    
        let Cards = "",
            wrapper =  `<div class="card col-4" id="rest-${this.id}">`,
            header =  `<div class="card-header"><b>City:</b> ${this.city_id}</div>`,
            title = `<div class="card-body"><h5 class="card-title">${this.restaurant}</h5>`,
            rating = `<p><b>Rating:</b> ${this.my_rating}</p>`,
            description = `<p class="card-text">Restaurants.trip_purpose</p>`,
            footer = `<small class="text-muted">Date visited: ${this.date_visited}</small> </div>`;
            
        // for(let i = 0; i < data.length; i++){
            Cards += `${wrapper + header + title + rating+ description + footer}</div>`;
            // }
        return restaurant;
    }; 
    let cardGrid = buildGrid(data);
        restCards.innerHTML += cardGrid;
};  

let restPromise = data.card.loadRestaurant()
.then(
    (resolve) => {
        return resolve;
    },
    (reject) => {
        console.log("DOH! something went wrong", reject);
    }).then(
        (resolve) => {
            console.log("Yeah! it worked", resolve);
            showCards(resolve);
        },
        () => {
            console.log("There was a promblem somewhere!");
        });


        // Select  button options
function selectCity (string) {
    var xhrCity;
    var selectCity = document.getElementById("restaurant-cards");
    if(string == "") {
        selectCity.innerHTML = "";
        return;
    }

    xhrCity = new XMLHttpRequest();
    xhrCity.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            selectCity.innerHTML = this.responseText;
        }
    };
    xhrCity.open("GET", "cities.json", true);
    xhrCity.send();
}
        