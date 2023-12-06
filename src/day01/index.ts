import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const appendedNumbers = input.split("\n").map((input) => {
    let numList: Array<Number> = [];

    for (const letter of input) {
      if (!isNaN(+letter)) {
        numList.push(+letter);
      }
    }
    return +`${numList[0]}${numList.at(-1)}`;
  });

  return appendedNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
