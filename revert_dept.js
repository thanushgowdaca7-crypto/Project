const fs = require('fs');
let content = fs.readFileSync('js/data.js', 'utf8');

// Restore Physics
content = content.replace(/id:\s*'phy\d+',\s*name:[^}]+department:\s*'Basic Science'/g, match => match.replace("'Basic Science'", "'Physics'"));
// Restore Chemistry
content = content.replace(/id:\s*'che\d+',\s*name:[^}]+department:\s*'Basic Science'/g, match => match.replace("'Basic Science'", "'Chemistry'"));
// Restore Mathematics
content = content.replace(/id:\s*'mat\d+',\s*name:[^}]+department:\s*'Basic Science'/g, match => match.replace("'Basic Science'", "'Mathematics'"));

fs.writeFileSync('js/data.js', content, 'utf8');
console.log("Restored actual departments in data.js");
