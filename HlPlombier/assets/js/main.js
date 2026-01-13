document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const scrollTopBtn = document.getElementById('scrolltop');
  const yearEl = document.getElementById('year');
  const form = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  // Year in footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header shadow
  const onScroll = () => {
    if (window.scrollY > 20) {
      header && header.classList.add('is-scrolled');
      scrollTopBtn && scrollTopBtn.classList.add('is-visible');
    } else {
      header && header.classList.remove('is-scrolled');
      scrollTopBtn && scrollTopBtn.classList.remove('is-visible');
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Mobile menu toggle
  if (burger && nav) {
    burger.addEventListener('click', () => {
      const open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open');
    });

    // Close menu on link click (mobile)
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }

  // Scroll to top
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Contact form (demo)
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formSuccess) {
        formSuccess.hidden = false;
        setTimeout(() => (formSuccess.hidden = true), 4000);
      }
      form.reset();
    });
  }

  // Reviews slider
  const slider = document.getElementById('reviews-slider');
  if (slider) {
    const slides = Array.from(slider.querySelectorAll('.review-slide'));
    const dots = Array.from(slider.querySelectorAll('.reviews__dot'));
    const prevBtn = slider.querySelector('.reviews__btn[data-dir="prev"]');
    const nextBtn = slider.querySelector('.reviews__btn[data-dir="next"]');
    let index = 0;
    let timer;

    const show = (i) => {
      slides.forEach((s, si) => s.classList.toggle('is-active', si === i));
      dots.forEach((d, di) => d.classList.toggle('is-active', di === i));
      index = i;
    };

    const next = () => show((index + 1) % slides.length);
    const prev = () => show((index - 1 + slides.length) % slides.length);

    const start = () => {
      stop();
      timer = setInterval(next, 5000);
    };
    const stop = () => timer && clearInterval(timer);

    dots.forEach((d, di) => d.addEventListener('click', () => { show(di); start(); }));
    prevBtn && prevBtn.addEventListener('click', () => { prev(); start(); });
    nextBtn && nextBtn.addEventListener('click', () => { next(); start(); });

    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);

    show(0);
    start();
  }

  // Floating hero identification card close + per-page persistence (session, 2 minutes) + reopen chip
  const heroCard = document.querySelector('.hero-floating');
  if (heroCard) {
    const hideKey = `hideHeroCard:${location.pathname}`;
    const mqLg = window.matchMedia('(min-width: 1024px)');

    const ensureReopenChip = () => {
      if (!mqLg.matches) return removeReopenChip();
      if (document.querySelector('.hero-reopen')) return; // already exists
      const chip = document.createElement('button');
      chip.className = 'hero-reopen';
      chip.type = 'button';
      chip.setAttribute('aria-label', 'Réafficher la carte Philippe');
      chip.style.cssText = [
        'position:fixed','right:24px','bottom:120px','z-index:61','display:inline-flex','align-items:center','gap:8px',
        'padding:10px 12px','border-radius:999px','border:1px solid rgba(255,255,255,.25)',
        'background:#0f172a','color:#fff','box-shadow:0 14px 34px rgba(2,6,23,.3)','cursor:pointer'
      ].join(';');
      const dot = document.createElement('span');
      dot.style.cssText = 'width:26px;height:26px;border-radius:999px;display:inline-grid;place-items:center;background:linear-gradient(135deg,#2563eb,#1d4ed8);font-weight:800;';
      dot.textContent = 'HL';
      const label = document.createElement('span');
      label.textContent = 'Philippe';
      chip.appendChild(dot);
      chip.appendChild(label);
      chip.addEventListener('click', () => {
        sessionStorage.removeItem(hideKey);
        heroCard.style.display = 'block';
        removeReopenChip();
      });
      document.body.appendChild(chip);
    };

    const removeReopenChip = () => {
      const el = document.querySelector('.hero-reopen');
      if (el) el.remove();
    };

    const hiddenAt = Number(sessionStorage.getItem(hideKey) || 0);
    if (hiddenAt && (Date.now() - hiddenAt) < 120000) { // 2 minutes = 120000 ms
      heroCard.style.display = 'none';
      ensureReopenChip();
    } else if (hiddenAt) {
      sessionStorage.removeItem(hideKey);
      removeReopenChip();
    } else {
      removeReopenChip();
    }

    const closeBtn = heroCard.querySelector('.hero-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        heroCard.style.display = 'none';
        sessionStorage.setItem(hideKey, String(Date.now()));
        ensureReopenChip();
      });
    }

    mqLg.addEventListener ? mqLg.addEventListener('change', () => {
      // keep reopen chip visibility in sync with breakpoint
      const hiddenAtNow = Number(sessionStorage.getItem(hideKey) || 0);
      if (hiddenAtNow && (Date.now() - hiddenAtNow) < 120000) {
        if (mqLg.matches) ensureReopenChip(); else removeReopenChip();
      } else {
        removeReopenChip();
      }
    }) : window.addEventListener('resize', () => {
      const hiddenAtNow = Number(sessionStorage.getItem(hideKey) || 0);
      if (hiddenAtNow && (Date.now() - hiddenAtNow) < 120000) {
        if (window.innerWidth >= 1024) ensureReopenChip(); else removeReopenChip();
      } else {
        removeReopenChip();
      }
    });
  }
});
