/**
 * Created by alchemy on 12/9/15.
 */

// Change Quality of Idea

function increaseQuality(idea) {
  $('#upvote-' + idea.id).on("click", function() {

    if(idea.quality == "Swill") {
      details = {idea: {quality: "Plausible" } };
    } else if(idea.quality == "Plausible") {
      details = {idea: {quality: "Genius" } };
    } else {
      details = {idea: { quality: idea.quality } }
    }

    $.ajax({
      type: "PUT",
      url: "/api/v1/ideas/" + idea.id,
      data: details,
      dataType: "JSON",
      success: function() {
        console.log("Idea Quality Updated!");
        window.location.reload();
      }
    })
  })
}

function decreaseQuality(idea) {
  $('#downvote-' + idea.id).on('click', function() {
    if(idea.quality == "Genius") {
      details = {idea: { quality: "Plausible" } };
    } else if(idea.quality == "Plausible") {
      details = {idea: { quality: "Swill" } };
    } else {
      details = {idea: { quality: idea.quality } }
    }

    $.ajax({
      type: "PUT",
      url: "/api/v1/ideas/" + idea.id,
      data: details,
      dataType: "JSON",
      success: function() {
        console.log("Idea Quality Updated!");
        window.location.reload();
      }
    })
  })
}

