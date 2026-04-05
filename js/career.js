document.addEventListener('DOMContentLoaded', () => {
  const BASE_URL = 'https://cesa.completeselular.com/api';

  // Elements
  const jobsLoading = document.getElementById('jobs-loading');
  const jobsEmpty = document.getElementById('jobs-empty');
  const jobsError = document.getElementById('jobs-error');
  const jobsContainer = document.getElementById('jobs-container');
  const jobsRetry = document.getElementById('jobs-retry');
  
  const jobModal = document.getElementById('job-modal');
  const jobModalBackdrop = document.getElementById('job-modal-backdrop');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('job-modal-content');

  // Utility to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const escapeHtml = (unsafe) => {
    return (unsafe || '').toString()
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
  };

  // Fetch jobs
  const fetchJobs = async () => {
    try {
      jobsLoading.classList.remove('hidden');
      jobsError.classList.add('hidden');
      jobsEmpty.classList.add('hidden');
      jobsContainer.classList.add('hidden');

      const response = await fetch(`${BASE_URL}/jobs`, {
        headers: { 'Accept': 'application/json' }
      });
      const payload = await response.json();

      if (!response.ok || !payload.success) {
        throw new Error(payload.message || 'Error fetching jobs');
      }

      const jobs = payload.data;

      if (!jobs || jobs.length === 0) {
        jobsEmpty.classList.remove('hidden');
      } else {
        renderJobs(jobs);
        jobsContainer.classList.remove('hidden');
      }
    } catch (error) {
      console.error(error);
      jobsError.classList.remove('hidden');
    } finally {
      jobsLoading.classList.add('hidden');
    }
  };

  // Render Job Cards
  const renderJobs = (jobs) => {
    jobsContainer.innerHTML = '';
    jobs.forEach(job => {
      const card = document.createElement('div');
      card.className = 'comparison-card group flex h-full flex-col justify-between';
      
      const thumb = job.thumbnail_url 
        ? `<div class="aspect-[16/10] w-full overflow-hidden border-b border-black/10 bg-[#eef4ff]"><img src="${escapeHtml(job.thumbnail_url)}" alt="${escapeHtml(job.title)}" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy"></div>`
        : `<div class="aspect-[16/10] w-full border-b border-black/10 bg-[#eef4ff] flex items-center justify-center text-[#91a4c8]"><svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>`;

      card.innerHTML = `
        ${thumb}
        <div class="flex flex-1 flex-col px-5 py-5 cursor-pointer" onclick="document.querySelector('[data-slug=\\'${escapeHtml(job.slug)}\\']').click()">
          <div class="flex-1">
            <p class="card-kicker">Posisi Terbuka</p>
            <h3 class="mt-3 font-display text-[1.55rem] font-semibold tracking-[-0.04em] text-[#171a22]">${escapeHtml(job.title)}</h3>
            <div class="mt-4 flex flex-col gap-2 text-[13px] text-[#556070]">
              <span class="inline-flex items-center gap-2"><svg class="h-4 w-4 shrink-0 text-[#006AFF]" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>${escapeHtml(job.location)}</span>
              <span class="inline-flex items-center gap-2"><svg class="h-4 w-4 shrink-0 text-orange-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Ditutup ${formatDate(job.closing_date)}</span>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between gap-3 border-t border-black/10 pt-4">
            <span class="text-sm font-medium text-[#243041]">Lihat detail dan kualifikasi</span>
            <button type="button" data-slug="${escapeHtml(job.slug)}" class="btn-detail button-primary !min-h-[40px] !px-4 !py-2" onclick="event.stopPropagation()">Lamar</button>
          </div>
        </div>
      `;
      jobsContainer.appendChild(card);
    });

    document.querySelectorAll('.btn-detail').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const slug = e.currentTarget.getAttribute('data-slug');
        openModal(slug);
      });
    });
  };

  // Modal logic
  const closeModal = () => {
    jobModal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  closeModalBtn.addEventListener('click', closeModal);
  jobModalBackdrop.addEventListener('click', closeModal);

  // Load Job Detail
  const openModal = async (slug) => {
    jobModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    modalTitle.textContent = 'Memuat Informasi...';
    modalContent.innerHTML = `
      <div class="flex flex-col items-center justify-center space-y-4 py-16 text-center text-black/50">
        <svg class="h-8 w-8 text-[#006AFF]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    `;

    try {
      const response = await fetch(`${BASE_URL}/jobs/${slug}`, {
        headers: { 'Accept': 'application/json' }
      });
      const payload = await response.json();

      if (!response.ok || !payload.success) {
        throw new Error(payload.message || 'Error fetching job details');
      }

      renderJobDetail(payload.data);
    } catch (error) {
      console.error(error);
      modalTitle.textContent = 'Terjadi Kesalahan';
      modalContent.innerHTML = `
        <div class="rounded-xl bg-red-50 p-6 text-sm text-red-600 border border-red-100 flex items-start gap-3">
          <svg class="h-5 w-5 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <p>Gagal memuat detail pekerjaan. Silakan tutup dan coba lagi nanti.</p>
        </div>
      `;
    }
  };

  const renderJobDetail = (job) => {
    modalTitle.textContent = `Lamar: ${job.title}`;
    
    // Parse description and requirements preserving newlines
    const descHTML = escapeHtml(job.description).replace(/\n/g, '<br>');
    const reqHTML = escapeHtml(job.requirements).replace(/\n/g, '<br>');

    let html = `
      <div class="space-y-8">
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-[#006AFF]">Deskripsi Pekerjaan</h4>
          <p class="mt-3 text-[15px] leading-relaxed text-black/80">${descHTML}</p>
        </div>
        
        ${job.requirements ? `
          <div>
            <h4 class="text-sm font-semibold uppercase tracking-wider text-[#006AFF]">Kualifikasi</h4>
            <div class="mt-3 text-[15px] leading-relaxed text-black/80 pl-4 space-y-1">
              ${reqHTML}
            </div>
          </div>
        ` : ''}

        <hr class="border-black/10">

        <div id="apply-section">
          <h4 class="font-display text-xl font-bold text-black mb-6">Kirim Lamaran</h4>
          <div id="form-alerts"></div>
          <form id="apply-form" data-slug="${escapeHtml(job.slug)}" class="space-y-5" enctype="multipart/form-data">
    `;

    if(job.application_form && job.application_form.length > 0) {
      job.application_form.forEach(field => {
        let fieldHtml = '';
        const isRequired = field.required ? 'required' : '';
        const reqAsterisk = field.required ? '<span class="text-red-500">*</span>' : '<span class="text-black/40 text-xs font-normal ml-1">(Opsional)</span>';
        
        const labelClass = "block text-sm font-medium text-black/80 mb-2";
        const inputClass = "block w-full rounded-md border border-black/20 bg-white px-3 py-2 text-sm text-black placeholder-black/30 focus:border-[#006AFF] focus:outline-none focus:ring-1 focus:ring-[#006AFF]";

        if (field.type === 'select') {
          let optionsHtml = `<option value="">-- Pilih ${escapeHtml(field.label)} --</option>`;
          if (field.options) {
            field.options.forEach(opt => {
              optionsHtml += `<option value="${escapeHtml(opt.value)}">${escapeHtml(opt.label)}</option>`;
            });
          }
          fieldHtml = `
            <div>
              <label class="${labelClass}">${escapeHtml(field.label)} ${reqAsterisk}</label>
              <select name="${escapeHtml(field.name)}" class="${inputClass}" ${isRequired}>
                ${optionsHtml}
              </select>
              <p class="mt-1 hidden text-xs text-red-500" id="error-${escapeHtml(field.name)}"></p>
            </div>
          `;
        } else if (field.type === 'textarea') {
          fieldHtml = `
            <div>
              <label class="${labelClass}">${escapeHtml(field.label)} ${reqAsterisk}</label>
              <textarea name="${escapeHtml(field.name)}" rows="3" class="${inputClass}" ${isRequired}></textarea>
              <p class="mt-1 hidden text-xs text-red-500" id="error-${escapeHtml(field.name)}"></p>
            </div>
          `;
        } else if (field.type === 'file' || field.name === 'photo' || field.name === 'resume') {
          // Explicit override for known file fields if API wrongly typed as text
          const acceptTypes = field.name === 'photo' ? '.jpg,.jpeg,.png,.webp' : (field.name === 'resume' ? '.pdf,.doc,.docx' : '.pdf,.doc,.docx,.jpg,.jpeg,.png,.webp');
          fieldHtml = `
            <div>
              <label class="${labelClass}">${escapeHtml(field.label)} ${reqAsterisk}</label>
              <input type="file" name="${escapeHtml(field.name)}" class="block w-full text-sm text-black/80 file:mr-4 file:rounded-md file:border-0 file:bg-black/5 file:px-4 file:py-2 file:text-sm file:font-medium hover:file:bg-black/10 focus:outline-none" ${isRequired} accept="${acceptTypes}">
              <p class="mt-1 hidden text-xs text-red-500" id="error-${escapeHtml(field.name)}"></p>
            </div>
          `;
        } else if (field.type === 'date') {
          fieldHtml = `
            <div>
              <label class="${labelClass}">${escapeHtml(field.label)} ${reqAsterisk}</label>
              <input type="date" name="${escapeHtml(field.name)}" class="${inputClass}" ${isRequired}>
              <p class="mt-1 hidden text-xs text-red-500" id="error-${escapeHtml(field.name)}"></p>
            </div>
          `;
        } else {
          fieldHtml = `
            <div>
              <label class="${labelClass}">${escapeHtml(field.label)} ${reqAsterisk}</label>
              <input type="${escapeHtml(field.type)}" name="${escapeHtml(field.name)}" class="${inputClass}" ${isRequired}>
              <p class="mt-1 hidden text-xs text-red-500" id="error-${escapeHtml(field.name)}"></p>
            </div>
          `;
        }

        html += fieldHtml;
      });
    }

    html += `
            <div class="pt-6">
              <button type="submit" id="btn-submit" class="flex w-full items-center justify-center rounded-lg bg-black px-4 py-3 text-[15px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70">
                Kirim Lamaran Pekerjaan
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    modalContent.innerHTML = html;

    // Attach form submit
    const form = document.getElementById('apply-form');
    if(form) {
      form.addEventListener('submit', handleApplySubmit);
    }
  };

  const clearErrors = (form) => {
    // Hide all error texts
    form.querySelectorAll('[id^="error-"]').forEach(el => {
      el.classList.add('hidden');
      el.textContent = '';
    });
    // Remove error border on inputs
    form.querySelectorAll('.border-red-500').forEach(el => {
      el.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
    });
  };

  const showErrors = (errors) => {
    Object.keys(errors).forEach(key => {
      const errorMsg = errors[key][0];
      const errorEl = document.getElementById(`error-${key}`);
      const inputEl = document.querySelector(`[name="${key}"]`);
      if (errorEl) {
        errorEl.textContent = errorMsg;
        errorEl.classList.remove('hidden');
      }
      if (inputEl) {
        inputEl.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
      }
    });

    // Scroll to the first error input
    const firstErrorName = Object.keys(errors)[0];
    const firstErrorInput = document.querySelector(`[name="${firstErrorName}"]`);
    if(firstErrorInput) {
       firstErrorInput.scrollIntoView({ block: 'center' });
    }
  };

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const slug = form.getAttribute('data-slug');
    const submitBtn = document.getElementById('btn-submit');
    const formAlerts = document.getElementById('form-alerts');
    
    // Clear previous errors
    clearErrors(form);
    formAlerts.innerHTML = '';
    
    // Set loading state
    submitBtn.disabled = true;
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <svg class="mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Memproses...
    `;

    try {
      const formData = new FormData(form);
      
      const response = await fetch(`${BASE_URL}/jobs/${slug}/apply`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const payload = await response.json();

      if (response.status === 422) {
        showErrors(payload.errors || {});
        formAlerts.innerHTML = `
          <div class="mb-5 rounded-md bg-orange-50 p-4 text-sm text-orange-700 border border-orange-100 flex items-start gap-3">
             <svg class="h-5 w-5 shrink-0 text-orange-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
             <p>${escapeHtml(payload.message || 'Mohon periksa kembali isian formulir Anda karena terdapat setidaknya satu validasi yang gagal.')}</p>
          </div>
        `;
        
        // scroll slightly to show error
        document.getElementById('job-modal-content').scrollTo({ top: document.getElementById('apply-section').offsetTop - 20 });

      } else if (!response.ok || !payload.success) {
        throw new Error(payload.message || 'Error submitting application');
      } else {
        // Success
        document.getElementById('apply-section').innerHTML = `
          <div class="rounded-xl bg-green-50 p-8 text-center border border-green-100">
            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 mb-5">
              <svg class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            </div>
            <h4 class="text-xl font-bold text-green-800">Lamaran Berhasil Terkirim!</h4>
            <p class="mt-3 text-[15px] leading-relaxed text-green-700">Terima kasih atas partisipasi Anda, <strong>${escapeHtml(payload.data?.applicant_name || 'Kandidat')}</strong>. Pengajuan Anda telah berhasil terekam ke dalam sistem dan akan segera dievaluasi oleh Tim HR kami. Silakan cek email Anda secara berkala.</p>
            <div class="mt-8">
               <button type="button" onclick="document.getElementById('close-modal-btn').click()" class="inline-flex w-full items-center justify-center rounded-md bg-green-600 px-5 py-3 text-[15px] font-semibold text-white shadow-sm sm:w-auto">
                 Tutup Jendela
               </button>
            </div>
          </div>
        `;
      }
    } catch (error) {
      console.error(error);
      formAlerts.innerHTML = `
        <div class="mb-5 rounded-md bg-red-50 p-4 text-sm text-red-700 border border-red-100 flex items-start gap-3">
           <svg class="h-5 w-5 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
           <p>Terjadi kesalahan sistem. Lamaran gagal dikirim. Pastikan Anda terhubung ke internet dan coba kembali beberapa saat lagi.</p>
        </div>
      `;
    } finally {
      if (document.getElementById('btn-submit')) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  };

  // init
  if (jobsRetry) {
    jobsRetry.addEventListener('click', fetchJobs);
  }

  fetchJobs();
});
