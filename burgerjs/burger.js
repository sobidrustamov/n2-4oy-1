let layerBtns = document.querySelectorAll(".layer-btns .btn");
let burgerWrapper = document.querySelector(".burger");
let topBread = document.querySelector(".bread-top");
let bottomBread = document.querySelector(".bread-bottom");
let total = document.querySelector(".total");
let orderBtn = document.querySelector(".order-btn");
let reset = document.querySelector("#reset");

let ingredients = {
  cheese: 2,
  meat: 5,
  onion: 1,
  tomato: 2,
  cucumber: 3,
  salad: 1,
};

layerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let layer = btn.getAttribute("data-layer");
    let price = ingredients[layer];
    let imageURL = "/imagesburger/" + layer + ".png";
    let image = document.createElement("img");
    image.setAttribute("src", imageURL);
    image.classList.add(layer);
    burgerWrapper.insertBefore(image, topBread);
    total.innerText = +total.innerText + price;

    image.addEventListener("click", () => {
      image.remove();
      total.innerText -= price;
    });
  });
});

reset.addEventListener("click", () => {
  burgerWrapper.innerHTML = "";
  burgerWrapper.append(bottomBread);
  burgerWrapper.append(topBread);
  
  total.innerHTML = 2;
});

orderBtn.addEventListener("click", () => {
  if (+total.innerText < 8) return;
  let order = Math.floor(Math.random() * 26 + 10);

  alert(
    "Buyurtmangiz uchun $" +
      total.innerText +
      " qabul qilindi! Sizning tartibingiz " +
      order +
      ". Bizni tanlaganingizdan xursandmiz. 📣"
  );

  burgerWrapper.innerHTML = "";
  burgerWrapper.append(bottomBread);
  burgerWrapper.append(topBread);

  total.innerHTML = 2;
});
