
 /*
James Roll
Work Related Expression
Wpf 1411
11-3-2014
 */

//alert("testing 1.2,3!");

//prompts
var hoursDay = prompt("How many hours do you use your computer in a day?");
var daysWeek = prompt("How many days do you work in a week?\n On average don't think holidays (Must be a whole number).");
var sickDays = prompt("how many sick days do you plan on using this year?");
var totalDay = daysWeek*52-sickDays;
var totalHours = hoursDay*daysWeek*52;
console.log(totalHours);


