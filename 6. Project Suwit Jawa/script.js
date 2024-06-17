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
const div = document.querySelector("div.omg div#divbot")
const h2 = document.querySelector("#h2bot")

gajah.addEventListener("click", function () {
  const botRandom = Math.round(Math.random() * 2);
  console.log(botRandom);
  gajah.classList.add("gapactive")  
  if (
    botRandom == 0 &&
    orangBot.classList.contains("hidden") == true &&
    gajahBot.classList.contains("hidden") == true &&
    semutBot.classList.contains("hidden") == true
  ) {
    gajahBot.classList.remove("hidden");
    draw.classList.remove("hidden");
    div.classList.add("drawdiv")
    h2.classList.add("drawdiv")
  } else if (
    botRandom == 1 &&
    orangBot.classList.contains("hidden") == true &&
    gajahBot.classList.contains("hidden") == true &&
    semutBot.classList.contains("hidden") == true
  ) {
    orangBot.classList.remove("hidden");
    win.classList.remove("hidden");
    div.classList.add("windiv")
    h2.classList.add("windiv")
  } else if (
    botRandom == 2 &&
    orangBot.classList.contains("hidden") == true &&
    gajahBot.classList.contains("hidden") == true &&
    semutBot.classList.contains("hidden") == true
  ) {
    semutBot.classList.remove("hidden");
    lose.classList.remove("hidden");
    div.classList.add("losediv")
    lose.classList.add("losediv")
  }
  setTimeout(()=>{
    document.addEventListener('click', function(){
      location.reload();
    }, 1000)
    
  })
});

orang.addEventListener("click", function () {
    const botRandom = Math.round(Math.random() * 2);
    console.log(botRandom);
    orang.classList.add("gapactive")  

    if (
      botRandom == 0 &&
      orangBot.classList.contains("hidden") == true &&
      gajahBot.classList.contains("hidden") == true &&
      semutBot.classList.contains("hidden") == true
    ) {
      gajahBot.classList.remove("hidden");
      lose.classList.remove("hidden");
      div.classList.add("losediv")
      h2.classList.add("losediv")
    } else if (
      botRandom == 1 &&
      orangBot.classList.contains("hidden") == true &&
      gajahBot.classList.contains("hidden") == true &&
      semutBot.classList.contains("hidden") == true
    ) {
      orangBot.classList.remove("hidden");
      draw.classList.remove("hidden");
      div.classList.add("drawdiv")
      h2.classList.add("drawdiv")
    } else if (
      botRandom == 2 &&
      orangBot.classList.contains("hidden") == true &&
      gajahBot.classList. contains("hidden") == true &&
      semutBot.classList.contains("hidden") == true
    ) {
      semutBot.classList.remove("hidden");
      win.classList.remove("hidden");
      div.classList.add("windiv")
      h2.classList.add("windiv")
    }setTimeout(()=>{
      document.addEventListener('click', function(){
        location.reload();
      }, 1000)
      
    })
  });

  semut.addEventListener("click", function () {
    const botRandom = Math.round(Math.random() * 2);
    console.log(botRandom);
    semut.classList.add("gapactive")
    if (
      botRandom == 0 &&
      orangBot.classList.contains("hidden") == true &&
      gajahBot.classList.contains("hidden") == true &&
      semutBot.classList.contains("hidden") == true
    ) {
      gajahBot.classList.remove("hidden");
      win.classList.remove("hidden");
      div.classList.add("windiv")
      h2.classList.add("windiv")
    } else if (
      botRandom == 1 &&
      orangBot.classList.contains("hidden") == true &&
      gajahBot.classList.contains("hidden") == true &&
      semutBot.classList.contains("hidden") == true
    ) {
      orangBot.classList.remove("hidden");
      lose.classList.remove("hidden");
      div.classList.add("losediv")
      h2.classList.add("losediv")
    } else if (
      botRandom == 2 &&
      orangBot.classList.contains("hidden") == true &&
      gajahBot.classList. contains("hidden") == true &&
      semutBot.classList.contains("hidden") == true
    ) {
      semutBot.classList.remove("hidden");
      draw.classList.remove("hidden");
      div.classList.add("drawdiv")
      h2.classList.add("drawdiv")
    }setTimeout(()=>{
      document.addEventListener('click', function(){
        location.reload();
      }, 1000)
      
    })
  });

  