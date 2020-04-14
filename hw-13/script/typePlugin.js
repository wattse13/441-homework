/*
Author: Eli Watts
File Name: pokemon.js
Date: 03/10/2020
Purpose: MART 441 Homework Assignment #9
*/

//Creates New Plug In
//Checks the html() in the pokemonTypes HTML element
//If html() matches string in the if statement, the pokemonTypes text color is changed
//If it does not match, the next esle if statement is evaluated
//If none of the if statements evaluate to true, the last else statement changes the font color
$.fn.typeText = function() {
  if ( $( "#pokemonTypes" ).html() == "Bug" ) {
    this.css( "color" , "#6D7815" );
  } else if( $( "#pokemonTypes" ).html() == "Dragon" ) {
    this.css( "color" , "#4924A1" );
  }else if( $( "#pokemonTypes" ).html() == "Electric" ) {
    this.css( "color" , "#A1871F" );
  }else if( $( "#pokemonTypes" ).html() == "Fighting" ) {
    this.css( "color" , "#7D1F1A" );
  }else if( $( "#pokemonTypes" ).html() == "Fire" ) {
    this.css( "color" , "#9C531F" );
  }else if( $( "#pokemonTypes" ).html() == "Flying" ) {
    this.css( "color" , "#6D5E9C" );
  }else if( $( "#pokemonTypes" ).html() == "Ghost" ) {
    this.css( "color" , "#493963" );
  }else if( $( "#pokemonTypes" ).html() == "Grass" ) {
    this.css( "color" , "#4E8234" );
  }else if( $( "#pokemonTypes" ).html() == "Ground" ) {
    this.css( "color" , "#927D44" );
  }else if( $( "#pokemonTypes" ).html() == "Ice" ) {
    this.css( "color" , "#638D8D" );
  }else if( $( "#pokemonTypes" ).html() == "Normal" ) {
    this.css( "color" , "#6D6D4E" );
  }else if( $( "#pokemonTypes" ).html() == "Poison" ) {
    this.css( "color" , "#682A68" );
  }else if( $( "#pokemonTypes" ).html() == "Psychic" ) {
    this.css( "color" , "#A13959" );
  }else if( $( "#pokemonTypes" ).html() == "Rock" ) {
    this.css( "color" , "#786824" );
  }else if( $( "#pokemonTypes" ).html() == "Water" ) {
    this.css( "color" , "#445E9C" );
  }else { this.css( "color" , "#44685E"); }
};
