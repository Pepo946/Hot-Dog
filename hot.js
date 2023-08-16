const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
let isPlaying = false;

playButton.addEventListener("click", function () {
    if (!isPlaying) {
        playButton.textContent = "Hotting...";
        audio.play();
        isPlaying = true;
    } else {
        playButton.textContent = "Hotdog Again!";
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
    }
});

audio.addEventListener("ended", function () {
    playButton.textContent = "Hotdog Party!";
    isPlaying = false;
});

