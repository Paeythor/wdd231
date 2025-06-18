const toggleBtn = document.getElementById('toggle-theme');

function updateToggleButton(isDark) {
  toggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  toggleBtn.setAttribute('aria-label', isDark ? 'Toggle light mode' : 'Toggle dark mode');
  toggleBtn.textContent = isDark ? '🌙' : '🌓'; 
}


const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

if (isDark) {
  document.body.classList.add('dark-theme');
}
updateToggleButton(isDark);

toggleBtn.addEventListener('click', () => {
  const isDarkNow = document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
  updateToggleButton(isDarkNow);
});
