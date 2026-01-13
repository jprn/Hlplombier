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
});
