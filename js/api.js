// Frontend API client — wraps all fetch calls to the backend
(function(global) {
  const BASE = () => global.BRIDGE_API || 'http://localhost:5000/api';

  function getToken() {
    return sessionStorage.getItem('adminToken');
  }

  async function request(path, opts = {}) {
    const token = getToken();
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = 'Bearer ' + token;

    let res;
    try {
      res = await fetch(BASE() + path, { ...opts, headers });
    } catch {
      throw new Error('Network error — backend may be offline');
    }

    if (res.status === 401) {
      sessionStorage.removeItem('adminToken');
      // If we're in the admin area, redirect to login
      if (location.pathname.includes('/admin/')) {
        location.href = '/admin/login.html';
      }
      throw new Error('Session expired — please log in again');
    }

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Request failed');
    return data;
  }

  const API = {
    // ── Auth ──────────────────────────────────────────────────────────────────
    async login(username, password) {
      const data = await request('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password })
      });
      sessionStorage.setItem('adminToken', data.token);
      return data;
    },

    logout() {
      sessionStorage.removeItem('adminToken');
      location.href = '/admin/login.html';
    },

    isLoggedIn() {
      return !!getToken();
    },

    async verifyToken() {
      try {
        await request('/auth/verify', { method: 'POST' });
        return true;
      } catch {
        return false;
      }
    },

    // ── Public data ───────────────────────────────────────────────────────────
    async getAllData() {
      return request('/data');
    },

    // ── Firm ──────────────────────────────────────────────────────────────────
    async updateFirm(firmData) {
      return request('/firm', { method: 'PUT', body: JSON.stringify(firmData) });
    },

    async updateStats(statsArray) {
      return request('/stats', { method: 'PUT', body: JSON.stringify(statsArray) });
    },

    // ── Attorneys ─────────────────────────────────────────────────────────────
    async getAttorneys() {
      return request('/attorneys');
    },
    async createAttorney(data) {
      return request('/attorneys', { method: 'POST', body: JSON.stringify(data) });
    },
    async updateAttorney(id, data) {
      return request('/attorneys/' + id, { method: 'PUT', body: JSON.stringify(data) });
    },
    async deleteAttorney(id) {
      return request('/attorneys/' + id, { method: 'DELETE' });
    },

    // ── News ──────────────────────────────────────────────────────────────────
    async getNews() {
      return request('/news');
    },
    async createNews(data) {
      return request('/news', { method: 'POST', body: JSON.stringify(data) });
    },
    async updateNews(id, data) {
      return request('/news/' + id, { method: 'PUT', body: JSON.stringify(data) });
    },
    async deleteNews(id) {
      return request('/news/' + id, { method: 'DELETE' });
    },

    // ── Testimonials ──────────────────────────────────────────────────────────
    async getTestimonials() {
      return request('/testimonials');
    },
    async createTestimonial(data) {
      return request('/testimonials', { method: 'POST', body: JSON.stringify(data) });
    },
    async updateTestimonial(id, data) {
      return request('/testimonials/' + id, { method: 'PUT', body: JSON.stringify(data) });
    },
    async deleteTestimonial(id) {
      return request('/testimonials/' + id, { method: 'DELETE' });
    },

    // ── Careers ───────────────────────────────────────────────────────────────
    async getCareers() {
      return request('/careers');
    },
    async createCareer(data) {
      return request('/careers', { method: 'POST', body: JSON.stringify(data) });
    },
    async updateCareer(id, data) {
      return request('/careers/' + id, { method: 'PUT', body: JSON.stringify(data) });
    },
    async deleteCareer(id) {
      return request('/careers/' + id, { method: 'DELETE' });
    },

    // ── Practice Areas ────────────────────────────────────────────────────────
    async getPracticeAreas() {
      return request('/practice-areas');
    },
    async updatePracticeArea(id, data) {
      return request('/practice-areas/' + id, { method: 'PUT', body: JSON.stringify(data) });
    }
  };

  global.BridgeAPI = API;
})(window);
