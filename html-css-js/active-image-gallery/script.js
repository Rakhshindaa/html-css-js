// script.js
const featuredImage = document.getElementById("featured");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(thumb => {
    thumb.addEventListener("click", function() {
        // 1. Update main image source
        featuredImage.src = this.src;

        // 2. Remove active class from previous thumbnail
        document.querySelector(".thumb.active").classList.remove("active");

        // 3. Add active class to clicked thumbnail
        this.classList.add("active");
    });
});
