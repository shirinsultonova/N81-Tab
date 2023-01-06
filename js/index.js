let btnPositive = document.querySelector("#btn-positive");
let btnNegative = document.querySelector("#btn-negative");
let btnNeutral = document.querySelector("#btn-neutral");
let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let textTab = document.querySelector(".text__tab");

function btnPositivee() {
  btnPositive.classList.remove("text-secondary");
  btnNegative.classList.add("text-secondary");
  btnNeutral.classList.add("text-secondary");
  textTab.innerHTML = "Positive content";
}

btnPositive.addEventListener("click", () => {
  btnPositivee();
});

function btnNegativee() {
  btnPositive.classList.add("text-secondary");
  btnNegative.classList.remove("text-secondary");
  btnNeutral.classList.add("text-secondary");
  textTab.innerHTML = "Negative content";
}

btnNegative.addEventListener("click", () => {
  btnNegativee();
});

function btnNeutrale() {
  btnPositive.classList.add("text-secondary");
  btnNegative.classList.add("text-secondary");
  btnNeutral.classList.remove("text-secondary");
  textTab.innerHTML = "Neutral content";
}

btnNeutral.addEventListener("click", () => {
  btnNeutrale();
});

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if ((elInput.value === "1", "2", "3")) {
    if (elInput.value == "1") {
      btnPositivee();
    }
    if (elInput.value == "2") {
      btnNegativee();
    }
    if (elInput.value == "3") {
      btnNeutrale();
    }
  }
  if (elInput.value != "1" && elInput.value != "2" && elInput.value != "3") {
    alert("Invalid index");
  }
  elInput.value = "";
});
