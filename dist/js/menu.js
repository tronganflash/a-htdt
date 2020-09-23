window.addEventListener("DOMContentLoaded", () => {
    let activeListItem = false;
    let menuList = document.querySelector(".menu-list");
  
    document.querySelectorAll(".menu-bars").forEach((bar) => {
      bar.addEventListener("click", () => {
        activeListItem = !activeListItem;
  
        if (activeListItem) {
          menuList.classList.add(`menu-active`);
        } else {
          menuList.classList.remove("menu-active");
        }
      });
    });
  });
  