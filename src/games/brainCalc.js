const generateTask = () => {
  const operations = ['+', '-', '*'];
  const a = Math.round(Math.random() * 100);
  const b = Math.round(Math.random() * 100);
  return [a, operations[Math.round(Math.random() * 2)], b];
};

const checkAnswer = ([a, operation, b], answer) => {
  let correctAnswer;
  if (operation === '+') correctAnswer = a + b;
  if (operation === '-') correctAnswer = a - b;
  if (operation === '*') correctAnswer = a * b;
  return Number(answer) === correctAnswer;
};

const brainCalc = {
  rules: 'What is the result of the expression?',
  generateTask,
  checkAnswer,
};
export default brainCalc;
