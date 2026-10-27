import React, { useState, useEffect } from 'react';
import {
  Star, GitFork, ExternalLink, AlertCircle, FolderGit2
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const GithubSection = () => {
  // Configurable GitHub username
  const defaultUser = import.meta.env.VITE_GITHUB_USERNAME || 'themrsarii';
  const [username, setUsername] = useState(defaultUser);
  const [inputUsername, setInputUsername] = useState(defaultUser);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Curated Fallback Repositories (Honest showcase, no invented vanity counts)
  const fallbackRepos = [
    {
      id: 1,
      name: "retailspoint-pos",
      description: "Restaurant Point of Sale (POS) system with offline-first desktop workflows, KOT dispatch, billing, and shift management.",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://retailspoint.com",
      updated_at: "2026-03-10T14:00:00Z",
      topics: ["react", "nodejs", "sqlite", "pos", "restaurant-pos", "electron", "offline-first"]
    },
    {
      id: 2,
      name: "facebook",
      description: "Full-stack social networking platform with session auth, AJAX-driven interactions, and relational MySQL data modeling.",
      language: "PHP",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/themrsarii/facebook",
      updated_at: "2026-03-01T12:00:00Z",
      topics: ["php", "mysql", "ajax", "bootstrap5", "javascript"]
    },
    {
      id: 3,
      name: "bilal-shahpur-foods",
      description: "Urdu-first full-stack business platform for traditional dairy products with product showcase, retailer freezer schemes, and admin management.",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/themrsarii/bilal-shahpur-foods",
      updated_at: "2026-02-24T18:30:00Z",
      topics: ["react", "vite", "nodejs", "express", "mongodb", "rtl", "urdu"]
    },
    {
      id: 4,
      name: "primelinks-business-website",
      description: "Professional business website for PrimeLinks with modern UI/UX, responsive presentation, and client inquiry workflows.",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://primelinks.mrsarii.com",
      updated_at: "2026-03-12T16:00:00Z",
      topics: ["react", "tailwindcss", "business-website", "ui-ux", "vite", "responsive-design"]
    }
  ];

  const fetchGithubRepos = async (user) => {
    if (!user) {
      setRepos(fallbackRepos);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=4`);
      if (!response.ok) {
        throw new Error(`GitHub API returned status ${response.status}`);
      }
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setRepos(data);
      } else {
        setRepos(fallbackRepos);
      }
    } catch (err) {
      console.warn("GitHub API fetch fallback engaged:", err.message);
      setError("Using curated project repositories (API rate limit or username customization).");
      setRepos(fallbackRepos);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubRepos(username);
  }, [username]);

  const handleUpdateUsername = (e) => {
    e.preventDefault();
    setUsername(inputUsername.trim());
  };

  const getLanguageColor = (lang) => {
    switch (lang?.toLowerCase()) {
      case 'javascript': return 'bg-amber-400';
      case 'typescript': return 'bg-blue-400';
      case 'html': return 'bg-rose-400';
      case 'css': return 'bg-indigo-400';
      default: return 'bg-emerald-400';
    }
  };

  return (
    <section id="github" className="py-20 lg:py-28 bg-[#0C0F14]/40 border-y border-[#252B36]/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
                Open Source & Code
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FA] tracking-tight">
              Code & Repositories
            </h2>
            <p className="text-base text-[#98A1AF] mt-2 max-w-xl">
              Inspect full-stack codebases, clean commits, and modular architecture directly on GitHub.
            </p>
          </div>

          {/* Dynamic GitHub Username Switcher for Recruiter testing */}
          <form onSubmit={handleUpdateUsername} className="flex items-center gap-2 bg-[#11151C] border border-[#252B36] p-1.5 rounded-xl">
            <GithubIcon className="w-4 h-4 text-[#98A1AF] ml-2" />
            <input
              type="text"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              placeholder="github username"
              className="bg-transparent text-xs font-mono text-[#F5F7FA] focus:outline-none w-36 px-1"
            />
            <button
              type="submit"
              className="px-3 py-1 text-xs font-mono font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
            >
              Sync API
            </button>
          </form>
        </div>

        {/* API Status Notice */}
        {error && (
          <div className="mb-6 p-3 rounded-lg bg-amber-950/30 border border-amber-500/30 text-xs font-mono text-amber-300 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </span>
            <span className="text-[10px] text-amber-400/80">Fallback Activated</span>
          </div>
        )}

        {/* Repositories Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="p-6 rounded-xl bg-[#11151C] border border-[#252B36] animate-pulse space-y-3">
                <div className="h-5 bg-neutral-800 rounded w-1/3"></div>
                <div className="h-4 bg-neutral-800 rounded w-full"></div>
                <div className="h-4 bg-neutral-800 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.slice(0, 4).map((repo) => (
              <a
                key={repo.id || repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-[#11151C] border border-[#252B36] hover:border-indigo-500/50 hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-indigo-400" />
                      <span className="font-bold text-base text-[#F5F7FA] group-hover:text-indigo-300 transition-colors">
                        {repo.name}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#98A1AF] group-hover:text-white transition-colors" />
                  </div>

                  <p className="text-xs sm:text-sm text-[#98A1AF] leading-relaxed mt-2 line-clamp-2">
                    {repo.description || "Production full-stack repository with modular component architecture and REST APIs."}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#252B36]/60 font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                    <span>{repo.language || "JavaScript"}</span>
                  </div>

                  <div className="flex items-center gap-4 text-[#98A1AF]">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400/80" /> {repo.stargazers_count || 0}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" /> {repo.forks_count || 0}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* GitHub Direct Link Bar */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/themrsarii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold text-indigo-300 bg-[#11151C] hover:bg-[#181F2B] border border-[#252B36] hover:border-indigo-500/50 rounded-xl transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Explore All Repositories on github.com/themrsarii</span>
          </a>
        </div>

      </div>
    </section>
  );
};
