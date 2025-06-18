document.addEventListener("DOMContentLoaded", function () {
  
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }

  
  const openButton = document.querySelector("#openButton");
  const dialogBox = document.querySelector("#dialogBox");
  const closeButton = document.querySelector("#closeButton");

  if (openButton && dialogBox && closeButton) {
    openButton.addEventListener("click", () => {
      if (typeof dialogBox.showModal === "function") {
        dialogBox.showModal();
      } else {
        console.warn("dialogBox does not support showModal. Is it a <dialog> element?");
      }
    });

    closeButton.addEventListener("click", () => {
      dialogBox.close();
    });
  }
});


function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.removeAttribute("hidden");
    modal.classList.add("show");
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.setAttribute("hidden", "true");
    modal.classList.remove("show");
  }
}
