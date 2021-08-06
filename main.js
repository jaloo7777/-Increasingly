let thumbnails = document.getElementsByClassName("thumbnail");
let active = document.getElementsByClassName("active");

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("mouseover", function () {
    if (active.length > 0) {
      active[0].classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("featured").src = this.src;

    console.log("jalooo");
  });
}
