const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Check if user has a preference saved
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  toggleButton.textContent = '☀️'; // Sun emoji for light mode
}

// Toggle dark mode
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
    toggleButton.textContent = '☀️';
  } else {
    localStorage.setItem('dark-mode', 'disabled');
    toggleButton.textContent = '🌙';
  }
});
