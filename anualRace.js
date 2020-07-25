let raceNumber = Math.floor(Math.random() * 1000);
//console.log(raceNumber);  

//variable that indicates whether a runner registered early or not. Change to false/true to see diffrent results
let adultRegEarly = true;

//variable for the runner’s age. Change  this number to see diffrent results
let runnerAge = 18;

//control flow statement that checks whether the runner is an adult AND registered early and assigns a race number.

if (adultRegEarly == true && runnerAge > 18) {
  raceNumber += 1000;
} else if(adultRegEarly != true || runnerAge < 18) {
  raceNumber = 1000 - raceNumber;
}
//This statement will check age and registration time to determine race time.
if (adultRegEarly == true && runnerAge > 18) {
  console.log(`Thank you for your registration. Becasue you registered early the race will start at 9:30 am. Your race number is: ${raceNumber}`);
} else if (adultRegEarly != true && runnerAge > 18) {
  console.log(`Thank you for your registration. Becasue you registered late the race will start at 11:00 am. Your race number is: ${raceNumber}`)
} else if (runnerAge < 18) {
  console.log(`Thank you for your registration. Becasue you are under 18 years old the race will start at 12:30 am. Your race number is: ${raceNumber}`);
} else {
  console.log('Please see the registration desk.');
}
