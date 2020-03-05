/*
Author: Eli Watts
File Name: jqueryArt.js
Date: 12/02/2020
Purpose: MART 441 Homework Assignment #8
*/

$( document ).ready(function () {
  $( "#btnSubmit" ).click(function () {
    $( "#motherShip" ).fadeOut( "slow" , function() {
      $( "#secondNight" ).fadeIn( "slow" , function() {
        $( "#rocketShip" ).fadeIn( "fast" ).animate( { top: -1000 } , "slow" ).fadeOut( "fast" , function() {
          $( "body" ).css( {"overflow-y": "hidden"} );
        });
      });
    });
  });
});



/******************************************************************************/
//Code Grave Yard
/******************************************************************************/

/*$( document ).ready(function () {
  $( "#btnSubmit" ).click(function () {
    $( "#motherShip" ).fadeOut( "slow" , function(){
      $( "#rocketShip" ).fadeIn( "fast" ).animate( { top: -1000 } , "slow" ).fadeOut( "fast"  , function() {
         $( "body" ).css( {"overflow-y": "hidden"} , function() {
           $( "#secondNight" ).fadeIn( "slow" );
            console.log("hi!");
         });
      });
    });
  });
});*/

/*$(document).ready(function () {
            $( "#btnSubmit" ).click(function () {
                 $( "#motherShip" ).fadeOut( "slow" , function(){
                   $( "#secondNight" ).fadeIn( "fast" , function(){
                     $( "body" ).css( "overflow-y" , "hidden" , function(){
                       $( "#rocketShip" ).fadeIn( "fast" , function(){
                         console.log("here!");
                       });
                     });
                  });
               });
            });
        });*/

//Wanted to make code that would rotate text/squre
/*$(document).ready( function(){
  $( "#btnSubmit" ).click( function() {
    $( "#side1" ).css("transform", "rotate(-90deg)", function(){
      $( "#text2" ).toggle();
    });
  });
});*/
