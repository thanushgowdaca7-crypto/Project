const fs = require('fs');
let content = fs.readFileSync('js/data.js', 'utf8');
content = content.replace(/cabin:\s*'([A-Z]) Block, Room (.*?)'/g, "cabin: '$1-$2'");
fs.writeFileSync('js/data.js', content, 'utf8');
console.log("Fixed cabins in data.js");
