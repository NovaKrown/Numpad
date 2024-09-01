console.log("numpad loaded");

const output = document.querySelector("#output-text");

document.addEventListener("click", () => {
  console.log("click");
  output.innerText = "click";
});

output.innerText = "yeah!";
