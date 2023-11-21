const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
  document.body.classList.toggle('light-mode', theme !== 'dark');
}

function toggleTheme() {
  const isDarkMode = document.body.classList.contains('dark-mode');
  setTheme(isDarkMode ? 'light' : 'dark');
}

setTheme(prefersDarkMode ? 'dark' : 'light');

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  setTheme(e.matches ? 'dark' : 'light');
});
