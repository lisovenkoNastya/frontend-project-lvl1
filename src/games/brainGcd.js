const generateTask = () => {
  const a = Math.round(Math.random() * 99) + 1;
  const b = Math.round(Math.random() * 99) + 1;
  return [a, b];
};

const checkAnswer = (numbers, answer) => {
  let [min, max] = numbers.sort((a, b) => a - b);
  while (max - min !== 0) {
    const newNumber = max - min;
    [min, max] = [min, newNumber].sort((a, b) => a - b);
  }
  return Number(answer) === min;
};

const brainGcd = {
  rules: 'Find the greatest common divisor of given numbers.',
  generateTask,
  checkAnswer,
};
export default brainGcd;
