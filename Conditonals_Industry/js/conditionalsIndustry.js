
 /*
James Roll
Title
Wpf 1411
Date
 */

//alert("testing 1.2,3!");

// this is a code that is about how when you go to a store for a new computer if you qualify for a discount and if you do what kind.
 var age = prompt("How old are you?");
 var timeInCompany = prompt("How many years have you worked for the company?");
 var ageDiscount;



 ageDiscount = (age<50)? "You are to young to get the senior discount" : "You are old enough to get the senior discount!";

 console.log(ageDiscount);

 if(timeInCompany>=10){
  console.log("You get a company discount because you have worked here for " +timeInCompany+ " years.");

 } else if(timeInCompany<10){

  console.log("You don't get a company discount because you have not worked here for at least ten years.\n You only have " + timeInCompany + " years in the company.");
 }