const textArea = document.querySelector("textarea");
const encryptBtn = document.querySelector("#encrypt");
const decryptBtn = document.querySelector("#decrypt");
const copyBtn = document.querySelector("#copy");

const alertCard = document.querySelector("#alert-wrapper");
const menuBtn = document.querySelector("#menu");
const closeBtn = document.querySelector("#close");
const themeBtn = document.querySelector("#theme");

function encrypting() {
  const result = encrypt(textArea.value);
  if (result.succefull) {
    document.querySelector("#card").classList.add("hidden");
    document.querySelector("#processedText").textContent = result.message;
    document.querySelector("#copy").classList.remove("hidden");
  } else {
    alertCard.classList.remove("hidden");
    alertCard.classList.add("show");
    document.querySelector("#card-info").textContent = result.message;
    document.querySelector("#card").classList.remove("hidden");
    document.querySelector("#processedText").textContent = "";
    document.querySelector("#copy").classList.add("hidden");
  }
}

function decryting() {
  const result = decrypt(textArea.value);
  if (result.succefull) {
    document.querySelector("#card").classList.add("hidden");
    document.querySelector("#processedText").textContent = result.message;
    document.querySelector("#copy").classList.remove("hidden");
  } else {
    alertCard.classList.remove("hidden");
    alertCard.classList.add("show");
    document.querySelector("#card-info").textContent = result.message;
    document.querySelector("#card").classList.remove("hidden");
    document.querySelector("#processedText").textContent = "";
    document.querySelector("#copy").classList.add("hidden");
  }
}

menuBtn.addEventListener("click", function () {
  document.querySelector("#options").classList.toggle("left-0");
  document.querySelector("#menu-wrapper").classList.toggle("show");
});
closeBtn.addEventListener("click", function () {
  document.querySelector("#options").classList.toggle("left-0");
  document.querySelector("#menu-wrapper").classList.remove("show");
});
themeBtn.addEventListener("click", function () {
  this.classList.toggle("dark");
  document.querySelector("body").classList.toggle("dark");
});

encryptBtn.addEventListener("click", encrypting);
decryptBtn.addEventListener("click", decryting);
copyBtn.addEventListener("click", copyText);
