// API base URL — change BRIDGE_API_URL to your Render backend URL before deploying
window.BRIDGE_API = (function() {
  // If running on localhost, hit local backend
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    return 'http://localhost:5000/api';
  }
  // Production: your Render backend URL (update this after deploying)
  return 'https://bridge-law-api.onrender.com/api';
})();
