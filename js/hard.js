// Cards data
const cardData = [
    { technology: "cartoon", image: "images/cartoon.png", alt: "cartoon" },
    { technology: "japanese", image: "images/japanese.png", alt: "japanese" },
    { technology: "naruto", image: "images/naruto.png", alt: "naruto" },
    { technology: "wu-kong", image: "images/wu-kong.png", alt: "wu-kong" },
    { technology: "sailor", image: "images/sailor.png", alt: "sailor" },
    { technology: "ninja", image: "images/ninja.png", alt: "ninja" },
    { technology: "ninja-1", image: "images/ninja-1.png", alt: "ninja-1" },
    { technology: "killer", image: "images/killer.png", alt: "killer" },
    { technology: "cat", image: "images/cat.png", alt: "cat" },
    { technology: "leonardo", image: "images/leonardo.png", alt: "leonardo" },
    { technology: "face", image: "images/face.png", alt: "face" },
    { technology: "alien", image: "images/alien.png", alt: "alien" },
    { technology: "banana", image: "images/banana.png", alt: "banana" },
    { technology: "nut", image: "images/nut.png", alt: "nut" },
    {
      technology: "strawberry",
      image: "images/strawberry.png",
      alt: "strawberry",
    },
    {
      technology: "watermelon",
      image: "images/watermelon.png",
      alt: "watermelon",
    },
    { technology: "zombie", image: "images/zombie.png", alt: "zombie" },
    { technology: "monster2", image: "images/monster2.png", alt: "monster2" },
    { technology: "monster", image: "images/monster.png", alt: "monster" },
    { technology: "witch", image: "images/witch.png", alt: "witch" },
    { technology: "manga", image: "images/manga.png", alt: "manga" },
    {
      technology: "i-dont-know",
      image: "images/i-dont-know.png",
      alt: "i-dont-know",
    },
    {
      technology: "horror-movie",
      image: "images/horror-movie.png",
      alt: "horror-movie",
    },
    { technology: "ghost-1", image: "images/ghost-1.png", alt: "ghost-1" },
    { technology: "ghost-boy", image: "images/ghost-boy.png", alt: "ghost-boy" },
    { technology: "bat", image: "images/bat.png", alt: "bat" },
    { technology: "dragon", image: "images/dragon.png", alt: "dragon" },
    { technology: "scary", image: "images/scary-alien.png", alt: "scary" },
    { technology: "witch-2", image: "images/witch-2.png", alt: "witch-2" },
    { technology: "lll", image: "images/lll.png", alt: "lll" },
    { technology: "fff", image: "images/fff.png", alt: "fff" },
    { technology: "sss", image: "images/sss.png", alt: "sss" },
  ];
//   
// Duplicate the cards to make pairs
const gameCards = [...cardData, ...cardData];

// Shuffle the cards
function shuffle(array) {
  let current = array.length,
    random;

  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;
    [array[current], array[random]] = [array[random], array[current]];
  }

  return array;
}

// Shuffle the game cards
shuffle(gameCards);

// Create and append cards dynamically
gameCards.forEach((card) => {
  const gameBlock = document.createElement("div");
  gameBlock.classList.add("game-block");
  gameBlock.setAttribute("data-technology", card.technology);

  const front = document.createElement("div");
  front.classList.add("face", "front");

  const back = document.createElement("div");
  back.classList.add("face", "back");
  const img = document.createElement("img");
  img.src = card.image;
  img.alt = card.alt;
  back.appendChild(img);

  gameBlock.appendChild(front);
  gameBlock.appendChild(back);
  blocksContainer.appendChild(gameBlock);

  gameBlock.addEventListener("click", function () {
    flipBlock(gameBlock);
  });
});
// 
function flipAllCardsTemporarily(duration) {
    const allBlocks = Array.from(blocksContainer.children);
  
    allBlocks.forEach((block) => block.classList.add("is-flipped"));
  
    setTimeout(() => {
      allBlocks.forEach((block) => block.classList.remove("is-flipped"));
    }, duration);
  }
  
  const flipAudio = new Audio("audio/flip.mp3");
  const wrongAudio = new Audio("audio/faliure.mp3");
  const successAudio = new Audio("audio/success.mp3");
  // Flip block function
  function flipBlock(selectedBlock) {
    flipAudio.currentTime = 0;
    flipAudio.play();
    selectedBlock.classList.add("is-flipped");
  
    let allFlippedBlocks = Array.from(blocksContainer.children).filter((block) =>
      block.classList.contains("is-flipped")
    );
  
    if (allFlippedBlocks.length === 2) {
      stopclicking();
      checkMatchingBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
  }
  
  function stopclicking() {
    blocksContainer.classList.add("no-clicking");
    setTimeout(() => {
      blocksContainer.classList.remove("no-clicking");
    }, deuration);
  }
  
  function checkMatchingBlocks(firstBlock, secondBlock) {
    let triesElement = document.querySelector(".tries span");
  
    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
      firstBlock.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
  
      triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
      successAudio.currentTime = 0;
      successAudio.play();
      firstBlock.classList.add("has-match");
      secondBlock.classList.add("has-match");
    } else {
      triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
      firstBlock.classList.add("is-error");
      secondBlock.classList.add("is-error");
      wrongAudio.currentTime = 0;
      wrongAudio.play();
      setTimeout(() => {
        // wrongAudio.currentTime = 0;
        // wrongAudio.play();
        firstBlock.classList.remove("is-flipped", "is-error");
        secondBlock.classList.remove("is-flipped", "is-error");
      }, deuration);
    }
  }
//   
// Timer and win logic
const timerElement = document.querySelector(".time");
let seconds = 0;
let interval;

function startTimer() {
    interval = setInterval(() => {
      seconds++;
      updateTimerDisplay();
    }, 1000);
  }

//   
function updateTimerDisplay() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerElement.textContent = `Game Time: ${minutes}m ${remainingSeconds}s`;
  }
  // Show win popup
function showWinPopup(message) {
    const popup = document.getElementById("winPopup");
    const messageElement = document.getElementById("winMessage");
    const balloonsContainer = document.createElement("div");
    balloonsContainer.classList.add("balloons-container");
    document.body.appendChild(balloonsContainer);
  
    messageElement.textContent = message;
  
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
    document.getElementById("playAgainBtn").addEventListener("click", () => {
      location.reload();
    });
  
    for (let i = 0; i < 20; i++) {
      const balloon = document.createElement("div");
      balloon.classList.add("balloon");
  
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.animationDuration = Math.random() * 2 + 3 + "s";
      balloon.style.backgroundColor = getRandomColor();
  
      balloonsContainer.appendChild(balloon);
  
      balloon.addEventListener("animationend", () => {
        balloon.remove();
      });
    }
  
    setTimeout(() => {
      balloonsContainer.remove();
    }, 20000);
  }
  
  function getRandomColor() {
    const colors = [
      "#ff5f5f",
      "#ff9f5f",
      "#ffdf5f",
      "#9fff5f",
      "#5fffdf",
      "#5f9fff",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  const clapping = new Audio("audio/clapping.mp3");
  