/*
Author: Eli Watts
File Name: jqueryArt.js
Date: 12/02/2020
Purpose: MART 441 Homework Assignment #8
*/

//Creates a sequence of chained jquery commands
//Only runs once document has loaded
//Once button is clicked, elements within motherShip div container disappear
//Second night star image fades in as does an image of a rocket ship
//rocketShip then moves up and off the screen before fading away
//Finally, a paragraph element fades in
$( document ).ready(function () {
  $( "#btnSubmit" ).click(function () {
    $( "#motherShip" ).fadeOut( "slow" , function() {
      $( "#secondNight" ).fadeIn( "slow" , function() {
        $( "#rocketShip" ).fadeIn( "fast" ).animate( { top: -1000 } , "slow" ).fadeOut( "fast" , function() {
          $( "#paragraph1" ).fadeIn( "slow" );
        });
      });
    });
  });
  //Clicking paragraph element causes it to fade out and a second paragraph element to fade in
  //Clicking on second paragraph element causes it to fade out and two buttons to fade in
  $( "#paragraph1" ).click(function() {
    $( "#paragraph1" ).fadeOut( "slow" , function() {
      $( "#paragraph2" ).fadeIn( "slow" , function() {
        $( "#paragraph2" ).click(function(){
          $( "#paragraph2" ).fadeOut( "slow" , function(){
            $( "#textBox3" ).fadeIn( "slow" );
          });
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
