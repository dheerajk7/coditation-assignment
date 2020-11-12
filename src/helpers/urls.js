// base url of API
const API_ROOT = 'https://api.github.com';

// generating different url with base url for different use
export const APIUrls = {
  searchUser: (pattern) =>
    `${API_ROOT}/search/users?q=${pattern}+in:user&per_page=100`,
  searchUserDetail: (username) => `${API_ROOT}/users/${username}`,
  searchRepoDetail: (username, repoName) =>
    `${API_ROOT}/repos/${username}/${repoName}`,
  commitsUrl: (username, repoName) =>
    `${API_ROOT}/repos/${username}/${repoName}/commits`,
};
