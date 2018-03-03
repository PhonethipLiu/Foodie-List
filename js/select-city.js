// "use strict";

// console.log("this is the select button event js");

// // Select  button options
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
// }

// module.exports = { selectCity };
