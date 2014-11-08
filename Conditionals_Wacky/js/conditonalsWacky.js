
 /*
James Roll
Conditional Wacky
Wpf 1411
11-7-2014
 */

//alert("testing 1.2,3!");

// Ok so in this wacky conditional we are going to a clown chocolate dinner
 //The issue is that we need like minded clowns together other wise they might get in a fight!
 //Ok now in this particular situation there are two clowns and they are going to walk to a machine
 //This machine will calculate if they are compatible enough to have a chocolate dinner

 var clownQuestions = [];
 clownQuestions[0] = prompt("Hello clown one first question do you like chocolate?");
 clownQuestions[1] = prompt("Hello clown two first question do you like chocolate?")
 clownQuestions[2] = prompt("Hello clown one second question do you like other clowns?")
 clownQuestions[3] = prompt("hello clown two second question do you like other clowns?")
var no = 1
if(clownQuestions[2] == 1){
 console.log("You clowns are not a match best find some one else you might fight!")

} else if(clownQuestions[3] == 1){
 console.log("You clowns are not a match best find some one else you might fight!")
 
}else if((clownQuestions[0] == clownQuestions[1]) && (clownQuestions[2] == clownQuestions[3])){
  console.log("Alright congrats you clowns are a match go eat all the chocolate you can stomach!");

 } else {
 console.log("You clowns are not a match best find some one else you might fight!")
 }