const open = document.getElementById("joinbutton");
const close = document.getElementById("close");
const info = document.getElementById("info");
const modal = document.querySelector(".modal-wrapper");

open.onclick = (event) => {
  modal.style.display = "flex";
  event.preventDefault();
};

close.onclick = (event) => {
  modal.style.display = "none";
  info.submit();
};
