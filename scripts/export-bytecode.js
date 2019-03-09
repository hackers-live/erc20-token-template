const fs = require("fs")
const contract = JSON.parse(fs.readFileSync("./build/contracts/MyCoin.json"))
const bytecode = contract["bytecode"]
console.log(JSON.stringify(bytecode))
