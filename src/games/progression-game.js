import { randomCalc } from '../utils';
import game from '..';

const gameDescription = 'What number is missing in the progression?\n';

const progressionLength = 10;
const maxFirstElement = 20;
const maxProgressionStep = 30;

const makeGameData = () => {
  let progresstionElement = randomCalc(1, maxFirstElement);
  const progressionStep = randomCalc(1, maxProgressionStep);
  const hidenElementIndex = randomCalc(1, progressionLength);
  let question = '';
  let answer;

  for (let i = 1; i <= progressionLength; i += 1) {
    progresstionElement += progressionStep;
    let printElement = String(progresstionElement);

    if (i === hidenElementIndex) {
      printElement = '..';
      answer = progresstionElement;
    }

    question = `${question} ${printElement}`;
  }
  return [question, answer];
};

export default () => game(gameDescription, makeGameData);
