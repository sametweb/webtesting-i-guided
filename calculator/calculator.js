module.exports = {
  add,
  multiply,
};

function add(...args) {
  if (!args.length) return 0;
  return args.reduce((total, number) => total + number);
}

function multiply(...args) {
  return args.reduce((total, number) => total * number);
}
