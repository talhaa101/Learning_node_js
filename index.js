// const _ = require("lodash");

// console.log(_.last([1, 2, 3, 4]));
// console.log("Hello, World!");
// console.log("This is a sample index.js file.");

// const a = 10;
// console.log(global.a);

// console.log(__dirname);
// console.log(__filename);

// console.log(people.people);
// people.test();
// console.log(people.a);

const people = require("./test/people");
const _ = require("lodash");
const _ = require("http"); // built-in module networking
console.log(_.last(people.people));
