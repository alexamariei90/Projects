//Greeting message
let userName = '';
if (userName) {
  console.log(`Hello ${userName}!`)
} else {
  console.log('Hello!');
}

//Question
let userQuestion  = '';
console.log(`${userName} asked: ${userQuestion}.`);
//Generate a random number between 0 - 7
let randomNumber = Math.floor(Math.random() * 8);
//console.log(randomNumber);

//Create variable to assign later messages depending on the value of randomNumber
let eightBall = '';

//The control flow to generate phrases
switch (randomNumber) {
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say so';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to say yes';
  break;
  default:
  eightBall = 'No Luck Today'
  break;
}
console.log(eightBall);
