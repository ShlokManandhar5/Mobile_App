// jQuery script to change text >

$(document).ready(function () {
    // Array of texts to rotate through
    const texts = ["on trips.", "on dates.", "with friends.", "with anyone."];
    let currentIndexDesktop = 0;
    let currentIndexMobile = 0;

    // Function to change the desktop text
    function changeDesktopText() {
        currentIndexDesktop = (currentIndexDesktop + 1) % texts.length;
        $("#changing-text-desktop").fadeOut(400, function () {
            $(this).text(texts[currentIndexDesktop]).fadeIn(400);
        });
    }

    // Function to change the mobile text
    function changeMobileText() {
        currentIndexMobile = (currentIndexMobile + 1) % texts.length;
        $("#changing-text-mobile").fadeOut(400, function () {
            $(this).text(texts[currentIndexMobile]).fadeIn(400);
        });
    }

    // Change text every 5 seconds
    setInterval(changeDesktopText, 5000);
    setInterval(changeMobileText, 5000);
});