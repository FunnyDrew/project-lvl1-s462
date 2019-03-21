import queryToPlayer from '..';
import randomCalc from '../utils';

const maxGameIteration = 3;

const maxNumInGame = 40;
const operatorArray = ['+', '-', '*'];

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


const getCorrectAnswer = (str) => {
  const splitedString = str.split(' ');
  const result = calculate(splitedString[1], Number(splitedString[0]), Number(splitedString[2]));
  return `${result}`;
};


const game = () => {
  console.log('\nWelcome to the Brain Games!');
  console.log('What is the result of the expression?\n');

  const playerName = queryToPlayer('May I have your name?');
  console.log(`Hello, ${playerName}!\n`);

  const iter = (counter) => {
    if (counter === maxGameIteration) {
      return (`Congratulations, ${playerName}!\n`);
    }

    const question = `${randomCalc(1, maxNumInGame)} ${operatorArray[randomCalc(0, 2)]} ${randomCalc(1, maxNumInGame)}`;
    console.log(`Question: ${question}`);

    const playerResponse = queryToPlayer('Your answer: ');

    const correctAnswer = getCorrectAnswer(question);

    if (playerResponse !== correctAnswer) {
      const wrongEnd = `'${playerResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
      return `${wrongEnd}\nLet's try again, ${playerName}!\n`;
    }
    console.log('Correct!');
    return iter(counter + 1);
  };
  console.log(iter(0));
};

export default game;
