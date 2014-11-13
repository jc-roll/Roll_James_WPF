
 /*
James Roll
Title
Wpf 1411
Date
 */

//alert("testing 1.2,3!");


 function calcStings(pounds) {
  var totalStings = pounds*8.666666667;
  console.log("The amount of stings that will kill you is " + totalStings+ ".");
  return totalStings;
 }
 var weight = prompt("How much do you weigh?");
 while(weight==="" || isNaN(weight)) {
  weight = prompt("Only type in a numbers and please do not leave blank");

 }
 calcStings(weight);