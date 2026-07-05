(() => {
  const page = document.body.dataset.page;
  const year = document.getElementById('year');
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('site-menu');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  document.querySelectorAll('[data-nav-page]').forEach((link) => {
    if (link.dataset.navPage === page) {
      link.setAttribute('aria-current', 'page');
    }
  });

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      document.body.classList.toggle('menu-open', !isOpen);
    });

    menu.addEventListener('click', (event) => {
      if (event.target.matches('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      }
    });
  }
})();
