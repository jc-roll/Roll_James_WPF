
 /*
James Roll
Looping Arrays
Wpf 1411
11-12-2014
 */

//alert("testing 1.2,3!");
//Looping over Arrays
 //for(var i = 0; i<arrayName.length; i++){}

 var names = ["Scooby", "Shaggy", "Fred", "Velma", "Daphne","Scrappy-Doo"];
 //tell each one of them that they have solved the case.
 for(var i =0; i<names.length; i++){
  console.log("You solved the case "+names[i]+ "!");

 }

 //create a bill array

 var bills=[50,10,5,20,10];
 //lets add up our bills
 var totalBills =0;
 for(var j =0;j<bills.length;j++){
  //Add each bill to the total bills
  totalBills+= bills[j];

 }
 console.log("Your totalBills are $" +totalBills);


//new version (I only want bills higher then 20)


 var bills=[50,10,5,20,10];
 //lets add up our bills
 var totalBills =0;
 for(var j =0;j<bills.length;j++){
  //Add each bill to the total bills
  //totalBills+= bills[j];
if(bills[j] >=20){
   totalBills +=bills[j];
  }

 }
 console.log("Your totalBills are $" +totalBills)