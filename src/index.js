import {
  greeting, getAnswer, showTask, showReaction,
} from './cli.js';
import brainEven from './games/brainEven.js';
import brainCalc from './games/brainCalc.js';

const iterationCount = 3;

const generateTasks = (game) => {
  let i = 0;
  const tasks = [];
  while (i < iterationCount) {
    tasks.push(game.generateTask());
    i += 1;
  }
  return tasks;
};

const startGame = (game) => {
  const name = greeting();
  let validAnswerCount = 0;
  const tasks = generateTasks(game);

  console.log(game.rules);

  tasks.forEach((task) => {
    const taskStr = Array.isArray(task) ? task.join('') : task;
    showTask(taskStr);
    const answer = getAnswer();
    const isAnswerValid = game.checkAnswer(task, answer);
    if (isAnswerValid) validAnswerCount += 1;
    showReaction(isAnswerValid, answer, name);
  });

  if (validAnswerCount === iterationCount) console.log(`Congratulations, ${name}`);
};

const startBrainEven = () => startGame(brainEven);
const startBrainCalc = () => startGame(brainCalc);
export {
  startBrainEven,
  startBrainCalc,
};
