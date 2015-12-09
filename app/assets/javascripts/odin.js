// Master JS file named after the Nordic God known as All-father

$(document).ready(function() {
  // Add Functions here as they are completed
  renderNewIdeaForm();
  getIdeas();
  createNewIdea();

});

function renderNewIdeaCard(data) {
  var $idea = (
    "<div id='idea-" + data.id + "'>"
    +"<h3 class='title' data-id='" + data.id + "'>"
      + data.title
    + "</h3>"
    + "<p class='body'>"
      + data.body
    + "</p>"
    + "<p class='quality'>"
      + data.quality
    + "</p>"
  );

  $("#currentIdeas").prepend($idea);
}

function renderNewIdeaForm() {
  $("#createNewIdea").on("click", function(e) {
    e.preventDefault();
    console.log("You are creating an New Idea");
    $("#renderNewIdeaForm").toggleClass('hidden');
  });
}

function getIdeas() {
  $.ajax({
    type: 'get',
    url: '/api/v1/ideas',
    data: { format: 'json' },
    dataType: "JSON",
    success: function(ideas) {
      ideas.forEach(function(data) {
        renderNewIdeaCard(data);
      })
    }
  })
}

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
      }
    })
  })
}

// Ajax Calls



