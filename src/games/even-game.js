import randomCalc from '../utils';
import game from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = number => ((number % 2) === 0);

const getCorrectAnswer = number => (isEven(Number(number)) ? 'yes' : 'no');

const makeGameData = () => {
  const questionData = randomCalc(1, 1000);
  const answerData = getCorrectAnswer(questionData);
  return [questionData, answerData];
};

export default () => game(gameDescription, makeGameData);
