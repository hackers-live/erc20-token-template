const fs = require("fs")
const contract = JSON.parse(fs.readFileSync("./build/contracts/MyCoin.json"))
const abi = contract["abi"]
console.log(JSON.stringify(abi))
