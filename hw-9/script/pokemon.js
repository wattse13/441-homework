/*
Author: Eli Watts
File Name: pokemon.js
Date: 03/10/2020
Purpose: MART 441 Homework Assignment #9
*/

//Creates new global variables and assigns them empty an empty array as values
var pokeNames = [];
var pokeImgs = [];
var pokeTypes = [];

//Creates new global variable and assigns it a value of 0
var partyMember = 0;

//Chain of jquery commands
  //Only runs once document is loaded
  //When start button is clicked the pokedex.json object is loaded and assigned to the variable result
  //$.each() function iterates through all pokemon arrays in pokedex object
  //Array items are then pushed to corresponding arrays
  //Start button fades out and next/previous buttons fade in
  //Function iChooseYou() is called
$(document).ready(function () {
            $( "#startButton" ).click(function () {
              $.getJSON( "../script/pokedex.json" , function( result ) {
                //window.alert( result.pokemon[0].name );
                $.each( result.pokemon , function(i) {
                  pokeNames.push(result.pokemon[i].name);
                  pokeImgs.push(result.pokemon[i].img);
                  pokeTypes.push(result.pokemon[i].type);
                  //console.log(pokeImgs);
                  //console.log(result.pokemon[i].name);
                  $( "#startButton" ).fadeOut( "slow" , function() {
                    $( "#backForward" ).fadeIn( "slow" );
                    iChooseYou();
                });
            });
        });
    });
    //When clicked functions upNext() and iChooseYou() are called
    $( "#nextButton" ).click( function() {
      upNext();
      iChooseYou();
      //console.log(partyMember);
    });
    //When clicked functions backUp() and iChooseYou() are called
    $( "#previousButton" ).click( function() {
      backUp();
      iChooseYou();
    });
});

//Creates new function
//Checks if value of partyMember is less than or equal to 149
  //If true, value of partyMember is increased by one
  //If fales, value of partyMember is reset to 0
  //Could probably use pokemon.length rather than hard coded number
function upNext() {
  if ( partyMember <= 149 ) {
    partyMember ++;
  } else if ( partyMember >= 149 ) {
    partyMember = 0;
  }
}

//Creates new function
//Checks if value of partyMember is greater than or equal to 0
  //If true, value of partyMember is decreased by one
  //If fales, value of partyMember is set to 150
  //Could probably use pokemon.length rather than hard coded number
function backUp() {
  if ( partyMember >= 0 ) {
    partyMember --;
  } else if ( partyMember <= 0 ) {
    partyMember = 150;
  }
}

//Creates new function
  //Changes innerHTML and src of selected HTML elements
  //Value of partyMember variable selects items from corresponding arrays 
function iChooseYou() {
  document.getElementById("pokemonName").innerHTML = pokeNames[ partyMember ];
  document.getElementById("imageFilePath").src = pokeImgs[ partyMember ];
  document.getElementById("pokemonTypes").innerHTML = pokeTypes[ partyMember ];
}



/*--------------------------------------------------------------------------------------------------------------------------*/
// Code Grave Yard
/*--------------------------------------------------------------------------------------------------------------------------*/

//var pokemonInfo = [ { "pokeName": "" , "pokePicture": "" , "pokeType": "" } ];
//var pokeInfo = new Array();

/*class PokeDisplayer {
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
}*/




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
