document.addEventListener("click", function(e) {
  //my-list modal

  var target = e.target;

  var modal = document.getElementsByClassName("my-list-modal")[0];

  var btn = document.getElementById("my-list-image");

  var close = document.getElementsByClassName("close-modal-button")[0]

  if (!target === modal) {
    return;
  }

  btn.onclick = function() {
    modal.style.display = "block";
  }

  close.onclick = function() {
    modal.style.display = "none";
  }

});
