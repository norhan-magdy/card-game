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