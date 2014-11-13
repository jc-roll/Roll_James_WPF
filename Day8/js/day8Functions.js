
 /*
James Roll
Functions
Wpf 1411
11-12-2014
 */

//alert("testing 1.2,3!");
//Create a Function - console.log hello
 //function functionName(){}

 function printHello(){
  console.log("Hello!");

 }
function printMore(){
 console.log("Print out more text!");

}



 //Function call = "Go" button of the factory
 //functionName();
 calcArea();
 printHello();
 printHello();
 printMore();


 //Create a function that will calculate the area of a rectangle

 function calcArea(){
  //Create variables for width. height and area
  var width = 20;
  var height = 30;
  var area = width*height;
  console.log("Your rectangle has an area of " +area);
 }
