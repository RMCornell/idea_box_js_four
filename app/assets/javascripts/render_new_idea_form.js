/**
 * Created by alchemy on 12/9/15.
 */

function renderNewIdeaForm() {
  $("#createNewIdea").on("click", function(e) {
    e.preventDefault();
    console.log("You are creating an New Idea");
    $("#renderNewIdeaForm").toggleClass('hidden');
  });
}
