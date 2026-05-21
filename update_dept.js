const fs = require('fs');
let content = fs.readFileSync('js/data.js', 'utf8');
content = content.replace(/department:\s*'(Physics|Chemistry|Mathematics)'/g, "department: 'Basic Science'");
fs.writeFileSync('js/data.js', content, 'utf8');
console.log("Updated department to Basic Science in data.js");
