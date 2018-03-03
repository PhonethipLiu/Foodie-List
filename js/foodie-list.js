"use strict";

console.log("foodie-list.js is working");

// make XHR request

var restaurant = [];
let card = {};

function loadRestData (data){
    // let keys = Object.keys();
    // keys.forEach( (data) => {
    //     console.log("what are the keys", keys);
    //     restaurant.push(data);
    // });
    return restaurant;
}
console.log("restaurant data filled:", restaurant);

//get data
card.getRestaurant = () => {
    return restaurant;
};

// load data xhr
card.loadRestaurant = () => {
    return new Promise ( (resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function(){
            let data = JSON.parse(this.responseText);
            console.log("data is:", data);
            // loadRestData(data);
            resolve(data);
        });
        xhr.open("GET", "restaurants.json");
        xhr.send();
    });
};

console.log("what is card", restaurant);

module.exports = { card };