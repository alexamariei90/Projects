//creating one function with a parameter for a day. This function accepts a day as an argument and returns the number of days slept that night

// with the if else statement
const getSleepHours = day => {
 if (day === 'monday') {
   return 8;
  } else if (day === 'tuesday') {
    return 8.5;
  } else if (day === 'wednesday') {
    return 7;
  } else if (day === 'thursday') {
    return 7.5;
  }  else if (day === 'friday') {
    return 6;
  }  else if (day === 'saturday') {
    return 6.5;
  }  else if (day === 'sunday') {
    return 5.5;
  } 
  };
 
 
 //with the  switch statement
 /* switch (day) {
    case 'monday':
    console.log(8);
    break;
    case 'tuesday':
    console.log(8.5);
    break;
    case 'wednesday':
    console.log(7);
    break;
    case 'thursday':
    console.log(7.5);
    break;
    case 'friday':
    console.log(6);
    break;
    case 'saturday':
    console.log(6.5);
    break;
    case 'sunday':
    console.log(5.5);
    break;
    default:
    console.log('Invalid Entry!')
    break
} 
};*/


//testing the function
// getSleepHours('sunday');


//creating a function that gets the total sleep hours per week
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') +getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');



//creating a function that will get the ideal number of hours to be slept per week
/*const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours *7;*/
//or the simpler way
const getIdealSleepHours = idealHours => idealHours * 7;



//Displaying on the screen the called functions getActualSleepHours() & getIdealSleepHours(8)
console.log('Actual slept hours this week: ' + getActualSleepHours());
console.log('Ideal hours to be slept this week: ' + getIdealSleepHours(8));



// creating a function to calculate the sleep debt
 const calculateSleepDebt = () => {
   const actualSleepHours = getActualSleepHours();
   //const idealSleepHours = getIdealSleepHours();
   //or the simpler way
   const idealSleepHours = getIdealSleepHours(8);
   if (actualSleepHours === idealSleepHours) {
     console.log('Good Job! You are even!');
   } else if (actualSleepHours >= idealSleepHours) {
     console.log('You overslept' +  Number(actualSleepHours() - idealSleepHours()) + ' hours !')
   } else if (actualSleepHours <= idealSleepHours) {
     console.log('You have a debt of ' + Number(idealSleepHours - actualSleepHours) + ' hours ! GET SOME REST!')
   }
 };
 //calling calculateSleepDebt
 calculateSleepDebt();

