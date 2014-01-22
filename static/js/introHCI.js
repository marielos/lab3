'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	$("#submitBtn").click(updateProject); 

	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		//.text
		$("#testjs").text("Marielitos is SUPER cool");
		//$(".jumbotron p").toggleClass("active");
		$(".jumbotron p").addClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function updateProject(e){
	var projectChosen = $("#project").val();
	$(projectChosen).animate({
		width: $("#width").val()
	});
	var descripText = $("#description").val()
	$(projectChosen + " .project-description").text(descripText);
}


function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);


    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
    	$("#description.html").hide();

       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}