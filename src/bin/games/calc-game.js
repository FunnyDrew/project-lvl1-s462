import askingQuestion from '../..';

const maxGameIteration = 3;
const maxRandomNumber = 50;

const randomNumberGeneration = () => Math.round(maxRandomNumber * Math.random());

const operationGenerate = () => {
  const randomNum = Math.random();
  if (randomNum < 0.3) {
    return '-';
  }
  if (randomNum >= 0.3 && randomNum < 0.75) {
    return '+';
  }
  return '*';
};

const calculate = (operation, num1, num2) => {
  if (operation === '-') {
    return num1 - num2;
  }
  if (operation === '+') {
    return num1 + num2;
  }
  return num1 * num2;
};

const game = (numIteration, player) => {
  if (numIteration === maxGameIteration) {
    return `Congratulations, ${player}!`;
  }

  const randomNumber1 = randomNumberGeneration();
  const randomNumber2 = randomNumberGeneration();
  const operation = operationGenerate();

  console.log(`Question: ${randomNumber1} ${operation} ${randomNumber2}`);
  const playerAnswer = askingQuestion('Your answer: ');

  const correctAnswer = calculate(operation, randomNumber1, randomNumber2);

  if (Number(playerAnswer) !== correctAnswer) {
    return `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${player}!`;
  }

  console.log('Correct!');
  return game(numIteration + 1, player);
};

export default game;
