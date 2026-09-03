function navigateTo(screenId) {
  // Hide all screens
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.add('hidden'));

  // Show selected screen
  const activeScreen = document.getElementById(screenId);
  if (activeScreen) {
    activeScreen.classList.remove('hidden');
  }

  // Toggle bottom navigation visibility
  const bottomNav = document.getElementById('bottom-nav');
  const authScreens = ['screen-login', 'screen-register'];
  
  if (authScreens.includes(screenId)) {
    bottomNav.classList.add('hidden');
  } else {
    bottomNav.classList.remove('hidden');
  }
}

// Initial state: Start on Login Screen
document.addEventListener('DOMContentLoaded', () => {
  navigateTo('screen-login');
});
