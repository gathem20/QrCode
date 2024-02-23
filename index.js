let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let imgbox = document.getElementById("imgbox");
let img = document.getElementById("img");
let text = document.getElementById("text");

function GenQR() {
  if (text.value.length > 0) {
    img.src = `${url} ` + text.value;
    imgbox.classList.add("show-img");
  } else {
    text.classList.add("error");
    setTimeout(() => {
      text.classList.remove("error");
    }, 1000);
  }
}
