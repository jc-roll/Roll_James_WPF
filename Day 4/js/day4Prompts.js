/*
James Roll
Day 4 Prompts
Wpf 1411
11-3-2014
 */

//alert("testing 1.2,3!");

//ask user for input

//prompt() = ask the user to type something in
var yearBorn = prompt("Enter your year of Birth");
console.log(yearBorn);

//figure out how old we are
var age = 2014 - yearBorn;
console.log("You are "+age+" years old. ")

//Calculate the area of a rectangle
// area= length* width

var length = prompt(" We are going to calculate the area of a rectangle. \nPlease enter the length of your rectangle:");
var width = prompt("Please enter the width of your rectangle:");
//now lets calculate
var area =length*width;

var results =("The area of the rectangle with a width of "+width+ " and a length of "+length+" is "+area+".");

//console the area
console.log("The area of the rectangle with a width of "+width+ " and a length of "+length+" is "+area+".");

console.log(results);

alert("The area of the rectangle with a width of "+width+ " and a length of "+length+" is "+area+".");
//by adding alert to the front of the concatenation it shoots it back at the user