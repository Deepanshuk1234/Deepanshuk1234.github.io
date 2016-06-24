function warn1(){
	$("#warning").empty();
	$("#warning").addClass("warnRed");
	$("#warning").append("<strong><h1>Plug in your headphones. You have 3 second</h1></strong>");
}
function warn2(){
	$("#warning").empty();
	$("#warning").addClass("warnRed");
	$("#warning").append("<strong><h1>Plug in your headphones. You have 2 second</h1></strong>");
}
function warn3(){
	$("#warning").empty();
	$("#warning").addClass("warnRed");
	$("#warning").append("<strong><h1>Plug in your headphones. You have 1 second</h1></strong>");
}
function warn4(){
	$("#warning").empty();
	// $("#warning").append("<br><h1>Connect in 3 seconds</h1>");
}
$(document).ready(function(){
	
	setTimeout("warn1()",1000);
	setTimeout("warn2()",2000);
	setTimeout("warn3()",3000);
	setTimeout("warn4()",4000);

	$(".p1").click(function(){
		$(".hehe1").removeClass("hehe1");
		$(this).toggleClass("hehe1");
		$(".capoBlue").removeClass("capoBlue");

	});
	$(".p2").click(function(){
		$(".hehe2").removeClass("hehe2");
		$(this).toggleClass("hehe2");
		$(".capoBlue").removeClass("capoBlue");

	});
	$(".p3").click(function(){
		$(".hehe3").removeClass("hehe3");
		$(this).toggleClass("hehe3");
		$(".capoBlue").removeClass("capoBlue");

	});
	$(".p4").click(function(){
		$(".hehe4").removeClass("hehe4");
		$(this).toggleClass("hehe4");
		$(".capoBlue").removeClass("capoBlue");

	});
	$(".p5").click(function(){
		$(".hehe5").removeClass("hehe5");
		$(this).toggleClass("hehe5");
		$(".capoBlue").removeClass("capoBlue");

	});
	$(".p6").click(function(){
		$(".hehe6").removeClass("hehe6");
		$(this).toggleClass("hehe6");
		$(".capoBlue").removeClass("capoBlue");

	});

	// These are for capo positions : 
	$(".cap").click(function(){
		$(".capoBlue").removeClass("capoBlue");
		$(this).toggleClass("capoBlue");

	});
	$(".capo1").click(function(){
		$(".capoBlue").removeClass("capoBlue");
		$(this).toggleClass("capoBlue");

	});
	$(".capo2").click(function(){
		$(".capoBlue").removeClass("capoBlue");
		$(this).toggleClass("capoBlue");

	});
	$(".capo3").click(function(){
		$(".capoBlue").removeClass("capoBlue");
		$(this).toggleClass("capoBlue");

	});
	$(".capo4").click(function(){
		$(".capoBlue").removeClass("capoBlue");
		$(this).toggleClass("capoBlue");

	});
	$(".capo5").click(function(){
		$(".capoBlue").removeClass("capoBlue");
		$(this).toggleClass("capoBlue");

	});

});






