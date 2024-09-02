console.log("numpad loaded");

const output = document.querySelector("#output-text");
const box = document.querySelector(".box");
let pointerEvent = false;
const pointerLocation = {
  x: 0,
  y: 0,
};

let width = window.innerWidth / 100;
let height = window.innerHeight / 100;
let boxDimensions = width < height ? width : height;

box.style.width = `${boxDimensions * 10}px`;
box.style.height = `${boxDimensions * 10}px`;

document.addEventListener("pointerdown", () => {
  console.log("click");
  pointerEvent = true;
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
  // console.log("loooop");
  if (pointerEvent) {
    output.innerText = `x: ${pointerLocation.x}, y: ${pointerLocation.y}`;
    box.style.backgroundColor = "cornflowerblue";
    box.style.top = `${pointerLocation.y}px`;
    box.style.left = `${pointerLocation.x}px`;
  }
  requestAnimationFrame(loop);
};

loop();
