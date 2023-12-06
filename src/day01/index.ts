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
  const numberDict: { [key: string]: number } = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const input = parseInput(rawInput);

  const mappedInput = input.split("\n").map((input) => {
    const numList: Array<Number> = [];

    input.split("").forEach((letter, index) => {
      if (!isNaN(+letter)) {
        numList.push(+letter);
      } else {
        Object.entries(numberDict).forEach(([key, value]) => {
          if (input.substring(index, index + key.length) === key) {
            numList.push(value);
          }
        });
      }
    });

    return +`${numList[0]}${numList.at(-1)}`;
  });

  return mappedInput.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
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
