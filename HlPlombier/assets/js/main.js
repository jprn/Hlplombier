document.addEventListener('DOMContentLoaded', () => {
  let header = document.getElementById('header');
  let burger = document.getElementById('burger');
  let nav = document.getElementById('nav');
  const scrollTopBtn = document.getElementById('scrolltop');
  const yearEl = document.getElementById('year');
  const form = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  // Year in footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header shadow
  const onScroll = () => {
    const h = document.getElementById('header');
    if (window.scrollY > 20) {
      h && h.classList.add('is-scrolled');
      scrollTopBtn && scrollTopBtn.classList.add('is-visible');
    } else {
      h && h.classList.remove('is-scrolled');
      scrollTopBtn && scrollTopBtn.classList.remove('is-visible');
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Mobile menu toggle
  const bindHeader = () => {
    header = document.getElementById('header');
    burger = document.getElementById('burger');
    nav = document.getElementById('nav');
    if (burger && nav) {
      burger.addEventListener('click', () => {
        const open = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!open));
        nav.classList.toggle('is-open');
      });
      nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          burger.setAttribute('aria-expanded', 'false');
          nav.classList.remove('is-open');
        });
      });
    }
  };
  bindHeader();

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

  // Topbar, Header and Footer includes with link prefix resolution
  (async () => {
    try {
      const inPages = location.pathname.includes('/pages/');
      const basePrefix = inPages ? '..' : '.';
      const linkRoot = inPages ? '.' : './pages';
      // Topbar
      const tRes = await fetch(`${basePrefix}/partials/topbar.html`, { credentials: 'same-origin' });
      if (tRes.ok) {
        const tHtml = await tRes.text();
        // Replace any existing topbar or insert at very top of body
        const existingTopbars = Array.from(document.querySelectorAll('.topbar'));
        if (existingTopbars.length) {
          existingTopbars.forEach((tb, i) => {
            if (i === 0) tb.outerHTML = tHtml; else tb.remove();
          });
        } else {
          const wrap = document.createElement('div');
          wrap.innerHTML = tHtml;
          document.body.insertBefore(wrap.firstElementChild, document.body.firstChild);
        }
      }
      // Header
      const hRes = await fetch(`${basePrefix}/partials/header.html`, { credentials: 'same-origin' });
      if (hRes.ok) {
        let hHtml = await hRes.text();
        hHtml = hHtml.replaceAll('@root', linkRoot).replaceAll('@assets', basePrefix);
        const headers = Array.from(document.querySelectorAll('header'));
        if (headers.length) {
          headers.forEach((h, i) => {
            if (i === 0) h.outerHTML = hHtml; else h.remove();
          });
        } else {
          const wrap = document.createElement('div');
          wrap.innerHTML = hHtml;
          document.body.insertBefore(wrap.firstElementChild, document.body.firstElementChild);
        }
        // rebind events with new DOM
        bindHeader();
        onScroll();
      }
      const res = await fetch(`${basePrefix}/partials/footer.html`, { credentials: 'same-origin' });
      if (!res.ok) return;
      let html = await res.text();
      html = html.replaceAll('@root', linkRoot).replaceAll('@assets', basePrefix);
      // Replace any existing footer, regardless of class
      const existingFooters = Array.from(document.querySelectorAll('footer'));
      if (existingFooters.length) {
        existingFooters.forEach((f, i) => {
          if (i === 0) {
            f.outerHTML = html;
          } else {
            f.remove();
          }
        });
      } else {
        // inject before scripts at end of body
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        document.body.appendChild(wrapper.firstElementChild);
      }
      // reset year text after injection
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
    } catch (_) {
      // no-op if partial not found
    }
  })();

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
