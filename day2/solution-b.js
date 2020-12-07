const { match } = require("assert");
const { group } = require("console");

let input = [];

const lineReader = require("readline").createInterface({
  input: require("fs").createReadStream("input.txt"),
  crlfDelay: Infinity,
});

lineReader.on("line", (line) => {
  input.push(line);
});

lineReader.on("close", () => {
  console.log(solve(input));
});

function solve(data) {
  // 5-8 k: kjgmkkfwxkwqkkgfnv
  let regex = /(?<firstPosition>\d+)-(?<secondPosition>\d+)\s(?<char>.).\s(?<password>.*)/;
  let legitPasswords = 0;

  for (let password of data) {
    let groups = password.match(regex).groups;

    let firstPosition = groups.firstPosition - 1;
    let secondPosition = groups.secondPosition - 1;

    const charAtFirstPos = groups.password.charAt(firstPosition);
    const charAtSecondPos = groups.password.charAt(secondPosition);

    if (charAtFirstPos === groups.char || charAtSecondPos === groups.char) {
      if (charAtFirstPos !== charAtSecondPos) {
        legitPasswords++;
      }
    }
  }

  return legitPasswords;
}
