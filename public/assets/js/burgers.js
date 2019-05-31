// attach our handlers after the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    console.log("eat me clicked!");
    let id = $(this).data("id");
    let newDevour = $(this).data("newdevour");

    let newDevourState = {
      devoured: "true"
    };

    // Send the PUT request using ajax.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });  

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burgerToGo").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    let id = $(this).data("id");

    // Send the DELETE request using ajax.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});


