const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-target='slideLeft']");
const rightButton = document.querySelector("[data-target='slideRight']");

const carouselWidth = carousel.offSetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card);
const cardMarginRight = Number(cardStyle.MarginRight.match(/\d+/g)[0]);

const cardCount = carousel.querySelectorAll("[data-target='card']").length;

let offSet = 0;
const maxX = -((cardCount / 3) * carouselWidth +
                (cardMarginRight * (cardCount / 3)) - 
                carouselWidth - cardMarginRight);

leftButton.addEventListener('click', function() {
    if (offSet !== 0) {
        offSet += carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offSet}px)`;
    }
});

rightButton.addEventListener('click', function() {
    if (offSet !== maxX) {
        offSet -= carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX${offSet}`
    }
});