const shopcartButton = document.querySelector("#button__shopcart");
const modal = document.querySelector(".modal_window");
const closeButton = document.querySelector(".close");

shopcartButton.addEventListener('click', toggleModalWindow)

closeButton.addEventListener('click', toggleModalWindow)

function toggleModalWindow(){
    modal.classList.toggle('modal_window_is_open')
}

new WOW().init();