// Медиа запрос
const mediaQuery = window.matchMedia("(max-width: 450px)");

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

// Настраиваем слушателя событий
mediaQuery.onchange(changePos);
