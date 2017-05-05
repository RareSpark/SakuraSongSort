$(document).ready(function() {

	$("#btn-rawtext, .menu-link").hover(function() {
		$(this).css("background-color", "#000038");
	},function() {
		$(this).css("background-color", "#FFD1DC");
	});

	$("#fldLeft, #fldMiddleT, #fldRight, #fldMiddleB").hover(function() {
		$(this).css("background-color", "#000038");
	}, function() {
		$(this).css("background-color", "#FFD1DC");
	});

	$("#menu-restart").click(function() {
		location.reload();
	});

});
