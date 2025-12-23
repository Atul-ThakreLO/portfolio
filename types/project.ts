/**
 * Represents a project in the portfolio
 */
export interface Project {
  name: string;
  description: string;
  github: string;
  url: string | undefined;
}

/**
 * GitHub repository data from GitHub API
 */
export interface GitHubRepoData {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  full_name: string;
  language: string | null;
  owner: {
    login: string;
    avatar_url: string;
  };
}

/**
 * Props for components that receive project details
 */
export interface ProjectCardProps {
  details: Project;
}

/**
 * Props for GitHub repository card
 */
export interface GitHubRepoCardProps {
  repoUrl: string;
}
