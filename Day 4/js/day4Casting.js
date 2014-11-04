
 /*
James Roll
Day 4 Casting
Wpf 1411
11-3-2014
 */

//alert("testing 1.2,3!");
// casting variables = treat one variable type as another

 var stringVar = "6";
 var results = 7+stringVar;

 console.log(results);

 //to Cast a variable as a number
 //Number() - anything inside the () is treated as a number

 var castingResults = 7 + Number(stringVar);
 console.log(castingResults);

 //casting numbers as a string
 //String() - treats anything as a text string

 //Phone number
 var areaCode =407;
 var firstPart = 979;
 var secondPart = 1667;

 //Concatenate the phone number to one variable

 var phoneNumber = areaCode+firstPart+secondPart;
 console.log(phoneNumber);

 //time to String
 var phoneNumber = String(areaCode)+String(firstPart)+String(secondPart);
 console.log(phoneNumber);

 var phoneNumber2 = "("+areaCode+")"+firstPart+"-"+secondPart;
console.log(phoneNumber2);

 // 7 cats
 //parsing Integers
 //parseInt() - looks through the text string and returns the integer in it.

 //Only the first is returned
 //The number has to be the first thing in the text string
 //if parseInt cant find it - returns NaN
 //NaN - Not a Number

 var a = parseInt("40 years 7 years ago");
 console.log(a);

 var b = parseInt("I am 40 years old");
 console.log(b);

 //prompt() - ONLY returns text string!!!!

 var cupsHad = prompt("How many cups do you have? ");
 var cupsBought = prompt("How many cups are you going to buy?");
 var totalCups = Number(cupsHad) + parseInt(cupsBought);

 console.log(totalCups);