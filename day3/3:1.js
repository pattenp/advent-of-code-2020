let input = [];

const lineReader = require("readline").createInterface({
  input: require("fs").createReadStream("input.txt"),
  crlfDelay: Infinity,
});

lineReader.on("line", (line) => {
  input.push(line);
});

lineReader.on("close", () => {
  const results = [
    solve(input, 1, 1),
    solve(input, 3, 1),
    solve(input, 5, 1),
    solve(input, 7, 1),
    solve(input, 1, 2),
  ].reduce((prev, curr) => prev * curr);
  console.log(results);
});

function solve(map, right, down) {
  let numberOfTrees = 0;
  let x = -right;
  for (let y = 0; y < map.length; y += down) {
    x += right;
    let line = map[y];

    if (x >= line.length) {
      x -= line.length;
    }

    currentChar = line.charAt(x);

    if (currentChar === "#") {
      numberOfTrees++;
    }
  }
  return numberOfTrees;
}
