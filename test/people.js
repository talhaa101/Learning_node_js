people = ["Alice", "Bob", "Charlie"];

function test() {
  console.log("This is a test function.");
}

const a = 10;

// module.exports = people;

// node module system allows exporting multiple items as an object
module.exports = {
  people: people,
  test: test,
  a: a,
};
