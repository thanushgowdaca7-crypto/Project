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
copySync(path.join(__dirname, 'LOGOS'), path.join(distDir, 'LOGOS'));
copySync(path.join(__dirname, 'images'), path.join(distDir, 'images'));

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

// Copy root images to dist
fs.readdirSync(__dirname).forEach(file => {
  if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.svg') || file.endsWith('.jpeg') || file.endsWith('.webp') || file.endsWith('.gif')) {
    const srcPath = path.join(__dirname, file);
    if (fs.statSync(srcPath).isFile()) {
      fs.copyFileSync(srcPath, path.join(distDir, file));
    }
  }
});

console.log('Build completed: Copied files to dist directory.');
