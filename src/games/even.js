import { makeRandom, isEven } from '../utils';
import game from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const makeGameData = () => {
  const question = makeRandom(1, 1000);
  const answer = isEven(Number(question)) ? 'yes' : 'no';
  return [question, answer];
};

export default () => game(gameDescription, makeGameData);
