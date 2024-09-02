console.log("numpad loaded");

const output = document.querySelector("#output-text");
const box = document.querySelector(".box");
let pointerEvent = false;
const pointerLocation = {
  x: 0,
  y: 0,
};

let width = window.innerWidth;
let height = window.innerHeight;
let boxDimensions = width < height ? width / 15 : height / 15;
let centeredBox = boxDimensions / 2;

box.style.width = `${boxDimensions}px`;
box.style.height = `${boxDimensions}px`;

document.addEventListener("pointerdown", (event) => {
  console.log("click");
  pointerEvent = true;
  pointerLocation.x = event.clientX;
  pointerLocation.y = event.clientY;
});

document.addEventListener("pointermove", (event) => {
  pointerLocation.x = event.clientX;
  pointerLocation.y = event.clientY;
});

document.addEventListener("pointerup", () => {
  pointerEvent = false;
});

output.innerText = "ready!";

const loop = () => {
  // console.log(boxDimensions / 2);
  if (pointerEvent) {
    output.innerText = `x: ${pointerLocation.x}, y: ${pointerLocation.y}`;
    box.style.backgroundColor = "cornflowerblue";
    box.style.top = `${pointerLocation.y - centeredBox}px`;
    box.style.left = `${pointerLocation.x - centeredBox}px`;
  }
  requestAnimationFrame(loop);
};

loop();
