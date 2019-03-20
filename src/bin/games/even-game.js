import askingQuestion from '../..';

const maxGameIteration = 3;
const maxRandomNumber = 1000;

const isEven = number => (number % 2 === 0);
const randomNumberGeneration = () => Math.round(maxRandomNumber * Math.random());

const game = (numIteration, player) => {
  if (numIteration === maxGameIteration) {
    return `Congratulations, ${player}!`;
  }

  const randomNumber = randomNumberGeneration();

  console.log(`Question: ${randomNumber}`);
  const playerAnswer = askingQuestion('Your answer: ');

  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  if (playerAnswer !== correctAnswer) {
    return `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${player}!`;
  }

  console.log('Correct!');
  return game(numIteration + 1, player);
};

export default game;
