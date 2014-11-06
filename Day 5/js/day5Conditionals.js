
/*
James Roll
Conditionals
Wpf 1411
11-5-2014
*/

//alert("testing 1.2,3!");

//Basic conditional
//is the child old enough to ride the ride
//create a boolean variable
var oldEnough = false;
//if the child is old enough,console.log they can ride


/*
//if(condition to test){

}

*/

if(oldEnough){
//true code goes here
 console.log("You are old enough to ride the ride!");

} else{
 //false code goes here
 console.log("Sorry, you are not old enough.");

}

console.log("After the if statement.");


//relational operators compares two values and returns a boolean
//If the kid is over 48 inches tall then he can ride the ride.
//Create a variable to hold the kids height
var kidHeight = 44;

//sneakerLift
var sneakerLift = 2;

//create kid minimal height
var minHeight = 48;

//height with parents 45"
var wParentHeight = 45;


//If statement
if(kidHeight>minHeight){
 //true code
 console.log("Congrats, your tall enough to ride!");

}else if (kidHeight>=wParentHeight){
 console.log("You can ride with your parents.");

}else if (kidHeight+sneakerLift>48){
console.log("You can ride, with your lifts!");

}else {
 //false code
 console.log("Sorry kid, you're to short.");
}