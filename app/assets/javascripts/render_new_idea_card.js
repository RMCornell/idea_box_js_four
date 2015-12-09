/**
 * Created by alchemy on 12/9/15.
 */

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

    +"<button class='tiny' id='edit-" + data.id +"'>Edit Idea # " + data.id + "</button>"
    +"<button class='tiny alert' id='delete-" + data.id + "'>Delete Idea # " + data.id + "</button>"
    +"<button class='tiny success' id='upvote-" + data.id +"'>Upvote Idea# " + data.id + "</button>"
    +"<button class='tiny info' id='downvote-" + data.id +"'>Downvote Idea# " + data.id + "</button>"

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
