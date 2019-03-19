#!/usr/bin/env node
import welcome from '..';
import readlineSync from 'readline-sync';

const greeting = '\nWelcome to the Brain Games!';
console.log(greeting);

const rulesAnounce = 'Answer "yes" if number even otherwise answer "no"\n';
console.log(rulesAnounce);

const question = 'May I have your name?';
const playerName = welcome(question);

const game = (counter) => {
  if (counter === 3) {
    console.log(`Congratulations, ${playerName}!`);
    return;
  }

  const num = Math.round(1000 * Math.random());
  const isEven = (num % 2 === 0) ? 'yes' : 'no';

  console.log(`Question: ${num}`);    
  const answer = readlineSync.question('Your answer: '); 

  if (answer === isEven) {
    console.log('Correct!');
    return game(counter + 1);
  }

  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'`);
    console.log(`Let's try again, ${playerName}!`);
    return;
  }
};

game(0);
