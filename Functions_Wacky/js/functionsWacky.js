
 /*
James Roll
Title
Wpf 1411
Date
 */

//alert("testing 1.2,3!");



 var cats =  parseInt(prompt("How many cats do you have?"));
 while(cats==="" || isNaN(cats)) {
  cats = prompt("Only type in a numbers and please do not leave blank\nHow many cats do you have?");
 }
 var dogs =  parseInt(prompt("How many dogs do you have?"));
  while(dogs==="" || isNaN(dogs)) {
   dogs = prompt("Only type in a numbers and please do not leave blank\nHow many cats do you have?");
  }
 var rid =  parseInt(prompt("How many do you wish you didn't have?"));
   while(rid==="" || isNaN(rid)) {
    rid = prompt("Only type in a numbers and please do not leave blank\nHow many do you wish you didn't have?");
   }

    var results = superFunction(cats, dogs);
    console.log("You have " + results[0] + " total animals, " + cats + " cats and " + dogs + " dogs!\nYou wish you had " + results[1]+ " animals.");

    function superFunction(cats, dogs) {
     var animals = allAnimals(cats, dogs);
     var lessAn = lessAnimals(animals);
     return [animals, lessAn];
    }

    function allAnimals() {
     var totalAnimals = cats + dogs;
     return totalAnimals;
    }

    function lessAnimals() {
     var less = cats + dogs - rid;
     return less;

    }
