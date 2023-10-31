var introEl = document.querySelector("#intro-section");
var navEl = document.querySelector("#navigation");
var favoriteEl = document.querySelector("#favorite-section");
var nasaEL = document.querySelector("#nasa-photo");
var navHome = document.querySelector("#home");
var navFave = document.querySelector("#favorite");
var userName = document.querySelector("#user-name");
var nameEl = document.querySelectorAll(".name");
var favoriteBtn = document.querySelector("#favorite-button");
var favContainerEl = document.querySelector(".fav-container");

function goHome() {
    nasaEL.classList.add("hide");
    favoriteEl.classList.add("hide");
    navEl.classList.add("hide");
    introEl.removeAttribute("class");

}
function goFave() {
    nasaEL.classList.add("hide");
    introEl.classList.add("hide");
    navEl.removeAttribute("class");
    favoriteEl.classList.remove("hide");
    getFields()

}

function addClass() {
    var element = document.getElementById("card-info");
    element.classList.add("data-show");
  }
  
  function removeClass() {
    var element = document.getElementById("card-info");
    element.classList.remove("data-show");
  }


  navHome.addEventListener("click", goHome);
navFave.addEventListener("click", goFave);