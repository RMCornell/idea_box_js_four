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

    +"<button class='tiny' id='edit-" + data.id +"'>Edit Idea #" + data.id + "</button>"
    +"<button class='tiny' id='delete-" + data.id + "'>Delete Idea #" + data.id + "</button>"

    +"<div class='hidden' id='renderEditForm-" + data.id + "'>"
      + "<form id='editIdeaForm-" + data.id + "'>"
        + "<input type='hidden' name='method' value='put'/>"
        + "<input type='text' name='idea[title]' value='" + data.title + "' id='editIdeaTitle-'" + data.id +"'/>"
        + "<textarea name='idea[body]'" + data.body + "' id='editIdeaBody-'" + data.id + "'>"
        + data.body + "</textarea>"
        + "<input type='submit' class='tiny button' id='confirmEdit-" + data.id + "' value='Update'" + data.id + "'/>"
      + "</form>"
    +"</div>"

    +"<hr>"
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
      })
    }
  })
}

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
      }
    })
  })
}

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



