(function () {
  var DEFAULT_REMOTE_BASE_URL = 'https://cesa.completeselular.com/api';
  var configuredBaseUrl = typeof window.__OCEANSPACE_API_BASE_URL__ === 'string'
    ? window.__OCEANSPACE_API_BASE_URL__.trim()
    : '';
  var BASE_URL = normalizeBaseUrl(configuredBaseUrl || DEFAULT_REMOTE_BASE_URL);

  function normalizeBaseUrl(url) {
    return String(url || '').replace(/\/+$/, '');
  }

  function buildQueryString(params) {
    var searchParams = new URLSearchParams();

    Object.keys(params || {}).forEach(function (key) {
      var value = params[key];

      if (value === undefined || value === null) {
        return;
      }

      var normalizedValue = typeof value === 'string' ? value.trim() : value;

      if (normalizedValue === '') {
        return;
      }

      searchParams.set(key, String(normalizedValue));
    });

    var queryString = searchParams.toString();
    return queryString ? '?' + queryString : '';
  }

  function createApiError(message, status, payload) {
    var error = new Error(message || 'Request gagal');
    error.status = status;
    error.payload = payload;
    return error;
  }

  async function parseJsonResponse(response) {
    var text = await response.text();

    if (!text) {
      return {};
    }

    try {
      return JSON.parse(text);
    } catch (error) {
      throw createApiError('Respons API tidak valid', response.status, {
        success: false,
        raw: text
      });
    }
  }

  async function fetchJson(url, options) {
    var response = await fetch(url, options);
    var payload = await parseJsonResponse(response);

    if (!response.ok || !payload.success) {
      throw createApiError(payload.message || 'Request gagal', response.status, payload);
    }

    return payload;
  }

  async function listJobs(options) {
    var requestUrl = options && typeof options.nextUrl === 'string' && options.nextUrl.trim()
      ? options.nextUrl.trim()
      : BASE_URL + '/jobs' + buildQueryString(options);

    return fetchJson(requestUrl, {
      headers: { 'Accept': 'application/json' }
    });
  }

  async function getJobDetail(slug) {
    return fetchJson(BASE_URL + '/jobs/' + slug, {
      headers: { 'Accept': 'application/json' }
    });
  }

  async function applyToJob(slug, formData) {
    var response = await fetch(BASE_URL + '/jobs/' + slug + '/apply', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    var payload = await parseJsonResponse(response);

    if (!response.ok || !payload.success) {
      throw createApiError(payload.message || 'Request gagal', response.status, payload);
    }

    return payload;
  }

  window.OceanSpaceCareerApi = {
    listJobs: listJobs,
    getJobDetail: getJobDetail,
    applyToJob: applyToJob,
    baseUrl: BASE_URL
  };
})();
