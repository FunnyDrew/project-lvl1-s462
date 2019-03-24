import readlineSync from 'readline-sync';

const maxGameIteration = 3;

const game = (description, makeGameData) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(`${description}\n`);

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  for (let i = 0; i <= maxGameIteration; i += 1) {
    if (i === maxGameIteration) {
      console.log(`Congratulations, ${playerName}!\n`);
      return;
    }

    const [question, correctAnswer] = makeGameData();

    console.log(`Question: ${question}`);
    const playerResponse = readlineSync.question('Your answer: ');

    if (playerResponse !== correctAnswer) {
      console.log(`'${playerResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!\n`);
      return;
    }
    console.log('Correct!');
  }
};

export default game;
