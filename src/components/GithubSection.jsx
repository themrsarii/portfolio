import React, { useState, useEffect } from 'react';
import {
  Star, GitFork, ExternalLink, FolderGit2
} from 'lucide-react';
import { GithubIcon } from './Icons';

const fallbackRepos = [
  {
    id: 1,
    name: "retailspoint-pos",
    description: "Restaurant Point of Sale (POS) system with offline-first desktop workflows, KOT dispatch, billing, and shift management.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://retailspoint.com",
    updated_at: "2026-03-10T14:00:00Z"
  },
  {
    id: 2,
    name: "connect-sphere",
    description: "Full-stack social networking platform with session auth, AJAX-driven interactions, and relational MySQL data modeling.",
    language: "PHP",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/themrsarii/connect-sphere",
    updated_at: "2026-03-01T12:00:00Z"
  },
  {
    id: 3,
    name: "bilal-shahpur-foods",
    description: "Urdu-first full-stack business platform for traditional dairy products with product showcase, retailer freezer schemes, and admin management.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/themrsarii/bilal-shahpur-foods",
    updated_at: "2026-02-24T18:30:00Z"
  },
  {
    id: 4,
    name: "primelinks-business-website",
    description: "Professional business website for PrimeLinks with modern UI/UX, responsive presentation, and client inquiry workflows.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://primelinks.mrsarii.com",
    updated_at: "2026-03-12T16:00:00Z"
  }
];

export const GithubSection = () => {
  const defaultUser = import.meta.env.VITE_GITHUB_USERNAME || 'themrsarii';
  const [username, setUsername] = useState(defaultUser);
  const [inputUsername, setInputUsername] = useState(defaultUser);
  const [repos, setRepos] = useState(fallbackRepos);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`);
        if (!response.ok) throw new Error();
        const data = await response.json();
        if (!ignore && Array.isArray(data) && data.length > 0) {
          setRepos(data);
        }
      } catch {
        if (!ignore) {
          setRepos(fallbackRepos);
        }
      }
    }
    load();
    return () => { ignore = true; };
  }, [username]);

  const handleUpdateUsername = (e) => {
    e.preventDefault();
    if (inputUsername.trim()) {
      setUsername(inputUsername.trim());
    }
  };

  const getLanguageColor = (lang) => {
    switch (lang?.toLowerCase()) {
      case 'javascript': return 'bg-amber-500';
      case 'typescript': return 'bg-blue-500';
      case 'html': return 'bg-rose-500';
      case 'css': return 'bg-indigo-500';
      default: return 'bg-emerald-500';
    }
  };

  return (
    <section id="github" className="py-20 lg:py-28 bg-[#FFFFFF] dark:bg-[#090A0C] border-b border-[#E8E8E8] dark:border-[#222429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E8E8E8] dark:border-[#222429] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-[#A1A1AA]">
                Code & Repositories
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#171717] dark:text-[#EDEDED] tracking-tight">
              Recent Repositories
            </h2>
            <p className="text-base text-[#666666] dark:text-[#A1A1AA] mt-2 max-w-xl leading-relaxed">
              Explore public projects, source code, and experiments directly on GitHub.
            </p>
          </div>

          {/* GitHub Username Sync Box */}
          <form onSubmit={handleUpdateUsername} className="flex items-center gap-2 bg-[#F7F7F5] dark:bg-[#131418] border border-[#E8E8E8] dark:border-[#222429] p-1.5 rounded-lg">
            <GithubIcon className="w-4 h-4 text-[#666666] dark:text-[#A1A1AA] ml-2" />
            <input
              type="text"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              placeholder="github username"
              className="bg-transparent text-xs font-mono text-[#171717] dark:text-[#EDEDED] focus:outline-none w-36 px-1"
            />
            <button
              type="submit"
              className="px-3 py-1 text-xs font-mono font-medium text-white bg-[#171717] hover:bg-[#262626] dark:bg-[#EDEDED] dark:text-[#090A0C] dark:hover:bg-white rounded-md transition-colors"
            >
              Sync
            </button>
          </form>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.slice(0, 4).map((repo) => (
            <a
              key={repo.id || repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-[#F7F7F5] dark:bg-[#111216] border border-[#E8E8E8] dark:border-[#222429] hover:border-[#D4D4D4] dark:hover:border-[#323640] transition-colors flex flex-col justify-between group shadow-sm"
            >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <span className="font-bold text-base text-[#171717] dark:text-[#EDEDED] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {repo.name}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#929292] group-hover:text-[#171717] dark:group-hover:text-white transition-colors" />
                  </div>

                  <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A1A1AA] leading-relaxed mt-2 line-clamp-2">
                    {repo.description || "Production full-stack repository with modular component architecture and REST APIs."}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#E8E8E8] dark:border-[#222429] font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 text-[#171717] dark:text-[#EDEDED]">
                    <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                    <span>{repo.language || "JavaScript"}</span>
                  </div>

                  <div className="flex items-center gap-4 text-[#929292]">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500" /> {repo.stargazers_count || 0}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" /> {repo.forks_count || 0}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        {/* GitHub Direct Link Bar */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/themrsarii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium text-[#171717] dark:text-[#EDEDED] bg-[#F7F7F5] dark:bg-[#111216] hover:bg-[#EAEAEA] dark:hover:bg-[#181920] border border-[#E8E8E8] dark:border-[#222429] rounded-lg transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>github.com/themrsarii</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default GithubSection;
