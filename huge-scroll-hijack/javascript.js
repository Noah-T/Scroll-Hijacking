var delta = 0;
var currentSlideIndex = 0;
var scrollThreshold = 50;
var numSlides = 2;
var slides = [$("#project-0"),$("#project-1"), $("#project-2")];
 
function elementScroll (e) {
 
	// --- Scrolling up ---
	if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {	
 		console.log("scroll detection up working");
		delta--;
 		console.log(Math.abs(delta));
		if ( Math.abs(delta) >= scrollThreshold) {
			console.log("got to prevSlide");
		prevSlide();
		}
	}
 
	// --- Scrolling down ---
	else {
 	console.log("scroll detection down working");
		delta++;
 		console.log(Math.abs(delta));
		if (delta >= scrollThreshold) {
			console.log("got to nextSlide");
			nextSlide();
		}
	}
 
	// Prevent page from scrolling
	return false;
}
 
 
function showSlide() {
 
	// reset
	delta = 0;
 	console.log("we're in showSlide");
 	
 	$.each(slides, function(i, slide){
 		$(slide).toggleClass("active", (i >= currentSlideIndex));
 		console.log(i);
 	})


 	 	
}
 
 
function prevSlide() {
 
	currentSlideIndex--;
 
	if (currentSlideIndex < 0) {
		currentSlideIndex = 0;
	}
 
	showSlide();
}
 
function nextSlide() {
 
	currentSlideIndex++;
 
	if (currentSlideIndex > numSlides) { 
		currentSlideIndex = numSlides;
	}
 
	showSlide();
}
 
$(window).on({
	'DOMMouseScroll mousewheel': elementScroll
});