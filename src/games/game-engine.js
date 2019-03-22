import queryToPlayer from '..';


const maxGameIteration = 3;

const game = (description, makeGameData) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);

  const playerName = queryToPlayer('May I have your name?');
  console.log(`Hello, ${playerName}!\n`);

  const iter = (counter) => {
    if (counter === maxGameIteration) {
      return (`Congratulations, ${playerName}!\n`);
    }

    const getGameData = makeGameData();
    const question = getGameData[0];
    console.log(`Question: ${question}`);

    const playerResponse = queryToPlayer('Your answer: ');

    const correctAnswer = getGameData[1];

    if (playerResponse !== String(correctAnswer)) {
      console.log(`'${playerResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return `Let's try again, ${playerName}!\n`;
    }
    console.log('Correct!');
    return iter(counter + 1);
  };
  console.log(iter(0));
};

export default game;
