import makeRandom from '../utils';
import game from '..';

const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;
const maxFirstElement = 20;
const maxStep = 20;

const makeGameData = () => {
  const firstElement = makeRandom(1, maxFirstElement);
  const step = makeRandom(1, maxStep);
  const hidenElementIndex = makeRandom(0, progressionLength - 1);
  const progression = new Array(progressionLength);

  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = String(firstElement + i * step);
  }
  progression[hidenElementIndex] = '..';

  const question = progression.join(' ');
  const answer = firstElement + hidenElementIndex * step;

  return [question, String(answer)];
};

export default () => game(gameDescription, makeGameData);
