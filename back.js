<script>
    var typed = new Typed('#element', {
        strings: ['One-Shot: Your one stop destination for all engineering resources consolidated in a single platform!'],
        typeSpeed: 50,
    });

    const carousel = document.querySelector(".carousel");
    const arrBtns = document.querySelectorAll(".wrapper i");
    const firstCardWidth = carousel.querySelector(".cards").offsetWidth;
    let isDragging = false, startX, startScrollLeft;

    arrBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX || e.touches[0].pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
        const x = (e.pageX || e.touches[0].pageX) - startX;
        carousel.scrollLeft = startScrollLeft - x;
        e.preventDefault();
    };

    const stopDrag = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", stopDrag);
    carousel.addEventListener("mouseleave", stopDrag);
    carousel.addEventListener("touchstart", dragStart);
    carousel.addEventListener("touchmove", dragging);
    carousel.addEventListener("touchend", stopDrag);

    const carousel2 = document.querySelector(".carousel2");
    const arrBtns2 = document.querySelectorAll(".wrapper2 i");
    const firstCardWidth2 = carousel2.querySelector(".cards2").offsetWidth;
    let isDragging2 = false, startX2, startScrollLeft2;

    arrBtns2.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel2.scrollLeft += btn.id === "left2" ? -firstCardWidth2 : firstCardWidth2;
        });
    });

    const dragStart2 = (e) => {
        isDragging2 = true;
        carousel2.classList.add("dragging");
        startX2 = e.pageX || e.touches[0].pageX;
        startScrollLeft2 = carousel2.scrollLeft;
    };

    const dragging2 = (e) => {
        if (!isDragging2) return;
        const x = (e.pageX || e.touches[0].pageX) - startX2;
        carousel2.scrollLeft = startScrollLeft2 - x;
        e.preventDefault();
    };

    const stopDrag2 = () => {
        isDragging2 = false;
        carousel2.classList.remove("dragging");
    };

    carousel2.addEventListener("mousedown", dragStart2);
    carousel2.addEventListener("mousemove", dragging2);
    carousel2.addEventListener("mouseup", stopDrag2);
    carousel2.addEventListener("mouseleave", stopDrag2);
    carousel2.addEventListener("touchstart", dragStart2);
    carousel2.addEventListener("touchmove", dragging2);
    carousel2.addEventListener("touchend", stopDrag2);
</script>
