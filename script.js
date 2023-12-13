// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    var playButton = document.getElementById("playButton");
    var christmasAudio = document.getElementById("christmasAudio");

    // Add click event to play button
    playButton.addEventListener("click", function () {
        if (christmasAudio.paused) {
            christmasAudio.play();
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            christmasAudio.pause();
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
});
