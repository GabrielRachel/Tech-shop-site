const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
const numberIndicator = document.querySelector(".numbers");

let active = 0;
const total = items.length;

function update(direction) {
  items[active].classList.remove("active");
  dots[active].classList.remove("dot-active");

  active = (active + direction + total) % total;

  items[active].classList.add("active");
  dots[active].classList.add("dot-active");
  numberIndicator.textContent = String(active + 1).padStart(2, "0");
}

prevButton.addEventListener("click", () => update(-1));
nextButton.addEventListener("click", () => update(1));