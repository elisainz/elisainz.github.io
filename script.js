$(document).ready(function() {

  var carousel = $(".carousel");
  var currdeg = 0;

  $(".next").on("click", { d: "n" }, rotate);
  $(".prev").on("click", { d: "p" }, rotate);

  function rotate(e) {
    if (e.data.d == "n") {
      currdeg -= 60;
    }
    if (e.data.d == "p") {
      currdeg += 60;
    }
    carousel.css("transform", "rotateY(" + currdeg + "deg)");
  }

});
