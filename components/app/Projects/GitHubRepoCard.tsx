"use client";

import { useEffect, useState } from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import { GitHubRepoData, GitHubRepoCardProps } from "@/types";

function parseGitHubUrl(url: string) {
  // Example:
  // https://github.com/Atul-ThakreLO/Cross-Chain-Rebase-Token
  const parts = url.replace("https://github.com/", "").split("/");
  const username = parts[0];
  const repo = parts[1];
  return { username, repo };
}

export default function GitHubRepoCard({ repoUrl }: GitHubRepoCardProps) {
  const [repo, setRepo] = useState<GitHubRepoData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { username, repo } = parseGitHubUrl(repoUrl);
    const cacheKey = `github-repo-${username}-${repo}`;

    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      setRepo(JSON.parse(cached));
      setLoading(false);
      return;
    }

    async function fetchRepo() {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${username}/${repo}`
        );

        if (!res.ok) throw new Error("Failed to fetch repo");

        const data: GitHubRepoData = await res.json();

        localStorage.setItem(cacheKey, JSON.stringify(data));
        setRepo(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchRepo();
  }, [repoUrl]);

  if (loading) {
    return (
      <div style={cardStyle}>
        <p>Loading repo...</p>
      </div>
    );
  }

  if (!repo) {
    return (
      <div style={cardStyle}>
        <p>Failed to load repository</p>
      </div>
    );
  }

  return (
    <a href={repo.html_url} target="_blank">
      <div className="flex gap-2">
        <div className="bg-foreground p-2 text-background text-[0.7rem] rounded-md w-56 relative">
          <div className="flex items-center gap-2 mb-3">
            <img
              src={repo.owner.avatar_url}
              alt="avatar"
              width={40}
              height={40}
              className="rounded-md"
            />
            <div className="wrap-anywhere">
              {repo.owner.login}/<strong>{repo.name}</strong>
            </div>
          </div>

          <div>
            ⭐ {repo.stargazers_count} &nbsp; 🍴 {repo.forks_count}
            {repo.language && <> &nbsp; • {repo.language}</>}
          </div>
          <div className="absolute bottom-0 right-0 p-1">
            <SquareArrowOutUpRight size={15} />
          </div>
        </div>
        {/* <div>
                <p className="wrap-anywhere">GitHub - {repo.full_name}</p>
              </div> */}
      </div>
    </a>
  );
}

const cardStyle: React.CSSProperties = {
  display: "block",
  backgroundColor: "inherit",
  width: "320px",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "16px",
  textDecoration: "none",
  color: "inherit",
  fontFamily: "sans-serif",
};
