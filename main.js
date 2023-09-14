function changeImg(img) {
  document.querySelector(".center-image img").src = `./imgs/pepsi00${img}.png`;

  if (img == 1) {
    document.querySelector("body").style.background = "#0062be";
  }
  if (img == 2) {
    document.querySelector("body").style.background = "#E60C2C";
  }
  if (img == 3) {
    document.querySelector("body").style.background = "#1e1e1e";
  }
}
