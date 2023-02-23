const button = document.querySelector("#clicaae");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

if (button) {
  button.addEventListener("click", () => {
    popup.style.display = "block";
  });
}
close.addEventListener("click", () => {
  popup.style.display = "none";
});

console.log("entrou");
