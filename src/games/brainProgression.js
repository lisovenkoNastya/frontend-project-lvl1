const random = (n) => Math.round(Math.random() * n);
const questionSymbol = '..';

const generateTask = () => {
  const length = 10;
  const step = random(100);
  const questPosition = random(length - 1);
  const progressionArr = [random(100)];
  for (let i = 1; i < length; i += 1) {
    const newItem = progressionArr[i - 1] + step;
    progressionArr.push(newItem);
  }
  progressionArr[questPosition] = questionSymbol;
  return progressionArr;
};

const checkAnswer = (task, answer) => {
  const questPosition = task.indexOf(questionSymbol);
  return answer - task[questPosition - 1] === task[questPosition + 1] - answer;
};

const brainGcd = {
  rules: 'What number is missing in the progression?',
  generateTask,
  checkAnswer,
};
export default brainGcd;
