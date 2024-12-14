document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const countdownElement = document.getElementById('countdown');
  
    if (!splashScreen || !mainContent) {
      console.error('Required elements are missing: splash-screen or main-content.');
      return;
    }
  
    const isDirectVisit = !document.referrer || new URL(document.referrer).hostname !== location.hostname;
  
    if (isDirectVisit) {
      if (countdownElement) {
        let countdown = 3;
        countdownElement.textContent = countdown;
        const countdownInterval = setInterval(() => {
          countdown -= 1;
          countdownElement.textContent = countdown;
          if (countdown === 0) {
            clearInterval(countdownInterval);
            splashScreen.style.opacity = '0';
            setTimeout(() => {
              splashScreen.style.display = 'none';
              mainContent.style.display = 'block';
            }, 500);
          }
        }, 1000);
      }
    } else {
      splashScreen.style.display = 'none';
      mainContent.style.display = 'block';
    }
  });