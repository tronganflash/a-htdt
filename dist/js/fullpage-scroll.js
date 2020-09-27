function FullpageScroll(i) {
    let pages = document.getElementsByClassName('fullpage');
    let totalHeight = 0;
    for (let index = 0; index < i; index++) {
        totalHeight += pages[index].offsetHeight;
    }

    window.y = document.body.scrollTop;
    window.scrollHeight = totalHeight;
    document.body.scroll(0, totalHeight);
    return;
    if (window.scrolling) return;
    window.scrollSpeed = 0.1;

    function scroll() {
        console.log(document.body.scrollTop);
        window.scrolling = true;
        document.body.scroll(0, window.y);
        window.y += (window.scrollHeight - window.y) * window.scrollSpeed;
        window.scrollAnimation = window.requestAnimationFrame(scroll);
        if (Math.abs(window.scrollHeight - window.y) <= 1) {
            window.scrolling = false;
            document.body.scroll(0, window.scrollHeight);
            window.cancelAnimationFrame(window.scrollAnimation);
        }
        return;
    }
    scroll();
}