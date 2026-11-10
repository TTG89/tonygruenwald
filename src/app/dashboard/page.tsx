"use client";

import { useState, useEffect, useCallback } from "react";

interface ChatLog {
  id: number;
  message: string;
  response: string;
  created_at: string;
}

const SESSION_KEY = "dashboard_pw";

export default function DashboardPage() {
  const [password, setPassword] = useState("");
  const [savedPw, setSavedPw] = useState<string | null>(null);
  const [authed, setAuthed] = useState(false);
  const [logs, setLogs] = useState<ChatLog[]>([]);
  const [filtered, setFiltered] = useState<ChatLog[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  const fetchLogs = useCallback(async (pw: string, silent = false) => {
    if (!silent) setLoading(true);
    else setRefreshing(true);
    setError("");
    try {
      const res = await fetch("/api/dashboard", {
        headers: { "x-dashboard-password": pw },
      });
      if (res.status === 401) {
        setError("Wrong password.");
        sessionStorage.removeItem(SESSION_KEY);
        setSavedPw(null);
        setAuthed(false);
        return;
      }
      const data = await res.json();
      setLogs(data.logs);
      setAuthed(true);
      setSavedPw(pw);
      sessionStorage.setItem(SESSION_KEY, pw);
      setLastRefresh(new Date());
    } catch {
      setError("Failed to load logs.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // Restore session on mount
  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored) fetchLogs(stored);
  }, [fetchLogs]);

  // Auto-refresh every 30 seconds when authed
  useEffect(() => {
    if (!authed || !savedPw) return;
    const interval = setInterval(() => fetchLogs(savedPw, true), 30000);
    return () => clearInterval(interval);
  }, [authed, savedPw, fetchLogs]);

  // Filter logs on search change
  useEffect(() => {
    if (!search.trim()) {
      setFiltered(logs);
    } else {
      const q = search.toLowerCase();
      setFiltered(
        logs.filter(
          (l) =>
            l.message.toLowerCase().includes(q) ||
            l.response.toLowerCase().includes(q)
        )
      );
    }
  }, [search, logs]);

  function signOut() {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
    setSavedPw(null);
    setLogs([]);
    setPassword("");
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-gray-800 border border-gray-700 p-8 w-full max-w-sm">
          <h1 className="text-white text-xl font-bold font-mono mb-6">
            T.O.N.Y. Dashboard
          </h1>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchLogs(password)}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-600 text-white font-mono text-sm focus:outline-none focus:border-gray-400 mb-3"
          />
          {error && (
            <p className="text-red-400 text-xs font-mono mb-3">{error}</p>
          )}
          <button
            onClick={() => fetchLogs(password)}
            disabled={loading}
            className="w-full px-4 py-3 bg-white text-gray-900 font-mono text-sm font-bold hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </div>
      </div>
    );
  }

  const today = logs.filter(
    (l) => new Date(l.created_at + "Z").toDateString() === new Date().toDateString()
  ).length;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold font-mono">T.O.N.Y. Dashboard</h1>
          <p className="text-gray-500 text-xs font-mono mt-0.5">
            Chat log viewer
            {lastRefresh && (
              <span className="ml-3 text-gray-600">
                Last refreshed {lastRefresh.toLocaleTimeString()}
              </span>
            )}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => savedPw && fetchLogs(savedPw, true)}
            disabled={refreshing}
            className="text-xs text-gray-400 hover:text-white font-mono transition-colors disabled:opacity-40"
          >
            {refreshing ? "Refreshing..." : "↻ Refresh"}
          </button>
          <button
            onClick={signOut}
            className="text-xs text-gray-500 hover:text-gray-300 font-mono transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Questions", value: logs.length },
            { label: "Today", value: today },
            { label: "Showing", value: filtered.length },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-gray-900 border border-gray-800 p-4 text-center"
            >
              <div className="text-2xl font-bold font-mono">{s.value}</div>
              <div className="text-gray-500 text-xs font-mono mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search questions or responses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white font-mono text-sm focus:outline-none focus:border-gray-500 placeholder-gray-600"
          />
        </div>

        {/* Log list */}
        <div className="space-y-3">
          {filtered.length === 0 && (
            <p className="text-gray-600 text-sm font-mono text-center py-12">
              No logs found.
            </p>
          )}
          {filtered.map((log) => (
            <div
              key={log.id}
              className="bg-gray-900 border border-gray-800 hover:border-gray-600 transition-colors"
            >
              <button
                className="w-full text-left px-5 py-4"
                onClick={() =>
                  setExpanded(expanded === log.id ? null : log.id)
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm text-white font-medium leading-snug flex-1">
                    {log.message}
                  </p>
                  <span className="text-gray-600 text-xs font-mono whitespace-nowrap pt-0.5">
                    {new Date(log.created_at + "Z").toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                {expanded !== log.id && (
                  <p className="text-gray-500 text-xs mt-2 line-clamp-1">
                    {log.response}
                  </p>
                )}
              </button>
              {expanded === log.id && (
                <div className="px-5 pb-4 border-t border-gray-800 pt-4">
                  <p className="text-xs text-gray-400 font-mono mb-1">
                    T.O.N.Y. replied:
                  </p>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {log.response}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
