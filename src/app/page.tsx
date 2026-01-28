export default function Home() {
  return (
    <div className="min-h-screen bg-[#f1f1f1] font-sans overflow-x-auto">
      <div className="w-[760px] mx-auto bg-white min-h-screen border-x border-[#b0b0b0]">
        {/* Header */}
        <div className="p-4 flex justify-between items-end bg-gradient-to-b from-white to-[#f8f8f8]">
          <div className="flex items-center gap-2">
            {/* Logo-ish graphic */}
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
              <a href="/what-i-write" className="hover:underline">
                What I Write
              </a>
              <span className="text-gray-300">|</span>
              <a href="/meanwhile" className="hover:underline">
                Meanwhile
              </a>
              <span className="text-gray-300">|</span>
              <a href="/my-ai-slop" className="hover:underline">
                My AI Slop
              </a>
              <span className="text-gray-300">|</span>
              <a href="/admin" className="hover:underline">
                Admin CMS Login
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
            Darko Online Services · Product Division
          </span>
          <span className="text-sm text-[#333]">
            Need Help? Call{" "}
            <a href="tel:+38163360838" className="hover:underline">
              1-800-DARKO-AI
            </a>
          </span>
        </div>

        {/* Hero Section */}
        <div className="bg-[#f9f9f9] border-b border-[#ccc] p-[10px] pb-0">
          <div className="flex border border-[#ccc] bg-white">
            {/* Image Side */}
            <div className="w-[60%] relative border-r border-[#ccc]">
              <img
                src="/image.png"
                alt="Family and Computer"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top", maxHeight: "250px" }}
              />
            </div>

            {/* Content Side */}
            <div className="w-[40%] p-5 bg-white flex flex-col justify-center">
              <h2 className="text-xl font-bold text-[#333] mb-4 leading-tight">
                Current Projects (Live & Loud)
              </h2>
              <ul className="space-y-2 text-[12px] text-[#444] font-bold">
                <li className="flex items-start gap-2">
                  <span className="text-[#ccc] text-[8px] pt-[4px]">▪</span>
                  <span>
                    Building{" "}
                    <a
                      href="/meanwhile"
                      className="text-[#003366] hover:underline font-bold"
                    >
                      Meanwhile
                    </a>{" "}
                    - Collaboration-first agent runtime with protocols, worklogs,
                    and real meeting energy
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ccc] text-[8px] pt-[4px]">▪</span>
                  <span>
                    Building <b>AI Design Agency</b> for solo builders who want
                    a real design system, not a moodboard
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ccc] text-[8px] pt-[4px]">▪</span>
                  <span>
                    <b>Product Manager</b> at Ohalo
                    <br />
                    <span className="text-[11px] text-[#666] leading-tight block mt-1 font-normal">
                      AI Document Categorization & Structured Data Extraction
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Two Boxes */}
        <div className="p-[10px] grid grid-cols-2 gap-[10px] bg-[#f9f9f9]">
          {/* Left Box */}
          <div className="bg-white border border-[#ccc] flex flex-col">
            <div className="bg-white p-3 border-b border-[#eee] pb-2">
              <h3 className="font-arial font-normal text-2xl text-[#333] tracking-tight">
                Product Management
              </h3>
            </div>
            <div className="p-4 pt-2 flex-grow">
              <div className="flex items-end mb-2">
                <span className="text-5xl font-bold text-[#555] tracking-tighter leading-none">
                  12+
                </span>
                <div className="ml-1 leading-none mb-1">
                  <span className="text-xl font-bold block text-[#555]">*</span>
                  <span className="text-[11px] text-[#777] font-bold">
                    YEARS EXP
                  </span>
                </div>
              </div>

              <div className="text-center font-bold text-[13px] mb-3 text-[#333]">
                First Month Free (Consultation)
              </div>

              <ul className="space-y-1 text-[11px] text-[#333] mb-4 pl-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#ccc] text-[10px] pt-[2px]">▪</span>
                  <span>
                    <b>Reliable Growth Metrics</b> Nationwide
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ccc] text-[10px] pt-[2px]">▪</span>
                  <span>No Micromanagement Required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ccc] text-[10px] pt-[2px]">▪</span>
                  <span>Mobile-First Transformation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ccc] text-[10px] pt-[2px]">▪</span>
                  <span>
                    Email with <b>15x Revenue Scaling</b>
                  </span>
                </li>
              </ul>
              <div className="flex justify-between items-center mt-auto pt-2">
                <a
                  href="/meanwhile"
                  className="text-[11px] text-[#cc0000] font-bold flex items-center hover:underline"
                >
                  <span className="text-[9px] mr-1">▶</span> Meanwhile Info
                </a>
                <a
                  href="https://linkedin.com/in/darko-stanimirovic"
                  className="text-[11px] text-[#cc0000] font-bold flex items-center hover:underline"
                >
                  <span className="text-[9px] mr-1">▶</span> Sign Up Now
                </a>
              </div>
            </div>
          </div>

          {/* Right Box */}
          <div className="bg-white border border-[#ccc] flex flex-col">
            <div className="bg-white p-3 border-b border-[#eee] pb-2">
              <h3 className="font-arial font-normal text-2xl text-[#333] tracking-tight">
                Technical Skills
              </h3>
            </div>
            <div className="p-4 pt-2 flex-grow">
              <ul className="space-y-2 text-[11px] text-[#333] mt-2 pl-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#ccc] text-[10px] pt-[2px]">▪</span>
                  <span>
                    <b>AI Agents</b> (His own, LangGraph, Pydantic AI)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ccc] text-[10px] pt-[2px]">▪</span>
                  <span>
                    Mobile Access with <b>Node.js & Python</b>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ccc] text-[10px] pt-[2px]">▪</span>
                  <span>Easy One-Step Deployment (Docker)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ccc] text-[10px] pt-[2px]">▪</span>
                  <span>
                    Secure Connection (<b>Go Framework</b>)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ccc] text-[10px] pt-[2px]">▪</span>
                  <span>
                    <b>Generative AI</b> Integration
                  </span>
                </li>
              </ul>
              <div className="flex justify-between items-center mt-auto pt-6">
                <a
                  href="/meanwhile"
                  className="text-[11px] text-[#cc0000] font-bold flex items-center hover:underline"
                >
                  <span className="text-[9px] mr-1">▶</span> Meanwhile Info
                </a>
                <a
                  href="mailto:darko.stanimirovic@gmail.com"
                  className="text-[11px] text-[#cc0000] font-bold flex items-center hover:underline"
                >
                  <span className="text-[9px] mr-1">▶</span> Sign Up Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-4 pt-2 text-[10px] text-gray-500 leading-normal bg-[#f9f9f9]">
          ** Limited guarantee, applies only to first month of service. Refund
          limited to first month's subscription fee and $29.95 processing &
          handling fee, must cancel within first 30 days of service to receive
          refund. Does not apply to registrations with free introductory
          periods. Guarantee available for limited time only.
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
            <a href="/what-i-write" className="hover:underline">
              What I Write
            </a>
            <span className="text-gray-400">|</span>
            <a href="/meanwhile" className="hover:underline">
              Meanwhile
            </a>
            <span className="text-gray-400">|</span>
            <a href="/my-ai-slop" className="hover:underline">
              My AI Slop
            </a>
            <span className="text-gray-400">|</span>
            <a href="/admin" className="hover:underline">
              Admin CMS Login
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">
              Terms of Service
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
