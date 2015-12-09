/**
 * Created by alchemy on 12/9/15.
 */

// Get Ideas
function getIdeas() {
  $.ajax({
    type: 'get',
    url: '/api/v1/ideas',
    data: { format: 'json' },
    dataType: "JSON",
    success: function(ideas) {
      ideas.forEach(function(data) {
        renderNewIdeaCard(data);
        renderUpdateForm(data);
        confirmEdit(data);
        deleteIdea(data);
        increaseQuality(data);
        decreaseQuality(data);
      })
    }
  })
}
