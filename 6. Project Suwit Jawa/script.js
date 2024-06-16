const gajah = document.querySelector("#gajah");
const orang = document.querySelector("#orang");
const semut = document.querySelector("#semut");
const gajahBot = document.querySelector(".gajahBot");
const orangBot = document.querySelector(".orangBot");
const semutBot = document.querySelector(".semutBot");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");
const lose = document.querySelector("#lose");
const reset = document.querySelector("button#reset");

gajah.addEventListener("click", function () {
  const botRandom = Math.round(Math.random() * 2);
  console.log(botRandom);

  if (
    botRandom == 0 &&
    orangBot.classList.contains("hidden") == true &&
    gajahBot.classList.contains("hidden") == true &&
    semutBot.classList.contains("hidden") == true
  ) {
    gajahBot.classList.remove("hidden");
    draw.classList.remove("hidden");
  } else if (
    botRandom == 1 &&
    orangBot.classList.contains("hidden") == true &&
    gajahBot.classList.contains("hidden") == true &&
    semutBot.classList.contains("hidden") == true
  ) {
    orangBot.classList.remove("hidden");
    win.classList.remove("hidden");
  } else if (
    botRandom == 2 &&
    orangBot.classList.contains("hidden") == true &&
    gajahBot.classList.contains("hidden") == true &&
    semutBot.classList.contains("hidden") == true
  ) {
    semutBot.classList.remove("hidden");
    lose.classList.remove("hidden");
  } else {
    location.reload();
  }
});

orang.addEventListener("click", function () {
    const botRandom = Math.round(Math.random() * 2);
    console.log(botRandom);
  
    if (
      botRandom == 0 &&
      orangBot.classList.contains("hidden") == true &&
      gajahBot.classList.contains("hidden") == true &&
      semutBot.classList.contains("hidden") == true
    ) {
      gajahBot.classList.remove("hidden");
      lose.classList.remove("hidden");
    } else if (
      botRandom == 1 &&
      orangBot.classList.contains("hidden") == true &&
      gajahBot.classList.contains("hidden") == true &&
      semutBot.classList.contains("hidden") == true
    ) {
      orangBot.classList.remove("hidden");
      draw.classList.remove("hidden");
    } else if (
      botRandom == 2 &&
      orangBot.classList.contains("hidden") == true &&
      gajahBot.classList. contains("hidden") == true &&
      semutBot.classList.contains("hidden") == true
    ) {
      semutBot.classList.remove("hidden");
      win.classList.remove("hidden");
    } else {
      location.reload();
    }
  });

  semut.addEventListener("click", function () {
    const botRandom = Math.round(Math.random() * 2);
    console.log(botRandom);
  
    if (
      botRandom == 0 &&
      orangBot.classList.contains("hidden") == true &&
      gajahBot.classList.contains("hidden") == true &&
      semutBot.classList.contains("hidden") == true
    ) {
      gajahBot.classList.remove("hidden");
      win.classList.remove("hidden");
    } else if (
      botRandom == 1 &&
      orangBot.classList.contains("hidden") == true &&
      gajahBot.classList.contains("hidden") == true &&
      semutBot.classList.contains("hidden") == true
    ) {
      orangBot.classList.remove("hidden");
      lose.classList.remove("hidden");
    } else if (
      botRandom == 2 &&
      orangBot.classList.contains("hidden") == true &&
      gajahBot.classList. contains("hidden") == true &&
      semutBot.classList.contains("hidden") == true
    ) {
      semutBot.classList.remove("hidden");
      draw.classList.remove("hidden");
    } else {
      location.reload();
    }
  });
  