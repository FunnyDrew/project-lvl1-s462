import qureyToPlayer from '..';



export default (gameRules, taskFunction, getGameAnswer) => {
  const generalGreetings = '\nWelcome to the Brain Games!';
  console.log(generalGreetings);

  console.log(gameRules());

  const nameQuery = 'May I have your name?';
  const player = askQuestion(nameQuery);

  const presonalGreetings = `Hello, ${player}!\n`;
  console.log(presonalGreetings);

  const startIterationNumber = 0;
  const maxGameIteration = 3;

  const game = (numIteration) => {
    if (numIteration === maxGameIteration) {
      return (`Congratulations, ${player}!`);
    }

    const gameTest = taskFunction();

    console.log(`Question: ${gameTest}`);

    const playerAnswer = askQuestion('Your answer: ');

    const correctAnswer = getGameAnswer(gameTest);

    if (playerAnswer !== correctAnswer) {
      const wrongEnd = `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
      return `${wrongEnd}\nLet's try again, ${player}!`;
    }

    console.log('Correct!');
    return game(numIteration + 1);
  };

  return game(startIterationNumber);
};
