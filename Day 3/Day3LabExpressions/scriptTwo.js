/**
 * Created by jamesroll on 10/31/14.
 */

alert("Grade Gently");


//Slices of Pie part 1

//Given:
var slices = 4;
var people = 8;
var pizzas = 4;
//Result Variables:
var slicesEa = pizzas*slices/people;
console.log(slicesEa);
//Result Format:
console.log("Each person ate " + slicesEa + " slices of pizza at the party.");


//Slices of Pie part 2

//Given:
var slices = 4;
var people = 8;
var pizzas = 4;
//Results:
var sparkyGot = slicesEa*pizzas%people;
console.log(sparkyGot);
//Result Format
console.log ("Sparky got " + sparkyGot + " slices of pizza at the party")


//Slices of Pie part 2

//Given:
var week1 = 50;
var week2 = 100;
var week3 = 100;
var week4 = 100;
var week5 = 50;
var time = 5;
//Result Variable
var total = week1+week2+week3+week4+week5;
var average = total/time;
console.log(average);
//Result Format:
console.log ("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week");

//Discounts:

//Givens:
var originalP =5;
