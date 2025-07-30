export function toggleDropdown() {
    const menuToggle = document.getElementById('tabsMenuToggle');
    const dropdown = document.getElementById('tabsDropdown');

    menuToggle.addEventListener('click', function () {
        dropdown.classList.toggle('open');
    });
}
