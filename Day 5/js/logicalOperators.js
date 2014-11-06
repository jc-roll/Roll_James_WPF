
 /*
James Roll
Title
Wpf 1411
Date
 */

//alert("testing 1.2,3!");

 //buy an iPad
 //if the price is less then or equal to our budget or our paycheck is over $1000
 //then we can buy iPad
 var budget = 300;
 var iPadPrice = 500;
 var payCheck = 1200;

 //&& and logical operator
 // The iPad must be BOTH of these things
 if (iPadPrice<=budget && payCheck>1000){
  console.log("iPad is within budget and your check is over $1000.");

 } else {
  console.log("Can't buy iPad");
 }

 //||-or logical operator
 //we can buy if one works

 if (iPadPrice<=budget || payCheck>1000){
  console.log("You can buy iPad");

 } else {
  console.log("Can't buy iPad");
 }

 //&& and logical operator
 // The iPad must be BOTH of these things
 //or i win the lotto
 var wonLotto = true;
 if ((iPadPrice<=budget && payCheck>1000)|| wonLotto){
  console.log("iPad is within budget and your check is over $1000 or you won lotto.");

 } else {
  console.log("Can't buy iPad");
 }