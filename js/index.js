$(document).ready(function(){
//this line above always goes at the top//

	// $("a")click(doSomething();

	// function doSomething(){
	// 	event.preventDefault();
	// enter what you want it to do here
	// } //


//Read more on click push content down and show more text and change text to show less//
$('.readmore').click(expandReadMore);
function expandReadMore(){
	event.preventDefault();
	$("#show-this-on-click").slideToggle();
}

// $('.readmore').click(displayReadLess);
// function displayReadLess(){
// 	event.preventDefault();
	
// 	}

$('.readless hide').click(expandReadLess);
function expandReadLess(){
	event.preventDefault();
	$("#show-this-on-click").slideToggle();
}

//Read less on click hides/pushes content up and shows less text and change text to read more//


//Learn more on click push content down and show more text and change text to show less//

$('.learnmore').click(expandLearn);
function expandLearn(){
	event.preventDefault();
	$("#learnmoretext").slideToggle();
}





















//this closes the $(document) line at top//
	});