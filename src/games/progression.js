import { randomCalc } from '../utils';
import game from '..';

const gameDescription = 'What number is missing in the progression?\n';

const progressionLength = 10;
const maxFirstElement = 20;
const maxStep = 30;

const makeGameData = () => {
  const firstElement = randomCalc(1, maxFirstElement);
  const step = randomCalc(1, maxStep);
  const hidenElementIndex = randomCalc(1, progressionLength);
  let question = '';
  let answer;

  for (let i = 1; i <= progressionLength; i += 1) {
    const element = firstElement + (i - 1) * step;
    let printElement = String(element);

    if (i === hidenElementIndex) {
      printElement = '..';
      answer = element;
    }

    question = `${question} ${printElement}`;
  }
  return [question, answer];
};

export default () => game(gameDescription, makeGameData);
