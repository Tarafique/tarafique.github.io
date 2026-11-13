(() => {
  const menuButton = document.querySelector('[data-menu-button]');
  const links = document.querySelector('[data-nav-links]');
  if (menuButton && links) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      links.classList.toggle('open', !expanded);
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }
  document.querySelectorAll('[data-placeholder-link]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      alert('Add your own URL in index.html before publishing this portfolio.');
    });
  });
})();
