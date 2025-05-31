const openButton1 = document.querySelector("#openButton1");
const openButton2 = document.querySelector("#openButton2");
const openButton3 = document.querySelector("#openButton3");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

openButton1.addEventListener("click", () => {
  dialogBox.showModal();
  dialogBoxText.innerHTML = 'One Apple contains 95 calories.';
});

openButton2.addEventListener("click", () => {
  dialogBox.showModal();
  dialogBoxText.innerHTML = 'One Orange contains 62 calories.';
});

openButton3.addEventListener("click", () => {
  dialogBox.showModal();
  dialogBoxText.innerHTML = 'One Banana contains 105 calories.';
});

closeButton.addEventListener("click", () => {
  dialogBox.close();
});
