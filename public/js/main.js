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
    popupButton[0].addEventListener("click", handleClick);
    popupButton[1].addEventListener("click", handleClick);
    menuButton.addEventListener("click", menuClick);
});

// Медиа запрос на ширину экрана
const mediaQuery = window.matchMedia("(max-width: 450px)");
// Слушатель изменеия размера экрана
// mediaQuery.onchange(changePos);

// Меняет местами div местами в footer
function changePos(mediaQuery) {
    if (mediaQuery.matches) {
        var itemListParent = document.querySelector(".footer");
        var links = document.querySelector(".footer-links");
        var company = document.getElementById("company1");
        itemListParent.insertBefore(links, itemListParent.firstChild);
        itemListParent.insertBefore(company, null);
    }
}
// Клик по кнопке входа (вызов молаьного окна)
function handleClick(event) {
    //console.log("btn press");
    popupModal.style.display = "block";
    popupCloseButton.addEventListener("click", () => {
        popupModal.style.display = "none";
    });
}

const mobMenu = document.getElementById("dropdown");
const icon = document.getElementById("menu-icon");
// Клик по меню
function menuClick(event) {
    // alert("Open menu!");
    mobMenu.classList.toggle("show");
    
    if (mobMenu.classList.contains("show")) {
        icon.src = "./img/svg/cross.svg";
    } else {
        icon.src = "./img/svg/menu.svg";
    }
}

window.addEventListener("scroll", function () {
    let coords = mobMenu.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    // видны верхний ИЛИ нижний край элемента
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    if (!topVisible) {
        mobMenu.classList.remove("show");
        icon.src = "./img/svg/menu.svg";
    }
});
