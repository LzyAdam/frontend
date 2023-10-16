"use strict";

(function () {

  const input_name = document.querySelector(".input-name");
  input_name.addEventListener("keydown", (event) => {
    document.querySelector(".name-validation").classList.add("hide");
  });

  const input_email = document.querySelector(".input-email");
  input_email.addEventListener("keydown", (event) => {
    document.querySelector(".email-validation").classList.add("hide");
  });

  const input_confirm_email = document.querySelector(".input-confirm-email");
  input_confirm_email.addEventListener("keyup", (event) => {
    if (input_confirm_email.value === input_email.value) document.querySelector(".confirm-email-validation").classList.add("hide");
  });

  const register_button = document.querySelector("button");
  register_button.addEventListener("click", (event) => {
    const form = document.forms["register-form"];
    const name_validation_failure = document.querySelector(".name-validation");
    const email_validation_failure = document.querySelector(".email-validation");
    const confirm_email_validation_failure = document.querySelector(".confirm-email-validation");

    if (form["name"].value === "") {
      event.preventDefault();
      name_validation_failure.innerHTML = "Name is required you need to fill out the field";
      name_validation_failure.classList.remove("hide");
    } else name_validation_failure.classList.add("hide");

    if (form["email"].value === "") {
      event.preventDefault();
      email_validation_failure.innerHTML = "Email is required you need to fill out the field";
      email_validation_failure.classList.remove("hide");
    } else email_validation_failure.classList.add("hide");

    if (form["confirm-email"].value !== form["email"].value) {
      event.preventDefault();
      confirm_email_validation_failure.innerHTML = "Confirm Email needs to match Email";
      confirm_email_validation_failure.classList.remove("hide");
    } else confirm_email_validation_failure.classList.add("hide");
  });

})();