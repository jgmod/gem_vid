// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$(".thumbnail").click(function(){
	var id = $(this).id;
	console.log(id);
	var x = $(this).data('iframe');
	$(this).html(x);
});
$(".thumbnail").each(function(){
	$(this).mouseover(function(){
		$(this).css("background","#380606");
	});
	$(this).mouseout(function(){
		$(this).css("background", "#FFF");
	})
});