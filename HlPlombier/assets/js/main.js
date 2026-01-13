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
});
