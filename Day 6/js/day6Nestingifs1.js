
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

 //Get temp
 var temp = 89;
 //get water temp
 var waterTemp = 80;

 //If else
 if(temp>70){
  console.log("Lets go to the beach!");

 } else {
  console.log("Lets go to the movies!")

 }

 //test water temp

 if(waterTemp>75){
  console.log("Let's go swimming in the water")

 } else{
  console.log("Let's lay out and get a tan")

 }