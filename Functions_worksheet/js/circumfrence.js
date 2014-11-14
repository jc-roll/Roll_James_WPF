
 /*
James Roll
Title
Wpf 1411
Date
 */

//alert("testing 1.2,3!");



 function calcCircumference(radius) {
  var circumference = 2*3.14*radius;
  console.log("The circumference of your circle is " + circumference+ ".");
  return circumference;
 }
 var radius = prompt("what is the radius of your circle?");
 while(radius==="" || isNaN(radius)) {
  radius = prompt("Only type in a numbers and please do not leave blank");

 }
 calcCircumference(radius);
