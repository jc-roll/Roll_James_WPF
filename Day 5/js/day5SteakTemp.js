
 /*
James Roll
Day 5 Steak Temp
Wpf 1411
11-5-2014
 */

//alert("testing 1.2,3!");

 //Ask for steak temp and tell what steak preference

/*
 Extra rare    115-120  F
 Rare 		   125–130 °F
 Medium rare   130–140 °F
 Medium  	   140–150 °F 	145 °F
 Medium well   150–155 °F
 Well done     160 °F+ 160 °F
    */

//declare and define the var for steak temp
 var steakTemp=prompt("What temp is your steak?");


 if(steakTemp<115){
  console.log("Uncooked Meat - MooO");

 } else if(steakTemp<=120){
  console.log("Your steak is Extra-Rare");

 } else if(steakTemp<=130){
  console.log("Your steak is Rare");

 } else if(steakTemp<=140){
  console.log("Your steak is Medium-Rare");

 } else if(steakTemp<=150){
  console.log("Your steak is Medium");

 } else if(steakTemp<=155){
  console.log("Your steak is Medium-Well");

 } else if(steakTemp<=160){
  console.log("Your steak is Well Done")

  } else{
  console.log("Your steak is trash")
 }

