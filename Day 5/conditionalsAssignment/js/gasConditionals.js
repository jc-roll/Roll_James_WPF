
 /*
James Roll
Gas Conditionals
Wpf 1411
11-5-2014
 */

//alert("testing 1.2,3!");

/*
 Given:
     Gas efficiency of the car (in mpg)
 Gauge reading of the gas tank (in %)
 Car’s gas tank capacity (in gallons)

 Result To Print Out:
     “Yes, you can make it without stopping for gas!” or “You only have X gallons of gas in your tank, better get gas now while you can!”
 */

 var mpg = 20;
 var gauge = 70;
 var capacity = 10;
 var distance = 200;
 var gallonsGas = (gauge/capacity);
 console.log(gallonsGas);

 if(gallonsGas*mpg>=distance){
  console.log("Yes, you can make it without stopping for gas!");


 } else {
  (gallonsGas * mpg < distance)
  console.log("You only have " + gallonsGas + " gallons of gas in your tank, better get gas now while you can!");
 }





 /*
  Given:
  Grade (in percent)
  Result To Print Out:
  “You have a X%, which means you have earned a(n) X in the class!”

  */

 var grade=92;


 if(grade<70){
  console.log("You got F");

 } else if(grade<=73){
  console.log("You got D");

 } else if(grade<=76){
  console.log("You got C-");

 } else if(grade<=140){
  console.log("You got B-");

 } else if(steakTemp<=150){
  console.log("You got a C");

 } else if(steakTemp<=155){
  console.log("You got a C-");

 } else if(steakTemp<=160){
  console.log("You got a D")

 } else{
  console.log("You got an F")
 }