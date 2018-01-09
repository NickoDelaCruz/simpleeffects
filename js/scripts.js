$(document).ready(function() {
  $(".clickable").click(function() {
    $("#cat-showing").slideToggle();
    $("#cat-hidden").slideToggle();
  });
});
