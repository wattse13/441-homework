/*
Author: Eli Watts
File Name: memory.js
Date: 12/02/2020
Purpose: MART 441 Homework Assignment #5
*/

let blankImg = [
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
];

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

function findSpiders( min, max ) {
  console.log(Math.floor(Math.random() * (max - min + 1) ) + min);
  return Math.floor(Math.random() * (max - min + 1) ) + min;
  /*let randomSpider = collectedSpiders[Math.floor(Math.random()*collectedSpiders.length)];
  console.log(randomSpider);*/
}

function checkSpiders( collected, displayed ) {
  return collected.some(spider => displayed.includes(spider))
}

//console.log(checkSpiders(collectedSpiders, displayedSpiders));





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
