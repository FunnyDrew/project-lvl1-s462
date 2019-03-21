import randomCalc from '../utils';
import game from './game-engine';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = number => ((number % 2) === 0);

const getTask = () => randomCalc(1, 1000);

const getCorrectAnswer = number => (isEven(Number(number)) ? 'yes' : 'no');

export default () => game(gameDescription, getTask, getCorrectAnswer);
