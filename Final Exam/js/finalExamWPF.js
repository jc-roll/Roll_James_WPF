
 /*
James Roll
Final Exam WPF
Wpf 1411
11-19-2014
 */

//alert("testing 1.2,3!");


 var cost =  parseInt(prompt("How much did the item originally cost?"));
 while(cost==="" || isNaN(cost)) {
  cost = prompt("Only type in a numbers and please do not leave blank\nHow much did the item originally cost?");
 }
 var discount =  parseInt(prompt("How much was the discount?"));
 while(discount==="" || isNaN(discount) || discount>=101) {
  discount = prompt("Only type in a numbers and please do not leave blank\nHow much was the discount?");
 }

 function discounts(cost,discount) {
  var discountP = (100 - discount)/100*cost;
  return discountP;

 }
 var results=discounts(cost,discount);
 console.log("The original price of the item was " +cost+ " but with a discount of " +discount+ "% you will now have to pay $"+results+ " !" );