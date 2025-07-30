import { getCurrentTagName, createSwiper, setActiveTab, updateCards } from "./components/cards.js";
import { toggleDropdown } from "./components/tabs.js";

async function initApp() {
  const app = document.getElementById('app');
  const footerWrapper = document.getElementById('info__section-wrapper');

  const tabs = await fetch('./components/Tabs.html').then(res => res.text());
  const cards = await fetch('./components/Cards.html').then(res => res.text());
  const contacts = await fetch('./components/Contacts.html').then(res => res.text());
  const form = await fetch('./components/Form.html').then(res => res.text());


  app.innerHTML = tabs + cards;
  footerWrapper.innerHTML = contacts + form;

  const tabsItems = document.querySelectorAll('.tabs__item');
  const dropdownItems = document.querySelectorAll('.tabs__dropdown-item');


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

  toggleDropdown();
  createSwiper();
  setActiveTab(tabsItems, null, dropdownItems);
}


initApp();
