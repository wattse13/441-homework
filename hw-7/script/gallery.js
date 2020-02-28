/*
Author: Eli Watts
File Name: gallery.js
Date: 12/02/2020
Purpose: MART 441 Homework Assignment #7
*/

var titleArr = [ "fly" , "nice guy" , "gross strawberry" , "tooth ache" , "acorn" ];

var pathArr = [ "../images/fly.jpg" , "../images/nice-guy.jpg" , "../images/site-logo.jpg" , "../images/tooth-ache.jpg" , "../images/watts_acorn_front.jpg" ];

var yearArr = [ "2019" , "2017" , "2016" , "2017" , "2019" ];

var descrArr = ["dead fly on a windowsill. charcoal." ,
                "what a cutie. digital." ,
                "gross rotten strawberry. digital." ,
                "ow, ow, my tooth, ow. digital" ,
                "moody looking acorn. clay." ];

var actualImages = new Array();

class ImageDisplayer {
  constructor( imgTitle , imgPath , imgDescr , imgAuthor , imgYear ) {
    this.imgTitle = imgTitle;
    this.imgPath = imgPath;
    this.imgDescr = imgDescr;
    this.imgAuthor = imgAuthor;
    this.imgYear = imgYear;
  }
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
  /*set nabAuthor( imgAuthor ){
    this.imgAuthor = imgAuthor;
  }*/
  get nabYear() {
    return this.imgYear;
  }
}

function fillEmUp() {
  nabAuthor = "eli watts";
  var myImageDisplayer0 = new ImageDisplayer( titleArr[0] , pathArr[0] , descrArr[0] , nabAuthor , yearArr[0] );
  var myImageDisplayer1 = new ImageDisplayer( titleArr[1] , pathArr[1] , descrArr[1] , nabAuthor , yearArr[1] );
  var myImageDisplayer2 = new ImageDisplayer( titleArr[2] , pathArr[2] , descrArr[2] , nabAuthor , yearArr[2] );
  var myImageDisplayer3 = new ImageDisplayer( titleArr[3] , pathArr[3] , descrArr[3] , nabAuthor , yearArr[3] );
  var myImageDisplayer4 = new ImageDisplayer( titleArr[4] , pathArr[4] , descrArr[4] , nabAuthor , yearArr[4] );

  actualImages.push(myImageDisplayer0);
  actualImages.push(myImageDisplayer1);
  actualImages.push(myImageDisplayer2);
  actualImages.push(myImageDisplayer3);
  actualImages.push(myImageDisplayer4);
  //console.log(actualImages[3].imgTitle);
}

function spitEmOut() {

  var randomNumber = Math.floor(Math.random() * actualImages.length);

  document.getElementById("imageTitle").innerHTML = actualImages[randomNumber].imgTitle;
  document.getElementById("imageFilePath").innerHTML = actualImages[randomNumber].imgPath;
  document.getElementById("imageDescription").innerHTML = actualImages[randomNumber].imgDescr;
  document.getElementById("imageAuthor").innerHTML = actualImages[randomNumber].imgAuthor;
  document.getElementById("imageYear").innerHTML = actualImages[randomNumber].imgYear;
}


/*--------------------------------------------------------------------------------------------------------------------------*/
// Code Grave Yard
/*--------------------------------------------------------------------------------------------------------------------------*/
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
