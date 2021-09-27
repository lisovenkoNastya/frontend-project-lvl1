const generateTask = () => Math.round(Math.random() * 100);

const checkAnswer = (number, answer) => {
  let isPrime = false;
  if (number === 2) {
    isPrime = true;
  } else {
    const min = Math.sqrt(number);
    let k = 2;
    while (number % k !== 0 && k <= min) {
      k += 1;
    }
    if (k > min) isPrime = true;
  }
  const answerBool = (text) => {
    if (text === 'yes') return true;
    if (text === 'no') return false;
    return null;
  };
  return isPrime === answerBool(answer);
};

const brainPrime = {
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateTask,
  checkAnswer,
};
export default brainPrime;
