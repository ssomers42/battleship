import { Gameboard } from './factories/Gameboard.js';

let playerOneGameboard = Gameboard('1');
playerOneGameboard.receiveAttack();

let playerTwoGameboard = Gameboard('2');
playerTwoGameboard.receiveAttack();

console.log('hello');
