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
      themeToggleDesktop.textContent = theme === 'light' ? '☀' : '☾';
      themeToggleMobile.textContent = theme === 'light' ? '☀' : '☾';
      logo.src = theme === 'light' ? '../assets/darklogo3.png' : '../assets/lightlogo.png';
      localStorage.setItem('theme', theme);
  };

  const savedTheme = localStorage.getItem('theme') || 'dark';
  updateThemeUI(savedTheme);

  hamburgerMenu.addEventListener('click', () => {
      mobileNav.classList.add('open');
  });

  closeMenuButton.addEventListener('click', () => {
      mobileNav.classList.remove('open');
  });

  const toggleTheme = () => {
      const currentTheme = body.dataset.theme;
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      updateThemeUI(newTheme);
  };

  themeToggleDesktop.addEventListener('click', toggleTheme);
  themeToggleMobile.addEventListener('click', toggleTheme);
});

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