
 /*
James Roll
  day9multiple
Wpf 1411
11-14-2014
 */

//alert("testing 1.2,3!");


 //figure out how much pizza costs per sq inch
 //and how much per slice

 //prompt the user for radius of pizza
 //cost of pizza
 //# of slices

 var pizzaRadius = prompt("What is the radius of your pizza?");
 var pizzaCost = prompt("How much does your total pizza cost?");
 var pizzaSlices = prompt("How many slices does you pizza have?");


 //Create the SUPER FUNCTION THAT STARTS THEM ALL!!!!
 //function call our LordFUNCTION
 var results = lordFunction(pizzaRadius,pizzaCost,pizzaSlices);

 console.log ("Your pizza costs $"+results[0]+ "per sq inch or $"+results[1]+ " per slice.")

 function lordFunction (radius,cost,slices){
 var area = pizzaArea(radius);
 var areaCost = pizzaSqInCost(area,cost);
  var slicePrice = pricePerSlice(slices,cost);

  return [areaCost,slicePrice];
 }



 //Function that calculates of the area of the pizza
 //Function that calculates the price per inch
 //Function that calculates the price per slice
 function pizzaArea(r){
  var area = r * r *Math.PI;
  return area;

 }

function pizzaSqInCost(area,price){
 var costPerIn = price/area;
 costPerIn = costPerIn.toFixed(2);
 return costPerIn;

}
 function pricePerSlice(slices,price){
  var costPerSlice = price/slices
  costPerSlice = costPerSlice.toFixed(2);
  return costPerSlice;
 }