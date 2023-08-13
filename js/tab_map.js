$(document).ready(function() {
  // Hide all content sections except the first one
  $(".content .txt .shop").not(":first").hide();

  $(".drop-down-menu a").click(function(event) {
    event.preventDefault();

    // Hide all content sections
    $(".content .txt .shop").hide();

    // Show the selected content section
    const target = $(this).attr("data-target");
    $(`.content .txt .${target}`).show();

    // Update the button text
    const buttonText = $(this).text();
    $(".drop-down-menu > li > a").text(buttonText);
  });
});
