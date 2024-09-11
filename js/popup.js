document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".popup-trigger"); // Images qui déclenchent les popups
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");

    images.forEach(image => {
        image.addEventListener("mouseenter", (e) => {
            const imgSrc = e.target.getAttribute("data-popup-src");
            popupImage.src = imgSrc;
            popup.style.display = "block";
        });

        image.addEventListener("mouseleave", () => {
            popup.style.display = "none";
        });

        image.addEventListener("mousemove", (e) => {
            const offset = 10; // Décalage pour éviter que le popup ne recouvre le curseur
            popup.style.top = `${e.pageY + offset}px`;
            popup.style.left = `${e.pageX + offset}px`;
        });
    });
});
