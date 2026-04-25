const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

// Clear existing dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir);

// Helper function to copy files and directories recursively
function copySync(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(file => {
      copySync(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy necessary files to dist
copySync(path.join(__dirname, 'css'), path.join(distDir, 'css'));
copySync(path.join(__dirname, 'js'), path.join(distDir, 'js'));

// Copy public directory contents to dist root
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  fs.readdirSync(publicDir).forEach(file => {
    copySync(path.join(publicDir, file), path.join(distDir, file));
  });
}

if (fs.existsSync(path.join(__dirname, 'index.html'))) {
  fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(distDir, 'index.html'));
}
if (fs.existsSync(path.join(__dirname, 'vercel.json'))) {
  fs.copyFileSync(path.join(__dirname, 'vercel.json'), path.join(distDir, 'vercel.json'));
}

console.log('Build completed: Copied files to dist directory.');
