const bgSound = document.getElementById("background-music");
const controlSoundTrack = document.getElementById("circle-control");

import { mySound } from "./sound.js";
let tracks = ["that-game-arcade", "megalovania", "puzzle-game-loop"];

document.addEventListener("DOMContentLoaded", function () {
  mySound.play();
});

bgSound.addEventListener("change", changeVolume);
controlSoundTrack.addEventListener("click", changeTrack);

function changeVolume() {
  mySound.sound.volume = bgSound.value / 100;
  localStorage.setItem("soundTrack", `${mySound.sound.src}`);
  localStorage.setItem("currentTime", `${mySound.sound.currentTime}`);
  localStorage.setItem("volume", mySound.sound.volume);
}
function changeTrack() {
  for (let i = 0; i < tracks.length; i++) {
    if (mySound.sound.src.includes(tracks[i])) {
      let track = tracks[i + 1] || tracks[0];
      mySound.sound.src = `../audio/${track}.mp3`;
      break;
    }
  }
  localStorage.setItem("soundTrack", `${mySound.sound.src}`);
  mySound.play();
}

const save = document.getElementById("save");

save.addEventListener("click", () => {
  changeVolume();
  window.location.href = `${window.location.origin}/index.html`;
});
