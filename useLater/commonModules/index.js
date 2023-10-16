/*
* ~/project
* |- dogBark.js
* |- index.js
*/

//import library for use
const input = require('sync-input');

const dogBark = require('./dogBark.js');
const Owl = require('./owl.js');
console.log(dogBark());
console.log('information about owl: ', Owl);
console.log('what is mr owl:', Owl.whatIs());
console.log('who is mr. owl:', Owl.whoIs());
console.log('the owl says: ', Owl.greeting());


let name = input();
