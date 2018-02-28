"use strict";

// Your job is to build a a web page where a user can see all the restaurants they have been to and filter by city. They can also add additional restaurants.

// The two JSON representations above should be in two files: `restaurants.json`, and `cities.json` (see below). Use Javascript's `XMLHttpRequest()` method with Promises to read the data from those files, and then build HTML representations of the data.

// > Contents of `restaurants.json` file
// > Contents of `cities.json` file

console.log("foodie-list.js working");



let dataRequest = new XMLHttpRequest();
dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);

function dataRequestComplete(event) {
    console.log("loading restaurants json");
        let restaurantsData = JSON.parse(event.target.responseText);
        console.log("restaurants Data", restaurantsData);
        showData(restaurantsData);
}

//MVP: 1) When the user first visits the page, all restaurants should be listed in order of their rating(ratings are from 1 to 10). The restaurants are displayed from highest rated to lowest rated.
function showData(cities){
    let restaurantsDiv = document.getElementById("cities");
    let restaurantsData = "";

    for(let i = 0; i < restaurants.length; i++){
        let restaurantsItem = restaurants[item];
        restaurantsData += `<h3>${restaurantsItem.restaurant} + " " + ${restaurantsItem.my_rating}</h3>`;

    }
}




