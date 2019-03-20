#!/usr/bin/env node
import welcome from '..';
import game from './games/calc-game';

const generalGreetings = '\nWelcome to the Brain Games!';
console.log(generalGreetings);

const rulesAnounce = 'What is the result of the expression?\n';
console.log(rulesAnounce);

const nameAsking = 'May I have your name?';
const playerName = welcome(nameAsking);
const personalGreetings = `Hello, ${playerName}!\n`;
console.log(personalGreetings);

const startIterationNumber = 0;
const gameResult = game(startIterationNumber, playerName);
console.log(gameResult);
