/*
James Roll
Day 4 Arrays
WPF 1411
11-3-2014
 */
//alert("Testing to see if linked")
// Start a basic array

var avengersNames = ["Hulk","Spiderman","Iron Man"];
console.log(avengersNames);

//Access a specific avenger in our array
console.log(avengersNames[1]);
//We can use a variable to represent our index number aswell
var num =2;

//lets print iron mans name
console.log(avengersNames[num]);

//add an avenger to our array
avengersNames[3] = "Thor";
console.log(avengersNames);

//figure out the length of the array
//.length property
//Dot syntax - put a period in it.
console.log(avengersNames.length);

avengersNames[avengersNames.length] = "Captain America";
console.log(avengersNames);
