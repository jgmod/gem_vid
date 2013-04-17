// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$("div[class='large-6 columns']").click(function(){
	var iframe = $(this).children().data("iframe");
	$(this).replaceWith(iframe);
});
