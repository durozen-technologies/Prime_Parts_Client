const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'images');
const pubImgDir = path.join(__dirname, 'public', 'images');
const pubVidDir = path.join(__dirname, 'public', 'videos');
const srcAppDir = path.join(__dirname, 'src', 'app');
const srcCompDir = path.join(__dirname, 'src', 'components');
const srcDataDir = path.join(__dirname, 'src', 'data');

[pubImgDir, pubVidDir, srcAppDir, srcCompDir, srcDataDir].forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
});

const files = fs.readdirSync(srcDir);

// Copy video
const videoFile = files.find(f => f.toLowerCase().endsWith('.mp4'));
if (videoFile) {
  fs.copyFileSync(path.join(srcDir, videoFile), path.join(pubVidDir, 'prime-parts-hero.mp4'));
  console.log('Copied video:', videoFile, '-> public/videos/prime-parts-hero.mp4');
}

// Copy images
const imageFiles = files.filter(f => f.match(/\.(jpe?g|png|webp)$/i)).sort();
imageFiles.forEach((file, idx) => {
  const num = String(idx + 1).padStart(2, '0');
  const destName = `part-${num}.jpg`;
  fs.copyFileSync(path.join(srcDir, file), path.join(pubImgDir, destName));
});

console.log(`Copied ${imageFiles.length} images to public/images/ as part-01.jpg ... part-${String(imageFiles.length).padStart(2, '0')}.jpg`);
