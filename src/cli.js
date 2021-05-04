import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const showTask = (task) => {
  console.log(`Question: ${task}`);
};

const getAnswer = () => readlineSync.question('Your answer: ');

const showReaction = (isCorrect, answer, name) => {
  const reaction = isCorrect
    ? 'Correct!'
    : `"${answer}" is wrong answer ;(. Correct answer was "no". \n Let's try again, ${name}!`;
  console.log(reaction);
};

export {
  greeting, showTask, getAnswer, showReaction,
};
