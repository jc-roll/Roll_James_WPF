
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


 if(grade<=70){
  console.log("You got an F");

 } else if(grade<=73){
  console.log("You got a D");

 } else if(grade<=76){
  console.log("You got a C-");

 } else if(grade<=80){
  console.log("You got a C");

 } else if(grade<=85){
  console.log("You got a B-");

 } else if(grade<=90){
  console.log("You got a B+");

 } else if(grade<=95){
  console.log("You got an A");

 } else if(grade<=100){
  console.log("You got an A+");

 } else{
  console.log("Go retake your test")
 }


 /*

  Given:
  Pressure for each tire of the car (in psi) in an array.
  Result To Print Out:
  “The tires pass spec!” Or “ Get your tires checked out!”

  */

 var tirePressures = [];
 tirePressures[0] = 10;
 tirePressures[1] = 10;
 tirePressures[2] = 12;
 tirePressures[3] = 12;

 if ((tirePressures[0] == tirePressures[1]) && (tirePressures[2] == tirePressures[3])){
  console.log("The tires pass spec!");

 } else {
  console.log("Get your tires checked out!");
 }