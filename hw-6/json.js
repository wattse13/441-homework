/*
Author: Eli Watts
File Name: memory.html
Date: 12/02/2020
Purpose: MART 441 Homework Assignment #6
*/

function addPlayerInfo() {
  let nameOne = document.getElementById("firstNameField").value;
  let nameTwo = document.getElementById("lastNameField").value;
  let age = document.getElementById("ageField").value;
  let clickNumber = document.getElementById("clickAttempts");
  var playerInfo = { "firstName": nameOne , "lastName": nameTwo , "playerAge": age , "playerAttempts": clickNumber };

  localStorage.setItem("playerInfo", JSON.stringify(playerInfo));
  console.log(playerInfo);
}

function displayPlayerInfo() {
  var congratulations = localStorage.getItem("playerInfo");
  document.getElementById("test").innerHTML = "<h1>" + JSON.parse(congratulations).firstName + "</h1>";
}
