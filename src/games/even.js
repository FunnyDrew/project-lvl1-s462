import { makeRandom } from '../utils';
import game from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => ((number % 2) === 0);

const makeGameData = () => {
  const question = makeRandom(1, 1000);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => game(gameDescription, makeGameData);
