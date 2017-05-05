$(document).ready(function() {

	$("#btn-rawtext, .menu-link").hover(function() {
		$(this).css("background-color", "#1b1b79");
	},function() {
		$(this).css("background-color", "#FFD1DC");
	});

	$("#fldLeft, #fldMiddleT, #fldRight, #fldMiddleB").hover(function() {
		$(this).css("background-color", "#F0027E");
	}, function() {
		$(this).css("background-color", "#FFD1DC");
	});

	$("#menu-restart").click(function() {
		location.reload();
	});

});
