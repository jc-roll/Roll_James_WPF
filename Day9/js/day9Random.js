
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

 var min = parseInt(prompt("Let's find a random number between two values. \nWhat is the starting min value?"));
while(min==="" || isNaN(min)){
 min = prompt ("PLease do not leave blank and only use numbers!\nWhat is the min value?");

}
 var max = ("What is the larger value or max?");
 while(max==="" || isNaN(max || min>=max)) {

  if (max===""){
   max = parseInt(prompt("Please do not leave blank.\nWhat is the max value?"));

  }else if(isNaN(max)){
   max=parseInt(prompt("Please only type in number.\nWhat is the max value?"));
  }else if(min>=max){
   max=parseInt(prompt("Please type in a number larger than the min\.Please type in the max value:"));
  }
//function call
var returnedNumber = randomizer(min,max);
console.log("Your random Integer between "+min+ " and "+max+ " is " +returnedNumber+ ".");



 }
 //Create a random number generating function

 function randomizer (mn,mx){
  //Math.random()*(max-min)+min
  var randomNumber = Math.round(Math.random()*(mx-mn)+Number(mn));
return randomNumber;
 }

/////////////////////////////////////////////////////////////////////////////////////////////////////////

 var min = parseInt(prompt("Let's find a random number between two values. \nWhat is the starting min value?"));
 while(min==="" || isNaN(min)){
  min = prompt ("PLease do not leave blank and only use numbers!\nWhat is the min value?");

 }
 var max = ("What is the larger value or max?");
 while(max==="" || isNaN(max || min>=max)) {

  if (max===""){
   max = parseInt(prompt("Please do not leave blank.\nWhat is the max value?"));

  }else if(isNaN(max)){
   max=parseInt(prompt("Please only type in number.\nWhat is the max value?"));
  }else if(min>=max){
   max=parseInt(prompt("Please type in a number larger than the min\.Please type in the max value:"));
  }
//function call
  var returnedNumber = randomizer(min,max);
  console.log("Your random Integer between "+min+ " and "+max+ " is " +returnedNumber+ ".");


  //create an array to work with the forloop
  var numbers=[];


  //Create a forLoop for 15 random integers
  for(var i=0; i<15; i++)
  numbers.push(randomizer(min,max));
   console.log(numbers[i]);


 }
 console.log(numbers);


 //Create a random number generating function

 function randomizer (mn,mx) {
  //Math.random()*(max-min)+min
  var randomNumber = Math.round(Math.random() * (mx - mn) + Number(mn));
  return randomNumber;

 }