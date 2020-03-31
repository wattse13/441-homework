/*
Author: Eli Watts
File Name: amoeba.js
Date: 03/31/2020
Purpose: MART 441 Homework Assignment #11
*/

//Creates new class template from which object instances can be called
//Contstructor takes five arguments which decide each objects x and y position its width height speed and color.
class LonelyPongPlayers {
  constructor ( x , y , height , width , speed , color ) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.speed = speed;
    this.color = color;
    }
    //Getters and setters encapsulate class properties
    //Class should make changes not outside world
      //In theory I think I understand the utility of getters and setters, but in practice I don't actually know how to use them
    get nabX() {
      return this.x;
    }
    set nabX(x) {
      this.x = x;
    }
    get nabY() {
      return this.y;
    }
    set nabY(y) {
      this.y = y;
    }
    get nabHeight() {
      return this.height;
    }
    set nabHeight(height) {
      this.height = height;
    }
    get nabWidth() {
      return this.width;
    }
    set nabWidth(width) {
      this.width = width;
    }
    get nabSpeed() {
      return this.speed;
    }
    set nabSpeed(speed) {
      this.speed = speed;
    }
    get nabColor() {
      return this.color;
    }
    set nabColor(color) {
      this.color = color;
    }
}
