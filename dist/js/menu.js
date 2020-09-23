window.addEventListener("DOMContentLoaded", () => {
  let activeListItem = false;
  let menuList = document.querySelector(".menu-list");
  let divOverlay = document.createElement("div");

  divOverlay.setAttribute("class", "overlay");
  window.document.body.append(divOverlay);

  document.querySelectorAll(".menu-bars").forEach((bar) => {
    bar.addEventListener("click", () => {
      activeListItem = !activeListItem;

      if (activeListItem) {
        menuList.classList.add(`menu-active`);

        document.querySelector(".menu").style.background =
          "#ffffff url('/dist/images/core-bg.svg')";

        document.querySelector(".overlay").classList.add("overlay-active");
        document
          .querySelector(".overlay")
          .classList.remove("overlay-hidden");
      } else {
        menuList.classList.remove("menu-active");

        document.querySelector(".menu").style.background = "white";

        // window.document.body.removeChild(divOverlay);

        document
          .querySelector(".overlay")
          .classList.remove("overlay-active");
        document.querySelector(".overlay").classList.add("overlay-hidden");
      }
    });
  });
});
