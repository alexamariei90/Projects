//for the user to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts. declare getUserChoice to take the a single input: userInput.
const getUserChoice = userInput => {

  //because user can pass in a parameter, such as'Rock' or 'rock'
userInput = userInput.toLowerCase();

//check if the user typed a valid choice: 'rock','paper' or 'scissors'
if ( userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
  return userInput;
} else {
  console.log('Error: no rock, no paper, no scissors detected!');
}
};

//testing function getUserChoice
//console.log(getUserChoice('paper')); //prints 'paper'
//console.log(getUserChoice('rock')); //prints 'rock'
//console.log(getUserChoice('Tango')); //prints 'Error: no rock, no paper, no scissors detected!' and
                                    //undefined

//now to tell the computer to make a choice
const getComputerChoice = () => {
computerInput = Math.floor( 3 * Math.random() );
if (computerInput === 0 ) {
  return 'paper'; //prints 'paper'
} else if (computerInput === 1) {
  return 'rock'; //prints 'rock'
} else if (computerInput === 2) {
  return 'scissors'; //prints 'scissors'
}
};
//to test the fuction getComputerChoice
//console.log(getComputerChoice()); 

//declaring determineWinner to compare the parameters userChoice and computerChoice
const determineWinner = (userChoice , computerChoice) => {
if (userChoice === 'bomb') {
  return 'I am the Creator if this game so therefore: I Win!'
}
if (userChoice === computerChoice) {
  return 'Equally cunning';
}
if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
  return 'Computer Rules!';
} else {
  return 'User Rules!';
}
}
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'Computer Rules!';
  } else {
    return 'User Rules!';
  }
}
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'Computer Rules!'
  } else {
    return 'User Rules!';
  }
}

};
//tested all the possible outcomes - example prints 'Computer rules!'
//console.log(determineWinner('scissors','rock')); 

//Lets Start the game and log the results, for insta-win give getUserChoice the atrribute of 'bomb' :D
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You choose: ' + userChoice);
  console.log('Computer chose: ' + computerChoice);
  console.log('Result: ' + determineWinner(userChoice , computerChoice));
};
playGame();
