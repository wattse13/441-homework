/*
Author: Eli Watts
File Name: pokemon.js
Date: 03/10/2020
Purpose: MART 441 Homework Assignment #9
*/

$(document).ready(function () {
            $("#nextButton").click(function () {
                $("#pokemonInformation").load("pokedex.txt");
                console.log(pokemonInformation.status);
            });
        });
