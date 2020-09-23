window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-pop-item").forEach((element) => {
    element.addEventListener("mouseover", () => {
      document.querySelector(".project-pop-list").style.animation =
        "scaleAnimation 300ms linear";
      document.querySelector(
        ".project-pop-list"
      ).style.backgroundImage = `url(${element.getAttribute("data-bg")})`;
    });
  });
});
