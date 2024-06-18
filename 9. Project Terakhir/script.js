const thumbnail = document.querySelector(".thumbnail");
const jumbo = document.querySelector("#jumbo");
const test = document.querySelector("div.thumb img");
const thumb = document.querySelectorAll(".thumb");


thumbnail.addEventListener("click", (e) => {

  if (
    e.target.classList.contains("thumb") &&
    !e.target.classList.contains("active")
  ) {
    thumb.forEach((e) => {
      e.classList.remove("active");
      return;
    });
    jumbo.setAttribute("src", e.target.getAttribute("src"));
    jumbo.classList.add("fade");
    e.target.classList.add("active");
    setTimeout(() => {
      jumbo.classList.remove("fade");
    }, 500);
  }
});
