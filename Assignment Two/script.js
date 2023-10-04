const searchIcon = document.getElementById('search-icon');
const closeIcon = document.getElementById('close-icon');
const searchInput = document.getElementById('search-input');

// Function to toggle search and close icons
function toggleIcons() {
    searchIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}

// Toggle icons and focus on the input field
searchIcon.addEventListener('click', () => {
    toggleIcons();
    searchInput.classList.toggle('hidden');
    searchInput.classList.toggle('block');
    searchInput.focus();
});

// Toggle icons and hide the input field when clicking the close icon
closeIcon.addEventListener('click', () => {
    toggleIcons();
    searchInput.classList.toggle('hidden');
    searchInput.classList.toggle('block');
});

const dropdownToggle = document.querySelector('.group');

dropdownToggle.addEventListener('click', () => {
    const dropdownContent = dropdownToggle.querySelector('ul');
    dropdownContent.classList.toggle('hidden');
});