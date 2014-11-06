
/*
James Roll
Title
Wpf 1411
Date
*/

//alert("testing 1.2,3!");

var name = prompt("Enter your name please.");
var blinks = prompt("How many times do you blink in 10 seconds?");
var blinksMin = blinks*6;
var blinksHour = blinksMin*60;
var blinkDay = blinksHour*24
var ratesOfBlink = ["blinks", "blinksMin", "blinksHour", "blinkDay"];
var results = "Here is a fun fact for you " +name+ ", you blink " +blinksHour+ " an hour.\nIn addition to that you will blink " +blinkDay+ " times today if you don't go to sleep.\nGood luck with that " +name+ ".";

alert(results);








