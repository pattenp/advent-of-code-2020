let input = [];

const lineReader = require("readline").createInterface({
  input: require("fs").createReadStream("report_repair_input.txt"),
  crlfDelay: Infinity,
});

lineReader.on("line", (line) => {
  input.push(Number(line));
});

lineReader.on("close", () => {
  console.log(solve(input));
  //console.log(solve([1721, 979, 366, 299, 675, 1456]));
});

function solve(data) {
  for (let x = 0; x < data.length - 2; x++) {
    for (let y = x + 1; y < data.length - 1; y++) {
      for (let z = y + 1; z < data.length; z++) {
        if (data[x] + data[y] + data[z] === 2020) {
          return data[x] * data[y] * data[z];
        }
      }
    }
  }
}
