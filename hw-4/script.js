/*
Author: Eli Watts
File Name: script.js
Date: 01/02/2020
Purpose: Chose Your Own Adventure Story
*/

//Creates new function called choice1
//Initiates new variable yesNo in block scope and assigns it the string value provided by the end user in the tossText input field
//If the end user enters 'yeah?' variable storyNode2 is initialized, and given the value of storyBody2 HTML element
  //storyBody0 is appended with storyBody2 and storyBody2 style is changed from none to block
  //tossIt button element style is changed from block to none
//If the end user enters 'nah?' the storyNodeB vairable is initialized and given the value of StoryBodyB HTML element
  //Rest follows similiar procedure to true, but a different HTML element is append
function choice1() {
  let yesNo = document.getElementById("tossText").value;
  if (yesNo === "yeah?") {
    let storyNode2 = document.getElementById("storyBody2");
    document.getElementById("storyBody0").appendChild(storyNode2);
    storyNode2.style.display = 'block';

    document.getElementById("tossIt").style.display = 'none';
    document.getElementById("tossText").style.display = 'none';

  } else if (yesNo === "nah?") {
    let storyNodeB = document.getElementById("storyBodyB");
    document.getElementById("storyBody0").appendChild(storyNodeB);
    storyNodeB.style.display = 'block';

    document.getElementById("tossIt").style.display = 'none';
    document.getElementById("tossText").style.display = 'none';
  }
}

//Similiar to function getName(greeting) function from this weeks lesson
//Because there is no if statement, the story doesn't branch into two separate paths
//creates new function called choice2 with a single parameter
//initiates new variable kubiEmail which is then assigned the value of what the user types into the emailText text area input
//userEmail HTML element is changed from display none to display block
//userEmail HTML element is filled with user inputed string plus argument given when the function is called in the HTML document
  //The '\n' doesn't create a paragraph break as I hoped it would
//Initiates two more variables, storyNodeEmail and storyNode3 and assigns them values which correspond to HTML element IDs
//HTML elements are changed from display none to display block
//emailText text area input and sendIt button are styled from display block to display none
//Window.alert function creates popup window on users screen
function choice2(email) {
  let kubiEmail = document.getElementById("emailText").value;
  document.getElementById("userEmail").style.display = 'block';
  document.getElementById("userEmail").innerHTML = email + ": \n" + kubiEmail;

  let storyNodeEmail = document.getElementById("userEmail");
  let storyNode3 = document.getElementById("storyBody3");
  document.getElementById("storyBody0").appendChild(storyNodeEmail);
  document.getElementById("storyBody0").appendChild(storyNode3);
  storyNode3.style.display = 'block';
  document.getElementById("emailText").style.display = 'none';
  document.getElementById("sendIt").style.display = 'none';

  window.alert("We are sorry to inform you but you are blocked from sending mail to that contact.");
}

  //Works same way as function choice1()
  function choice3() {
    let yesNo3 = document.getElementById("digText").value;
    if (yesNo3 === "yeah?") {
      let storyNode4 = document.getElementById("storyBody4");
      document.getElementById("storyBody0").appendChild(storyNode4);
      storyNode4.style.display = 'block';

      document.getElementById("digMore").style.display = 'none';
      document.getElementById("digText").style.display = 'none';

    } else if (yesNo3 === "nah?") {
      let storyNodeC = document.getElementById("storyBodyC");
      document.getElementById("storyBody0").appendChild(storyNodeC);
      storyNodeC.style.display = 'block';

      document.getElementById("digMore").style.display = 'none';
      document.getElementById("digText").style.display = 'none';
    }
  }
//Creates new function called addName
//When called onClick in HTML document variable name is initialized and given value of string typed in nameField input field
//Initializes a for loop
//In for loop, is is initalized as a variable and assigned a value of 0
//If value of i is less than length of name array, i increases in value by 1
//If value of name does not equal zero, word tagged with nameReplace span is assigned a new value, name
//If the user does not enter a string, the word in the story is not replaced
//Doesn't work correctly as only spang tagged words in displayed elements change
//Span tagged words in hidden HTML elements do not change
function addName() {
  let name = document.getElementById("nameField").value;
    for (i = 0; i < name.length; i++ ){
      if (name != null) {
        document.getElementsByClassName("nameReplace")[i].innerHTML = `${name}`;
        console.log(name);
      }  else if (name === null) {
        document.getElementsByClassName("nameReplace").innerHTML = "Ellie";
      }  else {
    document.getElementsByClassName("nameReplace").innerHTML = "Ellie";
    }
  }
}

//Creates new function calld playAgain()
//When called in the HTML document it initializes new variable replay and assigns it the value of user inputed string in replayStory text input element
//If user enters 'yeah?' the location.reload() function is called which refreshes the page
//If user enters 'nah?' a new HTML element is appended to screen
//If neither 'yeah?' nor 'nah?' are entered a different HTML element is appended to the screen
function playAgain() {
  let replay = document.getElementById("replayStory").value;
    if (replay === "yeah?") {
      location.reload();
    } else if (replay === "nah?") {
      let storyNode5 = document.getElementById("goodBye");
      document.getElementById("storyBody0").appendChild(storyNode5);
      storyNode5.style.display = 'block';
    } else {
      let storyNode6 = document.getElementById("sayWhat");
      document.getElementById("storyBody0").appendChild(storyNode6);
      storyNode6.style.display = 'block';
    }
}

//Very ineffecient Attempt to Create a Play Again Button
/*function playAgain() {
  let replay = document.getElementById("replayStory").value;
  console.log(playAgain);
  if (replay === "yeah?") {
    document.getElementById("storyBody3").style.display = 'none';
    document.getElementById("storyBody2").style.display = 'none';
    document.getElementById("storyBodyB").style.display = 'none';
    document.getElementById("storyBody4").style.display = 'none';
    document.getElementById("storyBodyC").style.display = 'none';
    document.getElementById("emailText").style.display = 'none';
    document.getElementById("sendIt").style.display = 'none';
    document.getElementById("userEmail").style.display = 'none';
    document.getElementById("sayWhat").style.display = 'none';
    document.getElementById("tossText").style.display = 'block';
    document.getElementById("tossIt").style.display = 'block';
    document.getElementById("emailText").style.display = 'block';
    document.getElementById("sendIt").style.display = 'block';
    document.getElementById("digText").style.display = 'block';
    document.getElementById("digMore").style.display = 'block';
  } else if (replay === "nah?") {
    let storyNode5 = document.getElementById("goodBye");
    document.getElementById("storyBody0").appendChild(storyNode5);
    storyNode5.style.display = 'block';
  } else {
    let storyNode6 = document.getElementById("sayWhat");
    document.getElementById("storyBody0").appendChild(storyNode6);
    storyNode6.style.display = 'block';
  }
}*/
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
