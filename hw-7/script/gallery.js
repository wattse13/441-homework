/*
Author: Eli Watts
File Name: gallery.js
Date: 12/02/2020
Purpose: MART 441 Homework Assignment #7
*/

// Initializes new global variable and assigns to it an array filled with image titles
  // Following arrays use index order to group information together
var titleArr = [ "fly" , "nice guy" , "gross strawberry" , "tooth ache" , "acorn" ];

// Initalizes new global variable and assigns to it an array filled with image file paths
var pathArr = [ "../images/fly.jpg" , "../images/nice-guy.jpg" , "../images/site-logo.jpg" , "../images/tooth-ache.jpg" , "../images/watts_acorn_front.jpg" ];

// Initializes new global variable and assigns to it an array filled with image dates
var yearArr = [ "2019" , "2017" , "2016" , "2017" , "2019" ];

// Initalizes new global variable and assigns to it an array filled with image descriptions
var descrArr = ["dead fly on a windowsill. charcoal." ,
                "what a cutie. digital." ,
                "gross rotten strawberry. digital." ,
                "tooth ache visualization. digital" ,
                "moody looking acorn. clay." ];

// Initalizes new global variable and assigns to it an empty array
var actualImages = new Array();

// Creates new class definition
class ImageDisplayer {
  // Constructor method requires five arguments when initalizing a new object
  constructor( imgTitle , imgPath , imgDescr , imgAuthor , imgYear ) {
    // this. notation allows arguments passed into constructor parameters to be used in new instances of objects created from ImageDisplayer class
    this.imgTitle = imgTitle;
    this.imgPath = imgPath;
    this.imgDescr = imgDescr;
    this.imgAuthor = imgAuthor;
    this.imgYear = imgYear;
  }
  // Still a little confused about the specifics of getters and setters
  // Adds extra layer of insulation
  // Rather than changing object values directly, getters and setters make those changes
  get nabTitle() {
    return this.imgTitle;
  }
  get nabPath() {
    return this.imgPath;
  }
  get nabDescr() {
    return this.imgDescr;
  }
  get nabAuthor() {
    return this.imgAuthor;
  }
  // Still unsure when it is necessary to use setters
  /*set nabAuthor( imgAuthor ){
    this.imgAuthor = imgAuthor;
  }*/
  get nabYear() {
    return this.imgYear;
  }
}

// Creates new function which will be called when gallery.html loads
function fillEmUp() {
  // Reassigns nabAuthor variable to string value
  nabAuthor = "eli watts";
  // Createss new objects of class type ImageDisplayer
  // Array items are passed in as arguments to ImageDisplayer required parameters
  // If gallery contained lots of images, it would probably be more efficient to use a for loop to create and push objects into actualImages array
  var myImageDisplayer0 = new ImageDisplayer( titleArr[0] , pathArr[0] , descrArr[0] , nabAuthor , yearArr[0] );
  var myImageDisplayer1 = new ImageDisplayer( titleArr[1] , pathArr[1] , descrArr[1] , nabAuthor , yearArr[1] );
  var myImageDisplayer2 = new ImageDisplayer( titleArr[2] , pathArr[2] , descrArr[2] , nabAuthor , yearArr[2] );
  var myImageDisplayer3 = new ImageDisplayer( titleArr[3] , pathArr[3] , descrArr[3] , nabAuthor , yearArr[3] );
  var myImageDisplayer4 = new ImageDisplayer( titleArr[4] , pathArr[4] , descrArr[4] , nabAuthor , yearArr[4] );

  // Each new object of class type ImageDisplayer is pushed into the actualImages array
  actualImages.push(myImageDisplayer0);
  actualImages.push(myImageDisplayer1);
  actualImages.push(myImageDisplayer2);
  actualImages.push(myImageDisplayer3);
  actualImages.push(myImageDisplayer4);
  //console.log(actualImages[3].imgTitle);
}

// Creates new function that will be called when button is clicked on gallery.html doc
function spitEmOut() {
  // Initalizes new variable and assigns to it a random value between 0 and 4
  var randomNumber = Math.floor(Math.random() * actualImages.length);
  // Random number is then used to find array itmes with corresponding index number
  // Found items are then passed back into html elements with corresponding id tags
  document.getElementById("imageTitle").innerHTML = actualImages[randomNumber].imgTitle;
  document.getElementById("imageFilePath").src = actualImages[randomNumber].imgPath;
  document.getElementById("imageDescription").innerHTML = actualImages[randomNumber].imgDescr;
  document.getElementById("imageAuthor").innerHTML = actualImages[randomNumber].imgAuthor;
  document.getElementById("imageYear").innerHTML = actualImages[randomNumber].imgYear;
}


/*--------------------------------------------------------------------------------------------------------------------------*/
// Code Grave Yard
/*--------------------------------------------------------------------------------------------------------------------------*/

// Originally wanted to use class methods rather than external functions
// Things got confusing quick
// Decided to use the more straight - forward approach presented in the example video in week 7

//var actualImages = { imgFileTitle:"" , imgFilePath:"" , imgFileDescriptor:"" , imgFileAuthor:"eli watts" , imgFileYear:"" };
/*var actualImages = new Array();
class FancySchmancy {
  constructor( imgPath , imgTitle , imgDescription , imgAuthor , imgYear ) {
    this.imgPath = this.imgPath;
    this.imgTitle = this.imgTitle;
    this.imgDescription = this.imgDescription;
    this.imgAuthor = this.imgAuthor;
    this.imgYear = this.imgYear;
  }
  shuffleImgArray() {
     this.imgPath = [ "../images/fly.jpg" ,
                      "../images/nice-guy.jpg" ,
                      "../images/site-logo.jpg" ,
                      "../images/tooth-ache.jpg" ,
                      "../images/watts_acorn_front.jpg" ];
      let imgTitle = ["fly" ,
                      "nice guy" ,
                      "gross strawberry" ,
                      "tooth ache" ,
                      "acorn" ];
      let imgDescription = ["dead fly on a windowsill. charcoal." ,
                            "what a cutie. digital." ,
                            "gross rotten strawberry. digital." ,
                            "ow, ow, my tooth, ow. digital" ,
                            "moody looking acorn. clay." ];
      let imgAuthor = "eli watts";
      let imgYear = [ "2019" ,
                      "2017" ,
                      "2016" ,
                      "2017" ,
                      "2019" ];
      var count = [ 0 , 0 , 0 , 0 , 0 ];
      var actualImages = new Array();
      while( actualImages.length < 5 ); {
        var randomNumber = Math.floor( Math.random() * imgPath.length )
        if( count[randomNumber] < 1 ) {
            actualImages.push( imgPath[randomNumber] );
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
            //console.log(actualImages);
        }
      }
  }
}

function createAndShow() {
  var myImage = new FancySchmancy();
  console.log(actualImages);
}*/
