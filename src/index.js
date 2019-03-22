import readlineSync from 'readline-sync';

const queryToPlayer = (question) => {
  const answer = readlineSync.question(`${question} `);
  return answer;
};

const maxGameIteration = 3;

const game = (description, makeGameData) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);

  const playerName = queryToPlayer('May I have your name?');
  console.log(`Hello, ${playerName}!\n`);

  let counter = 0;

  while (counter <= maxGameIteration) {
    if (counter === maxGameIteration) {
      console.log(`Congratulations, ${playerName}!\n`);
      return;
    }

    const getGameData = makeGameData();
    const question = getGameData[0];
    console.log(`Question: ${question}`);

    const playerResponse = queryToPlayer('Your answer: ');

    const correctAnswer = getGameData[1];

    /* Так попробовал - не работает
    [question, correctAnswer] = makeGameData();

    console.log(`Question: ${question}`);
    const playerResponse = queryToPlayer('Your answer: ');
    */

    /* Работает так, но чем это лучше?
    let question = '';
    let correctAnswer = '';
    [question, correctAnswer] = makeGameData();

    console.log(`Question: ${question}`);
    const playerResponse = queryToPlayer('Your answer: '); */

    if (playerResponse !== String(correctAnswer)) {
      console.log(`'${playerResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!\n`);
      return;
    }
    console.log('Correct!');
    counter += 1;
  }
};

export default game;
