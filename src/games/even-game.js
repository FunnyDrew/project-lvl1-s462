import queryToPlayer from '..';


const randomCalc = maxValue => (maxValue * Math.random());

const gameTaskGeneration = () => {
  const maxNumberInGame = 1000;
  return Math.round(randomCalc(maxNumberInGame));
};

const isEven = number => ((number % 2) === 0);

const getGameAnswer = number => (isEven(number) ? 'yes' : 'no');


console.log('\nWelcome to the Brain Games!');
const gameRules = 'Answer "yes" if number even otherwise answer "no".';
console.log(gameRules);

const nameQuery = 'May I have your name?';
const playerName = queryToPlayer(nameQuery);

const presonalGreetings = `Hello, ${playerName}!\n`;
console.log(presonalGreetings);

const maxGameIteration = 3;

const game = () => {
  const iter = (counter) => {
    if (counter === maxGameIteration) {
      return (`Congratulations, ${playerName}!`);
    }
    const question = gameTaskGeneration();

    console.log(`Question: ${question}`);

    const playerResponse = queryToPlayer('Your answer: ');

    const correctAnswer = getGameAnswer(question);

    if (playerResponse !== correctAnswer) {
      const wrongEnd = `'${playerResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
      return `${wrongEnd}\nLet's try again, ${playerName}!`;
    }
    console.log('Correct!');
    return iter(counter + 1);
  };
  console.log(iter(0));
};

export default game;
