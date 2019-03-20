#!/usr/bin/env node
import game from '../games/game-engine';
import { gameRules, gameTaskGeneration, getGameAnswer } from '../games/even-game';

const gameResult = game(gameRules, gameTaskGeneration, getGameAnswer);
console.log(gameResult);
