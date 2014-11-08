
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

if(clownQuestions[2].toLowerCase() == "no" || clownQuestions[3].toLowerCase() == "no"){
 console.log("You clowns are not a match best find some other clown to sit with you might fight!")

} else if (clownQuestions[2] == "no" || clownQuestions[3] == "no"){
  console.log("You clowns are not a match you both don't like chocolate!")

}else if((clownQuestions[0] == clownQuestions[1]) && (clownQuestions[2] == clownQuestions[3])){
  console.log("Alright congrats clowns you are a match go eat all the chocolate you can stomach!");

 } else {
 console.log("You clowns are not a match best find some other clown to sit with you might fight!")
 }
 console.log(clownQuestions);