import makeRandom from '../utils';
import game from '..';

const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;
const maxFirstElement = 20;
const maxStep = 20;

const makeGameData = () => {
  const firstElement = makeRandom(1, maxFirstElement);
  const step = makeRandom(1, maxStep);
  const hidenElementIndex = makeRandom(1, progressionLength);
  const elements = new Array(10);

  for (let i = 0; i <= progressionLength; i += 1) {
    if (i === hidenElementIndex) {
      elements[i - 1] = '..';
    } else elements[i - 1] = String(firstElement + i * step);
  }

  const question = elements.join(' ');
  const answer = firstElement + hidenElementIndex * step;

  return [question, answer];
};

export default () => game(gameDescription, makeGameData);
