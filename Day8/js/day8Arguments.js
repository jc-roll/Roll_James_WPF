
 /*
James Roll
Arguments
Wpf 1411
11-12-2014
 */

//alert("testing 1.2,3!");

 //argument = goes into the function - part of the function call
 //Parameter - catches the arguments and is used inside the function

 //create function that calculates the area of a rectangle

 function calcArea(width,height){

  //var width = 10;
  //var height = 20;
  var area = width*height;

  console.log("The area of your rectangle is "+area);

 }
 calcArea(4,5);
 calcArea(10,10);
 var width = prompt("width?");
 var height = prompt("height?");
 calcArea(width,height);


 //calculate dog years
 //dog years =  human years times 7

 function dogYears(humanAge){
  var dogAge = humanAge*7;
  console.log("You are "+dogAge+" years old in dog years!");
 }
 dogYears(36);
 var yourAge = prompt("How old are you?");
 dogYears(yourAge);