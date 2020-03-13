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
                //below variable leads to syntax error
                //var myPokemon = JSON.parse( result );
                //This window.alert function correctly finds and displays targeted JSON value
                //window.alert( result.pokemon[0].name );
                //for( i = 0; i < result.pokemon.length; i++ )
                $.each( result.pokemon , function( ) {
                  //window.alert returns long unparsed list of {Object: object} keys and values
                  window.alert( result.pokemon );
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
