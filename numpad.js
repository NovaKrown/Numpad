console.log("numpad loaded");

const output = document.querySelector("#output-text");

const box = document.querySelector(".box");


document.addEventListener("pointerdown", (event) => {
  console.log("click");
  output.innerText = `${event.clientX}, ${event.clientY}`;
  box.style.top = `${event.clientY}`;
  box.style.left = `${event.clientX}`;
});

document.addEventListener("pointerup", () => {
  output.innerText = "boo";
});

output.innerText = "ready!";