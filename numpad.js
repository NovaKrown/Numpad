console.log("numpad loaded");

const output = document.querySelector("#output-text");

document.addEventListener("pointerdown", () => {
  console.log("click");
  output.innerText = "click";
});

document.addEventListener("pointerup", () => {
  output.innerText = "boop";
});

output.innerText = "ready!";
