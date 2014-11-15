
 /*
James Roll
Function Industry
Wpf 1411
11-14-2014
 */

//alert("testing 1.2,3!");


 function calcHoursAtWorkMonth(hoursDay, daysAMonth, sickDays) {
  var totalHours = hoursDay*(daysAMonth-sickDays);
  console.log("The amount of hours you work in a month is " + totalHours+ ".");
  return totalHours;
 }

 var hoursDay = prompt("How many hours do you work a day?");
  while(hoursDay==="" || isNaN(hoursDay)) {
   hoursDay = prompt("Only type in a numbers and please do not leave blank");
  }

 var daysAMonth = prompt("How many days a month do you work?");
   while (daysAMonth === "" || isNaN(daysAMonth)) {
    daysAMonth = prompt("Only type in a numbers and please do not leave blank");
   }

 var sickDays = prompt("Will you take any sick days?");
    while (sickDays === "" || isNaN(sickDays)) {
     sickDays = prompt("Only type in a numbers and please do not leave blank");
   }

 calcHoursAtWorkMonth(hoursDay, daysAMonth, sickDays);