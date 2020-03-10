/*
Author: Eli Watts
File Name: pokemon.js
Date: 03/10/2020
Purpose: MART 441 Homework Assignment #9
*/

$(document).ready(function () {
            $("#startButton").click(function () {
                $("#pokemonInformation").load("pokedex.txt" , function() {
                  $( "#startButton" ).fadeOut( "slow" , function() {
                    $( "#backForward" ).fadeIn( "slow" );
                  });
                });
            });
        });
