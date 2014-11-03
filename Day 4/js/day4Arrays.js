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

//Add Black Widow to the mix
avengersNames[avengersNames.length]= "Black Widow";

//access last avenger in the array
console.log(avengersNames[avengersNames.length -1]);

//New method specific to arrays called push
//it adds what ever we put in automatically to the end of our array.
avengersNames.push("Hawkeye");
console.log(avengersNames);

//pop() - method of an array that removes the last item in an array
// you can save the pop'd variable
// set a variable equal to the pop method

var soloAvenger = avengersNames.pop();
console.log(avengersNames);
console.log(soloAvenger);

//Pick Oranges every day
//Track how many Oranges are picked in each day
var orangeBins=[234, 473, 20, 709];

//How many oranges where picked in total
//Store that in a variable
var orangeTotal = orangeBins[0] + orangeBins[1] + orangeBins[2] + orangeBins[3];
console.log(orangeTotal+" is the total number of oranges picked. ");

//What is the average oranges picked?
var orangeAverage = orangeTotal/orangeBins.length;
console.log("The average amount of oranges picked in" +orangeBins.length+" days is "+orangeAverage+ ".");

//add a day
