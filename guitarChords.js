//		FORMAT :  "cij" means ith fret, jth string 
//		For example :
//		E-minor = 
//		0th fret 1st string, 2nd fret 2nd string, 2nd fret 3rd string, 
//		0th fret 4th string, 0th fret 5th string, 0th fret 6th string
//		So, c01 c22 c23 c04 c05 c06 in their respective ".hehe"s

$(document).ready(function(){
	$("body").click(function(){

		$("#selec").empty();

		if($(".hehe1").hasClass("c01") && $(".hehe2").hasClass("c22") && $(".hehe3").hasClass("c23") && 
		   $(".hehe4").hasClass("c04") && $(".hehe5").hasClass("c05") && $(".hehe6").hasClass("c06") )
		{
			$("#selec").html("<h1>Its E-minor<br></h1>");
		}

		if($(".hehe1").hasClass("c01") && $(".hehe2").hasClass("c02") && $(".hehe3").hasClass("c03") && 
		   $(".hehe4").hasClass("c24") && $(".hehe5").hasClass("c35") && $(".hehe6").hasClass("c26") )
		{
			$("#selec").html("<h1>Its D-major<br></h1>");
		}
		if($(".hehe1").hasClass("c11") && $(".hehe2").hasClass("c32") && $(".hehe3").hasClass("c33") && 
		   $(".hehe4").hasClass("c24") && $(".hehe5").hasClass("c15") && $(".hehe6").hasClass("c16") )
		{
			$("#selec").html("<h1>Its F-major<br></h1>");
		}
		if($(".hehe1").hasClass("c31") && $(".hehe2").hasClass("c52") && $(".hehe3").hasClass("c53") && 
		   $(".hehe4").hasClass("c44") && $(".hehe5").hasClass("c35") && $(".hehe6").hasClass("c36") )
		{
			$("#selec").html("<h1>Its G-major(bar)<br></h1>");
		}
				
	});
});
