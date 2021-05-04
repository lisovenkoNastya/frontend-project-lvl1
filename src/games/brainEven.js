const generateTask = () => {
  const newNumber = Math.round(Math.random() * 100);
  return newNumber;
};

const checkAnswer = (task, answer) => {
  const isEven = task % 2 === 0;
  if (isEven && answer === 'yes') return true;
  if (!isEven && answer === 'no') return true;
  return false;
};

const brainEven = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateTask,
  checkAnswer,
};
export default brainEven;
