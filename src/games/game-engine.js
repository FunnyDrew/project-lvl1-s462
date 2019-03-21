import queryToPlayer from '..';

const maxGameIteration = 3;

const game = (description, makeQuestion, getCorrectAnswer) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);

  const playerName = queryToPlayer('May I have your name?');
  console.log(`Hello, ${playerName}!\n`);

  const iter = (counter) => {
    if (counter === maxGameIteration) {
      return (`Congratulations, ${playerName}!\n`);
    }

    const question = makeQuestion();
    console.log(`Question: ${question}`);

    const playerResponse = queryToPlayer('Your answer: ');

    const correctAnswer = getCorrectAnswer(question);

    if (playerResponse !== String(correctAnswer)) {
      const wrongEnd = `'${playerResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
      return `${wrongEnd}\nLet's try again, ${playerName}!\n`;
    }
    console.log('Correct!');
    return iter(counter + 1);
  };
  console.log(iter(0));
};

export default game;
