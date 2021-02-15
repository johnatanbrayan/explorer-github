export interface RepositoryModel {
  id?: number;
  name?: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
    repos_url?: string;
  };
}
