let xRect = 0,
  yRect = 0,
  textarea = document.getElementById("textarea"),
  img;

function setup() {
  let myCanvas = createCanvas(900, 400);
  myCanvas.parent("canvas");
}

function preload() {
  img = loadImage("CharaRun.gif");
}

function draw() {
  drawCar();
}

function drawCar() {
  clear();
  image(img, xRect, yRect + 100, 280, 290);
}

let textAlreadyType = [],
  statusNum = 0,
  textToType =
    "hai saya apakabar kemarin sedang rumah apa jika saja adik dan kita kemarin datang saja".split(
      " "
    ),
  dataText = textToType[statusNum].split(""),
  statusPlayer;

textarea.addEventListener("keyup", typeChecking);

window.addEventListener("load", () => {
  document.getElementById("textToType").innerHTML = textToType.join(" ");
});

function typeChecking() {
  if (
    textToType[statusNum] == textarea.value &&
    textToType[statusNum].includes(textarea.value)
  ) {
    xRect += 50;
    textAlreadyType.push(textarea.value);
    textarea.value = "";
    statusNum++;
    dataText = textToType[statusNum].split("");
  }

  if (
    dataText[textarea.value.split("").length - 1] ==
      textarea.value.split("")[textarea.value.split("").length - 1] &&
    dataText[textarea.value.split("").length - 2] ==
      textarea.value.split("")[textarea.value.split("").length - 2]
  ) {
    textarea.style.color = "green";
    textarea.setAttribute("maxlength", 100);
  } else {
    textarea.style.color = "red";
    textarea.setAttribute("maxlength", textarea.value.length);
  }
}
