export interface Repository {
  id?: number;
  name?: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
    repos_url?: string;
  }
}
