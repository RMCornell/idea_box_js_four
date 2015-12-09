/**
 * Created by alchemy on 12/9/15.
 */

// Delete Ideas
function deleteIdea(idea) {
  $('#delete-' + idea.id).on('click', function() {

    $.ajax({
      type: "DELETE",
      url: "/api/v1/ideas/" + idea.id,
      dataType: "JSON",
      success: function() {
        console.log(idea.id + " deleted!");
        $('#idea-' + idea.id).remove();
      }
    })
  })
}
