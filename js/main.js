(function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var mobileNav = document.querySelector('[data-mobile-nav]');

  if (toggle && mobileNav) {
    function setMobileNavState(isOpen) {
      mobileNav.classList.toggle('hidden', !isOpen);
      mobileNav.setAttribute('aria-hidden', String(!isOpen));
      toggle.setAttribute('aria-expanded', String(isOpen));
    }

    setMobileNavState(false);

    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setMobileNavState(!isOpen);
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMobileNavState(false);
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024) {
        setMobileNavState(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setMobileNavState(false);
      }
    });
  }

  function getCurrentPage() {
    var page = window.location.pathname.split('/').pop();
    page = (page || 'index.html').toLowerCase();
    if (page === 'career-apply.html') {
      return 'career.html';
    }
    return page;
  }

  function getLinkPage(link) {
    var href = link.getAttribute('href') || '';
    if (!href) {
      return '';
    }
    var absoluteUrl = new URL(href, window.location.href);
    var page = absoluteUrl.pathname.split('/').pop();
    return (page || 'index.html').toLowerCase();
  }

  function setHeaderActiveState() {
    var currentPage = getCurrentPage();

    document.querySelectorAll('[data-header-nav]').forEach(function (link) {
      var isActive = getLinkPage(link) === currentPage;
      link.classList.toggle('text-[#1d4ed8]', isActive);
      link.classList.toggle('font-semibold', isActive);
      link.classList.toggle('text-[#556070]', !isActive);
      link.classList.toggle('font-medium', !isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    document.querySelectorAll('[data-header-action]').forEach(function (link) {
      var isActive = getLinkPage(link) === currentPage;
      var kind = link.getAttribute('data-header-action');
      if (kind === 'secondary') {
        link.classList.toggle('border-[#006AFF]', isActive);
        link.classList.toggle('text-[#006AFF]', isActive);
        link.classList.toggle('bg-[#eef4ff]', isActive);
        link.classList.toggle('border-[#d4dbe6]', !isActive);
        link.classList.toggle('text-[#243041]', !isActive);
        link.classList.toggle('bg-[#f7f9fc]', !isActive);
      }
      if (kind === 'primary') {
        link.classList.toggle('bg-[#006AFF]', isActive);
        link.classList.toggle('bg-[#2563eb]', !isActive);
      }
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    document.querySelectorAll('[data-mobile-link]').forEach(function (link) {
      var isActive = getLinkPage(link) === currentPage;
      link.classList.toggle('bg-[#006AFF]', isActive);
      link.classList.toggle('text-white', isActive);
      link.classList.toggle('text-[#556070]', !isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  setHeaderActiveState();

  document.querySelectorAll('[data-copy-text]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var copyText = trigger.getAttribute('data-copy-text') || '';
      var originalLabel = trigger.getAttribute('data-copy-label') || trigger.textContent.trim();

      if (!copyText || !navigator.clipboard || !navigator.clipboard.writeText) {
        return;
      }

      navigator.clipboard
        .writeText(copyText)
        .then(function () {
          trigger.textContent = 'Alamat Disalin';
          window.setTimeout(function () {
            trigger.textContent = originalLabel;
          }, 1800);
        })
        .catch(function (error) {
          console.error('Failed to copy text:', error);
        });
    });
  });

  document.querySelectorAll('[data-year]').forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });
})();
