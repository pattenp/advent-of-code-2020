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
  let regex = /(?<lowerBound>\d+)-(?<upperBound>\d+)\s(?<char>.).\s(?<password>.*)/;
  let legitPasswords = 0;

  for (let password of data) {
    let groups = password.match(regex).groups;
    let regex_count = new RegExp(groups.char, "g");
    let count = (groups.password.match(regex_count) || []).length;

    if (count >= groups.lowerBound && count <= groups.upperBound) {
      legitPasswords++;
    }
  }

  return legitPasswords;
}
