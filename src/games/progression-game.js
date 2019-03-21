import randomCalc from '../utils';
import game from './game-engine';

const gameDescription = 'What number is missing in the progression?\n';

const progressionLength = 10;


const getTask = () => {
  let progression = '';
  const progressionStart = randomCalc(1, 9);
  const progressionStep = randomCalc(1, 9);
  const blindSpaceIndex = randomCalc(1, 10);
  let element;
  for (let i = 1; i <= progressionLength; i += 1) {
    element = progressionStart + (i - 1) * progressionStep;
    if (i === blindSpaceIndex) {
      progression = `${progression}.. `;
    } else progression = `${progression}${element} `;
  }
  return progression;
};


const getCorrectAnswer = (str) => {
  const splitStr = str.split(' ');
  let blindSpaceIndex;
  for (let i = 0; i < splitStr.length; i += 1) {
    if (splitStr[i] === '..') {
      blindSpaceIndex = i;
      break;
    }
  }
  if (blindSpaceIndex === 0 || blindSpaceIndex === 1) {
    const step = Number(splitStr[4]) - Number(splitStr[3]);
    return (blindSpaceIndex === 0 ? Number(splitStr[1]) - step : Number(splitStr[0]) + step);
  }
  return Number(splitStr[1]) - Number(splitStr[0]) + Number(splitStr[blindSpaceIndex - 1]);
};

export default () => game(gameDescription, getTask, getCorrectAnswer);
