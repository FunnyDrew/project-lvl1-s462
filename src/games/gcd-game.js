import { gcdCalculation, randomCalc } from '../utils';
import game from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.\n';

const maxNumInGame = 50;

const makeGameData = () => {
  const gameNumber1 = randomCalc(1, maxNumInGame);
  const gameNumber2 = randomCalc(1, maxNumInGame);
  const question = `${gameNumber1} ${gameNumber2}`;
  const answer = gcdCalculation(gameNumber1, gameNumber2);
  return [question, answer];
};

export default () => game(gameDescription, makeGameData);
