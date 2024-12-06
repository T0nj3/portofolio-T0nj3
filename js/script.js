document.addEventListener('DOMContentLoaded', () => {
  const splashScreen = document.getElementById('splash-screen');
  const mainContent = document.getElementById('main-content');
  const countdownElement = document.getElementById('countdown');
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-menu');
  const themeToggle = document.getElementById('theme-toggle');
  const logo = document.getElementById('logo');
  const header = document.querySelector('header');
  const body = document.body;
  let countdown = 3;

  
  const countdownInterval = setInterval(() => {
    countdown -= 1;
    countdownElement.textContent = countdown;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      splashScreen.style.display = 'none';
      mainContent.style.display = 'block';
    }
  }, 1000);


  hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

 
  themeToggle.addEventListener('click', () => {
    const currentTheme = body.dataset.theme;
    if (currentTheme === 'light') {
      body.dataset.theme = 'dark';
      logo.src = './assets/lightlogo.png';
      themeToggle.textContent = '☾';
    } else {
      body.dataset.theme = 'light';
      logo.src = './assets/darklogo3.png';
      themeToggle.textContent = '☀';
    }
  });

 
  let isThrottling = false;

  const handleScroll = () => {
    if (!isThrottling) {
      isThrottling = true;

      setTimeout(() => {
        if (window.scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        isThrottling = false;
      }, 200); 
    }
  };

  window.addEventListener('scroll', handleScroll);
});