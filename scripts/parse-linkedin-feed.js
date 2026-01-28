const fs = require('fs');
const path = require('path');

function parseLinkedInFeed(htmlPath, outputPath) {
  console.log('Reading LinkedIn feed HTML...');
  const html = fs.readFileSync(htmlPath, 'utf-8');
  
  const posts = [];
  
  // Find all posts by looking for data-urn attributes
  const postRegex = /data-urn="urn:li:activity:(\d+)"/g;
  let match;
  const activityIds = [];
  
  while ((match = postRegex.exec(html)) !== null) {
    activityIds.push({
      id: match[1],
      index: match.index
    });
  }
  
  console.log(`Found ${activityIds.length} posts`);
  
  // Parse each post
  activityIds.forEach((activity, idx) => {
    const startIdx = activity.index;
    const endIdx = idx < activityIds.length - 1 ? activityIds[idx + 1].index : html.length;
    const postHtml = html.substring(startIdx, endIdx);
    
    const post = {
      id: activity.id,
      timestamp: null,
      text: '',
      images: [],
      link: `https://www.linkedin.com/feed/update/urn:li:activity:${activity.id}/`
    };
    
    // Extract timestamp (look for patterns like "35m •", "2h •", "1d •")
    const timeMatch = postHtml.match(/<span[^>]*>([^<]*?)(?:m|h|d|w)\s*•/);
    if (timeMatch) {
      post.timestamp = timeMatch[1].trim() + timeMatch[0].match(/(m|h|d|w)/)[0];
    }
    
    // Extract post text from update-components-text
    const textMatch = postHtml.match(/<div class="update-components-text[^"]*"[^>]*>([\s\S]*?)<\/div>/);
    if (textMatch) {
      let textContent = textMatch[1];
      
      // Remove HTML tags but keep line breaks
      textContent = textContent
        .replace(/<br\s*\/?>/gi, '\n')
        // Extract hashtags with # symbol
        .replace(/<a[^>]*HASH_TAG_FROM_FEED[^>]*>.*?<span class="visually-hidden">hashtag<\/span><span><span[^>]*>#<\/span>([^<]+)<\/span><\/a>/gi, '#$1')
        // Extract mentions/links with URL (for @mentions) - match any content between opening and closing a tag
        .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (match, url, innerHtml) => {
          // Extract text from nested spans
          const textMatch = innerHtml.match(/<!---->([^<]+)<!---->/);
          const text = textMatch ? textMatch[1] : innerHtml.replace(/<[^>]*>/g, '').trim();
          
          // Decode HTML entities in URL
          url = url.replace(/&amp;/g, '&');
          
          // Check if it's a LinkedIn profile or company link
          if (url.includes('linkedin.com/company/') || url.includes('linkedin.com/in/')) {
            return `@[${text}](${url})`;
          }
          // For other links, just keep the text
          return text;
        })
        .replace(/<span class="white-space-pre">\s*<\/span>/g, ' ')
        .replace(/<span[^>]*>/g, '')
        .replace(/<\/span>/g, '')
        .replace(/<!--.*?-->/g, '')
        .replace(/[ \t]+/g, ' ') // Only collapse spaces and tabs, not newlines
        .replace(/\n\s+/g, '\n') // Remove leading spaces from lines
        .replace(/\s+\n/g, '\n') // Remove trailing spaces from lines
        .replace(/\n{3,}/g, '\n\n') // Max 2 consecutive newlines
        .trim();
      
      post.text = textContent;
    }
    
    // Extract images (look for img tags with specific patterns)
    const imageRegex = /<img[^>]*src="([^"]*)"[^>]*>/g;
    let imgMatch;
    while ((imgMatch = imageRegex.exec(postHtml)) !== null) {
      let imgSrc = imgMatch[1];
      // Decode HTML entities
      imgSrc = imgSrc.replace(/&amp;/g, '&');
      // Filter out profile pictures and icons
      if (imgSrc.includes('media.licdn.com/dms/image') && 
          !imgSrc.includes('profile-displayphoto') &&
          !imgSrc.includes('company-logo')) {
        post.images.push(imgSrc);
      }
    }
    
    posts.push(post);
  });
  
  // Load existing posts if file exists
  let existingPosts = {};
  if (fs.existsSync(outputPath)) {
    try {
      existingPosts = JSON.parse(fs.readFileSync(outputPath, 'utf-8'));
      console.log(`Loaded ${Object.keys(existingPosts).length} existing posts`);
    } catch (e) {
      console.log('Could not parse existing posts file, starting fresh');
    }
  }
  
  // Merge posts (keep existing, add new)
  const allPosts = { ...existingPosts };
  let newCount = 0;
  
  posts.forEach(post => {
    if (!allPosts[post.id]) {
      allPosts[post.id] = post;
      newCount++;
      console.log(`New post: ${post.id} - ${post.text.substring(0, 50)}...`);
    }
  });
  
  console.log(`\n${newCount} new posts added`);
  console.log(`Total posts: ${Object.keys(allPosts).length}`);
  
  // Save to file
  fs.writeFileSync(outputPath, JSON.stringify(allPosts, null, 2));
  console.log(`Saved to ${outputPath}`);
}

// Run the parser
const htmlPath = path.join(__dirname, '../linkedin-feed-div.html');
const outputPath = path.join(__dirname, '../public/linkedin-posts.json');

parseLinkedInFeed(htmlPath, outputPath);
