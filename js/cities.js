"use strict";

console.log("select-city js working");

var cities = [];//cities.json data goes in this array

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

cities = get("cities.json")
    .then( (cities) => {
        console.log( "this is what I get when I run the request:", cities);
    }, function (error){
        console.log("Doh! Failed!", error);
    });


module.exports = { cities };
