// "use strict";


// function cardTemplate(card){
//     var restCard = card.restaurants;
    
//     for(var i = 0; i < restCard.length; i++){
//         var list = `<div class="card col-4" id="rest-${restCard[i].id}>
//                     <div class="card-header"><b>City:</b> ${restCard[i].city_id}</div>
//                     <div class="card-body">
//                         <h5 class="card-title">${restCard[i].restaurant}</h5>
//                         <p><b>Rating:</b> ${restCard[i].my_rating}</p>
//                         <p class="card-text"> Restaurants.trip_purpose</p> 
//                         <small class="text-muted">Date visited: ${restCard[i].date_visited}</small> 
//                     </div>
//                 </div>`;
//         return list;
//     }   
// }

// var url = "restaurants.json",
//     xhr = new XMLHttpRequest();

// function populateCard (obj){
//     var card = obj[restaurants];

//     for(let i = 0; i < card.length; i++){

//     }
// }




// request.open("GET", url);
// request.responseType = "json";
// request.send();
// request.onload = function() {
//     var restaurants = request.response;
//     populateCard(restaurants);
// }



   
// function cardTemplate(card){
//     var restCard = card.restaurants;
    
//     for(var i = 0; i < restCard.length; i++){
//         var list = `<div class="card col-4" id="rest-${restCard[i].id}>
//                     <div class="card-header"><b>City:</b> ${restCard[i].city_id}</div>
//                     <div class="card-body">
//                         <h5 class="card-title">${restCard[i].restaurant}</h5>
//                         <p><b>Rating:</b> ${restCard[i].my_rating}</p>
//                         <p class="card-text"> Restaurants.trip_purpose</p> 
//                         <small class="text-muted">Date visited: ${restCard[i].date_visited}</small> 
//                     </div>
//                 </div>`;
//         return list;
//     }   
// }



// let showRestaurants = (rest) => {
//     let newCard =  document.getElementById("restaurant-cards");

//     rest.forEach( (Restaurant) => {
//         let restCard = makeCard(Restaurant);
//         newCard.innerHTML += restCard;      
//     });  
// };

// makeCard = (Restaurant) => {
    
//     let card = `<div class="card col-4" id="rest-${Restaurant.id}">
//                 <div class="card-header"><b>City:</b> ${Restaurant.city_id}</div> 
//                 <div class="card-body">
//                     <h5 class="card-title">${Restaurant.restaurant}</h5>
//                     <p><b>Rating:</b> ${Restaurant.my_rating}</p>
//                     <p class="card-text">Restaurants.trip_purpose</p>
//                     <small class="text-muted">Date visited: $           {Restaurant.date_visited}</small>
//                     </div>
//                 </div>`;
//     }
//     return card;
// };

