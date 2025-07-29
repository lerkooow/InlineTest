import { getCurrentTagName, initSwiper, setActiveTab, updateCards } from "./components/cards.js";
import { toggleDropdown } from "./components/tabs.js";

async function initApp() {
  const app = document.getElementById('app');

  const tabs = await fetch('./components/Tabs.html').then(res => res.text());
  const cards = await fetch('./components/Cards.html').then(res => res.text());
  const footer = await fetch('./components/Footer.html').then(res => res.text());

  app.innerHTML = tabs + cards + footer;

  const tabsItems = document.querySelectorAll('.tabs__item');
  const dropdownItems = document.querySelectorAll('.tabs__dropdown--item');

  toggleDropdown();
  initSwiper();
  setActiveTab(tabsItems, null, dropdownItems);

  tabsItems.forEach(tab => {
    tab.addEventListener('click', () => {
      setActiveTab(tabsItems, tab, dropdownItems);
    });
  });

  dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener('click', () => {
      const tagName = dropdownItem.textContent.trim();
      const correspondingTab = Array.from(tabsItems)
        .find(tab => tab.textContent.trim() === tagName);
      if (correspondingTab) {
        setActiveTab(tabsItems, correspondingTab, dropdownItems);
      }
      const dropdown = document.getElementById('tabsDropdown');
      if (dropdown) {
        dropdown.classList.remove('open');
      }
    });
  });

  window.addEventListener('resize', () => {
    updateCards(getCurrentTagName());
  });
}


initApp();
