/*
Author: Eli Watts (This document borrows heavily from lesson 5 and 6 example documents.)
File Name: memory.js
Date: 12/02/2020
Purpose: MART 441 Homework Assignment #6
*/

// create an array of image names that correspond to the image tags
var imageTags = ["spider1", "spider2", "spider3", "spider4", "spider5", "spider6", "spider7", "spider8", "spider9", "spider10"];
// create a variable with the blank image name
var blankImagePath = "../images/spiderWeb";
// create a empty array for the actual images
var actualImages = new Array();
// Initializes new global variable and assigns it a value of -1
var firstNumber = -1;
// Initializes new global variable and assigns it a value of -1
var secondNumber = -1;
// Initalizes new JSON object. Key values are left as blank strings to be filled in through player input
var playerInfo = { "firstName": "" , "lastName": "" , "playerAge": "" , "playerAttempts": 0 };
// Initalizes new global variable and assigns it a value of 0
var clickCounter = 0;
// Initalizes new global variable and assigns it a value of 0
var doneMatchedUp = 0;

// Creates new function which will print top side of memory cards until the lenght of the random image array is equal to the length of the image tag array
function printBlanks() {
  //console.log(playerInfo);
   // call our random image creation function
    createRandomImageArray();
    // create a for loop
    for(var i = 0; i < imageTags.length; i++) {
    // iterate through the image tag ids and sets the source
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
}

// This function is later called in the printBlanks() function
// Creates an array which stores a randomly ordered list of image paths
function createRandomImageArray() {
    // create an array of actual images
    var actualImagePath = [ "../images/brownBlackJumper.jpeg",
                            "../images/zebraJumper.jpg",
                            "../images/bronzeJumper.jpg",
                            "../images/putnamiJumper.jpg",
                            "../images/hidingJumper.jpg"
                          ];

    // create another array to make sure the images only get added twice
    var count = [ 0 , 0 , 0 , 0 , 0 ];
    // create a while statement to check to see if our actual image array is full
    while(actualImages.length < 10) {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
          // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 2) {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

// This function flips memory card over, checks to see if it matches a second flipped card, and flips cards that do not match back over after 1 second
function flipImage(number) {
  // make the second image appear
  // Because firstNumber is initially set to -1, this function resolves to false the first time a blank memory card is clicked on
  // Upon second click firstNumber has been reassigned a value between 0 and 9 which causes this if statement to evaluate to true
  if(firstNumber >= 0) {
        // reassigns value of secondNumber to the value of the number variable
        secondNumber = number;
        // src value is reassigned to the index value of the actualImages array which corresponds to the secondNumber value
        document.getElementById(imageTags[number]).src = actualImages[secondNumber];

      // make the first image appear
      // Because firstNumber is initially set to -1, this function resolves to true the first time a blank memory card is clicked on
      } else if (firstNumber < 0) {
        // reAssigns vlaue of firstNumber to the value of the number variable.
        // variable number is assigned as a value on the memory.HTML doc as an argument ( 0 - 9 )
        firstNumber = number;
        // src value is reassigned to the index value of the actualImages array which corresponds to the firstNumber value
        document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];
      }

  // check to see if the images do not match
  if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0) {
      // calls a method after 1 second
      setTimeout( flipBack , 1000);
      // value of clickCounter variable increases by one
      clickCounter ++;
      //console.log(playerInfo.playerAttempts);

    // check to see if the images do match
    } else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0) {

      // value of clickCounter and doneMatchedUp increase by one
      clickCounter ++;
      doneMatchedUp ++;

      // firstNumber and secondNumber variables are reset
      firstNumber = -1;
      secondNumber = -1;

        // If statement checks to see if the value of doneMatchedUp is equal to half the length of the actualImages array
        if( doneMatchedUp == actualImages.length / 2 ) {

          // If yes, the playerInfo key playerAttempts is assigned the value of the variable clickCounter
          // Value of variable clickCounter is saved to local storage as a string under the name playerInput
          // Memoryoutro.HTML page is loaded
          playerInfo.playerAttempts = clickCounter;
          localStorage.setItem("playerInput", JSON.stringify(playerInfo));
          //console.log(playerInfo.playerAttempts);
          window.location = "./memoryoutro.html";
        }
    }
}

// Called when second card does not match first card
function flipBack() {

    // Image src value is reassigned to value of blankImagePath variable
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;

    // FirstNumber and secondNumber are reassigned values of -1
    firstNumber = -1;
    secondNumber = -1;
}

// Adds player info to playerInfo JSON object
function addPlayerInfo() {
  // Initializes variables and assigns them value of strings typed into the corresponding text fields
  // Web console displays error stating the following line is not defined. Though, program still runs as it should
  var nameOne = document.getElementById("firstNameField").value;
  var nameTwo = document.getElementById("lastNameField").value;
  var age = document.getElementById("ageField").value;

  // Uses variables initalized above to change values in the playerInfo JSON object
  playerInfo.firstName = nameOne;
  playerInfo.lastName = nameTwo;
  playerInfo.playerAge = age;
  playerInfo.playerAttempts = clickCounter;

  // Saves JSON object to local storage as a string under the name playerInput
  localStorage.setItem("playerInput", JSON.stringify(playerInfo));
}

// Function retrieves information stored to local storage under name playerIput
function displayPlayerInfo() {

  // Creates new varaible and assigns it the locally stored playerInput values
  var congratulations = localStorage.getItem("playerInput");

  // Dot notation is then used to parse the playerInfo JSON object
  playerInfo = JSON.parse(congratulations);

  // InnerHTML is changed to values stored in playerInfo JSON object
  document.getElementById("playerFirstName").innerHTML = JSON.parse(congratulations).firstName;
  document.getElementById("playerSecondName").innerHTML = JSON.parse(congratulations).lastName;
  document.getElementById("playerAgeInput").innerHTML = JSON.parse(congratulations).playerAge;
  document.getElementById("playerAttemptsMade").innerHTML = JSON.parse(congratulations).playerAttempts;

  //console.log(playerInfo.firstName);
}


/*-------------------------------------------------------------------------------------------------------*/
//Code Grave Yard
/*-------------------------------------------------------------------------------------------------------*/

//Creates new global variable and assigns it a value of an array with listed items
/*var blankImg = [
  "blank1",
  "blank2",
  "blank3",
  "blank4",
  "blank5",
  "blank6",
  "blank7",
  "blank8",
  "blank9",
  "blank10"
];

function cardFlip() {
  if( document.getElementById("blank1").style.display == "block" ) {
    //console.log("true");
    document.getElementById("blank1").style.display = "none";
    document.getElementById("spider1").style.display = "block";
  } else if( document.getElementById("spider1").style.displyal == "block" ) {
    document.getElementById("spider1").style.display = "none";
    document.getElementById("blank1").style.display = "block";
  }
}

//Taken from anuupadhyay at GeeksforGeeks https://www.geeksforgeeks.org/how-to-find-if-two-arrays-contain-any-common-item-in-javascript/
//Creates new function which takes two arguments
//Looks through each element in first array, parameter 1, and checks if any are included in second array, parameter2
//If the element exists in both arrays, function returns true, if not, function returns false
function checkSpiders( collected, displayed ) {
  return collected.some(spider => displayed.includes(spider))
}

//Creates new global vairable and assigns it a value of an empty array
var displayedSpiders = [];

//Creates new global variable and assigns it a value of array with items
//Originally planned to use document.getElementById() to populate array
//Using document.getElementById() as array items consistently gave me a value of null when trying to do anything with array items
var collectedSpiders = [
  "spider1",
  "spider2",
  "spider3",
  "spider4",
  "spider5",
  "spider6",
  "spider7",
  "spider8",
  "spider9",
  "spider10"
];

//Globally Declaring Variable fixes Scope problem in displayedSpiders.push() Method in If Statement
//Doesn't seem to actually change anything though
var randomSpider;

//Creates new function that does not take any arguments
//This function may create 10 different arrays?
function spiderCollection() {

  //Creates new for loop which will continue to loop until the collectedSpiders.length is equal to displayedSpiders.length
  for( i = displayedSpiders.length; i < collectedSpiders.length; i++ ) {

    //Creates new for loop which will continue to loop until the collectedSpiders.length is equal to displayedSpiders.length
    //Before adding this loop, program would only push one element into displayedSpiders array
      //Pushed item however, was a defined value
    //With this loop program now pushes 10 items into displayedSpiders array, but they are all undefined...
    //Added because I beleive without it, the program generates only one random number, which it then uses 10 times
    for( j = displayedSpiders.length; j < collectedSpiders.length; j++ ){
      //Creates new variable and assigns it a random number with value between 0 and 9
      //Random number is multiplied by length of collectedSpiders array, before then being rounded down to nearest integer
      randomSpider = collectedSpiders[Math.floor(Math.random() * collectedSpiders.length)];
      //console.log(randomSpider);
    }

    //Assigns variable value of checkSpiders function
    var repeatCheck = checkSpiders( collectedSpiders , displayedSpiders );
    //console.log test
    console.log( repeatCheck );

    //If value of repeatCheck is equal to false:
    //array item with index number which corresponds to value of randomSpider is pushed to displayedSpider array
    if( repeatCheck === false ) {
      displayedSpiders.push( randomSpider );
      console.log( displayedSpiders );
    }
  }
}

//Taken from week-4 lesson
/*function findSpiders( min, max ) {
  console.log(Math.floor(Math.random() * (max - min + 1) ) + min);
  return Math.floor(Math.random() * (max - min + 1) ) + min;*/
  /*let randomSpider = collectedSpiders[Math.floor(Math.random()*collectedSpiders.length)];
  console.log(randomSpider);
}*/


/*function organizeSpiders() {
  let collectedSpiders = [
    document.getElementById("spider1"),
    document.getElementById("spider2"),
    document.getElementById("spider3"),
    document.getElementById("spider4"),
    document.getElementById("spider5"),
    document.getElementById("spider6"),
    document.getElementById("spider7"),
    document.getElementById("spider8"),
    document.getElementById("spider9"),
    document.getElementById("spider10")
  ];
  let displayedSpiders = [];
  let randomSpider = collectedSpiders[Math.floor(Math.random()*collectedSpiders.length)];
  console.log(randomSpider);
}*/

/*function randomNumber( min, max ) {
  console.log(Math.floor(Math.random() * (max - min + 1) ) + min);
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}*/

/*let blankImg = new Array(
  document.getElementById("blank1"),
  document.getElementById("blank2"),
  document.getElementById("blank3"),
  document.getElementById("blank4"),
  document.getElementById("blank5"),
  document.getElementById("blank6"),
  document.getElementById("blank7"),
  document.getElementById("blank8"),
  document.getElementById("blank9"),
  document.getElementById("blank10")
);

let spiderImg = new Array(
  document.getElementById("spider1"),
  document.getElementById("spider2"),
  document.getElementById("spider3"),
  document.getElementById("spider4"),
  document.getElementById("spider5"),
  document.getElementById("spider6"),
  document.getElementById("spider7"),
  document.getElementById("spider8"),
  document.getElementById("spider9"),
  document.getElementById("spider10")
);
*/

//Test array
//Taken from Week 5 lesson
/*function printArray() {
  let blankImg = new Array(
    document.getElementById("blank1"),
    document.getElementById("blank2"),
    document.getElementById("blank3"),
    document.getElementById("blank4"),
    document.getElementById("blank5"),
    document.getElementById("blank6"),
    document.getElementById("blank7"),
    document.getElementById("blank8"),
    document.getElementById("blank9"),
    document.getElementById("blank10")
  );
  var allFoods = "";
  for(var i = 0; i < blankImg.length; i++) {
    allFoods += blankImg[i] + "<br>";
    }
    document.getElementById("myFoods").innerHTML = allFoods;
}*/