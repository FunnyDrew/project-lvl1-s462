import randomNumGeneration from '../utils';

const operatorsInGameUsed = 3;

const operationGenerate = () => {
  const operatorOptionChoice = randomNumGeneration(operatorsInGameUsed - 1);
  let operator;
  switch (operatorOptionChoice) {
    case 0:
      operator = '+';
      break;
    case 1:
      operator = '-';
      break;
    case 2:
      operator = '*';
      break;
    default: operator = '+';
  }
  return operator;
};

const calculate = (operator, num1, num2) => {
  let result;
  switch (operator) {
    case '-':
      result = num1 - num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
  }
  return result;
};


export const gameRules = () => 'What is the result of the expression?';

export const gameTaskGeneration = () => {
  const maxNumberInGame = 50;
  const randomNumber1 = randomNumGeneration(maxNumberInGame);
  const randomNumber2 = randomNumGeneration(maxNumberInGame);
  const operation = operationGenerate();
  return `${randomNumber1} ${operation} ${randomNumber2}`;
};

export const getGameAnswer = (str) => {
  const splitedString = str.split(' ');
  const result = calculate(splitedString[1], Number(splitedString[0]), Number(splitedString[2]));
  return `${result}`;
};
