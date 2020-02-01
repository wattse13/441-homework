/*
Author: Eli Watts
File Name: script.js
Date: 01/02/2020
Purpose: To Print Superlatives to Web Console
*/

function choice1() {
  let choice1 = confirm("Should Earl throw away the can of peach tea?");
  if ( true ){
    let storyNode2 = document.getElementById("storyBody2");
    document.getElementById("storyBody0").appendChild(storyNode2);
    storyNode2.style.display = 'block';
  } else if ( false ){
    document.write("<p> the story continues there </p>");
  }
}
