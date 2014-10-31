/**
 * Created by jamesroll on 10/31/14.
 */

// single line comment

/*
multi lined comment
you can make it as large as you want
 */

alert("Hello World");

//console log
//programmers to show variables and code
console.log("This is the console. Can you see it.")

// declare a variable
//use the keyword of var
var whatEver1; //declaration

//set the value of the variable
whatEver1 =42; //definition

//storage container = value

//setup a variable and define it in the same line

var a = 2; //declare and define
console.log(a);

a+3;
console.log(a);

a= a+3;
console.log (a);
//declare a variable b
var b;
//define b
b= a+3;
console.log(a);
console.log(b);
//finding birth year
var birthYear = 1988
//calculate my age
var myAge =2014 - birthYear;

console.log(myAge);
//talk about math!
//+, - , *, /
//find area of a triangle
//base * height / 2

var base = 20;
var height = 15;

var areaTriangle = base * height / 2;

console.log (areaTriangle);
//modulo - %
//gives the remainder left over

var remainder = 32%10;

console.log(remainder);
//used to find if the remainder is odd or even
// %2 - "modulo by 2"
//1= odd
//0= even

var evenOrOdd = 67%2
console.log(evenOrOdd);

//assignment operator
/*
=  assigns the value to the variable
++ means add one to the value to the variable
-- subtracts one to the value of the variable
+= adds the number to the variable
-= subtracts
/= divided
*= multiple
 */

var x=1;
x++; // the same as x+1;
x--;
x+=2;
x-=1;
x/=2;
x*=8;
console.log(x);

//strings
//text fields of programming
//must start and end in matching quotes
//either ' "

//declare and define a string variable

var kermit = "light green";
var frogName = "kermit";

console.log(frogName);

//why should i bother with single of double quote
var phrase = 'I don\'t know\n you never know'; //the ' in don't gets in the way // escape character \in front of char nulls the '
console.log(phrase);

//boolean= light switches of the programming world that contain true or false

var yes= true; //true boolean
var nope="true"; // not a boolean
var lightSwitch = false;

// order of operation
// PEMDAS - please excuse my dear aunt sally
// Parenthesis, exponents, *,/,+,-
//find quiz averages
var quiz1= 87;
var quiz2= 100;
var quiz3= 70;

var averageQuiz = (quiz1+quiz2+quiz3)/3;
console.log(averageQuiz);

//calculate the parimeter of rectangle
// 2 * width + 2* length

var width = 6;
var length= 7;
var parimeterRect = 2*width + 2*length;
console.log(parimeterRect);

//concatenation = when you combine strings together

var firstName = "Kermit";
var lastName = "The Frog";
var fullName = firstName+" "+ lastName;
console.log(fullName);

var d = "6";
var e = "7";
var combine = d+e;
console.log(combine);

var f = 8;
var g = "4";
var combine2 = f+g;
console.log(combine2);

//concatinate
//strings aswell

var together = "The results of adding numbers is "+combine;
console.log(together);





