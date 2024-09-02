console.log("numpad loaded");

document.addEventListener('click', () => {
    console.log("click");
})

const output = document.querySelector("#output-text");

document.addEventListener("click", () => {
  console.log("click");
  output.innerText = "click";
});

output.innerText = "yeah!";
