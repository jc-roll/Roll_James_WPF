
 /*
James Roll
Returns
Wpf 1411
11-12-2014
 */

//alert("testing 1.2,3!");
//create a function
 //area of a rectangle

 function calcArea(width,length){
  var area = width*length;
  console.log("The area inside of the function is "+area);
  //Return the area variable to the main code
  return area;

 }
 //catch the returned value with a variable
 var returnedArea = calcArea(30,20);
console.log(returnedArea);

 //prompt the user
 var width = prompt("Please enter a width:");
 var length = prompt("Please enter a length:");

 var userRectArea = calcArea(width,length);
var userRectPeri = periRect(width,length);

 console.log("The area of a rectangle with a with of "+width+" and a length of "+length+ " the area is "+userRectArea+"\n The perimeter is "+userRectPeri);

 //create a function to find perimeter
 function periRect(width,length){
  var perimeter = width*2 + length*2;
  return perimeter;

 }