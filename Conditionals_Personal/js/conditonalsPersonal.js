
 /*
James Roll
Conditionals_Personal
Wpf 1411
11-7-2014
 */

//alert("testing 1.2,3!");


 var runMph = prompt("How many miles do you run in an hour?\nIf you did run type 0.");
 var hoursRan = prompt("How many hours can you run?\nIf you did not run type 0.");
 var marathonMiles = prompt("How many miles are in the marathon you want to run in?");
 var yes = 0;

 if(runMph * hoursRan>= marathonMiles) {
  console.log("Congrats you are ready for the marathon!");
 }if(runMph * hoursRan<=yes ){
console.log ("I hope your back to training soon!")
 } else {
  (runMph * hoursRan < marathonMiles)
  console.log("You are not ready for the marathon, keep training!");
 }