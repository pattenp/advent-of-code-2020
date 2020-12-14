let fs = require("fs");
let data = fs.readFileSync("input.txt", "utf-8");
solve(data);

function solve(data) {
  const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  let passports = data.split("\n\n").map((row) => {
    let passport = new Map();
    row
      .replace(/\s/g, ",")
      .split(",")
      .forEach((keyValueString) => {
        let keyAndValue = keyValueString.split(":");
        passport.set(keyAndValue[0], keyAndValue[1]);
      });
    return passport;
  });

  legitPassports = passports.filter((passport) => {
    for (let i = 0; i < required.length; i++) {
      if (!passport.has(required[i])) {
        return false;
      }
    }
    return true;
  });

  console.log(legitPassports.length);
}
