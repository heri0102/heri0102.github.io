const backgroundImg = ["01.jfif","02.jfif","03.jfif"];

const chosenImage = backgroundImg[Math.floor(Math.random() * backgroundImg.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
