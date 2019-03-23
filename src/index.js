import readlineSync from 'readline-sync';

const maxGameIteration = 3;

const game = (description, makeGameData) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  for (let counter = 0; counter <= maxGameIteration; counter += 1) {
    if (counter === maxGameIteration) {
      console.log(`Congratulations, ${playerName}!\n`);
      return;
    }

    const [question, correctAnswer] = makeGameData();

    console.log(`Question: ${question}`);
    const playerResponse = readlineSync.question('Your answer: ');

    if (playerResponse !== String(correctAnswer)) {
      console.log(`'${playerResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!\n`);
      return;
    }
    console.log('Correct!');
  }
};

export default game;
