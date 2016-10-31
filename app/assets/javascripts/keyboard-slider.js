$(document).ready(function() {

  $("h2.keyboard-slider").click(function() {
    $("div.slider-div").slideToggle(function() {
      $("ul.flex-container-mylist").slideUp();
      $("div.slider-div").show();
    });
  });

  $("div.cancel-button").click(function() {
    $("div.slider-div").slideToggle(function() {
      $("div.slider-div").hide();
      $("ul.flex-container-mylist").slideDown();
    })
  })

});
