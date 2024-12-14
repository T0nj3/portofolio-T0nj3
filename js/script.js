document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeMenuButton = document.getElementById('close-menu');
  const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const logo = document.getElementById('logo');
  const body = document.body;

  const updateThemeUI = (theme) => {
    body.dataset.theme = theme;

    if (themeToggleDesktop) {
      themeToggleDesktop.textContent = theme === 'light' ? '☀' : '☾';
    }

    if (themeToggleMobile) {
      themeToggleMobile.textContent = theme === 'light' ? '☀' : '☾';
    }

    if (logo) {
      logo.src = theme === 'light' ? '../assets/darklogo3.png' : '../assets/lightlogo.png';
    }

    localStorage.setItem('theme', theme);
  };

  const savedTheme = localStorage.getItem('theme') || 'dark';
  updateThemeUI(savedTheme);

  const toggleTheme = () => {
    const currentTheme = body.dataset.theme;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    updateThemeUI(newTheme);
  };

  if (themeToggleDesktop) {
    themeToggleDesktop.addEventListener('click', toggleTheme);
  }

  if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', toggleTheme);
  }

  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
      mobileNav.classList.add('open');
    });
  }

  if (closeMenuButton) {
    closeMenuButton.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  }

  document.querySelectorAll('.project-card').forEach((card) => {
    const video = card.querySelector('video');
    card.addEventListener('mouseenter', () => {
      video.play();
    });
    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });
});