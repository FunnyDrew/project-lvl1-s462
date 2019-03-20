import randomNumGeneration from '../utils';

const isEven = number => ((number % 2) === 0);

export const gameRules = () => 'Answer "yes" if number even otherwise answer "no".';

export const gameTaskGeneration = () => {
  const maxNumberInGame = 1000;
  return randomNumGeneration(maxNumberInGame);
};

export const getGameAnswer = number => (isEven(number) ? 'yes' : 'no');
