(function () {
  var reducedMotionQuery = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : null;
  var prefersReducedMotion = reducedMotionQuery ? reducedMotionQuery.matches : false;

  var toggle = document.querySelector('[data-menu-toggle]');
  var mobileNav = document.querySelector('[data-mobile-nav]');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = !mobileNav.classList.contains('hidden');
      if (isOpen) {
        mobileNav.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileNav.classList.remove('hidden');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function getCurrentPage() {
    var page = window.location.pathname.split('/').pop();
    return (page || 'index.html').toLowerCase();
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
      link.classList.toggle('text-black', isActive);
      link.classList.toggle('font-semibold', isActive);
      link.classList.toggle('text-black/70', !isActive);
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
        link.classList.toggle('border-black/20', !isActive);
        link.classList.toggle('text-black', !isActive);
      }
      if (kind === 'primary') {
        link.classList.toggle('bg-[#006AFF]', isActive);
        link.classList.toggle('bg-black', !isActive);
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
      link.classList.toggle('text-black/80', !isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function uniquePush(list, node) {
    if (node && list.indexOf(node) === -1) {
      list.push(node);
    }
  }

  function parseCountUpContent(text) {
    var match = String(text || '')
      .trim()
      .match(/^(\d{1,4})(\s+[^\d].*)?$/);

    if (!match || /^0\d+$/.test(match[1])) {
      return null;
    }

    var value = Number(match[1]);
    if (!Number.isFinite(value) || value <= 0 || value > 5000) {
      return null;
    }

    return {
      value: value,
      suffix: match[2] || '',
    };
  }

  function isCountUpCandidate(node) {
    if (!node || node.closest('table')) {
      return false;
    }
    return !!parseCountUpContent(node.textContent);
  }

  function easeOutCubic(progress) {
    return 1 - Math.pow(1 - progress, 3);
  }

  function runCountUp(node, targetValue, suffix) {
    var duration = 1100;
    var startTime = null;
    var labelSuffix = suffix || '';

    function step(timestamp) {
      if (startTime === null) {
        startTime = timestamp;
      }
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = easeOutCubic(progress);
      var currentValue = Math.round(targetValue * eased);
      node.textContent = String(currentValue) + labelSuffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        node.textContent = String(targetValue) + labelSuffix;
      }
    }

    requestAnimationFrame(step);
  }

  function initStatsCountUp() {
    var nodes = Array.prototype.slice.call(document.querySelectorAll('main p, main span')).filter(
      isCountUpCandidate
    );

    if (!nodes.length) {
      return;
    }

    if (prefersReducedMotion) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (node) {
        var parsed = parseCountUpContent(node.textContent);
        if (parsed) {
          runCountUp(node, parsed.value, parsed.suffix);
        }
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, currentObserver) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }
          var node = entry.target;
          if (node.getAttribute('data-countup-played') === 'true') {
            currentObserver.unobserve(node);
            return;
          }

          var targetValue = Number((node.getAttribute('data-countup-target') || '').trim());
          var suffix = node.getAttribute('data-countup-suffix') || '';
          if (!Number.isFinite(targetValue)) {
            currentObserver.unobserve(node);
            return;
          }

          node.setAttribute('data-countup-played', 'true');
          runCountUp(node, targetValue, suffix);
          currentObserver.unobserve(node);
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -5% 0px',
      }
    );

    nodes.forEach(function (node) {
      var parsed = parseCountUpContent(node.textContent);
      if (!parsed) {
        return;
      }
      node.setAttribute('data-countup-target', String(parsed.value));
      node.setAttribute('data-countup-suffix', parsed.suffix);
      node.textContent = '0' + parsed.suffix;
      observer.observe(node);
    });
  }

  function collectSectionTargets(section) {
    var targets = [];
    var paragraphs = section.querySelectorAll('p');
    var hasHeroTitle = !!section.querySelector('h1');
    var logoRow = null;
    if (hasHeroTitle) {
      logoRow = section.querySelector(
        '.mt-5.flex.flex-wrap.items-center.gap-3, .mt-5.flex.flex-wrap.gap-3'
      );
    }
    var actionRow = section.querySelector('.mt-8.flex, .mt-7.flex');
    if (!actionRow) {
      actionRow = section.querySelector(
        '.flex.flex-wrap.gap-3, .flex.flex-wrap.gap-4, .flex.flex-wrap.items-center.gap-3'
      );
    }
    if (logoRow && logoRow === actionRow) {
      logoRow = null;
    }

    uniquePush(targets, section.querySelector('h1, h2'));
    uniquePush(targets, paragraphs[0]);
    uniquePush(targets, paragraphs[1]);
    uniquePush(targets, logoRow);
    uniquePush(targets, actionRow);
    uniquePush(
      targets,
      section.querySelector(
        'aside, .divide-y, ol.space-y-6, ul.space-y-4, ul.space-y-3, .overflow-hidden.border, .overflow-x-auto.border'
      )
    );

    if (!targets.length) {
      uniquePush(targets, section.firstElementChild);
    }

    return targets.slice(0, 6);
  }

  function initButtonMotion(animate) {
    if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    var controls = Array.prototype.slice.call(
      document.querySelectorAll('a.rounded-md, button.rounded-md')
    );

    controls.forEach(function (control) {
      control.addEventListener('pointerenter', function () {
        animate(
          control,
          { transform: 'translate3d(0,-1px,0) scale(1.02)' },
          { duration: 0.16, easing: 'ease-out' }
        );
      });

      control.addEventListener('pointerleave', function () {
        animate(
          control,
          { transform: 'translate3d(0,0,0) scale(1)' },
          { duration: 0.16, easing: 'ease-out' }
        );
      });

      control.addEventListener('pointerdown', function () {
        animate(
          control,
          { transform: 'translate3d(0,0,0) scale(0.99)' },
          { duration: 0.08, easing: 'ease-out' }
        );
      });

      control.addEventListener('pointerup', function () {
        animate(
          control,
          { transform: 'translate3d(0,-1px,0) scale(1.02)' },
          { duration: 0.12, easing: 'ease-out' }
        );
      });
    });
  }

  function initMotionEnhancements() {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      return;
    }

    var sections = Array.prototype.slice.call(document.querySelectorAll('main > section'));
    if (!sections.length) {
      return;
    }

    import('https://cdn.jsdelivr.net/npm/motion@12.23.24/+esm')
      .then(function (motion) {
        var animate = motion.animate;
        var inView = motion.inView;
        var stagger = motion.stagger;

        function reveal(targets, startDelay) {
          animate(
            targets,
            {
              opacity: [0, 1],
              transform: ['translate3d(0,18px,0)', 'translate3d(0,0,0)'],
            },
            {
              duration: 0.62,
              delay: stagger(0.08, { startDelay: startDelay || 0 }),
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }
          );
        }

        sections.forEach(function (section, sectionIndex) {
          var targets = collectSectionTargets(section);
          if (!targets.length) {
            return;
          }

          targets.forEach(function (target) {
            target.style.opacity = '0';
            target.style.transform = 'translate3d(0,18px,0)';
            target.style.willChange = 'opacity, transform';
          });

          var baseDelay = Math.min(sectionIndex * 0.04, 0.16);
          var isHero = !!section.querySelector('h1');

          if (isHero) {
            reveal(targets, baseDelay);
            targets.forEach(function (target) {
              target.style.willChange = 'auto';
            });
            return;
          }

          inView(
            section,
            function () {
              if (section.getAttribute('data-motion-played') === 'true') {
                return;
              }
              section.setAttribute('data-motion-played', 'true');
              reveal(targets, baseDelay);
              targets.forEach(function (target) {
                target.style.willChange = 'auto';
              });
            },
            {
              amount: 0.2,
              margin: '0px 0px -8% 0px',
            }
          );
        });

        initButtonMotion(animate);
      })
      .catch(function (error) {
        console.error('Failed to load Motion runtime:', error);
      });
  }

  setHeaderActiveState();
  initStatsCountUp();
  initMotionEnhancements();

  document.querySelectorAll('[data-year]').forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });
})();
