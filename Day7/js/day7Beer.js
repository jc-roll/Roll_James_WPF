
 /*
James Roll
Title
Wpf 1411
Date
 */

//alert("testing 1.2,3!");

 //Console.log the whole song of 99 Bottles
 //Set up loop
 //for(initialize variable; condition; increment of change){}

 for(var i=99; i>0; i--) {


  console.log(i + " bottles of beer on the wall." + i + " bottles of beer.");
  console.log("You take one down you pass it around. " + (i - 1) + " bottles of beer on the wall.");

  if (i === 1) {
   console.log(i + " bottle of beer on the wall." + i + " bottle of beer.");
   console.log("You take one down you pass it around. No more bottles of beer on the wall.");
  } else if (i === 2) {
   console.log(i + " bottles of beer on the wall." + i + " bottles of beer.");
   console.log("You take one down you pass it around. " + (i - 1) + " bottle of beer on the wall.");
  } else {
   console.log(i + " bottles of beer on the wall." + i + " bottles of beer.");
   console.log("You take one down you pass it around. " + (i - 1) + " bottles of beer on the wall.");
  }

 }