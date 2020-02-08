/*
Author: Eli Watts
File Name: script.js
Date: 01/02/2020
Purpose: Chose Your Own Adventure Story
*/

//Creates new function called choice1
//Initiates new variable yesNo in block scope and gives it the prompt function as a value
//When the if statement evaluates to true, variable storyNode2 is initialized, and given the value of storyBody2 HTML element
  //storyBody0 is appended with storyBody2 and storyBody2 style is changed from none to block
  //tossIt button element style is changed from block to none
//when if statement evaluates to false storyNodeB vairable is initialized and given the value of StoryBodyB HTML element
  //Rest follows similiar procedure to true, but a different HTML element is appended
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

//Similiar to function choice1()
//Because there is no if statement, the story doesn't branch into two separate paths
/*function choice2() {
  let yesNo2 = document.getElementById("emailText").value
    let storyNodeEmail = document.getElementById("userEmail");
    let storyNode3 = document.getElementById("storyBody3");
    document.getElementById("storyBody0").appendChild(storyNodeEmail);
    document.getElementById("StoryBody0").appendChild(storyNode3);
    storyNodeEmail.innerHTML = yesNo2;
    storyNodeEmail.style.display = 'block';
    storyNode3.style.display = 'block';

    document.getElementById("sendIt").style.display = 'none';
    window.alert("We are sorry to inform you but you are blocked from sending mail to that contact.");
    document.getElementById("sendIt").style.display = 'none';
    document.getElementById("emailText").style.display = 'none';
  }*/

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
//When called onClick in HTML document variable name is initialized and given value of prompt function
//If the user enters a string into the prompt, a word in the story, marked with span tags, is replaced with the user's string
//If the user does not enter a string, the word in the story is not replaced
//Doesn't work correctly as only the first word is replaced
//Last two else statements don't work as intended. Hitting ok without adding a string removes word from story
function addName() {
  let name = document.getElementById("nameField").value;
    for (i =0; i < name.length; i++ ){
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

//Very ineffecient Way to Create a Play Again Button
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
