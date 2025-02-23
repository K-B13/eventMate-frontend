let apiUrl;
const expressPort = 5002;
const apiUrls = {
  development: `http://localhost:${expressPort}/api`,
  production: `https://eventmate.herokuapp.com/api`
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

module.exports = { apiUrl }