
 /*
James Roll
Math
Wpf 1411
11-7-2014
 */

//alert("testing 1.2,3!");

 //Normal rounding
 //.5 up else goes down

 var num1 = 9.544;

 console.log(num1);
 console.log(Math.round(num1));


 //floor rounding
 //always rounds down
 var num2 = 6.8;

 console.log(num2);
 console.log(Math.floor(num2));

 //ceiling rounds up
 var num3 = 4.8;

 console.log(num3);
 console.log(Math.ceil(num3));

 //how to get specific number of decimals
 //toFixed - not part of math
 var num4 = 6.7893;

 console.log(num4);
 console.log(num4.toFixed(2));// can use other numbers

 //random numbers
 //Math.random() - gives values 0 and almost 1
 //Nothing goes within the ()
 var num5 = Math.random();

 console.log(num5);

 //number 0-10
 var num6 = Math.random() * 10;
 console.log(num6);

 //Integers between 0-10
 var num7 = Math.round (Math.random() * 10);
 console.log(num7);

 //Integers between 0-100

 var num8 = Math.round (Math.random() * 100);
 console.log(num8);

//Get a random integer between any 2 values
 //Math.random() * (max-min) + min

 //random between 50-80

var num9 = Math.round(Math.random() *(80-50)+50);
 console.log(num9);

 //Prompt the user for a max and min values
 //Find the random number between them
 var max = prompt("Lets a random number whats the max value?");
 var min = prompt("Please type in the minimum number now.");

 //find the random integer
 var randomNum =Math.round(Math.random() * (max-min))+Number(min);
 console.log(randomNum);
 console.log("You random number is " +randomNum);

 //Math class constant
 //number that never changes
 //Always upper case
 //Math.PI - 3.1459....
 //circum
 //2*PIr
 var radius = 7;
 var circleArea = 2*Math.PI * radius;
 console.log(circleArea);

