$(function(){
$(".naver li:last-child").addClass("last")



 $("#back-to-top").click(function(){  
                $('body,html').animate({scrollTop:0},1000);  
                return false;  
            });  
	});
$(".naver li").hover(function(){
		$(this).children("dl").slideToggle(300); 
		return false
	})	