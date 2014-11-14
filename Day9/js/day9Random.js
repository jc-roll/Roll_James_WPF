
 /*
James Roll
Random
Wpf 1411
11-14-2014
 */

//alert("testing 1.2,3!");

 //Create a normal or basic function that will take in
 //Normal or basic functions return a value
 // a min and max number and return a random integer between them.

 //ask the user for a min and max variable

 var min = prompt("Let's find a random number between 2 values. \nWhat is the starting min value?");
while(min==="" || isNaN(min)){
 min = prompt ("PLease do not leave blank and only use numbers!\nWhat is the min value?");

}
 var max = ("What is the larger value or max?");
 while(max==="" || isNaN(max || min>=max)) {

  if (max===""){
   max = prompt("Please do not leave blank.\nWhat is the max value?");

  }else if(isNaN(max)){
   max=prompt("Please only type in number.\nWhat is the max value?");
  }else if(min>=max){
   max=prompt("Please type in a number larger than the min\.Please type in the max value:")
  }


 }
 //Create a random number generating function

 function randomizer (min,max){
  

 }