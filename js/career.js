document.addEventListener('DOMContentLoaded', () => {
  const jobsLoading = document.getElementById('jobs-loading');
  const jobsEmpty = document.getElementById('jobs-empty');
  const jobsError = document.getElementById('jobs-error');
  const jobsContainer = document.getElementById('jobs-container');
  const jobsRetry = document.getElementById('jobs-retry');
  const jobsErrorMessage = document.getElementById('jobs-error-message');
  const jobsFilters = document.getElementById('jobs-filters');
  const jobsSearchInput = document.getElementById('jobs-search');
  const jobsLocationInput = document.getElementById('jobs-location');
  const jobsResetButton = document.getElementById('jobs-reset');
  const jobsResultsMeta = document.getElementById('jobs-results-meta');
  const jobsLoadMoreWrap = document.getElementById('jobs-load-more-wrap');
  const jobsLoadMoreButton = document.getElementById('jobs-load-more');
  const jobsLoadMoreStatus = document.getElementById('jobs-load-more-status');

  const api = window.OceanSpaceCareerApi;
  const defaultPerPage = 6;
  const state = {
    jobs: [],
    filters: getInitialFilters(),
    meta: null,
    links: null,
    nextUrl: null,
    isLoading: false,
    isLoadingMore: false,
  };

  const notifyMotionRefresh = () => {
    window.dispatchEvent(new CustomEvent('oceanspace:motion-refresh'));
  };

  function getInitialFilters() {
    const params = new URLSearchParams(window.location.search);
    return {
      search: (params.get('search') || params.get('q') || '').trim(),
      location: (params.get('location') || '').trim(),
    };
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const escapeHtml = (unsafe) => {
    return (unsafe || '').toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  const getApplyUrl = (slug) => `career-apply.html?job=${encodeURIComponent(slug)}`;

  const syncFilterInputs = () => {
    if (jobsSearchInput) {
      jobsSearchInput.value = state.filters.search;
    }

    if (jobsLocationInput) {
      jobsLocationInput.value = state.filters.location;
    }
  };

  const syncBrowserUrl = () => {
    const url = new URL(window.location.href);

    if (state.filters.search) {
      url.searchParams.set('search', state.filters.search);
    } else {
      url.searchParams.delete('search');
      url.searchParams.delete('q');
    }

    if (state.filters.location) {
      url.searchParams.set('location', state.filters.location);
    } else {
      url.searchParams.delete('location');
    }

    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  };

  const setLoadMoreState = ({ visible, disabled, buttonLabel, statusMessage }) => {
    if (!jobsLoadMoreWrap || !jobsLoadMoreButton || !jobsLoadMoreStatus) {
      return;
    }

    jobsLoadMoreWrap.classList.toggle('hidden', !visible);
    jobsLoadMoreWrap.classList.toggle('flex', visible);
    jobsLoadMoreButton.disabled = Boolean(disabled);
    jobsLoadMoreButton.textContent = buttonLabel || 'Muat lebih banyak';
    jobsLoadMoreStatus.textContent = statusMessage || '';
  };

  const updateResultsMeta = () => {
    if (!jobsResultsMeta) {
      return;
    }

    const parts = [];

    if (state.filters.search) {
      parts.push(`kata kunci "${state.filters.search}"`);
    }

    if (state.filters.location) {
      parts.push(`lokasi "${state.filters.location}"`);
    }

    if (!state.jobs.length) {
      jobsResultsMeta.textContent = parts.length
        ? `Belum ada posisi yang cocok untuk ${parts.join(' dan ')}.`
        : 'Menampilkan posisi terbaru dari Ocean Space.';
      return;
    }

    const paginationText = state.meta
      ? `Menampilkan ${state.jobs.length} posisi hingga halaman ${state.meta.current_page}.`
      : `Menampilkan ${state.jobs.length} posisi.`;

    jobsResultsMeta.textContent = parts.length
      ? `${paginationText} Filter aktif: ${parts.join(' dan ')}.`
      : paginationText;
  };

  const renderJobs = (jobs, options = {}) => {
    if (!options.append) {
      jobsContainer.innerHTML = '';
    }

    jobs.forEach((job) => {
      const card = document.createElement('article');
      card.className = 'comparison-card group flex h-full flex-col justify-between';
      card.setAttribute('data-motion-reveal', 'card');
      card.setAttribute('data-motion-card', 'true');

      const thumb = job.thumbnail_url
        ? `<div class="aspect-[16/10] w-full overflow-hidden border-b border-black/10 bg-[#eef4ff]"><img src="${escapeHtml(job.thumbnail_url)}" alt="${escapeHtml(job.title)}" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy"></div>`
        : `<div class="aspect-[16/10] w-full overflow-hidden border-b border-black/10 bg-[#eef4ff]"><img src="images/career-fallback.png" alt="Posisi Terbuka Ocean Space" class="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy"></div>`;

      card.innerHTML = `
        ${thumb}
        <div class="flex flex-1 flex-col px-5 py-5">
          <div class="flex-1">
            <p class="card-kicker">Posisi Terbuka</p>
            <h3 class="mt-3 font-display text-[1.55rem] font-semibold tracking-[-0.04em] text-[#171a22]">${escapeHtml(job.title)}</h3>
            <div class="mt-4 flex flex-col gap-2 text-[13px] text-[#556070]">
              <span class="inline-flex items-center gap-2"><svg class="h-4 w-4 shrink-0 text-[#006AFF]" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>${escapeHtml(job.location)}</span>
              <span class="inline-flex items-center gap-2"><svg class="h-4 w-4 shrink-0 text-orange-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Ditutup ${formatDate(job.closing_date)}</span>
            </div>
          </div>
          <div class="mt-6 flex flex-col gap-3 border-t border-black/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <span class="text-sm font-medium leading-6 text-[#243041]">Lihat detail posisi, kualifikasi, dan lanjutkan lamaran.</span>
            <a href="${getApplyUrl(job.slug)}" data-job-link="${escapeHtml(job.slug)}" data-motion-cta="true" class="button-primary sm:shrink-0">Lihat detail & lamar</a>
          </div>
        </div>
      `;

      jobsContainer.appendChild(card);
    });

    notifyMotionRefresh();
  };

  const updateLoadMoreControls = () => {
    const hasMorePages = Boolean(state.meta && state.meta.has_more_pages && state.nextUrl);

    if (!state.jobs.length) {
      setLoadMoreState({
        visible: false,
        disabled: true,
        buttonLabel: 'Muat lebih banyak',
        statusMessage: '',
      });
      return;
    }

    if (state.isLoadingMore) {
      setLoadMoreState({
        visible: true,
        disabled: true,
        buttonLabel: 'Memuat...',
        statusMessage: 'Mengambil halaman berikutnya.',
      });
      return;
    }

    if (hasMorePages) {
      setLoadMoreState({
        visible: true,
        disabled: false,
        buttonLabel: 'Muat lebih banyak',
        statusMessage: 'Masih ada lowongan lain yang bisa ditampilkan.',
      });
      return;
    }

    setLoadMoreState({
      visible: true,
      disabled: true,
      buttonLabel: 'Semua tampil',
      statusMessage: 'Semua lowongan yang tersedia untuk filter ini sudah ditampilkan.',
    });
  };

  const applyPayloadState = (payload, options = {}) => {
    const jobs = Array.isArray(payload && payload.data) ? payload.data : [];

    state.jobs = options.append ? state.jobs.concat(jobs) : jobs.slice();
    state.meta = payload && payload.meta ? payload.meta : null;
    state.links = payload && payload.links ? payload.links : null;
    state.nextUrl = state.links && state.links.next ? state.links.next : null;
  };

  const renderCurrentState = () => {
    if (!state.jobs.length) {
      jobsContainer.classList.add('hidden');
      jobsEmpty.classList.remove('hidden');
      updateResultsMeta();
      updateLoadMoreControls();
      notifyMotionRefresh();
      return;
    }

    jobsEmpty.classList.add('hidden');
    jobsContainer.classList.remove('hidden');
    renderJobs(state.jobs);
    updateResultsMeta();
    updateLoadMoreControls();
  };

  const fetchJobs = async (options = {}) => {
    const append = Boolean(options.append);
    const requestOptions = append
      ? { nextUrl: state.nextUrl }
      : {
          search: state.filters.search,
          location: state.filters.location,
          per_page: defaultPerPage,
          page: 1,
        };

    try {
      if (append) {
        if (!state.nextUrl || state.isLoadingMore) {
          return;
        }

        state.isLoadingMore = true;
        updateLoadMoreControls();
      } else {
        if (state.isLoading) {
          return;
        }

        state.isLoading = true;
        jobsLoading.classList.remove('hidden');
        jobsError.classList.add('hidden');
        jobsEmpty.classList.add('hidden');
        jobsContainer.classList.add('hidden');
        jobsContainer.innerHTML = '';
        setLoadMoreState({
          visible: false,
          disabled: true,
          buttonLabel: 'Muat lebih banyak',
          statusMessage: '',
        });
      }

      const payload = await api.listJobs(requestOptions);
      applyPayloadState(payload, { append });

      if (!append) {
        syncBrowserUrl();
      }

      renderCurrentState();
    } catch (error) {
      if (append) {
        setLoadMoreState({
          visible: true,
          disabled: false,
          buttonLabel: 'Coba lagi',
          statusMessage: 'Halaman berikutnya belum berhasil dimuat. Coba lagi.',
        });
        return;
      }

      if (jobsErrorMessage) {
        jobsErrorMessage.textContent = 'Daftar lowongan online sedang tidak tersedia. Silakan coba lagi atau hubungi tim kami untuk menyampaikan minat.';
      }
      jobsError.classList.remove('hidden');
      updateResultsMeta();
      notifyMotionRefresh();
    } finally {
      if (append) {
        state.isLoadingMore = false;
      } else {
        state.isLoading = false;
        jobsLoading.classList.add('hidden');
      }

      updateLoadMoreControls();
    }
  };

  if (jobsRetry) {
    jobsRetry.addEventListener('click', () => {
      fetchJobs();
    });
  }

  if (jobsFilters) {
    jobsFilters.addEventListener('submit', (event) => {
      event.preventDefault();
      state.filters.search = (jobsSearchInput && jobsSearchInput.value ? jobsSearchInput.value : '').trim();
      state.filters.location = (jobsLocationInput && jobsLocationInput.value ? jobsLocationInput.value : '').trim();
      fetchJobs();
    });
  }

  if (jobsResetButton) {
    jobsResetButton.addEventListener('click', () => {
      state.filters.search = '';
      state.filters.location = '';
      syncFilterInputs();
      fetchJobs();
    });
  }

  if (jobsLoadMoreButton) {
    jobsLoadMoreButton.addEventListener('click', () => {
      fetchJobs({ append: true });
    });
  }

  syncFilterInputs();
  updateResultsMeta();
  fetchJobs();
});
