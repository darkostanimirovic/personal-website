'use client';

import { useState } from 'react';
import postsData from '../../../public/linkedin-posts.json';
import { profile } from '../../config/profile';

interface Post {
  id: string;
  timestamp: string | null;
  text: string;
  images: string[];
  link: string;
}

// Function to parse text with @mentions and #hashtags into React elements
function parsePostText(text: string) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  
  // Match both @[Name](URL) and #hashtag patterns
  const combinedRegex = /(@\[([^\]]+)\]\(([^)]+)\))|(#[A-Za-z0-9_]+)/g;
  let match;
  
  while ((match = combinedRegex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    if (match[1]) {
      // It's an @mention
      const name = match[2];
      const url = match[3];
      parts.push(
        <a
          key={match.index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#cc0000] hover:underline font-medium"
        >
          @{name}
        </a>
      );
    } else if (match[4]) {
      // It's a hashtag
      const hashtag = match[4];
      parts.push(
        <span key={match.index} className="text-[#cc0000] font-medium">
          {hashtag}
        </span>
      );
    }
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts;
}

export default function WhatIWrite() {
  const posts = Object.entries(postsData)
    .map(([id, post]) => ({ ...post, id } as Post))
    .sort((a, b) => b.id.localeCompare(a.id));

  const [currentPage, setCurrentPage] = useState(1);
  const [expandedPosts, setExpandedPosts] = useState<Set<string>>(new Set());
  const postsPerPage = 10;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIdx = (currentPage - 1) * postsPerPage;
  const endIdx = startIdx + postsPerPage;
  const currentPosts = posts.slice(startIdx, endIdx);

  const toggleExpand = (postId: string) => {
    const newExpanded = new Set(expandedPosts);
    if (newExpanded.has(postId)) {
      newExpanded.delete(postId);
    } else {
      newExpanded.add(postId);
    }
    setExpandedPosts(newExpanded);
  };

  const shouldTruncate = (text: string) => text.length > 300;

  const getTruncatedText = (text: string) => {
    if (text.length <= 300) return text;
    return text.substring(0, 300) + '...';
  };

  return (
    <div className="min-h-screen bg-[#f1f1f1] font-sans overflow-x-auto">
      <div className="w-[760px] mx-auto bg-white min-h-screen border-x border-[#b0b0b0]">
        {/* Header */}
        <div className="p-4 flex justify-between items-end bg-gradient-to-b from-white to-[#f8f8f8]">
          <div className="flex items-center gap-2">
            <a href="/" className="relative">
              <div className="flex items-center">
                <div className="bg-[#003366] w-8 h-8 transform -skew-x-12 mr-1"></div>
                <span className="font-bold text-4xl tracking-tighter text-[#333] hover:text-[#cc0000] transition-colors">
                  DARKO
                </span>
              </div>
            </a>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-[#003366] text-[11px] font-bold mb-1 space-x-2">
              <a href="/" className="hover:underline">
                Home
              </a>
              <span className="text-gray-300">|</span>
              <a href="/meanwhile" className="hover:underline">
                Meanwhile
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="mailto:darko.stanimirovic@gmail.com"
                className="hover:underline"
              >
                Contact
              </a>
            </div>
            <button className="bg-gradient-to-b from-[#555] to-[#333] text-white text-[11px] font-bold px-3 py-[2px] rounded-[3px] border border-black flex items-center gap-1">
              Sign In <span className="text-[8px]">▼</span>
            </button>
          </div>
        </div>

        {/* Gray Bar */}
        <div className="bg-[#e4e4e4] border-y border-[#ccc] px-3 py-[6px] flex justify-between items-center h-[30px]">
          <span className="font-bold text-lg text-[#333] tracking-tight">
            What I Write
          </span>
          <span className="text-sm text-[#333]">
            My LinkedIn Feed · {posts.length} Posts
          </span>
        </div>

        {/* Posts Area */}
        <div className="bg-[#f9f9f9] p-[10px] min-h-[600px]">
          <div className="space-y-[10px]">
            {currentPosts.map((post) => {
              const isExpanded = expandedPosts.has(post.id);
              const needsTruncation = shouldTruncate(post.text);
              const displayText = isExpanded || !needsTruncation 
                ? post.text 
                : getTruncatedText(post.text);

              return (
                <div
                  key={post.id}
                  className="bg-white border border-[#ccc] p-4"
                >
                  {/* Post Header - LinkedIn Style */}
                  <div className="flex items-start gap-3 mb-3">
                    <img
                      src={profile.profilePhoto}
                      alt={profile.name}
                      className="w-12 h-12 border border-[#ccc]"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center gap-2">
                        <a
                          href={profile.linkedInUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#333] text-[14px] hover:underline"
                        >
                          {profile.name}
                        </a>
                        <span className="text-[#666] text-[11px]">·</span>
                        <span className="text-[#666] text-[11px]">
                          {post.timestamp || 'Recently'}
                        </span>
                      </div>
                      <div className="text-[12px] text-[#666] mt-[2px]">
                        {profile.tagline}
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="text-[14px] text-[#333] mb-3 whitespace-pre-wrap leading-relaxed">
                    {parsePostText(displayText)}
                    {needsTruncation && (
                      <button
                        onClick={() => toggleExpand(post.id)}
                        className="ml-1 text-[#003366] font-bold hover:underline"
                      >
                        {isExpanded ? '...less' : '...more'}
                      </button>
                    )}
                  </div>

                  {/* Images */}
                  {post.images.length > 0 && (
                    <div className="mb-3 -mx-4">
                      {post.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt="Post content"
                          className="w-full border-y border-[#e4e4e4]"
                        />
                      ))}
                    </div>
                  )}

                  {/* Action Buttons - LinkedIn Style */}
                  <div className="border-t border-[#e4e4e4] pt-2 flex gap-1">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-b from-[#f8f8f8] to-[#e8e8e8] border border-[#ccc] px-2 py-2 text-[12px] font-bold text-center hover:from-[#e8e8e8] hover:to-[#d8d8d8] rounded-[3px] flex items-center justify-center gap-2"
                    >
                      <span className="text-[14px]">👍</span>
                      <span>Like</span>
                    </a>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-b from-[#f8f8f8] to-[#e8e8e8] border border-[#ccc] px-2 py-2 text-[12px] font-bold text-center hover:from-[#e8e8e8] hover:to-[#d8d8d8] rounded-[3px] flex items-center justify-center gap-2"
                    >
                      <span className="text-[14px]">💬</span>
                      <span>Comment</span>
                    </a>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-b from-[#f8f8f8] to-[#e8e8e8] border border-[#ccc] px-2 py-2 text-[12px] font-bold text-center hover:from-[#e8e8e8] hover:to-[#d8d8d8] rounded-[3px] flex items-center justify-center gap-2"
                    >
                      <span className="text-[14px]">🔄</span>
                      <span>Repost</span>
                    </a>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-b from-[#f8f8f8] to-[#e8e8e8] border border-[#ccc] px-2 py-2 text-[12px] font-bold text-center hover:from-[#e8e8e8] hover:to-[#d8d8d8] rounded-[3px] flex items-center justify-center gap-2"
                    >
                      <span className="text-[14px]">📤</span>
                      <span>Share</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="mt-6 bg-white border border-[#ccc] p-3">
            <div className="flex items-center justify-center gap-2">
              {currentPage > 1 && (
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="bg-gradient-to-b from-[#f8f8f8] to-[#e8e8e8] border border-[#ccc] px-3 py-1 text-[11px] font-bold hover:from-[#e8e8e8] hover:to-[#d8d8d8] rounded-[3px]"
                >
                  &lt; Previous
                </button>
              )}

              {/* Page Numbers */}
              <div className="flex gap-1">
                {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 10) {
                    pageNum = i + 1;
                  } else if (currentPage <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 4) {
                    pageNum = totalPages - 9 + i;
                  } else {
                    pageNum = currentPage - 4 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 text-[11px] font-bold rounded-[3px] border ${
                        currentPage === pageNum
                          ? 'bg-[#003366] text-white border-[#003366]'
                          : 'bg-gradient-to-b from-[#f8f8f8] to-[#e8e8e8] border-[#ccc] hover:from-[#e8e8e8] hover:to-[#d8d8d8]'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="bg-gradient-to-b from-[#f8f8f8] to-[#e8e8e8] border border-[#ccc] px-3 py-1 text-[11px] font-bold hover:from-[#e8e8e8] hover:to-[#d8d8d8] rounded-[3px]"
                >
                  Next &gt;
                </button>
              )}
            </div>

            <div className="text-center mt-2 text-[11px] text-[#666]">
              Page {currentPage} of {totalPages} ({posts.length} total posts)
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="bg-[#f9f9f9] pb-8 pt-2 text-center">
          <div className="text-[11px] text-[#003366] font-bold mb-4 space-x-1">
            <a
              href="https://linkedin.com/in/darko-stanimirovic"
              className="hover:underline"
            >
              My LinkedIn
            </a>
            <span className="text-gray-400">|</span>
            <a href="/" className="hover:underline">
              Home
            </a>
            <span className="text-gray-400">|</span>
            <a href="/meanwhile" className="hover:underline">
              Meanwhile
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
          <div className="text-[10px] text-gray-400">
            © 1995-2026 Darko Online Services, Inc. Darko is a registered
            trademark, and the
            <br />
            Darko logo is a trademark of Darko Online Services, Inc.
          </div>
        </div>
      </div>
    </div>
  );
}
