/*
Author: Eli Watts (This document is a slightly modified version of Professor Cassens' week 5 example document.)
File Name: memory.js
Date: 12/02/2020
Purpose: MART 441 Homework Assignment #5
*/

// create an array of image names that correspond to the image tags
var imageTags = ["spider1", "spider2", "spider3", "spider4", "spider5", "spider6", "spider7", "spider8", "spider9", "spider10"];
// create a variable with the blank image name
var blankImagePath = "../images/spiderWeb";
// create a empty array for the actual images
var actualImages = new Array();

var firstNumber = -1;

var secondNumber = -1;

var playerInfo = { "firstName": "" , "lastName": "" , "playerAge": "" , "playerAttempts": 0 };

var clickCounter = 0;

var doneMatchedUp = 0;

function printBlanks() {
   // call our random image creation function
    createRandomImageArray();
    // create a for loop
    for(var i = 0; i < imageTags.length; i++) {
    // iterate through the image tag ids and sets the source
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
}

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

function flipImage(number) {
    // make the second image appear
  if(firstNumber >= 0) {
        secondNumber = number;
        document.getElementById(imageTags[number]).src = actualImages[secondNumber];

      // make the first image appear
      } else if (firstNumber < 0) {
        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];
      }

    // check to see if the images do not match
  if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0) {
      setTimeout( flipBack , 1000); // calls a method after 1 second
      clickCounter ++;
      console.log(playerInfo.playerAttempts);

      // check to see if the images do match
    } else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0) {
      clickCounter ++;
      doneMatchedUp ++;
      firstNumber = -1;
      secondNumber = -1;

        if( doneMatchedUp == actualImages.length / 2 ) {
          playerInfo.playerAttempts = clickCounter;
          localStorage.setItem("playerInfo", JSON.stringify(playerInfo));
          console.log(playerInfo.playerAttempts);
          window.location = "./memoryoutro.html";
        }
    }
}

function flipBack() {
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

function addPlayerInfo() {
  let nameOne = document.getElementById("firstNameField").value;
  let nameTwo = document.getElementById("lastNameField").value;
  let age = document.getElementById("ageField").value;

  playerInfo.firstName = nameOne;
  playerInfo.lastName = nameTwo;
  playerInfo.playerAge = age;
  playerInfo.playerAttempts = clickCounter;

  localStorage.setItem("playerInfo", JSON.stringify(playerInfo));
}

function displayPlayerInfo() {
  var congratulations = localStorage.getItem("playerInfo");
  document.getElementById("test").innerHTML = "<h1>" + JSON.parse(congratulations).firstName + "</h1>";
  //document.getElementById("howMany").innerHTML = "<h1>" + JSON.parse(congratulations).playerAttempts + "</h1>"
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
