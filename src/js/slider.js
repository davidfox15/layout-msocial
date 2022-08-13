import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

// Не работает подключение локальной зависимости
// import Swiper from "swiper/bundle"

const swiper = new Swiper(".swiper", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 650px
        650: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        // when window width is >= 1000px
        1000: {
            slidesPerView: 4,
            spaceBetween: 35,
        },
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: { 
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
