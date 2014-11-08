
 /*
James Roll
Day 7 Loops
Wpf 1411
11-7-2014
 */

//alert("testing 1.2,3!");

 //Basic While loop
 //The while will loop through a block of code as long as the condition remains true
 var counter = 0; //Step one initialize the counting variable

 while(counter<20){ //Condition will run as long as this is true
  console.log("Somethings will never end "+counter);
  //Update or change the variable
  counter++;

 }
console.log("End of loop- last counter variable "+counter);

 //DO while loops
 //its sort of like the while loop
 //difference is, the code will run at least once!
 var i=30;
 do{
  console.log("The counting number is "+i)
  i++;
 }while(i<10);