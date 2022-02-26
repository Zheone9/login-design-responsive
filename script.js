const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const label = document.getElementsByClassName("input-label");

emailInput.addEventListener("input", (e) => {
  if (emailInput.value.trim().length > 0) {
    if (!label[0].classList.contains("focused-input")) {
      label[0].classList.add("focused-input");
    }
  } else {
    if (label[0].classList.contains("focused-input")) {
      label[0].classList.remove("focused-input");
    }
  }
});

passwordInput.addEventListener("input", (e) => {
  if (emailInput.value.trim().length > 0) {
    if (!label[1].classList.contains("focused-input")) {
      label[1].classList.add("focused-input");
    }
  } else {
    if (label[1].classList.contains("focused-input")) {
      label[1].classList.remove("focused-input");
    }
  }
});
