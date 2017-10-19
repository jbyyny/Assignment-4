$(document).ready(function(){
//this line above always goes at the top//

	// $("a")click(doSomething();

	// function doSomething(){
	// 	event.preventDefault();
	// enter what you want it to do here
	// } //


//Read more on click push content down and show more text and change tetx to show less//
$('.readmore').click(expandReadMore);
function expandReadMore(){
	event.preventDefault();
	$("#show-this-on-click").slideToggle();
}

$('.readless hide').click(expandReadLess);
function expandReadLess(){
	event.preventDefault();
	$("#show-this-on-click").slideToggle();
}


//Learn more on click push content down and show more text and change text to show less//

$('.learnmore').click(expandLearn);
function expandLearn(){
	event.preventDefault();
	$("#learnmoretext").slideToggle();
}





















//this closes the $(document) line at top//
	});