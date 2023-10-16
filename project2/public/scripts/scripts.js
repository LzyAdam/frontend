"use strict";

(function () {
  const menu_botton = document.querySelector(".icon");
  menu_botton.addEventListener("click", function () {
    const nav_menu = document.querySelector(".globalnav__menu");
    nav_menu.classList.toggle("hidden");
  });

  const modalEl = document.querySelector('.modal');
  const closeEl = document.querySelector('.close');

  const aHref1 = document.querySelector(".aHref1");
  aHref1.addEventListener("click", (event) => {
    event.preventDefault();
    modalEl.showModal();
  });

  const aHref2 = document.querySelector(".aHref2");
  aHref2.addEventListener("click", (event) => {
    event.preventDefault();
    modalEl.showModal();
  });

  const aHref3 = document.querySelector(".aHref3");
  aHref3.addEventListener("click", (event) => {
    event.preventDefault();
    modalEl.showModal();
  });

  const aHref4 = document.querySelector(".aHref4");
  aHref4.addEventListener("click", (event) => {
    event.preventDefault();
    modalEl.showModal();
  });

  const aHref5 = document.querySelector(".aHref5");
  aHref5.addEventListener("click", (event) => {
    event.preventDefault();
    modalEl.showModal();
  });

  const aHref6 = document.querySelector(".aHref6");
  aHref6.addEventListener("click", (event) => {
    event.preventDefault();
    modalEl.showModal();
  });








  closeEl.addEventListener('click', () => {
    modalEl.close();
  });

  const input_email = document.querySelector(".input-email");
  input_email.addEventListener("keyup", (event) => {
    if (!form["email"].value.includes("@")) {
      email_validation_failure.innerHTML = "Email must contain @";
      email_validation_failure.classList.remove("hide");
    } else document.querySelector(".email-validation").classList.add("hide");
  });

  const input_confirm_email = document.querySelector(".input-confirm-email");
  input_confirm_email.addEventListener("keyup", (event) => {
    if (input_confirm_email.value === input_email.value) document.querySelector(".confirm-email-validation").classList.add("hide");
  });

  const register_button = document.querySelector(".Subscribe");
  register_button.addEventListener("click", (event) => {
    const form = document.forms["subscribe-form"];
    const email_validation_failure = document.querySelector(".email-validation");
    const confirm_email_validation_failure = document.querySelector(".confirm-email-validation");

    if (form["email"].value === "") {
      event.preventDefault();
      email_validation_failure.innerHTML = "Email is required you need to fill out the field";
      email_validation_failure.classList.remove("hide");
    } else {
      email_validation_failure.classList.add("hide");
      if (!form["email"].value.includes("@")) {
        event.preventDefault();
        email_validation_failure.innerHTML = "Email must contain @";
        email_validation_failure.classList.remove("hide");
      } else email_validation_failure.classList.add("hide");
    }
    if (form["confirm-email"].value !== form["email"].value) {
      event.preventDefault();
      confirm_email_validation_failure.innerHTML = "Confirm Email needs to match Email";
      confirm_email_validation_failure.classList.remove("hide");
    } else confirm_email_validation_failure.classList.add("hide");
  });
})();