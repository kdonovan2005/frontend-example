document.addEventListener('turbolinks:load', function() {
  console.log("Is it even getting here?")
  //my-list-modal
  var modal = document.getElementsByClassName("my-list-modal")[0];

  var btn = document.getElementById("my-list-image");

  var close = document.getElementsByClassName("close-modal-button")[0]

  btn.onclick = function() {
    modal.style.display = "block";
  }

  close.onclick = function() {
    modal.style.display = "none";
  }

  //default open tab
  defaultOpen = document.getElementById("defaultOpen");
  defaultOpen.click();

  //default open feature
  defaultOpenFeature = document.getElementById("defaultOpenFeature");
  defaultOpenFeature.click();
});
