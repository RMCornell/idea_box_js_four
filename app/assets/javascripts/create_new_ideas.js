/**
 * Created by alchemy on 12/9/15.
 */

// Create Ideas
function createNewIdea() {
  $("#newIdeaForm").on('submit', function(e) {
    e.preventDefault();

    var details = $('#newIdeaForm').serialize();

    $.ajax({
      type: 'post',
      url: '/api/v1/ideas',
      data: details,
      dataType: "JSON",
      success: function(data) {
        console.log("Idea posted");
        renderNewIdeaCard(data);
        $('#renderNewIdeaForm').toggleClass('hidden');
        renderUpdateForm(data);
        confirmEdit(data);
        deleteIdea(data);
        increaseQuality(data);
        decreaseQuality(data)
      }
    })
  })
}
