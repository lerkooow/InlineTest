const cardsData = [
  { img: 'card1.png', title: 'Taxes & Efficiency', category: 'Business' },
  { img: 'card2.png', title: 'Investment banking', category: 'Business' },
  { img: 'card3.png', title: 'Financial Plan', category: 'Business' },
  { img: 'card4.png', title: 'Audit & Evaluation', category: 'Business' },
  { img: 'card5.png', title: 'Taxes & Efficiency', category: 'Business' },
  { img: 'card6.png', title: 'Investment banking', category: 'Business' }
];

let currentTagName = 'All';

function createCardHTML(card, isSwiper = false) {
  const cardHTML = `
    <div class="cards__card">
      <img src="./assets/${card.img}" alt="card" />
      <div class="cards__card--add">
        <div class="demo-plus"><img src="./assets/plus.svg" alt="plus" /></div>
      </div>
      <div class="cards__card--text">
        <p>${card.title}</p>
        <p class="cards__text--small">${card.category}</p>
      </div>
    </div>
  `;

  return isSwiper ? `<div class="swiper-slide">${cardHTML}</div>` : cardHTML;
}

export function createSwiper(slidesCount = 0) {
  if (window.innerWidth <= 800) {
    if (window.swiperInstance) {
      window.swiperInstance.destroy(true, true);
    }

    window.swiperInstance = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      centeredSlides: true,
      loop: slidesCount >= 3,
      breakpoints: {
        320: { spaceBetween: 12 },
        480: { spaceBetween: 16 }
      },

    });
  }
}

export function updateCards(tagName = 'All') {
  const isMobile = window.innerWidth <= 800;
  const desktopContainer = document.querySelector('.cards__container--desktop');
  const swiperWrapper = document.querySelector('.swiper-wrapper');

  if (!desktopContainer || !swiperWrapper) return;

  let content;

  if (tagName === 'All') {
    content = cardsData.map(card => createCardHTML(card, isMobile)).join('');
  } else {
    content = isMobile
      ? `<div class="swiper-slide"><div><h2>${tagName}</h2></div></div>`
      : `<div><h2>${tagName}</h2></div>`;
  }

  if (isMobile) {
    swiperWrapper.innerHTML = content;
    const slidesCount = swiperWrapper.children.length;
    createSwiper(slidesCount);
  } else {
    desktopContainer.innerHTML = content;
  }

  currentTagName = tagName;
}

export function setActiveTab(tabsItems, activeTab = null, dropdownItems = null) {
  [...tabsItems, ...(dropdownItems || [])].forEach(item =>
    item.classList.remove('active')
  );

  const tabToActivate = activeTab || tabsItems[0];
  tabToActivate.classList.add('active');

  if (dropdownItems) {
    const tabName = tabToActivate.textContent.trim();
    const dropdownItem = Array.from(dropdownItems)
      .find(item => item.textContent.trim() === tabName);
    dropdownItem?.classList.add('active');
  }

  updateCards(tabToActivate.textContent.trim());
}

export function getCurrentTagName() {
  return currentTagName;
}
