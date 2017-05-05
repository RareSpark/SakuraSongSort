$(document).ready(function() {

	$("#btn-rawtext, .menu-link").hover(function() {
		$(this).css("background-color", "#000038");
	},function() {
		$(this).css("background-color", "#000038");
	});

	$("#fldLeft, #fldMiddleT, #fldRight, #fldMiddleB").hover(function() {
		$(this).css("background-color", "#000038");
	}, function() {
		$(this).css("background-color", "#000038");
	});

	$("#menu-restart").click(function() {
		location.reload();
	});

});
