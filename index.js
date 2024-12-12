const fs = require("fs");
const YAML = require('yaml')
const upptimeConfig = YAML.parse(fs.readFileSync("./.upptimerc.yml").toString());
const tempFiles = fs.readdirSync("./temp").filter(file => file.endsWith('.json'));
console.log(upptimeConfig)
tempFiles.forEach(file => {
  const tempData = require(`./temp/${file}`);
  upptimeConfig.sites.push({
    name: tempData.name,
    url: tempData.url
  });
  fs.rmSync(`./temp/${file}`)
});

fs.writeFileSync("./.upptimerc.yml", YAML.stringify(upptimeConfig));
