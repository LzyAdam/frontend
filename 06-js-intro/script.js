(function () {
  const menu_botton = document.querySelector(".menu_button");
  menu_botton.addEventListener("click", function () {
    const nav_menu = document.querySelector(".nav_menu");
    nav_menu.classList.toggle("open");
  });
})();