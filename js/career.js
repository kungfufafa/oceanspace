document.addEventListener('DOMContentLoaded', () => {
  const jobsLoading = document.getElementById('jobs-loading');
  const jobsEmpty = document.getElementById('jobs-empty');
  const jobsError = document.getElementById('jobs-error');
  const jobsContainer = document.getElementById('jobs-container');
  const jobsRetry = document.getElementById('jobs-retry');
  const jobsErrorMessage = document.getElementById('jobs-error-message');

  const api = window.OceanSpaceCareerApi;
  const notifyMotionRefresh = () => {
    window.dispatchEvent(new CustomEvent('oceanspace:motion-refresh'));
  };

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

  const renderJobs = (jobs) => {
    jobsContainer.innerHTML = '';

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

  const fetchJobs = async () => {
    try {
      jobsLoading.classList.remove('hidden');
      jobsError.classList.add('hidden');
      jobsEmpty.classList.add('hidden');
      jobsContainer.classList.add('hidden');
      jobsContainer.innerHTML = '';

      const payload = await api.listJobs();
      const jobs = payload.data;

      if (!jobs || jobs.length === 0) {
        jobsEmpty.classList.remove('hidden');
        notifyMotionRefresh();
      } else {
        renderJobs(jobs);
        jobsContainer.classList.remove('hidden');
      }
    } catch (error) {
      if (jobsErrorMessage) {
        jobsErrorMessage.textContent = 'Daftar lowongan online sedang tidak tersedia. Silakan coba lagi atau hubungi tim kami untuk menyampaikan minat.';
      }
      jobsError.classList.remove('hidden');
      notifyMotionRefresh();
    } finally {
      jobsLoading.classList.add('hidden');
    }
  };

  if (jobsRetry) {
    jobsRetry.addEventListener('click', fetchJobs);
  }

  fetchJobs();
});
