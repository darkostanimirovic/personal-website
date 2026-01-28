"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEYS = {
  deleted: "dos_site_deleted",
  caseId: "dos_site_deleted_case_id",
};

type GateState = "loading" | "active" | "deleted";

function buildCaseId(existing?: string | null) {
  if (existing && existing.trim().length > 0) return existing;
  const time = new Date();
  const date = time.toISOString().slice(0, 10).replace(/-/g, "");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `VIBE-${date}-${rand}`;
}

export default function SiteGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<GateState>("loading");
  const [caseId, setCaseId] = useState<string>("");

  useEffect(() => {
    try {
      const isDeleted = localStorage.getItem(STORAGE_KEYS.deleted) === "true";
      if (isDeleted) {
        const storedCaseId = localStorage.getItem(STORAGE_KEYS.caseId);
        const resolved = buildCaseId(storedCaseId);
        localStorage.setItem(STORAGE_KEYS.caseId, resolved);
        setCaseId(resolved);
        setState("deleted");
        return;
      }
      setState("active");
    } catch {
      setState("active");
    }
  }, []);

  const placeholderBody = useMemo(() => {
    return (
      <div className="min-h-screen bg-[#e9e9e9] font-sans overflow-x-auto">
        <div className="w-[760px] mx-auto bg-white min-h-screen border-x border-[#b0b0b0]">
          <div className="p-4 flex justify-between items-end bg-gradient-to-b from-white to-[#f8f8f8]">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="bg-[#8a8a8a] w-8 h-8 rounded-sm transform -skew-x-12 mr-1"></div>
                <span className="font-bold text-4xl tracking-tighter text-[#666]">
                  DARKO
                </span>
              </div>
            </div>
            <div className="text-[11px] text-[#999] font-bold">
              VibeHosting Control Panel
            </div>
          </div>

          <div className="bg-[#e4e4e4] border-y border-[#ccc] px-3 py-[6px] flex justify-between items-center h-[30px]">
            <span className="font-bold text-lg text-[#333] tracking-tight">
              Site Status
            </span>
            <span className="text-sm text-[#333]">Case ID: {caseId}</span>
          </div>

          <div className="p-10 bg-white">
            <div className="border-2 border-[#cc0000] bg-[#fff5f5] p-6">
              <div className="text-2xl font-bold text-[#cc0000] mb-2">
                SITE DOES NOT EXIST
              </div>
              <div className="text-sm text-[#333] leading-relaxed">
                The requested site has been deleted from our servers.
                <br />
                Contact support at{" "}
                <span className="font-bold text-[#003366]">
                  vibehosting@gmail.com
                </span>
                {" "}with your case ID for recovery options.
              </div>
              <div className="mt-4 text-[11px] text-[#666]">
                Incident logged. Do not power-cycle your modem.
              </div>
            </div>

            <div className="mt-8 border border-[#ccc] bg-[#f9f9f9] p-4 text-[12px] text-[#555]">
              If you believe this is an error, please allow 24-48 hours for DNS
              propagation. This is a totally normal thing to say.
            </div>
          </div>
        </div>
      </div>
    );
  }, [caseId]);

  if (state === "loading") {
    return null;
  }

  if (state === "deleted") {
    return placeholderBody;
  }

  return <>{children}</>;
}
