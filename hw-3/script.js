/*
Author: Eli Watts
File Name: script.js
Date: 01/02/2020
Purpose: To Print Superlatives to Web Console
*/

//Creates new function called choice1
//Initiates new variable yesNo in block scope and gives it the prompt function as a value
//When the if statement evaluates to true, variable storyNode2 is initialized, and given the value of storyBody2 HTML element
  //storyBody0 is appended with storyBody2 and storyBody2 style is changed from none to block
  //tossIt button element style is changed from block to none
//when if statement evaluates to false storyNodeB vairable is initialized and given the value of StoryBodyB HTML element
  //Rest follows similiar procedure to true, but a different HTML element is appended
function choice1() {
  let yesNo = confirm("Should Mr. Kubi throw away the can of peach tea?");
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

//Similiar to function choice1()
//Because there is no if statement, the story doesn't branch into two separate paths
function choice2() {
  let yesNo2 = prompt("Write the awful things you think Mr. Kubi Wrote!");
    let storyNode3 = document.getElementById("storyBody3");
    document.getElementById("storyBody0").appendChild(storyNode3);
    storyNode3.style.display = 'block';

    document.getElementById("sendIt").style.display = 'none';
    window.alert("We are sorry to inform you but you are blocked from sending mail to that contact.");
    document.getElementById("sendIt").style.display = 'none';
  }

  //Works same way as function choice1()
  function choice3() {
    let yesNo3 = confirm("Should Mr. Kubi dig for more evidence?");
    if (yesNo3 === true) {
      let storyNode4 = document.getElementById("storyBody4");
      document.getElementById("storyBody0").appendChild(storyNode4);
      storyNode4.style.display = 'block';

      document.getElementById("digMore").style.display = 'none';

    } else if (yesNo === false) {
      let storyNodeC = document.getElementById("storyBodyC");
      document.getElementById("storyBody0").appendChild(storyNodeC);
      storyNodeC.style.display = 'block';

      document.getElementById("digMore").style.display = 'none';
    }
  }
//Creates new function called addName
//When called onClick in HTML document variable name is initialized and given value of prompt function
//If the user enters a string into the prompt, a word in the story, marked with span tags, is replaced with the user's string
//If the user does not enter a string, the word in the story is not replaced
//Doesn't work correctly as only the first word is replaced
//Last two else statements don't work as intended. Hitting ok without adding a string removes word from story
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

//Originally planned to show prompt when user clicked on navBar link
//Did not work
/*function addName() {
  var name = prompt("missing someone? write their name here.");
  if (name != null) {
    console.log('yeah');
  }
}*/
//let lovedOne = addName;

//lovedOne();

//console.log(lovedOne.string);
