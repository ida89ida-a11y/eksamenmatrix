const video = document.getElementById("heroVideo");

// ingen loop
video.loop = false;

// klik → lyd starter
video.addEventListener("click", () => {
  video.muted = false;
  video.volume = 1;
  video.play();
});

