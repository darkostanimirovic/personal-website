"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEYS = {
  auth: "dos_admin_auth",
  settings: "dos_admin_settings",
  deleted: "dos_site_deleted",
  caseId: "dos_site_deleted_case_id",
};

type Settings = {
  siteName: string;
  heroLine: string;
  salesLine: string;
  hotline: string;
  bannerText: string;
  mood: string;
  blinkMode: boolean;
};

const DEFAULT_SETTINGS: Settings = {
  siteName: "Darko Online Services",
  heroLine: "Enterprise-grade AI with mall-kiosk energy",
  salesLine: "Now accepting serious inquiries and unserious ideas",
  hotline: "1-800-DARKO-AI",
  bannerText: "NOW SHIPPING: Meanwhile + Design Agency",
  mood: "High Voltage (2001)",
  blinkMode: true,
};

function getCaseId(existing?: string | null) {
  if (existing && existing.trim().length > 0) return existing;
  const time = new Date();
  const date = time.toISOString().slice(0, 10).replace(/-/g, "");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `VIBE-${date}-${rand}`;
}

export default function Admin() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteAck, setDeleteAck] = useState(false);

  useEffect(() => {
    try {
      const authed = localStorage.getItem(STORAGE_KEYS.auth) === "true";
      setIsAuthed(authed);
      const stored = localStorage.getItem(STORAGE_KEYS.settings);
      if (stored) {
        setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(stored) });
      }
    } catch {
      setSettings(DEFAULT_SETTINGS);
    }
  }, []);

  const login = (event: React.FormEvent) => {
    event.preventDefault();
    if (username === "admin" && password === "admin") {
      localStorage.setItem(STORAGE_KEYS.auth, "true");
      setIsAuthed(true);
      setLoginError(null);
    } else {
      setLoginError("Invalid credentials. Please contact IT.");
    }
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.auth);
    setIsAuthed(false);
  };

  const saveSettings = () => {
    localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
    setLastSaved(new Date().toLocaleTimeString());
  };

  const updateSettings = (patch: Partial<Settings>) => {
    setSettings((prev) => ({ ...prev, ...patch }));
  };

  const handleDelete = () => {
    if (!deleteAck) return;
    const existing = localStorage.getItem(STORAGE_KEYS.caseId);
    const caseId = getCaseId(existing);
    localStorage.setItem(STORAGE_KEYS.caseId, caseId);
    localStorage.setItem(STORAGE_KEYS.deleted, "true");
    window.location.href = "/";
  };

  const adminBody = useMemo(() => {
    return (
      <div className="min-h-screen bg-[#f1f1f1] font-sans overflow-x-auto">
        <div className="w-[960px] mx-auto bg-white min-h-screen border-x border-[#b0b0b0]">
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
            <div className="text-right">
              <div className="text-[11px] text-[#003366] font-bold">
                Admin CMS Login
              </div>
              <button
                onClick={logout}
                className="mt-1 bg-gradient-to-b from-[#555] to-[#333] text-white text-[11px] font-bold px-3 py-[2px] rounded-[3px] border border-black"
              >
                Log Out ▼
              </button>
            </div>
          </div>

          <div className="bg-[#e4e4e4] border-y border-[#ccc] px-3 py-[6px] flex justify-between items-center h-[30px]">
            <span className="font-bold text-lg text-[#333] tracking-tight">
              Corporate Site Admin (VibeCMS)
            </span>
            <span className="text-sm text-[#333]">Root Access: Enabled</span>
          </div>

          <div className="grid grid-cols-[220px_1fr] gap-0 min-h-[650px]">
            <div className="bg-[#f7f7f7] border-r border-[#ccc] p-4 text-[12px]">
              <div className="font-bold text-[#333] mb-2">CMS Modules</div>
              <ul className="space-y-2 text-[#003366] font-bold">
                <li>Dashboard</li>
                <li>Site Settings</li>
                <li>Brand Assets</li>
                <li>Announcements</li>
                <li>User Roles</li>
                <li>Infrastructure</li>
                <li>Disaster Recovery</li>
              </ul>
              <div className="mt-6 border-t border-[#ddd] pt-3 text-[#666]">
                <div className="font-bold text-[11px]">System Status</div>
                <div>Uptime: 99.7%</div>
                <div>Latency: &lt; 12ms</div>
                <div>Compliance: Probably</div>
              </div>
            </div>

            <div className="p-6">
              <div className="border-2 border-[#003366] bg-[#f5f8ff] p-4 mb-6">
                <div className="font-bold text-[#003366] text-lg">
                  Site Configuration
                </div>
                <div className="text-[12px] text-[#666]">
                  All settings are saved locally in your browser. Please do not
                  open in incognito unless you enjoy chaos.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-[#ccc] p-4">
                  <div className="font-bold text-[12px] text-[#333] mb-2">
                    Brand Identity
                  </div>
                  <label className="block text-[11px] text-[#666] mb-1">
                    Site Name
                  </label>
                  <input
                    value={settings.siteName}
                    onChange={(e) => updateSettings({ siteName: e.target.value })}
                    className="w-full border border-[#999] px-2 py-1 text-[12px]"
                  />

                  <label className="block text-[11px] text-[#666] mb-1 mt-3">
                    Hero Line
                  </label>
                  <input
                    value={settings.heroLine}
                    onChange={(e) => updateSettings({ heroLine: e.target.value })}
                    className="w-full border border-[#999] px-2 py-1 text-[12px]"
                  />

                  <label className="block text-[11px] text-[#666] mb-1 mt-3">
                    Sales Line
                  </label>
                  <input
                    value={settings.salesLine}
                    onChange={(e) => updateSettings({ salesLine: e.target.value })}
                    className="w-full border border-[#999] px-2 py-1 text-[12px]"
                  />
                </div>

                <div className="border border-[#ccc] p-4">
                  <div className="font-bold text-[12px] text-[#333] mb-2">
                    Operations
                  </div>
                  <label className="block text-[11px] text-[#666] mb-1">
                    Hotline
                  </label>
                  <input
                    value={settings.hotline}
                    onChange={(e) => updateSettings({ hotline: e.target.value })}
                    className="w-full border border-[#999] px-2 py-1 text-[12px]"
                  />

                  <label className="block text-[11px] text-[#666] mb-1 mt-3">
                    Banner Text
                  </label>
                  <input
                    value={settings.bannerText}
                    onChange={(e) => updateSettings({ bannerText: e.target.value })}
                    className="w-full border border-[#999] px-2 py-1 text-[12px]"
                  />

                  <label className="block text-[11px] text-[#666] mb-1 mt-3">
                    Mood Preset
                  </label>
                  <select
                    value={settings.mood}
                    onChange={(e) => updateSettings({ mood: e.target.value })}
                    className="w-full border border-[#999] px-2 py-1 text-[12px]"
                  >
                    <option>High Voltage (2001)</option>
                    <option>Enterprise Beige</option>
                    <option>Dial-up Disco</option>
                    <option>Boardroom in a Mall</option>
                  </select>

                  <label className="flex items-center gap-2 mt-3 text-[11px] text-[#666]">
                    <input
                      type="checkbox"
                      checked={settings.blinkMode}
                      onChange={(e) => updateSettings({ blinkMode: e.target.checked })}
                    />
                    Enable Blink Mode
                  </label>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <button
                  onClick={saveSettings}
                  className="bg-gradient-to-b from-[#555] to-[#333] text-white text-[11px] font-bold px-4 py-[4px] rounded-[3px] border border-black"
                >
                  Save Settings
                </button>
                {lastSaved && (
                  <div className="text-[11px] text-[#666]">
                    Saved at {lastSaved}
                  </div>
                )}
              </div>

              <div className="mt-8 border-2 border-[#cc0000] bg-[#fff5f5] p-4">
                <div className="font-bold text-[#cc0000] text-[13px]">
                  Danger Zone
                </div>
                <div className="text-[12px] text-[#333] mb-3">
                  Deleting the site will wipe all hosted content, custom domains,
                  and corporate legacy. This action is aggressively permanent.
                </div>

                {!confirmDelete ? (
                  <button
                    onClick={() => setConfirmDelete(true)}
                    className="bg-[#cc0000] text-white text-[12px] font-bold px-4 py-[4px] border border-black"
                  >
                    Delete Site
                  </button>
                ) : (
                  <div className="border border-[#cc0000] bg-white p-3">
                    <div className="font-bold text-[#cc0000] text-[13px] mb-2">
                      ⚠ ALL DATA WILL BE DELETED ⚠
                    </div>
                    <div className="text-[12px] text-[#333] mb-2">
                      This action cannot be undone. Please acknowledge that you
                      are deleting the entire website, its soul, and any
                      remaining hope.
                    </div>
                    <label className="flex items-center gap-2 text-[11px] text-[#333] mb-3">
                      <input
                        type="checkbox"
                        checked={deleteAck}
                        onChange={(e) => setDeleteAck(e.target.checked)}
                      />
                      I understand the consequences.
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleDelete}
                        className={`text-[12px] font-bold px-4 py-[4px] border border-black ${
                          deleteAck
                            ? "bg-[#cc0000] text-white"
                            : "bg-[#eee] text-[#999]"
                        }`}
                        disabled={!deleteAck}
                      >
                        Yes, delete everything
                      </button>
                      <button
                        onClick={() => {
                          setConfirmDelete(false);
                          setDeleteAck(false);
                        }}
                        className="bg-[#f0f0f0] text-[#333] text-[12px] font-bold px-4 py-[4px] border border-[#999]"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }, [deleteAck, lastSaved, settings]);

  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-[#f1f1f1] font-sans overflow-x-auto">
        <div className="w-[760px] mx-auto bg-white min-h-screen border-x border-[#b0b0b0]">
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
            <div className="text-[11px] text-[#003366] font-bold">
              Admin CMS Login
            </div>
          </div>

          <div className="bg-[#e4e4e4] border-y border-[#ccc] px-3 py-[6px] flex justify-between items-center h-[30px]">
            <span className="font-bold text-lg text-[#333] tracking-tight">
              Corporate Authentication Portal
            </span>
            <span className="text-sm text-[#333]">Authorized Users Only</span>
          </div>

          <div className="p-10">
            <div className="border border-[#ccc] bg-[#f9f9f9] p-6 max-w-[420px] mx-auto">
              <div className="font-bold text-[#333] text-lg mb-2">
                Admin CMS Login
              </div>
              <div className="text-[12px] text-[#666] mb-4">
                Please enter your administrator credentials to continue.
              </div>
              <form onSubmit={login} className="space-y-3">
                <div>
                  <label className="block text-[11px] text-[#666] mb-1">
                    Username
                  </label>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border border-[#999] px-2 py-1 text-[12px]"
                    placeholder="admin"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#666] mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-[#999] px-2 py-1 text-[12px]"
                    placeholder="admin"
                  />
                </div>
                {loginError && (
                  <div className="text-[11px] text-[#cc0000] font-bold">
                    {loginError}
                  </div>
                )}
                <button
                  type="submit"
                  className="bg-gradient-to-b from-[#555] to-[#333] text-white text-[11px] font-bold px-4 py-[4px] rounded-[3px] border border-black"
                >
                  Log In ▼
                </button>
              </form>
              <div className="mt-4 text-[10px] text-[#888]">
                Hint: admin / admin. Our security team is on a coffee break.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return adminBody;
}
