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
  let isCorrect;
  if (questPosition === 0) {
    isCorrect = (task[questPosition + 1] - answer)
      === (task[questPosition + 2] - task[questPosition + 1]);
  } else if (questPosition === task.length - 1) {
    isCorrect = (answer - task[questPosition - 1])
      === (task[questPosition - 1] - task[questPosition - 2]);
  } else {
    isCorrect = (task[questPosition + 1] - answer)
      === (answer - task[questPosition - 1]);
  }
  return isCorrect;
};

const brainGcd = {
  rules: 'What number is missing in the progression?',
  generateTask,
  checkAnswer,
};
export default brainGcd;
