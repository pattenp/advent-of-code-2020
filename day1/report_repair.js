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
});

function solve(data) {
  for (let i = 0; i < data.length; i++) {
    for (let y = 0; y < data.length; y++) {
      // Do nothing if on same, I think.
      if (y !== i) {
        if (data[i] + data[y] === 2020) {
          return data[i] * data[y];
        }
      }
    }
  }
}
