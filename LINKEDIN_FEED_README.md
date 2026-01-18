# LinkedIn Feed Parser - "What I Write" Feature

This feature creates a retro early-2000s styled page that displays your LinkedIn posts with a LinkedIn-like layout.

## Setup

1. **Configure your profile:**
   
   Edit `src/config/profile.ts` to customize your profile info:
   ```typescript
   export const profile = {
     name: "Darko Stanimirović",
     tagline: "Senior Product Manager ⌁ Building with AI",
     profilePhoto: "https://media.licdn.com/...", // Or use "/profile.png" for local
     linkedInUrl: "https://www.linkedin.com/in/darko-stanimirovic/"
   };
   ```
   
   **Option A:** Use LinkedIn photo URL (already configured - extracted from feed)
   **Option B:** Place your photo as `public/profile.png` and use `profilePhoto: "/profile.png"`

2. **Export your LinkedIn feed:**
   - Go to your LinkedIn profile
   - Open the browser's developer console (F12)
   - Find the main feed div element
   - Copy the outer HTML
   - Save it to `linkedin-feed-div.html` in the project root

3. **Parse the LinkedIn feed:**
   ```bash
   npm run parse-linkedin
   ```
   This will:
   - Read `linkedin-feed-div.html`
   - Extract all posts (URN, text, images, timestamp, link)
   - Save to `public/linkedin-posts.json`
   - Detect new posts vs. existing ones

4. **View the page:**
   ```bash
   npm run dev
   ```
   Then visit: http://localhost:3000/what-i-write

## Features

- **Retro Design:** Early 2000s corporate website aesthetic matching the rest of the site
- **LinkedIn-Style Layout:** Profile photo, name, tagline, and timestamp mimic LinkedIn's post structure
- **Profile Config:** Centralized profile configuration in `src/config/profile.ts`
- **Pagination:** 10 posts per page with Previous/Next and numbered page buttons
- **Text Expansion:** Posts longer than 300 characters show "...more" button
- **Images:** Displays post images full-width (filters out profile pictures)
- **LinkedIn Links:** All action buttons (Like, Comment, Repost, Share) link to LinkedIn
- **Incremental Updates:** Re-running the parser only adds new posts

## How It Works

1. **Parser Script** (`scripts/parse-linkedin-feed.js`)
   - Finds posts by `data-urn="urn:li:activity:..."` attributes
   - Extracts text from `update-components-text` divs
   - Filters images (keeps content images, excludes profiles/logos)
   - Generates LinkedIn post URLs
   - Merges with existing JSON to preserve history

2. **Profile Config** (`src/config/profile.ts`)
   - Centralized profile information
   - Easy to update name, tagline, photo, and LinkedIn URL
   - Supports both remote URLs and local images

3. **What I Write Page** (`src/app/what-i-write/page.tsx`)
   - Client-side React component
   - Loads posts from JSON and profile from config
   - Sorts by ID (newest first)
   - LinkedIn-style post layout with circular profile photo
   - Implements pagination and text expansion
   - Styled to match the early-2000s theme

## Updating Posts

To add new posts from LinkedIn:

1. Export the new LinkedIn feed HTML
2. Replace `linkedin-feed-div.html`
3. Run: `npm run parse-linkedin` (parses posts and extracts image URLs)
4. Run: `npm run download-images` (downloads all LinkedIn images locally)
5. Rebuild: `npm run build`

**Why download images locally?**
- LinkedIn's CDN has CORS restrictions and query string requirements
- Local images are faster and more reliable
- Images persist even if LinkedIn URLs expire
- 71 images (~9.7MB) downloaded from your feed

**Note:** The parser now properly:
- Preserves line breaks in posts
- Decodes HTML entities in image URLs (`&amp;` → `&`)
- Downloads images to `public/post-images/`
- Updates JSON with local paths (`/post-images/postid_0.jpg`)

The parser will only add NEW posts - existing posts are preserved.

## Data Structure

```json
{
  "7418701532512124928": {
    "id": "7418701532512124928",
    "timestamp": "35m",
    "text": "Quick review of [OpenCode]...",
    "images": ["https://media.licdn.com/..."],
    "link": "https://www.linkedin.com/feed/update/urn:li:activity:7418701532512124928/"
  }
}
```
