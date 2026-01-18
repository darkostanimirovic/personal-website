const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const postsPath = path.join(__dirname, '../public/linkedin-posts.json');
const imagesDir = path.join(__dirname, '../public/post-images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
        fileStream.on('error', (err) => {
          fs.unlink(filepath, () => {});
          reject(err);
        });
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function downloadAllImages() {
  const posts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;
  
  for (const [postId, post] of Object.entries(posts)) {
    if (post.images && post.images.length > 0) {
      const updatedImages = [];
      
      for (let i = 0; i < post.images.length; i++) {
        const imageUrl = post.images[i];
        const ext = 'jpg'; // LinkedIn mostly serves JPEGs
        const filename = `${postId}_${i}.${ext}`;
        const filepath = path.join(imagesDir, filename);
        const localUrl = `/post-images/${filename}`;
        
        // Check if already downloaded
        if (fs.existsSync(filepath)) {
          console.log(`✓ Skipped (exists): ${filename}`);
          updatedImages.push(localUrl);
          skipped++;
          continue;
        }
        
        try {
          console.log(`Downloading: ${filename}...`);
          await downloadImage(imageUrl, filepath);
          console.log(`✓ Downloaded: ${filename}`);
          updatedImages.push(localUrl);
          downloaded++;
          
          // Rate limit to be nice to LinkedIn
          await new Promise(resolve => setTimeout(resolve, 500));
        } catch (err) {
          console.error(`✗ Failed: ${filename} - ${err.message}`);
          // Keep original URL if download fails
          updatedImages.push(imageUrl);
          failed++;
        }
      }
      
      post.images = updatedImages;
    }
  }
  
  // Save updated posts with local image paths
  fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2));
  
  console.log(`\n=== Summary ===`);
  console.log(`Downloaded: ${downloaded}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total: ${downloaded + skipped + failed}`);
}

downloadAllImages().catch(console.error);
