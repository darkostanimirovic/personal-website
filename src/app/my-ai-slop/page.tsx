"use client";

import { useEffect, useState } from "react";

type SlopPost = {
  id: string;
  timestamp: string;
  prompt: string;
  images: string[];
  grid?: {
    rows: number;
    cols: number;
  };
};

export default function MyAiSlop() {
  const [posts, setPosts] = useState<SlopPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<{
    post: SlopPost;
    index: number;
  } | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/ai-slop/index.json", { cache: "no-store" });
        const data = await res.json();
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          setPosts([]);
        }
      } catch {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  useEffect(() => {
    if (!lightbox) {
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
        return;
      }
      if (event.key === "ArrowRight") {
        setLightbox((prev) =>
          prev
            ? {
                ...prev,
                index: Math.min(
                  (prev.post.images ?? []).length - 1,
                  prev.index + 1,
                ),
              }
            : prev,
        );
      }
      if (event.key === "ArrowLeft") {
        setLightbox((prev) =>
          prev
            ? { ...prev, index: Math.max(0, prev.index - 1) }
            : prev,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  useEffect(() => {
    if (!lightbox) {
      return;
    }
    const id = `slop-lightbox-${lightbox.index}`;
    const node = document.getElementById(id);
    if (node) {
      node.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-[#f1f1f1] font-sans overflow-x-auto">
      <div className="w-[760px] mx-auto bg-white min-h-screen border-x border-[#b0b0b0]">
        {/* Header */}
        <div className="p-4 flex justify-between items-end bg-gradient-to-b from-white to-[#f8f8f8]">
          <div className="flex items-center gap-2">
            <a href="/" className="relative">
              <div className="flex items-center">
                <div className="bg-[#003366] w-8 h-8 rounded-sm transform -skew-x-12 mr-1"></div>
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
              <a href="/what-i-write" className="hover:underline">
                What I Write
              </a>
              <span className="text-gray-300">|</span>
              <a href="/admin" className="hover:underline">
                Admin CMS Login
              </a>
            </div>
            <button className="bg-gradient-to-b from-[#555] to-[#333] text-white text-[11px] font-bold px-3 py-[2px] rounded-[3px] border border-black flex items-center gap-1">
              Upload Slop <span className="text-[8px]">▼</span>
            </button>
          </div>
        </div>

        {/* Gray Bar */}
        <div className="bg-[#e4e4e4] border-y border-[#ccc] px-3 py-[6px] flex justify-between items-center h-[30px]">
          <span className="font-bold text-lg text-[#333] tracking-tight">
            My AI Slop
          </span>
          <span className="text-sm text-[#333]">
            underground art archive · {posts.length} series
          </span>
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-[#ff00aa] via-[#ffbf00] to-[#00c2ff] text-white py-2 px-4 border-b-4 border-[#003366]">
          <div className="text-center text-[12px] font-bold tracking-wide">
            WEIRD LITTLE IMAGES
          </div>
        </div>

        <div className="bg-[#f9f9f9] p-[10px] min-h-[600px]">
          {loading ? (
            <div className="bg-white border border-[#ccc] p-6 text-center text-[12px] text-[#666]">
              Loading slop archives...
            </div>
          ) : posts.length === 0 ? (
            <div className="bg-white border border-[#ccc] p-6 text-center text-[12px] text-[#666]">
              No slop yet. That is probably for the best.
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 gap-3 [column-fill:balance]">
              {posts.map((post) => {
                const images = post.images ?? [];
                return (
                  <div
                    key={post.id}
                    className="mb-3 break-inside-avoid bg-white border border-[#ccc] p-4 flex flex-col gap-3"
                  >
                    <div
                      className={
                        images.length === 1
                          ? "grid grid-cols-1"
                          : "grid grid-cols-3 gap-1"
                      }
                    >
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setLightbox({ post, index: idx })}
                          className="border border-[#ddd] overflow-hidden"
                        >
                          <img
                            src={img}
                            alt={post.prompt}
                            className={images.length === 1 ? "w-full" : ""}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#f9f9f9] pb-8 pt-2 text-center">
          <div className="text-[11px] text-[#003366] font-bold mb-4 space-x-1">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span className="text-gray-400">|</span>
            <a href="/meanwhile" className="hover:underline">
              Meanwhile
            </a>
            <span className="text-gray-400">|</span>
            <a href="/what-i-write" className="hover:underline">
              What I Write
            </a>
            <span className="text-gray-400">|</span>
            <a href="/admin" className="hover:underline">
              Admin CMS Login
            </a>
          </div>
          <div className="text-[10px] text-gray-400">
            © 2001-2026 Darko Online Services, Inc. Unauthorized slop strictly
            encouraged.
          </div>
        </div>
      </div>
      {lightbox ? (
        <div className="fixed inset-0 z-50 bg-black/90">
          <button
            type="button"
            className="absolute top-4 right-4 text-white text-xs tracking-wide border border-white/30 px-3 py-1 bg-black/40"
            onClick={() => setLightbox(null)}
          >
            Close ✕
          </button>
          <div
            className="h-screen w-screen overflow-auto flex items-center gap-6 px-10"
            onClick={() => setLightbox(null)}
          >
            {(lightbox.post.images ?? []).map((img, idx) => (
              <img
                key={img}
                id={`slop-lightbox-${idx}`}
                src={img}
                alt={lightbox.post.prompt}
                className="h-screen w-auto flex-shrink-0 cursor-grab"
                onClick={(event) => event.stopPropagation()}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
