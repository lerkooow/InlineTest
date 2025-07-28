const tabs = document.getElementById('tabs-container');

fetch('./components/Tabs/Tabs.html')
  .then(res => res.text())
  .then(html => {
    tabs.innerHTML = html;
  })
  .catch(err => console.error('Failed to load tabs:', err));


const tabsContainer = document.getElementById('tabs-container');

fetch('./components/Tabs/Tabs.html')
  .then(res => res.text())
  .then(html => {
    tabsContainer.innerHTML = html;

    const menuToggle = document.getElementById("tabsMenuToggle");
    const dropdown = document.getElementById("tabsDropdown");

    if (menuToggle && dropdown) {
      menuToggle.addEventListener("click", () => {
        dropdown.classList.toggle("active");
      });

      document.addEventListener("click", (e) => {
        if (!menuToggle.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.classList.remove("active");
        }
      });
    }
  })
  .catch(err => console.error('Failed to load tabs:', err));
