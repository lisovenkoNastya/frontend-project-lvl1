import readlineSync from 'readline-sync';
import greeting from './cli.js';

const iterationCount = 3;

const generateNumbers = () => {
  let i = 0;
  const numbers = [];
  while (i < iterationCount) {
    const newNumber = Math.random() * 100;
    numbers.push(newNumber.toFixed());
    i += 1;
  }
  return numbers;
};

const checkAnswer = (number, answer) => {
  const isEven = number % 2 === 0;
  if (isEven && answer === 'yes') return true;
  if (!isEven && answer === 'no') return true;
  return false;
};

const startBrainEven = () => {
  const name = greeting();
  const randomNumbers = generateNumbers();
  let validAnswerCount = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  randomNumbers.forEach((number) => {
    console.log(number);
    const answer = readlineSync.question('Your answer: ');
    const isAnswerValid = checkAnswer(number, answer);
    if (isAnswerValid) validAnswerCount += 1;
    const reaction = isAnswerValid
      ? 'Correct!'
      : `${answer} is wrong answer ;(. Correct answer was "no". \n Let\'s try again, ${name}!`;
    console.log(reaction);
  });

  if (validAnswerCount === iterationCount) console.log(`Congratulations, ${name}`);
};

export default startBrainEven;
