// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$("a[class='th radius']").click(function(){
	var id = $(this).id;
	console.log(id);
	var iframe = $(this).data('iframe');
	var flex_iframe = $("<a class='th radius'>").append(iframe).append("</a>");
	$(this).replaceWith(flex_iframe);
});
$(".centered").each(function(){
	$(this).mouseover(function(){
		$(this).css("background","#87CEFA");
	});
	$(this).mouseout(function(){
		$(this).css("background", "#FFF");
	})
});