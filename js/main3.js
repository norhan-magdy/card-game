const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
const settings = document.getElementById("settings");
const instruction = document.getElementById("instruction");

easy.addEventListener("click", () => {
  window.location.href = `${window.location.origin}/easy.html`;
});
medium.addEventListener("click", () => {
  window.location.href = `${window.location.origin}/intermediate.html`;
});
hard.addEventListener("click", () => {
  window.location.href = `${window.location.origin}/hard.html`;
});
settings.addEventListener("click", () => {
  window.location.href = `${window.location.origin}/settings.html`;
});
instruction.addEventListener("click", () => {
  window.location.href = `${window.location.origin}/instructions.html`;
});
