/*
Author: Eli Watts
File Name: jqueryArt.js
Date: 12/02/2020
Purpose: MART 441 Homework Assignment #8
*/

$(document).ready(function () {
            $( "#btnSubmit" ).click(function () {
                 $( "#motherShip" ).fadeOut( "slow" , function(){
                     $( "#rocketShip" ).attr( "src" , "../images/rocketShip.png" );
                     console.log("here!");
                 });
            });
        });



/******************************************************************************/
//Code Grave Yard
/******************************************************************************/

//Wanted to make code that would rotate text/squre
/*$(document).ready( function(){
  $( "#btnSubmit" ).click( function() {
    $( "#side1" ).css("transform", "rotate(-90deg)", function(){
      $( "#text2" ).toggle();
    });
  });
});*/
