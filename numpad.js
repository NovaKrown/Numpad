console.log("numpad loaded");

const output = document.querySelector("#output-text");

const box = document.querySelector(".box");


document.addEventListener("pointerdown", (event) => {
  console.log("click");
  output.innerText = `${event.clientX}, ${event.clientY}`;
});

document.addEventListener("pointerup", () => {
  output.innerText = "boop";
});

output.innerText = "ready!";

box.style