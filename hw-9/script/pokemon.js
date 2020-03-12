/*
Author: Eli Watts
File Name: pokemon.js
Date: 03/10/2020
Purpose: MART 441 Homework Assignment #9
*/

//var pokemonInfo = [ { "pokeName": "" , "pokePicture": "" , "pokeType": "" } ];
var pokeInfo = new Array();

class PokeDisplayer {
  constructor( pokeName , pokePicture , pokeType ) {
    this.pokeName = pokeName;
    this.pokePicture = pokePicture;
    this.pokeType = pokeType;
  }
  get nabName() {
    return this.pokeName;
  }
  get nabPicture() {
    return this.pokePicture;
  }
  get nabType() {
    return this.pokeType;
  }
}



$(document).ready(function () {
            $( "#startButton" ).click(function () {
              $.getJSON( "../script/pokedex.json" , function( result ) {
                //window.alert( result.pokemon[0].name );
                $.each( JSON.parse( result ) , function() {
                  console.log( result.pokemon[0].name );
            });
        });
    });
});



/*--------------------------------------------------------------------------------------------------------------------------*/
// Code Grave Yard
/*--------------------------------------------------------------------------------------------------------------------------*/

/*$(document).ready(function () {
            $("#startButton").click(function () {
              $("#pokemonInformation").load("../script/pokedex.json" , function(responseText) {
                window.alert(responseText);
                $( "#startButton" ).fadeOut( "slow" , function() {
                  $( "#backForward" ).fadeIn( "slow" );
                  });
                });
            });
        });*/
/*function newJson() {
  var myNewJson = new PokeDisplayer( { "pokeName": "this.pokeName" , "pokePicture": "this.pokePicture" , "pokeType": "this.pokeType" } );
  pokeInfo.push( myNewJson );
}*/

/*function clickCounter() {
  var start = 0;
  if ( $( "#nextButton" ).click == true ) {
    start ++;
  } else if ( $( "#previousButton" ).click == true ) {
    start --;
  }
}*/
