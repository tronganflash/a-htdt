let active = 0;
let slidersContent = document.querySelectorAll(".sliders-content");
let slidersDot = document.querySelectorAll(".sliders-dot");
let slidersImages = document.querySelectorAll(".sliders-image-item");

function setActive(active, element) {
  if (element.parentElement.classList.contains("sliders-overlay")) {
    if (active) {
      element.parentElement.classList.add("sliders-active");
      element.parentElement.classList.remove("sliders-hidden");
    } else {
      element.parentElement.classList.remove("sliders-active");
      element.parentElement.classList.add("sliders-hidden");
    }
  }

  if (active) {
    element.classList.add("sliders-active");
    element.classList.remove("sliders-hidden");
  } else {
    element.classList.remove("sliders-active");
    element.classList.add("sliders-hidden");
  }
}

function dotActive(active, element) {
  slidersDot.forEach((el) => el.classList.remove("sliders-dot-active"));

  if (active) {
    element.classList.add("sliders-dot-active");
  } else {
    element.classList.remove("sliders-dot-active");
  }
}

function hiddenAll() {
  slidersContent.forEach((el) => {
    setActive(false, el);
  });

  slidersImages.forEach((el) => {
    setActive(false, el);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  // default active
  slidersDot.forEach((el) => {
    if (el.classList.contains("sliders-dot-active")) {
      active = el.getAttribute("data-index");
    }
  });

  hiddenAll();
  setActive(true, slidersContent[active]);
  setActive(true, slidersImages[active]);

  // each clicked of client to set slider
  slidersDot.forEach((item_dot) => {
    item_dot.addEventListener("click", (el) => {
      let dot_indx = el.target.getAttribute("data-index");

      // hidden all
      hiddenAll();

      setActive(true, slidersContent[dot_indx]);
      setActive(true, slidersImages[dot_indx]);

      // handle dot
      dotActive(true, el.target);
    });
  });
});
