const fs =require("fs")
const parse=(file)=>{
    return JSON.parse("{"+fs.readFileSync(file).toString().split("{")[1].split("}")[0].split("\n").map((line)=>{
        return line.split("//")[0]
    })+"}")}
const follow=parse("./data/cnames_active.js")
console.log(follow)