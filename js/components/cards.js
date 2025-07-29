export function initSwiper(slidesCount = 0) {
    if (window.innerWidth <= 800) {
        new Swiper('.swiper', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            centeredSlides: true,
            loop: slidesCount >= 3,
            breakpoints: {
                320: {
                    spaceBetween: 12,
                },
                480: {
                    spaceBetween: 16,
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slidesCount = swiperWrapper ? swiperWrapper.querySelectorAll('.swiper-slide').length : 0;
    initSwiper(slidesCount);
});

let resizeTimer;
window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        const existingSwiper = document.querySelector('.swiper').swiper;
        if (existingSwiper) {
            existingSwiper.destroy(true, true);
        }
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        const slidesCount = swiperWrapper ? swiperWrapper.querySelectorAll('.swiper-slide').length : 0;
        initSwiper(slidesCount);
    }, 250);
});



const desktopCardsHTML = `
 <div class="cards__card">
    <img src="./assets/card1.png" alt="card" />
    <div class="cards__card--add">
      <div class="demo-plus"><img src="./assets/plus.svg" alt="plus" /></div>
    </div>
    <div class="cards__card--text">
      <p>Taxes & Efficiency</p>
      <p class="cards__text--small">Business</p>
    </div>
  </div>

  <div class="cards__card">
    <img src="./assets/card2.png" alt="card" />
    <div class="cards__card--add">
      <div class="demo-plus"><img src="./assets/plus.svg" alt="plus" /></div>
    </div>
    <div class="cards__card--text">
      <p>Investment banking</p>
      <p class="cards__text--small">Business</p>
    </div>
  </div>

  <div class="cards__card">
    <img src="./assets/card3.png" alt="card" />
    <div class="cards__card--add">
      <div class="demo-plus"><img src="./assets/plus.svg" alt="plus" /></div>
    </div>
    <div class="cards__card--text">
      <p>Financial Plan</p>
      <p class="cards__text--small">Business</p>
    </div>
  </div>

  <div class="cards__card">
    <img src="./assets/card4.png" alt="card" />
    <div class="cards__card--add">
      <div class="demo-plus"><img src="./assets/plus.svg" alt="plus" /></div>
    </div>
    <div class="cards__card--text">
      <p>Audit & Evaluation</p>
      <p class="cards__text--small">Business</p>
    </div>
  </div>

  <div class="cards__card">
    <img src="./assets/card5.png" alt="card" />
    <div class="cards__card--add">
      <div class="demo-plus"><img src="./assets/plus.svg" alt="plus" /></div>
    </div>
    <div class="cards__card--text">
      <p>Taxes & Efficiency</p>
      <p class="cards__text--small">Business</p>
    </div>
  </div>

  <div class="cards__card">
    <img src="./assets/card6.png" alt="card" />
    <div class="cards__card--add">
      <div class="demo-plus"><img src="./assets/plus.svg" alt="plus" /></div>
    </div>
    <div class="cards__card--text">
      <p>Investment banking</p>
      <p class="cards__text--small">Business</p>
    </div>
  </div>
`;

export const mobileCardsHTML = `
<div class="swiper-slide">
        <div class="cards__card">
          <img src="./assets/card1.png" alt="card" />
          <div class="cards__card--add">
            <div class="demo-plus"><img src="./assets/plus.svg" alt="plus" /></div>
          </div>
          <div class="cards__card--text">
            <p>Taxes & Efficiency</p>
            <p class="cards__text--small">Business</p>
          </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div class="cards__card">
          <img src="./assets/card2.png" alt="card" />
          <div class="cards__card--add">
            <div class="demo-plus"><img src="./assets/plus.svg" alt="plus" /></div>
          </div>
          <div class="cards__card--text">
            <p>Investment banking</p>
            <p class="cards__text--small">Business</p>
          </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div class="cards__card">
          <img src="./assets/card3.png" alt="card" />
          <div class="cards__card--add">
            <div class="demo-plus"><img src="./assets/plus.svg" alt="plus" /></div>
          </div>
          <div class="cards__card--text">
            <p>Financial Plan</p>
            <p class="cards__text--small">Business</p>
          </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div class="cards__card">
          <img src="./assets/card4.png" alt="card" />
          <div class="cards__card--add">
            <div class="demo-plus"><img src="./assets/plus.svg" alt="plus" /></div>
          </div>
          <div class="cards__card--text">
            <p>Audit & Evaluation</p>
            <p class="cards__text--small">Business</p>
          </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div class="cards__card">
          <img src="./assets/card5.png" alt="card" />
          <div class="cards__card--add">
            <div class="demo-plus"><img src="./assets/plus.svg" alt="plus" /></div>
          </div>
          <div class="cards__card--text">
            <p>Taxes & Efficiency</p>
            <p class="cards__text--small">Business</p>
          </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div class="cards__card">
          <img src="./assets/card6.png" alt="card" />
          <div class="cards__card--add">
            <div class="demo-plus"><img src="./assets/plus.svg" alt="plus" /></div>
          </div>
          <div class="cards__card--text">
            <p>Investment banking</p>
            <p class="cards__text--small">Business</p>
          </div>
        </div>
      </div>
`

let currentTagName = 'All';

export function setActiveTab(tabsItems, tab = null) {
    tabsItems.forEach(t => t.classList.remove('active'));
    const activeTab = tab || tabsItems[0];
    activeTab.classList.add('active');

    currentTagName = activeTab.textContent;

    updateCards(currentTagName);
}

export function updateCards(tagName) {
    const isMobile = window.innerWidth <= 800;

    const desktopContainer = document.querySelector('.cards__container--desktop');
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    if (isMobile) {
        const existingSwiper = document.querySelector('.swiper')?.swiper;
        if (existingSwiper) {
            existingSwiper.destroy(true, true);
        }
    }

    if (tagName === 'All') {
        if (isMobile) {
            swiperWrapper.innerHTML = mobileCardsHTML;
            const slidesCount = swiperWrapper.querySelectorAll('.swiper-slide').length;
            initSwiper(slidesCount);
        } else {
            desktopContainer.innerHTML = desktopCardsHTML;
        }
    } else {
        const filteredHTML = `
          <div>
            <h2>${tagName}</h2>
          </div>
        `;

        if (isMobile) {
            swiperWrapper.innerHTML = `<div class="swiper-slide"><div>${filteredHTML}</div></div>`;
            const slidesCount = swiperWrapper.querySelectorAll('.swiper-slide').length;
            initSwiper(slidesCount);
        } else {
            desktopContainer.innerHTML = `<div>${filteredHTML}</div>`;
        }
    }
}

export function getCurrentTagName() {
    return currentTagName;
}

