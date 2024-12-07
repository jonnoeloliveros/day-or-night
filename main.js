// Check for saved mode in localStorage
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const mode = localStorage.getItem('mode');
    if (mode === 'night') {
        body.classList.add('night-mode');
    }

    // Add event listener to the toggle button
    const toggleButton = document.querySelector('.toggle-day-night');
    if (toggleButton) {
        toggleButton.addEventListener('click', (e) => {
            e.preventDefault();
            body.classList.toggle('night-mode');
            // Save the mode in localStorage
            if (body.classList.contains('night-mode')) {
                localStorage.setItem('mode', 'night');
            } else {
                localStorage.setItem('mode', 'day');
            }
        });
    }
});