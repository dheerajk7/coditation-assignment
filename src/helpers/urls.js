//api.github.com/search/users?q=dhe+in:user&per_page=100

// base url of API
const API_ROOT = 'https://api.github.com';

// generating different url with base url for different use
export const APIUrls = {
  searchUser: (pattern) =>
    `${API_ROOT}/search/users?q=${pattern}+in:user&per_page=100`,
  searchUserDetail: (username) => `${API_ROOT}/users/${username}`,
};
