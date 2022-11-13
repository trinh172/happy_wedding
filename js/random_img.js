const imgs = [
    "assets/wedding_1.jpg",
    "assets/wedding_2.jpg",
    "assets/wedding_3.jpg",
    "assets/wedding_4.jpg",
    "assets/wedding_5.jpg",
    "assets/wedding_6.jpg",
    "assets/wedding_7.jpg",
    "assets/wedding_8.jpg",
    "assets/wedding_9.jpg",
    "assets/wedding_10.jpg",
];

function changeImg() {
  const index = Math.floor(Math.random() * imgs.length);
  document.getElementById("imgId").src = imgs[index];
}

changeImg();
setInterval(changeImg, 1500);