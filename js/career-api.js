(function () {
  var DEFAULT_REMOTE_BASE_URL = 'https://cesa.mekayastudio.com/api';
  var LOCAL_MOCK_BASE_URL = '/api';
  var isLocalHost = ['127.0.0.1', 'localhost'].includes(window.location.hostname);
  var configuredBaseUrl = typeof window.__OCEANSPACE_API_BASE_URL__ === 'string'
    ? window.__OCEANSPACE_API_BASE_URL__.trim()
    : '';
  var shouldUseInlineJobsApi = isLocalHost
    && !!window.__OCEANSPACE_USE_INLINE_JOBS_API__
    && !window.__OCEANSPACE_FORCE_NETWORK_JOBS__;
  var BASE_URL = normalizeBaseUrl(
    configuredBaseUrl || (isLocalHost && window.__OCEANSPACE_FORCE_NETWORK_JOBS__
      ? LOCAL_MOCK_BASE_URL
      : DEFAULT_REMOTE_BASE_URL)
  );

  var inlineJobsPayload = {
    success: true,
    message: 'Daftar lowongan berhasil diambil.',
    data: [
      {
        title: 'Retail Operations Officer',
        slug: 'retail-operations-officer',
        location: 'Semarang, Indonesia',
        thumbnail_url: '/storage/rekrutmen/job-postings/retail-operations-officer-thumb.jpg',
        closing_date: '2026-12-15',
      },
      {
        title: 'Management Trainee Operasional',
        slug: 'management-trainee-operasional',
        location: 'Cirebon, Indonesia',
        thumbnail_url: '/storage/rekrutmen/job-postings/management-trainee-operasional-thumb.jpg',
        closing_date: '2027-01-01',
      }
    ]
  };

  var inlineJobDetails = {
    'retail-operations-officer': {
      success: true,
      message: 'Detail lowongan berhasil diambil.',
      data: {
        title: 'Retail Operations Officer',
        slug: 'retail-operations-officer',
        description: 'Menjalankan standar operasional retail harian, memastikan kesiapan toko, dan menjaga pengalaman pelanggan tetap konsisten.',
        requirements: 'Pengalaman retail atau operasional menjadi nilai tambah.\nKomunikatif, teliti, dan nyaman bekerja dengan target.\nSiap ditempatkan sesuai kebutuhan operasional.',
        location: 'Semarang, Indonesia',
        thumbnail_path: 'rekrutmen/job-postings/retail-operations-officer-thumb.jpg',
        closing_date: '2026-12-15',
        thumbnail_url: '/storage/rekrutmen/job-postings/retail-operations-officer-thumb.jpg',
        application_form: [
          { name: 'full_name', label: 'Nama Lengkap', type: 'text', required: true },
          { name: 'email', label: 'Email', type: 'email', required: true },
          {
            name: 'gender',
            label: 'Jenis Kelamin',
            type: 'select',
            required: true,
            options: [
              { value: 'male', label: 'Laki-laki' },
              { value: 'female', label: 'Perempuan' }
            ]
          },
          { name: 'birth_date', label: 'Tanggal Lahir', type: 'date', required: true },
          {
            name: 'marital_status',
            label: 'Status',
            type: 'select',
            required: true,
            options: [
              { value: 'single', label: 'Single' },
              { value: 'married', label: 'Married' },
              { value: 'divorced', label: 'Divorced' }
            ]
          },
          { name: 'address_ktp', label: 'Alamat KTP', type: 'textarea', required: true },
          { name: 'address_domicile', label: 'Alamat Domisili', type: 'textarea', required: true },
          { name: 'whatsapp_number', label: 'No. WhatsApp', type: 'text', required: true },
          { name: 'active_phone', label: 'No. Telp Aktif', type: 'text', required: true },
          { name: 'emergency_contact_name', label: 'Nama Kontak Darurat', type: 'text', required: true },
          { name: 'emergency_contact_relation', label: 'Hubungan Kontak Darurat', type: 'text', required: true },
          { name: 'emergency_contact_phone', label: 'No. Kontak Darurat', type: 'text', required: true },
          { name: 'photo', label: 'Photo', type: 'file', required: true },
          { name: 'resume', label: 'CV/Resume', type: 'file', required: true }
        ],
      }
    },
    'management-trainee-operasional': {
      success: true,
      message: 'Detail lowongan berhasil diambil.',
      data: {
        title: 'Management Trainee Operasional',
        slug: 'management-trainee-operasional',
        description: 'Program pengembangan untuk talenta yang ingin memahami ritme operasional Ocean Space secara end-to-end.',
        requirements: 'Terbuka untuk lulusan baru atau pengalaman awal.\nMampu belajar cepat, disiplin, dan siap mobile.\nBersedia mengikuti rotasi pembelajaran lintas fungsi.',
        location: 'Cirebon, Indonesia',
        thumbnail_path: 'rekrutmen/job-postings/management-trainee-operasional-thumb.jpg',
        closing_date: '2027-01-01',
        thumbnail_url: '/storage/rekrutmen/job-postings/management-trainee-operasional-thumb.jpg',
        application_form: [
          { name: 'full_name', label: 'Nama Lengkap', type: 'text', required: true },
          { name: 'email', label: 'Email', type: 'email', required: true },
          {
            name: 'gender',
            label: 'Jenis Kelamin',
            type: 'select',
            required: true,
            options: [
              { value: 'male', label: 'Laki-laki' },
              { value: 'female', label: 'Perempuan' }
            ]
          },
          { name: 'birth_date', label: 'Tanggal Lahir', type: 'date', required: true },
          {
            name: 'marital_status',
            label: 'Status',
            type: 'select',
            required: true,
            options: [
              { value: 'single', label: 'Single' },
              { value: 'married', label: 'Married' },
              { value: 'divorced', label: 'Divorced' }
            ]
          },
          { name: 'address_ktp', label: 'Alamat KTP', type: 'textarea', required: true },
          { name: 'address_domicile', label: 'Alamat Domisili', type: 'textarea', required: true },
          { name: 'whatsapp_number', label: 'No. WhatsApp', type: 'text', required: true },
          { name: 'active_phone', label: 'No. Telp Aktif', type: 'text', required: true },
          { name: 'emergency_contact_name', label: 'Nama Kontak Darurat', type: 'text', required: true },
          { name: 'emergency_contact_relation', label: 'Hubungan Kontak Darurat', type: 'text', required: true },
          { name: 'emergency_contact_phone', label: 'No. Kontak Darurat', type: 'text', required: true },
          { name: 'photo', label: 'Photo', type: 'file', required: true },
          { name: 'resume', label: 'CV/Resume', type: 'file', required: true }
        ],
      }
    }
  };

  function createInlineJsonUrl(payload) {
    return 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(payload));
  }

  function normalizeBaseUrl(url) {
    return String(url || '').replace(/\/+$/, '');
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

  async function listJobs() {
    var url = shouldUseInlineJobsApi ? createInlineJsonUrl(inlineJobsPayload) : BASE_URL + '/jobs';
    return fetchJson(url, {
      headers: { 'Accept': 'application/json' }
    });
  }

  async function getJobDetail(slug) {
    var inlinePayload = shouldUseInlineJobsApi ? inlineJobDetails[slug] : null;
    var url = inlinePayload ? createInlineJsonUrl(inlinePayload) : BASE_URL + '/jobs/' + slug;
    return fetchJson(url, {
      headers: { 'Accept': 'application/json' }
    });
  }

  async function applyToJob(slug, formData) {
    if (shouldUseInlineJobsApi) {
      return {
        success: true,
        message: 'Lamaran berhasil dikirim.',
        data: {
          job_slug: slug,
          applicant_name: String(formData.get('full_name') || 'Kandidat').toUpperCase(),
          applicant_email: formData.get('email') || '',
          status: 'in_progress'
        }
      };
    }

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

  function hasInlineJob(slug) {
    return !!inlineJobDetails[slug];
  }

  window.OceanSpaceCareerApi = {
    listJobs: listJobs,
    getJobDetail: getJobDetail,
    applyToJob: applyToJob,
    hasInlineJob: hasInlineJob,
    shouldUseInlineJobsApi: shouldUseInlineJobsApi,
    baseUrl: BASE_URL
  };
})();
