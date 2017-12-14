import { User } from './user.js';

let userOne = new User('personName',21);
let spreadOperatorCheck = { ...userOne, ...{ poi: 'experimenting'} };

console.log(`before spread, `, userOne);
console.log(`after spread, `, spreadOperatorCheck);
