$(document).bind("mousewheel DOMMouseScroll", function(event){
	// console.log("first function triggered'");
	event.preventDefault();
	console.log($(window).scrollTop());
	$("#firstDiv").addClass("hideIt");
	$("#secondDiv").addClass("stickToTheWindow");
});


$(window).scroll(function(){
	//console.log("that's scrolling!");
	//var scrollTopDistance =  $("h1").scrollTop();
	//console.log("scoll top of the first div is: " + scrollTopDistance);

	//$(document).scrollTop(1000);
	var scrollValue = $(window).scrollTop();
	console.log("scroll top is: " + scrollValue);
	if (scrollValue >= 300) {
		$("#secondDiv").addClass("blueClass");
		console.log("it's greater than 300");
	} else if (scrollValue < 300) {
		$("#secondDiv").removeClass("blueClass");
	}; 
	if (scrollValue > 700) {
		$("#thirdDiv").addClass("farmImage");
	};
	//console.log("got the click");


});

