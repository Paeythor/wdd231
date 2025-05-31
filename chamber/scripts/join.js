
document.addEventListener("DOMContentLoaded", function () {
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }
});

/
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "flex";
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
  }
}











const openButton = document.querySelector("#openButton")
const dialogBox = document.querySelector("#dialogBox")
const closeButton = document.querySelector("#closeButton")

openButton.addEventListener("clicfk", () =>{
  dialogBox.showModal();
});
closeButton.addEventListener("clicfk", () =>{
  dialogBox.close();
});
