
 /*
James Roll
  day9Anonymous start
Wpf 1411
11-14-2014
 */

//alert("testing 1.2,3!");

 /*
 basic function
 function functionName(){
 //code goes here

 }
 Anon function
 var functionName = function (){
 //code goes here

 };

  */


 //A normal function to find the area of a triangle
 function triangleArea(base,height){
  var area= .5 *base * height;
  return area;

 }

 //Function call for normal function
 //This function call can go anywhere within the code top bottom mid no matter will work!!!!
 var returnedArea = triangleArea(4,5);
 console.log("Returned area for normal functions " +returnedArea);


 //////////////////////////////////////////////////////////////////////////////////////////////////

 //Anonymous function that calculates triangle area

 var anonTriArea = function(base,height){
  var area = .5 * base * height
  return area

 };

 //Function call for anon Function
 var returnedAnonArea = anonTriArea(2,3);
 console.log("The returned area fro the anon function is " +returnedAnonArea);