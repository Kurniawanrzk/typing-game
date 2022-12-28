let xRect = 0,
  yRect = 0,
  textarea = document.getElementById("textarea"),
  img;

function setup() {
  let myCanvas = createCanvas(1100, 400);
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
    "Sistem noken adalah sebuah sistem pemilihan umum yang digunakan khusus untuk sejumlah kabupaten di wilayah Pegunungan Tengah di Provinsi Papua Tengah dan Papua Pegunungan, Indonesia. Sistem ini dinamai dari noken, yaitu sebuah tas anyaman dari serat kulit kayu yang memiliki peran sentral dalam kehidupan masyarakat Papua. Tidak diketahui secara pasti kapan sistem noken pertama kali digagas. Konon gagasan untuk memasukkan surat suara ke dalam noken muncul secara spontan saat pesta bakar batu yang merupakan sebuah tradisi di Papua,".toLowerCase().replace(/[.,]/g, '').split(
      " "
    ),
  dataText = textToType[statusNum].split(""),
  statusPlayer;

textarea.addEventListener("keyup", typeChecking);

window.addEventListener("load", () => {
  for(let i = 0; i < textToType.length; i++) {
    document.getElementById("textToType").innerHTML += `
      <span data-text-to-type='${textToType[i]}-${i}'>${textToType[i]}</span>
    `
  }
});

function typeChecking(e) {
  if(textarea.value === '' && e.key == ' ') {
    alert("please insert the text")
  } 

  if(textToType[statusNum] == textarea.value && e.key == ' ' && textarea.value !== '') {
    xRect += 50;
    statusNum++;
    textarea.value = ''
  } else if(textToType[statusNum] !== textarea.value && e.key == ' ' && textarea.value !== ''){
    statusNum++;
    textarea.value = ''
  }
console.log(textToType[statusNum].includes(textarea.value) )
  if(textToType[statusNum].includes(textarea.value)) {
    textarea.style.color = "green";
    document.querySelector(`[data-text-to-type=${textToType[statusNum]}-${statusNum}]`).style.color = 'white'
    document.querySelector(`[data-text-to-type=${textToType[statusNum]}-${statusNum}]`).style.background = 'gray'
    textarea.setAttribute("maxlength", 100);
  } else {
    textarea.style.color = "red";
    document.querySelector(`[data-text-to-type=${textToType[statusNum]}-${statusNum}]`).style.background = 'red'
  }

 
  
}
