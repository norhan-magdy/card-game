//variabels
let deuration = 700;
let blocksContainer = document.querySelector("#gameBlocks");

// Cards data
const cardData = [
    { technology: "shield", image: "images/shield.png", alt: "shield" },
    { technology: "avengers", image: "images/avengers.png", alt: "avengers" },
    { technology: "batman", image: "images/batman.png", alt: "batman" },
    { technology: "black", image: "images/black.png", alt: "black" },
    { technology: "hulk", image: "images/man.png", alt: "hulk" },
    { technology: "mjolnir", image: "images/mjolnir.png", alt: "mjolnir" },
    { technology: "groot", image: "images/baby-groot.png", alt: "groot" },
    { technology: "dark", image: "images/dark.png", alt: "dark" },
    { technology: "bat", image: "images/bat.png", alt: "bat" },
    { technology: "dracula", image: "images/dracula.png", alt: "dracula" },
    { technology: "witch", image: "images/witch.png", alt: "witch" },
    { technology: "castle", image: "images/castle.png", alt: "castle" },
    {
      technology: "light-saber",
      image: "images/light-saber.png",
      alt: "light-saber",
    },
    {
      technology: "harry-potter",
      image: "images/harry-potter.png",
      alt: "harry-potter",
    },
    { technology: "movie", image: "images/movie.png", alt: "movie" },
    { technology: "movie1", image: "images/movie (1).png", alt: "movie1" },
    { technology: "broom", image: "images/broom.png", alt: "broom" },
    { technology: "scary", image: "images/scary.png", alt: "scary" },
  ];
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
  
  