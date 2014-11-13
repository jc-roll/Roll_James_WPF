
 /*
James Roll
Scope
Wpf 1411
11-12-2014
 */

//alert("testing 1.2,3!");
//Variable Scope - variables inside and outside a function

 //we try to not use the same names for variables....But
 //in large files this is going to be impossible

 //when you create a variable inside a function it only exists inside that function


 //create a variable for width (Main code)
 var width = 5;
 console.log("Starting width in main code is "+width);
 //create a function that calculates the perimeter of a rectangle
 function calcPeri(){
  var width = 10;//this variable is only within the function calPeri
  console.log("Inside of the function, the width is "+width)
var height = 20;
  var perimeter = width*2 +height*2;
  console.log("Inside of the function, the parameter is "+perimeter)
 }


 console.log("Before function call "+width);
 calcPeri();
 console.log("After the function call "+width);