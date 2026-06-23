const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('./index.html', 'utf8');
const stateJs = fs.readFileSync('./js/state.js', 'utf8');
const dataJs = fs.readFileSync('./js/data.js', 'utf8');
const pagesJs = fs.readFileSync('./js/pages.js', 'utf8');
const appJs = fs.readFileSync('./js/app.js', 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously" });
const window = dom.window;
const document = window.document;

// Mock localStorage
let storage = {};
window.localStorage = {
  getItem: (k) => storage[k] || null,
  setItem: (k, v) => storage[k] = v,
  removeItem: (k) => delete storage[k]
};
window.sessionStorage = {
  getItem: (k) => storage[k] || null,
  setItem: (k, v) => storage[k] = v,
  removeItem: (k) => delete storage[k]
};

// Evaluate scripts
window.eval(dataJs);
window.eval(stateJs);
window.eval(pagesJs);

// Simulate login as ece1
window.State.init();
window.State.login('ece1');

console.log("Logged in user:", window.State.user);

// Render faculty profile for ece1
const profileHtml = window.Pages.facultyProfile('ece1');
console.log("Profile HTML contains btn-add-announcement:", profileHtml.includes('btn-add-announcement'));

// Log out, log in as ece2
window.State.logout();
window.State.login('ece2');
const profileHtml2 = window.Pages.facultyProfile('ece1');
console.log("Logged in as ece2, Profile ece1 HTML contains btn-add-announcement:", profileHtml2.includes('btn-add-announcement'));
