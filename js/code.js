window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
function openModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
}
function closeModal() {
    /* document.getElementsByClassName("close")[0]; */
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}
