$(document).ready(function() {
  $("#profile").on("click", function() {
    console.log("click");
    $("#profile-container")
      .show()
      .animate({
        opacity: "1"
      });
    $("#care-container")
      .hide()
      .animate({
        opacity: "0"
      });
    $("#profile").removeClass("inactive");
    $("#care").addClass("inactive");
  });

  $("#care").on("click", function() {
    $("#care-container")
      .show()
      .animate({
        opacity: "1"
      });
    $("#profile-container")
      .hide()
      .animate({
        opacity: "0"
      });
    $("#care").removeClass("inactive");
    $("#profile").addClass("inactive");
  });

  $(".terra-mater-logo").on("click", function() {
    window.location.href = "/";
  });

  $(".fav-btn").on("click", function() {
    var favorite = {
       plantId: $('.plant-name')
          .attr("data-id")
          .trim(),
       commonName: $('.plant-name')
          .attr("data-name")
          .trim()
    };
    console.log(favorite);

    $.post("/api/add-favorite", favorite).then(function(response) {
      console.log(response);
    });
  });

  $(".terra-mater-logo-wide").on("click", function() {
    window.location.href = "/";
  });

  $(".terra-mater-logo").on("click", function() {
    window.location.href = "/";
  });
});
