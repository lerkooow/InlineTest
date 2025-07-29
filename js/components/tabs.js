export function toggleDropdown() {
    const menuToggle = document.getElementById('tabsMenuToggle');
    const dropdown = document.getElementById('tabsDropdown');

    if (!menuToggle || !dropdown) return;

    menuToggle.addEventListener('click', function () {
        dropdown.classList.toggle('open');
    });

    document.addEventListener('click', function (e) {
        if (!menuToggle.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
}
