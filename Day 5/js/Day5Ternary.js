
 /*
James Roll
Ternary
Wpf 1411
11-5-2014
 */

//alert("testing 1.2,3!");

//If your gpa is greater then 2.0 then you graduate
 var gpa = 3.5;
 if(gpa>2.0){
  console.log("Congrats you graduated!");

 } else {
  console.log("Sorry, study more!");

 }

 //convert to a Ternary
 //(condition to test) ? true code : else code;

 (gpa>2.0) ? console.log("Congrats you graduated!") : console.log("Sorry, study more!");

 //set a variable equal to the outcome
 //based on a child's age they will read one of two books
 //kids under 10 read green eggs and ham
 //kids 10 and older read the time machine
 var age = 16;
 var book;

 book = (age>=10) ? "The Time Machine" : "Green Eggs & Ham";
 console.log(book);

 //kids 14 and older = Twilight
 book = (age<10)? "Green Eggs & Ham" : (age<14)? "The Time Machine" : "Twilight";
 console.log(book);