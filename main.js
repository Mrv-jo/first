const cube = document.querySelector(".cube");
const body = document.querySelector("body");

let startX, startY;

function rotate(eX, eY) {
  cube.style.transform = `
    rotateX(${(eY - startY) / 4}deg)
    rotateY(${(eX - startX) / 4}deg)
  `;
}

/* - Mouse Events -*/
cube.addEventListener("mousedown", (e) => {
  startX = e.clientX;
  startY = e.clientY;

  window.addEventListener("mousemove", mouseMove);
  body.style.cursor = "grabbing";
});

function mouseMove(e) {
  rotate(e.clientX, e.clientY);
}

window.addEventListener("mouseup", () => {
  window.removeEventListener("mousemove", mouseMove);
  body.style.cursor = "default";
});


/* -- Touch in Mobile mode -*/
cube.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  startX = touch.clientX;
  startY = touch.clientY;

  window.addEventListener("touchmove", touchMove);
  body.style.cursor = "grabbing";
});

function touchMove(e) {
  const touch = e.touches[0];
  rotate(touch.clientX, touch.clientY);
}

window.addEventListener("touchend", () => {
  window.removeEventListener("touchmove", touchMove);
  body.style.cursor = "default";
});
