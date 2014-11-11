
 /*
James Roll
Validating Prompts
Wpf 1411
Date
 */

//alert("testing 1.2,3!");

 //Min Max Number -  find the random in between
 //Math.round(Math.round()*(max-min)+min)
/*
 var min = prompt("Let's find a random number. What's the minimum?");
 if(min===""){
  min = prompt("What's the minimum value\nPlease do not leave blank?");

 }
*/

 //OR

 var min = prompt("Let's find a random number. What's the minimum?");
 while(min==="") {
  min = prompt("What's the minimum value\nPlease do not leave blank?");




 }
 //test for type
 //using isNaN(Variable to check)
  console.log(isNaN(7)); // F
 console.log(isNaN("Cat")); // T

 while(isNaN(min)){//Loops as long as it is not a number
  min = prompt("Please only type in numbers.\nWhat is the minimum value.")

 }

//combine


 while(min==="" || isNaN(min)){

 if (min===""){
  min = prompt("Please do not leave blank.\nWhat is the minimum value.");
 }else {
  min = prompt("Please only type in numbers.\nWhat is the minimum value.");

 }
 }

 //Prompt and validate at the same time

 do{
  var max = prompt("Please only type in numbers and don't leave blank.\nWhat is the max value.")

 }while(max==="" || isNaN(max));

 //validate if the user types in what you want
 var question = prompt("Please type in Yes or No.");
 while(question!="Yes" && question!="yes"&& question!="no"&& question!="No"){
  question = prompt("Please type in ONLY Yes or No.")


 }