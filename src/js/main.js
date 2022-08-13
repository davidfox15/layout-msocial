// Кнопка логин и регистрация
const popupButton = document.querySelectorAll(".log");
// Модальное окно
const popupModal = document.querySelector(".modal");
// Крестик модального окна
const popupCloseButton = document.querySelector(".close");
// Кнопка меню (мобильная версия)
const menuButton = document.querySelector("#menu-icon");
// Слушатель событий с кнопок
document.addEventListener("DOMContentLoaded", () => {
    popupButton.forEach(element => {
        element.addEventListener("click",windowPopup);
    });
    menuButton.addEventListener("click", menuClick);
});

// Медиа запрос на ширину экрана
const mediaQuery = window.matchMedia("(max-width: 450px)");
// Слушатель изменеия размера экрана
window.addEventListener("resize", changePos);
// Меняет блоки местами в footer
function changePos() {
    const itemListParent = document.querySelector(".footer");
    const info = document.querySelector(".footer-info");
    const links = document.querySelector(".footer-links");
    const company = document.getElementById("company1");
    if (mediaQuery.matches) {
        itemListParent.insertBefore(links, itemListParent.firstChild);
        itemListParent.insertBefore(company, null);
    } else {
        info.insertBefore(company, null);
        itemListParent.insertBefore(info, itemListParent.firstChild);
    }
}

function windowPopup(event) {
    popupModal.style.display = "block";
    popupCloseButton.addEventListener("click", () => {
        popupModal.style.display = "none";
    });
}

const mobMenu = document.getElementById("dropdown");
const icon = document.getElementById("menu-icon");

function menuClick(event) {
    mobMenu.classList.toggle("show");
    if (mobMenu.classList.contains("show")) {
        icon.src = "./img/svg/menu/cross.svg";
    } else {
        icon.src = "./img/svg/menu/menu.svg";
    }
}

window.addEventListener("scroll", function () {
    let coords = mobMenu.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;

    if (!topVisible && mobMenu.classList.contains("show")) {
        mobMenu.classList.remove("show");
        icon.src = "./img/svg/menu/menu.svg";
    }
});
