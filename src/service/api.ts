import axios from 'axios';

/**
 * --Interesting url of API GitHub
 * "repository_url": "https://api.github.com/repos/{owner}/{repo}"
 * "repository_search_url": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}",
 * "user_url": "https://api.github.com/users/{user}",
 * "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
 * "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
 * "code_search_url": "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
 */
const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
