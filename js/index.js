$(document).ready(function(){
//this line above always goes at the top//

	// $("a")click(doSomething();

	// function doSomething(){
	// 	event.preventDefault();
	// }


//Learn more on click push content down and show more text and change tetx to read less

$('.learnmore').click(expandLearn);
function expandLearn(){
	event.preventDefault();
	$("#learnmoretext").slideToggle();
}





















//this closes the $(document) line at top//
	});