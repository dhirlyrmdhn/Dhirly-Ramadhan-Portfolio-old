const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
  document.body.classList.toggle('light-mode', theme === 'light');

  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const themesButton = document.getElementById('themes-mode');

  themesButton.title = `Follows System Theme: ${systemTheme}`;
}

setTheme(prefersDarkMode ? 'dark' : 'light');

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  setTheme(e.matches ? 'dark' : 'light');
});