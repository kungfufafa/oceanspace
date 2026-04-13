document.addEventListener('DOMContentLoaded', () => {
  const api = window.OceanSpaceCareerApi;
  const titleNode = document.getElementById('apply-page-title');
  const summaryNode = document.getElementById('apply-page-summary');
  const metaNode = document.getElementById('apply-page-meta');
  const loadingNode = document.getElementById('apply-page-loading');
  const emptyNode = document.getElementById('apply-page-empty');
  const errorNode = document.getElementById('apply-page-error');
  const contentNode = document.getElementById('apply-page-content');
  const detailsNode = document.getElementById('apply-page-details');
  const descriptionNode = document.getElementById('apply-page-description');
  const requirementsNode = document.getElementById('apply-page-requirements');
  const prepNode = document.getElementById('apply-page-prep');
  const formNode = document.getElementById('apply-form');
  const formAlerts = document.getElementById('form-alerts');
  const heroSection = document.getElementById('apply-hero-section');
  const contentBandNodes = Array.from(document.querySelectorAll('[data-content-band-node]'));
  const defaultTitleClasses = ['sm:max-w-[14ch]', 'text-[clamp(2.2rem,4vw,3.5rem)]', 'leading-[0.98]', 'tracking-[-0.04em]'];
  const uppercaseTitleClasses = ['sm:max-w-[16ch]', 'text-[clamp(2rem,3.5vw,3rem)]', 'leading-[1.05]', 'tracking-[0.015em]'];
  const notifyMotionRefresh = () => {
    window.dispatchEvent(new CustomEvent('oceanspace:motion-refresh'));
  };

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('job');
  const FILE_VALIDATIONS = {
    photo: {
      accept: '.jpg,.jpeg,.png,.webp',
      extensions: ['jpg', 'jpeg', 'png', 'webp'],
      maxSizeBytes: 5 * 1024 * 1024,
      note: 'Format yang diterima backend: JPG, JPEG, PNG, atau WEBP. Ukuran maksimal 5 MB.',
      invalidTypeMessage: 'Photo diri terbaru harus berupa gambar.',
      invalidFormatMessage: 'Photo diri terbaru harus berformat jpg, jpeg, png, atau webp.',
      maxSizeMessage: 'Ukuran photo diri terbaru maksimal 5 MB.',
    },
    resume: {
      accept: '.pdf,.doc,.docx',
      extensions: ['pdf', 'doc', 'docx'],
      maxSizeBytes: 5 * 1024 * 1024,
      note: 'Format yang diterima backend: PDF, DOC, atau DOCX. Ukuran maksimal 5 MB.',
      invalidFormatMessage: 'File CV/Resume harus berformat pdf, doc, atau docx.',
      maxSizeMessage: 'Ukuran file CV/Resume maksimal 5 MB.',
    }
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

  const renderTextareaBlocks = (text, options = {}) => {
    const value = (text || '').trim();
    if (!value) {
      return options.emptyHtml || '<p>Informasi belum tersedia.</p>';
    }

    const blocks = value
      .split(/\n\s*\n/)
      .map((block) => block.trim())
      .filter(Boolean);

    return blocks.map((block) => {
      const lines = block
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);

      const listLike = lines.length > 1 && lines.every((line) => /^([-*•]|\d+\.)\s+/.test(line));

      if (listLike) {
        const items = lines
          .map((line) => line.replace(/^([-*•]|\d+\.)\s+/, '').trim())
          .map((line) => `<li>${escapeHtml(line)}</li>`)
          .join('');

        return `<ul class="${options.listClass || 'space-y-3'}">${items}</ul>`;
      }

      if (options.lineList && lines.length > 1) {
        const items = lines
          .map((line) => `<li>${escapeHtml(line)}</li>`)
          .join('');

        return `<ul class="${options.listClass || 'space-y-3'}">${items}</ul>`;
      }

      return `<p class="${options.paragraphClass || ''}">${escapeHtml(lines.join(' '))}</p>`;
    }).join('');
  };

  const setState = (state) => {
    loadingNode.classList.toggle('hidden', state !== 'loading');
    emptyNode.classList.toggle('hidden', state !== 'empty');
    errorNode.classList.toggle('hidden', state !== 'error');
    contentNode.classList.toggle('hidden', state !== 'content');
    if (detailsNode) {
      detailsNode.classList.toggle('hidden', state !== 'content');
    }
    if (heroSection) {
      heroSection.classList.toggle('hidden', state === 'empty' || state === 'error');
    }
    contentBandNodes.forEach((node) => {
      node.classList.toggle('lg:block', state !== 'empty');
    });
    requestAnimationFrame(() => {
      notifyMotionRefresh();
    });
  };

  const clearErrors = () => {
    formNode.querySelectorAll('[id^="error-"]').forEach((node) => {
      node.classList.add('hidden');
      node.textContent = '';
    });
    formNode.querySelectorAll('.border-red-500').forEach((node) => {
      node.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
    });
    formAlerts.innerHTML = '';
  };

  const setFieldError = (fieldName, message) => {
    const errorEl = document.getElementById(`error-${fieldName}`);
    const inputEl = formNode.querySelector(`[name="${fieldName}"]`);

    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }

    if (inputEl) {
      inputEl.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
    }
  };

  const clearFieldError = (fieldName) => {
    const errorEl = document.getElementById(`error-${fieldName}`);
    const inputEl = formNode.querySelector(`[name="${fieldName}"]`);

    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
    }

    if (inputEl) {
      inputEl.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
    }
  };

  const showErrors = (errors) => {
    Object.keys(errors).forEach((key) => {
      const message = Array.isArray(errors[key]) ? errors[key][0] : errors[key];
      setFieldError(key, message);
    });
  };

  const getFileValidation = (fieldName) => FILE_VALIDATIONS[fieldName] || null;

  const validateFileInput = (inputEl) => {
    const rule = getFileValidation(inputEl?.name);

    if (!inputEl || !rule) {
      return true;
    }

    const file = inputEl.files && inputEl.files[0];

    clearFieldError(inputEl.name);

    if (!file) {
      return true;
    }

    const extension = ((file.name || '').split('.').pop() || '').toLowerCase();

    if (inputEl.name === 'photo' && file.type && !file.type.startsWith('image/')) {
      setFieldError(inputEl.name, rule.invalidTypeMessage);
      return false;
    }

    if (!rule.extensions.includes(extension)) {
      setFieldError(inputEl.name, rule.invalidFormatMessage);
      return false;
    }

    if (file.size > rule.maxSizeBytes) {
      setFieldError(inputEl.name, rule.maxSizeMessage);
      return false;
    }

    return true;
  };

  const validateClientFiles = () => {
    return Object.keys(FILE_VALIDATIONS).every((fieldName) => {
      const inputEl = formNode.querySelector(`input[name="${fieldName}"]`);

      if (!inputEl) {
        return true;
      }

      return validateFileInput(inputEl);
    });
  };

  const attachFileValidationListeners = () => {
    Object.keys(FILE_VALIDATIONS).forEach((fieldName) => {
      const inputEl = formNode.querySelector(`input[name="${fieldName}"]`);

      if (!inputEl) {
        return;
      }

      inputEl.addEventListener('change', () => {
        validateFileInput(inputEl);
      });
    });
  };

  const renderRequirements = (text) => {
    requirementsNode.innerHTML = renderTextareaBlocks(text, {
      emptyHtml: '<p>Informasi kualifikasi akan ditampilkan setelah posisi dipilih.</p>',
      lineList: true,
      listClass: 'space-y-3 [&_li]:flex [&_li]:items-start [&_li]:gap-3 [&_li]:leading-8 [&_li]:text-[#556070] [&_li]:before:mt-2 [&_li]:before:inline-flex [&_li]:before:h-2.5 [&_li]:before:w-2.5 [&_li]:before:shrink-0 [&_li]:before:rounded-full [&_li]:before:bg-[#2563eb] [&_li]:before:content-[\"\"]',
      paragraphClass: 'text-[15px] leading-8 text-[#556070]'
    });
  };

  const renderMeta = (job) => {
    metaNode.innerHTML = `
      <div data-motion-reveal="panel" class="border border-black/10 bg-white px-4 py-4">
        <p class="font-mono text-[0.64rem] uppercase tracking-widest text-slate-500">Lokasi</p>
        <p class="mt-2 text-sm font-bold text-slate-900">${escapeHtml(job.location)}</p>
      </div>
      <div data-motion-reveal="panel" class="border border-black/10 bg-white px-4 py-4">
        <p class="font-mono text-[0.64rem] uppercase tracking-widest text-slate-500">Penutupan</p>
        <p class="mt-2 text-sm font-bold text-slate-900">${formatDate(job.closing_date)}</p>
      </div>
    `;
  };

  const renderPrep = (job) => {
    const fields = job.application_form || [];
    const prepItems = [];

    if (fields.some((field) => field.name === 'photo')) {
      prepItems.push('Siapkan photo terbaru sebelum mulai mengisi form.');
    }

    if (fields.some((field) => field.name === 'resume')) {
      prepItems.push('Siapkan CV/Resume terbaru dalam format yang diminta sistem.');
    }

    if (fields.some((field) => field.name === 'whatsapp_number' || field.name === 'active_phone')) {
      prepItems.push('Pastikan nomor kontak aktif agar tim dapat menghubungi Anda.');
    }

    if (fields.some((field) => field.name && field.name.startsWith('emergency_contact_'))) {
      prepItems.push('Siapkan data kontak darurat yang benar sebelum submit.');
    }

    prepNode.innerHTML = prepItems.map((item) => `
      <p class="flex items-start gap-3">
        <span aria-hidden="true" class="mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#2563eb]"></span>
        <span>${escapeHtml(item)}</span>
      </p>
    `).join('');
  };

  const groupDescriptions = {
    'Data Diri': 'Gunakan identitas dasar yang sama dengan data resmi Anda.',
    'Alamat': 'Isi alamat sesuai kondisi terbaru agar verifikasi lebih mudah.',
    'Kontak': 'Pastikan nomor aktif dan mudah dihubungi.',
    'Kontak Darurat': 'Isi kontak yang benar dan mudah dihubungi saat darurat.',
    'Dokumen': 'Unggah berkas terbaru dengan format yang diminta.',
    'Informasi Tambahan': 'Lengkapi informasi pendukung yang diminta sistem.',
  };

  const getFieldGroup = (field) => {
    const groupMap = {
      full_name: 'Data Diri',
      email: 'Data Diri',
      gender: 'Data Diri',
      birth_date: 'Data Diri',
      marital_status: 'Data Diri',
      address_ktp: 'Alamat',
      address_domicile: 'Alamat',
      whatsapp_number: 'Kontak',
      active_phone: 'Kontak',
      emergency_contact_name: 'Kontak Darurat',
      emergency_contact_relation: 'Kontak Darurat',
      emergency_contact_phone: 'Kontak Darurat',
      photo: 'Dokumen',
      resume: 'Dokumen',
    };

    return groupMap[field.name] || 'Informasi Tambahan';
  };

  const getFieldLabel = (field) => {
    if (field.name === 'photo') {
      return 'Foto Diri Terbaru';
    }

    if (field.name === 'resume') {
      return 'CV / Resume Terbaru';
    }

    return field.label || field.name || 'Field';
  };

  const getFileFormatNote = (field) => {
    return getFileValidation(field.name)?.note || '';
  };

  const isUppercaseHeavyTitle = (value) => {
    const text = String(value || '').trim();
    if (!text) {
      return false;
    }

    const lettersOnly = text.replace(/[^A-Za-zÀ-ÿ]/g, '');
    if (!lettersOnly) {
      return false;
    }

    return lettersOnly === lettersOnly.toUpperCase();
  };

  const renderFormStatus = (tone, title, message) => {
    const tones = {
      warning: {
        panelClass: 'border-orange-100 bg-orange-50',
        textClass: 'text-orange-700'
      },
      error: {
        panelClass: 'border-red-100 bg-red-50',
        textClass: 'text-red-700'
      }
    };

    const config = tones[tone] || tones.error;

    return `
      <div class="mb-5 border ${config.panelClass} p-4 sm:p-5">
        <p class="lc-eyebrow ${config.textClass}">${escapeHtml(title)}</p>
        <p class="mt-2 text-sm leading-7 ${config.textClass}">${escapeHtml(message)}</p>
      </div>
    `;
  };

  const renderForm = (job) => {
    formNode.innerHTML = '';
    formNode.setAttribute('data-slug', job.slug);
    const groupOrder = ['Data Diri', 'Alamat', 'Kontak', 'Kontak Darurat', 'Dokumen', 'Informasi Tambahan'];
    const groups = new Map();

    (job.application_form || []).forEach((field) => {
      const groupName = getFieldGroup(field);
      if (!groups.has(groupName)) {
        groups.set(groupName, []);
      }
      groups.get(groupName).push(field);
    });

    groupOrder.filter((groupName) => groups.has(groupName)).forEach((groupName) => {
      const section = document.createElement('section');
      section.className = 'space-y-4 border-t border-black/10 pt-5 first:border-t-0 first:pt-0';
      section.innerHTML = `
        <div class="space-y-1">
          <p class="font-mono text-[0.64rem] uppercase tracking-widest text-slate-500">${groupName}</p>
          <p class="text-sm leading-7 text-[#556070]">${groupDescriptions[groupName] || ''}</p>
        </div>
      `;

      const fieldsGrid = document.createElement('div');
      fieldsGrid.className = 'grid gap-4';

      groups.get(groupName).forEach((field) => {
        const wrapper = document.createElement('div');
        const isRequired = field.required ? 'required' : '';
        const optionalNote = field.required
          ? '<span class="text-red-500">*</span>'
          : '<span class="text-black/40 text-xs font-normal ml-1">(Opsional)</span>';
        const fieldLabel = getFieldLabel(field);
        const labelClass = 'block text-sm font-medium text-black/80 mb-2';
        const inputClass = 'block w-full rounded-md border border-black/20 bg-white px-3 py-2 text-sm text-black placeholder-black/30 focus:border-[#006AFF] focus:outline-none focus:ring-1 focus:ring-[#006AFF]';
        const isLongField = field.type === 'textarea' || field.type === 'file' || field.name === 'photo' || field.name === 'resume';
        const placeholders = {
          full_name: 'Nama lengkap sesuai identitas',
          email: 'nama@email.com',
          whatsapp_number: '08xxxxxxxxxx',
          active_phone: '08xxxxxxxxxx',
          emergency_contact_name: 'Nama kontak darurat',
          emergency_contact_relation: 'Contoh: Orang tua',
          emergency_contact_phone: '08xxxxxxxxxx',
        };

        if (!isLongField && groups.get(groupName).length > 1) {
          fieldsGrid.classList.add('sm:grid-cols-2');
        }

        if (field.type === 'select') {
          const optionsHtml = [`<option value="">-- Pilih ${escapeHtml(field.label)} --</option>`]
            .concat((field.options || []).map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`))
            .join('');
          wrapper.innerHTML = `
            <label class="${labelClass}">${escapeHtml(fieldLabel)} ${optionalNote}</label>
            <select name="${escapeHtml(field.name)}" class="${inputClass}" ${isRequired}>
              ${optionsHtml}
            </select>
            <p class="mt-1 hidden text-xs text-red-500" id="error-${escapeHtml(field.name)}"></p>
          `;
        } else if (field.type === 'textarea') {
          wrapper.innerHTML = `
            <label class="${labelClass}">${escapeHtml(fieldLabel)} ${optionalNote}</label>
            <textarea name="${escapeHtml(field.name)}" rows="4" class="${inputClass}" ${isRequired}></textarea>
            <p class="mt-1 hidden text-xs text-red-500" id="error-${escapeHtml(field.name)}"></p>
          `;
        } else if (field.type === 'file' || field.name === 'photo' || field.name === 'resume') {
          const fileValidation = getFileValidation(field.name);
          const acceptTypes = fileValidation ? fileValidation.accept : '.pdf,.doc,.docx,.jpg,.jpeg,.png,.webp';
          const fileFormatNote = getFileFormatNote(field);
          wrapper.innerHTML = `
            <label class="${labelClass}">${escapeHtml(fieldLabel)} ${optionalNote}</label>
            <input type="file" name="${escapeHtml(field.name)}" class="block w-full text-sm text-black/80 file:mr-4 file:rounded-md file:border-0 file:bg-black/5 file:px-4 file:py-2 file:text-sm file:font-medium hover:file:bg-black/10 focus:outline-none" ${isRequired} accept="${acceptTypes}">
            ${fileFormatNote ? `<p class="mt-2 text-xs leading-6 text-[#556070]">${escapeHtml(fileFormatNote)}</p>` : ''}
            <p class="mt-1 hidden text-xs text-red-500" id="error-${escapeHtml(field.name)}"></p>
          `;
        } else if (field.type === 'date') {
          wrapper.innerHTML = `
            <label class="${labelClass}">${escapeHtml(fieldLabel)} ${optionalNote}</label>
            <input type="date" name="${escapeHtml(field.name)}" class="${inputClass}" ${isRequired}>
            <p class="mt-1 hidden text-xs text-red-500" id="error-${escapeHtml(field.name)}"></p>
          `;
        } else {
          wrapper.innerHTML = `
            <label class="${labelClass}">${escapeHtml(fieldLabel)} ${optionalNote}</label>
            <input type="${escapeHtml(field.type)}" name="${escapeHtml(field.name)}" class="${inputClass}" ${isRequired} ${placeholders[field.name] ? `placeholder="${escapeHtml(placeholders[field.name])}"` : ''}>
            <p class="mt-1 hidden text-xs text-red-500" id="error-${escapeHtml(field.name)}"></p>
          `;
        }

        if (isLongField) {
          wrapper.classList.add('sm:col-span-2');
        }

        fieldsGrid.appendChild(wrapper);
      });

      section.appendChild(fieldsGrid);
      formNode.appendChild(section);
    });

    attachFileValidationListeners();

    const submitWrapper = document.createElement('div');
    submitWrapper.className = 'border-t border-black/10 pt-5';
    submitWrapper.innerHTML = `
      <button type="submit" id="btn-submit" data-motion-cta="true" class="flex w-full items-center justify-center rounded-lg bg-[#2563eb] px-4 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-70">
        Kirim Lamaran Pekerjaan
      </button>
    `;
    formNode.appendChild(submitWrapper);
  };

  const renderSuccess = (payload) => {
    formNode.innerHTML = `
      <div data-motion-reveal="panel" class="border border-green-100 bg-green-50 p-8 sm:p-10">
        <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p class="lc-eyebrow text-green-700">Lamaran Terkirim</p>
            <h3 class="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-green-800">Lamaran Berhasil Terkirim!</h3>
            <p class="mt-3 max-w-[34rem] text-[15px] leading-7 text-green-700">Terima kasih, <strong>${escapeHtml(payload.data?.applicant_name || 'Kandidat')}</strong>. Lamaran Anda sudah diterima dan akan ditinjau oleh tim kami.</p>
          </div>
          <div class="flex flex-wrap gap-3">
            <a href="career.html" data-motion-cta="true" class="button-primary sm:w-auto">Lihat posisi lainnya</a>
            <a href="contact.html" data-motion-cta="true" class="button-secondary sm:w-auto">Hubungi tim korporat</a>
          </div>
        </div>
      </div>
    `;
    notifyMotionRefresh();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    clearErrors();

    if (!validateClientFiles()) {
      formAlerts.innerHTML = renderFormStatus(
        'warning',
        'Periksa Form',
        'Periksa kembali file yang diunggah. Format dan ukuran file harus sesuai ketentuan sebelum lamaran dikirim.'
      );
      return;
    }

    const submitBtn = document.getElementById('btn-submit');
    const formData = new FormData(formNode);
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Memproses...';

    try {
      const payload = await api.applyToJob(slug, formData);
      renderSuccess(payload);
    } catch (error) {
      if (error.status === 422 && error.payload?.errors) {
        showErrors(error.payload.errors);
        formAlerts.innerHTML = renderFormStatus(
          'warning',
          'Periksa Form',
          error.payload.message || 'Mohon periksa kembali isian formulir Anda.'
        );
      } else {
        formAlerts.innerHTML = renderFormStatus(
          'error',
          'Terjadi Kendala',
          'Terjadi kesalahan sistem. Lamaran gagal dikirim. Silakan coba lagi beberapa saat lagi.'
        );
      }
    } finally {
      if (document.getElementById('btn-submit')) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    }
  };

  const renderJob = (job) => {
    document.title = `Lamaran: ${job.title} | Ocean Space`;
    titleNode.textContent = job.title;
    titleNode.classList.remove(...defaultTitleClasses, ...uppercaseTitleClasses);
    titleNode.classList.add(...(isUppercaseHeavyTitle(job.title) ? uppercaseTitleClasses : defaultTitleClasses));
    summaryNode.textContent = 'Baca dulu tanggung jawab dan kualifikasinya. Kalau cocok, lanjut isi lamaran di bawah.';
    descriptionNode.innerHTML = renderTextareaBlocks(job.description, {
      emptyHtml: '<p>Informasi deskripsi akan ditampilkan setelah posisi dipilih.</p>',
      paragraphClass: 'text-[15px] leading-8 text-[#556070]'
    });
    renderRequirements(job.requirements);
    renderPrep(job);
    renderMeta(job);
    renderForm(job);
    formNode.addEventListener('submit', handleSubmit);
    setState('content');
  };

  const init = async () => {
    if (!slug) {
      setState('empty');
      return;
    }

    try {
      const payload = await api.getJobDetail(slug);
      renderJob(payload.data);
    } catch (error) {
      setState('error');
    }
  };

  setState('loading');
  init();
});
