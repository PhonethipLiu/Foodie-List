"use strict";

console.log("main js is working so far");

let restaurantData = require('./foodie-list');

let btn = document.getElementById("dropdownMenuButton");
btn.addEventListener("click",restaurantData.getAllRestaurants);