/*
Author: Eli Watts
File Name: script.js
Date: 01/02/2020
Purpose: To Print Superlatives to Web Console
*/

function choice1() {
  let yesNo = confirm("Should Earl throw away the can of peach tea?");
  if (yesNo === true) {
    let storyNode2 = document.getElementById("storyBody2");
    document.getElementById("storyBody0").appendChild(storyNode2);
    storyNode2.style.display = 'block';

    document.getElementById("tossIt").style.display = 'none';

  } else if (yesNo === false) {
    let storyNodeB = document.getElementById("storyBodyB");
    document.getElementById("storyBody0").appendChild(storyNodeB);
    storyNodeB.style.display = 'block';

    document.getElementById("tossIt").style.display = 'none';
  }
}



function addName() {
  let name = prompt("enter their name here, if you want. (This feature doesn't work properly. Only changes first instance of name)");
  if (name != null) {
    document.getElementById("nameReplace").innerHTML = `${name}`;
  } else if (name === null) {
    document.getElementById("nameReplace").innerHTML = "Ellie";
  } else {
    document.getElementById("nameReplace").innerHTML = "Ellie";
  }
}

/*function addName() {
  var name = prompt("missing someone? write their name here.");
  if (name != null) {
    console.log('yeah');
  }
}*/
//let lovedOne = addName;

//lovedOne();

//console.log(lovedOne.string);
