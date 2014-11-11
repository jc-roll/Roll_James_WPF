
 /*
James Roll
Title
Wpf 1411
Date
 */

//alert("testing 1.2,3!");

 //Zombie attack
 //We have a zombie at the school
 //It can bite 4 people a  day and turn them into zombies by the next day
 //The CDC has asked us, how many zombies will there be in 8 days

 var numZombies = 1;// how many zombies do we have
 var numBites = 4;
 var days = 1;
 /*
 //All zombies will bite four people each, each day.
 //So we will loop number of days

 for(var i=1; i<=days; i++){

  //How many new zombies get made and when do they go bite people.
  var newZombies = numZombies*numBites;
  numZombies = newZombies+numZombies;//numZombies +=newZombies;
  console.log("There are now "+numZombies+" zombies on day #"+i+"!");




 }

*/

 //How many days will it take to get to a million

 while(numZombies<=1000000){
  var newZombies = numZombies*numBites;
  numZombies = newZombies+numZombies;//numZombies +=newZombies;
  console.log("There are now "+numZombies+" zombies on day #"+days+"!");
  days++;
 }