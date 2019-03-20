import randomNumGeneration from '../utils';

export const gameRules = () => 'What is the result of the expression?';


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

export const gameTaskGeneration = () => {
  const maxNumberInGame = 50;
  const randomNumber1 = randomNumGeneration(maxNumberInGame);
  const randomNumber2 = randomNumGeneration(maxNumberInGame);
  const operation = operationGenerate();
  return `${randomNumber1} ${operation} ${randomNumber2}`;
};

export const getGameAnswer = str => eval(str);

const correctAnswer = calculate(operation, randomNumber1, randomNumber2);
