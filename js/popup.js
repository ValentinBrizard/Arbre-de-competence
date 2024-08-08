document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".popup-trigger"); // Images qui déclenchent les popups
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");

    images.forEach(image => {
        image.addEventListener("mouseenter", (e) => {
            const imgSrc = e.target.getAttribute("data-popup-src");
            popupImage.src = imgSrc;
            const rect = e.target.getBoundingClientRect();
            popup.style.top = `${rect.bottom + window.scrollY}px`;
            popup.style.left = `${rect.left + window.scrollX}px`;
            popup.style.display = "block";
        });

        image.addEventListener("mouseleave", () => {
            popup.style.display = "none";
        });
    });
});
