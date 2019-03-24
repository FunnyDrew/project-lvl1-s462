import { makeRandom } from '../utils';
import game from '..';

const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;
const maxFirstElement = 20;
const maxStep = 2;

const makeGameData = () => {
  const firstElement = makeRandom(1, maxFirstElement);
  const step = makeRandom(1, maxStep);
  const hidenElementIndex = makeRandom(1, progressionLength);
  const arr = new Array(10);

  for (let i = 0; i <= progressionLength; i += 1) {
    if (i === hidenElementIndex) {
      arr[i - 1] = '..';
    } else arr[i - 1] = String(firstElement + i * step);
  }

  const question = arr.join(' ');
  const answer = firstElement + hidenElementIndex * step;

  return [question, answer];
};

export default () => game(gameDescription, makeGameData);
