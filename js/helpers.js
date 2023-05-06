const keys = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};
const regex = /[A-ZÀ-ÿ]/g;
const isInvalidInput = (str) => regex.test(str);
const textareaIsEmpty = (str) => str === "";

function hide() {
  alertCard.classList.remove("show");
  alertCard.classList.add("hidden");
}

function encrypt(str) {
  if (textareaIsEmpty(str))
    return {
      succefull: false,
      message: "Nada para encriptar o desencriptar :(",
    };
  if (isInvalidInput(str)) {
    return { succefull: false, message: "Hay carácteres no permitidos :(" };
  }

  let encryptedValue = "";
  const textAreaValue = textArea.value;
  for (let letter of textAreaValue) {
    if (keys[letter] === undefined) encryptedValue += letter;
    else encryptedValue += keys[letter];
  }

  if (encryptedValue !== "")
    return {
      succefull: true,
      message: encryptedValue,
    };
}

function decrypt(str) {
  if (textareaIsEmpty(str)) {
    return {
      succefull: false,
      message: "Nada para encriptar o desencriptar :(",
    };
  }
  if (isInvalidInput(str)) {
    return { succefull: false, message: "Hay carácteres no permitidos :(" };
  }

  let encryptedValue = "";
  const textAreaValue = textArea.value;

  for (let i = 0; i < textAreaValue.length; i++) {
    let letter = textAreaValue[i];
    if (keys[letter] !== undefined) {
      const key = keys[letter];
      const hiddenTxt = textAreaValue.slice(i, i + key.length);

      if (hiddenTxt === key) i = i + (key.length - 1);
    }
    encryptedValue += letter;
  }

  if (encryptedValue !== "") {
    return {
      succefull: true,
      message: encryptedValue,
    };
  }
}

function copyText() {
  navigator.clipboard
    .writeText(document.querySelector("#processedText").textContent)
    .then(
      function () {
        document.querySelector("#toast").classList.toggle("copied");
        setTimeout(() => {
          document.querySelector("#toast").classList.toggle("copied");
        }, 2000);
      },
      function (err) {
        console.log("Error: No se pudo copiar el texto", err);
      }
    );
}
