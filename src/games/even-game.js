import { randomCalc, isEven } from '../utils';
import game from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".\n';

const getCorrectAnswer = number => (isEven(Number(number)) ? 'yes' : 'no');

const makeGameData = () => {
  const question = randomCalc(1, 1000);
  const answer = getCorrectAnswer(question);
  return [question, answer];
};

export default () => game(gameDescription, makeGameData);
