
 /*
James Roll
Functions Personal
Wpf 1411
11-14-2014
 */

//alert("testing 1.2,3!");



 //The shoe store you go to only sells shoes size 10 and below you need to find out if you can purchase one of there shoes.
 //But there shoes run one size larger then most because they are from another country...

 function foreignSize(shoeSize) {
  var newShoeSize = shoeSize + 1;
  (newShoeSize <= 10) ? console.log("Congrats you can buy shoes from the store!") : console.log("Sorry, your feet are to large to purchase shoes from here!");
  return newShoeSize;
 }
  var shoeSize = parseInt(prompt("What size shoe do you wear?"));
  while (shoeSize === "" || isNaN(shoeSize)) {
   shoeSize = prompt("Only type in a numbers and please do not leave blank");

  }
 console.log(shoeSize);
 foreignSize(shoeSize);