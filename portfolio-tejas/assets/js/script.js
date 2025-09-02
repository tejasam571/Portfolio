'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
formInputs.forEach(input => {
  input.addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
navigationLinks.forEach((link, index) => {
  link.addEventListener("click", function () {
    pages.forEach((page, i) => {
      if (link.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    });
  });
});


// select all service items
const serviceItems = document.querySelectorAll("[data-service-item]");
const serviceModalContainer = document.querySelector("[data-service-modal-container]");
const serviceModalCloseBtn = document.querySelector("[data-service-modal-close-btn]");
const serviceOverlay = document.querySelector("[data-service-overlay]");

// modal elements
const serviceModalImg = document.querySelector("[data-service-modal-img]");
const serviceModalTitle = document.querySelector("[data-service-modal-title]");
const serviceModalText = document.querySelector("[data-service-modal-text]");

// function to toggle modal
const serviceModalFunc = () => {
  serviceModalContainer.classList.toggle("active");
  serviceOverlay.classList.toggle("active");
};

// open modal when service item clicked
serviceItems.forEach(item => {
  item.addEventListener("click", () => {
    serviceModalImg.src = item.querySelector("[data-service-img]").src;
    serviceModalTitle.textContent = item.querySelector("[data-service-title]").textContent;
    serviceModalText.innerHTML = item.querySelector("[data-service-text]").innerHTML;
    serviceModalFunc();
  });
});

// close modal
serviceModalCloseBtn.addEventListener("click", serviceModalFunc);
serviceOverlay.addEventListener("click", serviceModalFunc);
