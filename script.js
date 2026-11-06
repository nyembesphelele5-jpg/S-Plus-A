
// WEBSITE PAGE NAVIGATION

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    selectedPage.classList.add("active");

    // Stop videos when leaving the memories page
    document.querySelectorAll("video").forEach(function(video) {
        video.pause();
    });

    window.scrollTo(0, 0);

}


// AMAHLE'S BACKGROUND SLIDESHOW

const amahlePhotos = [
    "images/amahle-1.jpg",
    "images/amahle-2.jpg",
    "images/amahle-3.jpg",
    "images/us-together.jpg"
];

let currentPhoto = 0;

setInterval(function() {

    const amahlePage = document.getElementById("amahlePage");

    if (amahlePage && amahlePage.classList.contains("active")) {

        currentPhoto++;

        if (currentPhoto >= amahlePhotos.length) {
            currentPhoto = 0;
        }

        amahlePage.style.backgroundImage =
            `url("${amahlePhotos[currentPhoto]}")`;

    }

}, 4000);
