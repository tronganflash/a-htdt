document.body.addEventListener("scroll", (e) => {
    let navbar = document.getElementsByClassName("menu")[0];
    if (document.body.scrollTop != 0) {
        navbar.style.padding = "8px 4%";
    } else {
        navbar.style.padding = "22px 4%";
    }
    let menuSub = document.getElementsByClassName("menu-sub")[0];
    if (menuSub != undefined) {
        if (document.body.scrollTop != 0) {
            menuSub.style.top = "64px";
        } else {
            menuSub.style.top = "92px";
        }
    }
});
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
                    "#ffffff url('/html/dist/images/core-bg.svg')";

                document
                    .querySelector(".overlay")
                    .classList.add("overlay-active");
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
                document
                    .querySelector(".overlay")
                    .classList.add("overlay-hidden");
            }
        });
    });
});
