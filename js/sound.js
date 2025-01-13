function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.loop = true;
  this.sound.preload = "none";
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play().catch((error) => {
      console.log("Playback failed:", error);
    });
  };
  this.stop = function () {
    this.sound.pause();
  };
}

export let mySound = new sound("../audio/puzzle-game-loop.mp3");
mySound.sound.volume = 0.3;
