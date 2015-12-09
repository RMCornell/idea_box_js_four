/**
 * Created by alchemy on 12/9/15.
 */

// Update Ideas
function renderUpdateForm(idea) {
  $('#edit-' + idea.id).on("click", function(e) {
    e.preventDefault();
    console.log("You are editing idea# " + idea.id);
    $('#renderEditForm-' + idea.id).toggleClass('hidden');
  });
}

function confirmEdit(idea) {
  $('#confirmEdit-' + idea.id).on('click', function() {
    var details = $("#editIdeaForm-" + idea.id).serialize();

    $.ajax({
      type: "PUT",
      url: "/api/v1/ideas/" + idea.id,
      data: details,
      dataType: "JSON",
      success: function() {
        console.log(idea.id + " Updated!");
        $("#editForm-" + idea.id).toggleClass('hidden');
      }
    })
  });
}
