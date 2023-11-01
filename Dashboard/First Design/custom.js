$(".table-content").on("wheel", function (e) {
  var delta = e.originalEvent.deltaY;

  if (delta > 0) {
    // Scrolling down
    $(".table-content").scrollTop($(".table-content").scrollTop() + 100);
  } else {
    // Scrolling up
    $(".table-content").scrollTop($(".table-content").scrollTop() - 100);
  }

  e.preventDefault();
});
