import queryToPlayer from '..';
import randomCalc from '../utils';

const isEven = number => ((number % 2) === 0);

const getCorrectAnswer = number => (isEven(number) ? 'yes' : 'no');

const maxGameIteration = 3;


const game = () => {
  console.log('\nWelcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const playerName = queryToPlayer('May I have your name?');
  console.log(`Hello, ${playerName}!\n`);

  const iter = (counter) => {
    if (counter === maxGameIteration) {
      return (`Congratulations, ${playerName}!\n`);
    }

    const question = randomCalc(1, 1000);
    console.log(`Question: ${question}`);

    const playerResponse = queryToPlayer('Your answer: ');

    const correctAnswer = getCorrectAnswer(question);

    if (playerResponse !== correctAnswer) {
      const wrongEnd = `'${playerResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
      return `${wrongEnd}\nLet's try again, ${playerName}!\n`;
    }
    console.log('Correct!');
    return iter(counter + 1);
  };
  console.log(iter(0));
};

export default game;
