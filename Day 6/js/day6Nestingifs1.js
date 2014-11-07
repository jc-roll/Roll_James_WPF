
 /*
James Roll
Day 6 NestingIfs
Wpf 1411
11-7-2014
 */

//alert("testing 1.2,3!");

 //Some decisions depend on other decisions
 //If it is warm enough lets go to the beach if not lets go to the movies
 //If the water is warm enough lets go swimming
 //if not lets lay out and get a tan
 //Choose kids movie or horror - are you taking a kid

 //Get temp
 var temp = prompt("Whats the temp out side?");
 //get water temp
 var waterTemp = 60;
 //Kid?
 var child = true;

 //If else
 if(temp>70){
  console.log("Lets go to the beach!");

  waterTemp = prompt("What is the water temp?");
  //test water temp
  if(waterTemp>75){
   console.log("Let's go swimming in the water");

  } else{
   console.log("Let's lay out and get a tan");

  }
 } else {
  console.log("Lets go to the movies!");

  if(child){
   var childAge = prompt("How old is the child?");

   if(childAge<=6){
    console.log("Let's see the smurf movie");

   }else{
    console.log("Go see indiana jones movie");

   }
   console.log("Go see kids movie");

  } else{
   console.log("Bring the blood horror movie");

  }
 }


 // using && and || or

 if(temp>70 && waterTemp>75){
  console.log("Let's go to the beach!\n Let's go swimming");

 }else if(temp>70 && waterTemp<=75){
  console.log("Let's go the beach! \n Let's get a tan!");

 }else if(temp<=70 && child){
  console.log("Let's go to the movies!\n Let's see a animated movie!");

 }else if(temp<=70 && !child) {
  console.log("Let's go to the movies!\n Let's see a horror movie!");
 }