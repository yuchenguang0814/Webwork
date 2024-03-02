$(function(){
	$(".ser-tr a").each(function(s){
		$(this).hover(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".ser-clul li").eq(s).addClass("on").siblings().removeClass("on");
			$('.ser-crul li').eq(s).stop(true,true).fadeIn().siblings().hide();
		})
	})
	$(".ser-clul li").each(function(s){
		$(this).hover(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".ser-tr a").eq(s).addClass("on").siblings().removeClass("on");
			$('.ser-crul li').eq(s).stop(true,true).fadeIn().siblings().hide();
		})
	})
	


	$(".imgtags a").each(function(s){
		$(this).hover(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$('.imgbox .imgone').eq(s).stop(true,true).fadeIn().siblings().hide();
		})
	})

	$('#nav-wrap').navScroll({
		mobileDropdown: true,
		mobileBreakpoint: 300,
		scrollSpy: true
	});
	$(".diyos").css({ marginTop: -($(".diyos").height())/2 });	
	$(".diyos ul li").hover(function(){
		$(this).find(".sidebox").stop().animate({"width":"175px"},200)	
	},function(){
		$(this).find(".sidebox").stop().animate({"width":"54px"},200)	
	});
})
$(window).load(function(){
	$('.news-box .news-one').hide();
	$('.news-box .news-one').eq(0).show();
	$('.imgbox .imgone').hide();
	$('.imgbox .imgone').eq(0).show();

// 案例切换
$('.case_imgbox_ul').hide()
$('.case_imgbox_ul').eq(0).show()


// 新闻切换
$('.news_imgbox_ul').hide()
$('.news_imgbox_ul').eq(0).show()

// 解决方案单页面切换
$('.ny_s_nr3_nr .imgbox').hide()
$('.ny_s_nr3_nr .imgbox').eq(0).show()



})

$(".news_btn a").each(function(s){
	$(this).hover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$('.news_imgbox_ul').eq(s).stop(true,true).fadeIn().siblings().hide();
	})
})



$(".case_btn a").each(function(s){
	$(this).hover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$('.case_imgbox_ul').eq(s).stop(true,true).fadeIn().siblings().hide();
	})
})

$('#caselist').owlCarousel({items:1,loop:true,autoplay:false,autoplaySpeed:2000,margin:0,lazyLoad:true,nav:true,responsive:{ 320:{items:1},400:{items:2},991:{items:3} }});
$('#newslist1').owlCarousel({items:1,loop:true,autoplay:false,autoplaySpeed:2000,margin:0,lazyLoad:true,nav:true,responsive:{ 320:{items:1},600:{items:2},1200:{items:3} }});
$('#newslist2').owlCarousel({items:1,loop:true,autoplay:false,autoplaySpeed:2000,margin:0,lazyLoad:true,nav:true,responsive:{ 320:{items:1},600:{items:2},1200:{items:3} }});
$('#newslist3').owlCarousel({items:1,loop:true,autoplay:false,autoplaySpeed:2000,margin:0,lazyLoad:true,nav:true,responsive:{ 320:{items:1},600:{items:2},1200:{items:3} }});

function goTop(){
	$('html,body').animate({'scrollTop':0},500);
}

function Protabs(tabTit,on,tabCon){
	$(tabTit).children().hover(function(){
		$(this).addClass(on).siblings().removeClass(on);
		var index = $(tabTit).children().index(this);
		$(tabCon).children().eq(index).stop(true,true).fadeIn().siblings().hide();
	})
}
Protabs(".news-tag","on",".news-box")

$(function(){
	// 小屏幕导航
	$("#m-head-nav").click(function(){
		if($(this).attr("data-active")==""){
			$(this).attr("data-active","on");
			$("#mmNavBox").attr("data-on","active");
			$(".mmask").attr("data-on","on");
		}else{
			$(this).attr("data-active","");
			$("#mmNavBox").attr("data-on","");
			$(".mmask").attr("data-on","");
		}
	})
	$("#mmNavBox").click(function(){
		$(this).attr("data-on","");
		$("#mmList").attr("data-active","");
	})
	$("#mmNavBox .mm-wrap").click(function(e){
		e.stopPropagation();
	})
	$(".mm-nav-box .mm-nav .li1 .mm-title .click").click(function(){
		if($(this).parent().parent(".li1").attr("data-on")==""){
			$(".mm-nav-box .mm-nav .li1").attr("data-on","");
			$(this).parent().parent(".li1").attr("data-on","click");
		}else{
			$(this).parent().parent(".li1").attr("data-on","");
		}
	})
})


$(function(){
	$(".ser-tr a").each(function(s){
		$(this).hover(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".ser-clul li").eq(s).addClass("on").siblings().removeClass("on");
			$('.ser-crul li').eq(s).stop(true,true).fadeIn().siblings().hide();
		})
	})
	$(".ser-clul li").each(function(s){
		$(this).hover(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".ser-tr a").eq(s).addClass("on").siblings().removeClass("on");
			$('.ser-crul li').eq(s).stop(true,true).fadeIn().siblings().hide();
		})
	})
	


	$(".imgtags a").each(function(s){
		$(this).hover(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$('.imgbox .imgone').eq(s).stop(true,true).fadeIn().siblings().hide();
		})
	})

	$('#nav-wrap').navScroll({
		mobileDropdown: true,
		mobileBreakpoint: 300,
		scrollSpy: true
	});
	$(".diyos").css({ marginTop: -($(".diyos").height())/2 });	
	$(".diyos ul li").hover(function(){
		$(this).find(".sidebox").stop().animate({"width":"175px"},200)	
	},function(){
		$(this).find(".sidebox").stop().animate({"width":"54px"},200)	
	});
})
$(window).load(function(){
	$('.news-box .news-one').hide();
	$('.news-box .news-one').eq(0).show();
	$('.imgbox .imgone').hide();
	$('.imgbox .imgone').eq(0).show();
	lanrenzhijia(".drop-menu-effect");
	
})



// 导航下拉
function lanrenzhijia(_this){
	$(_this).each(function(){
		var $this = $(this);
		var theMenu = $this.find(".xiala");
		var tarHeight = theMenu.height();
		theMenu.css({height:0});
		$this.hover(
			function(){
				$(this).addClass("mj_hover_menu");
				theMenu.stop().show().animate({height:tarHeight},400);
			},
			function(){
				$(this).removeClass("mj_hover_menu");
				theMenu.stop().animate({height:0},400,function(){
					$(this).css({display:"none"});
				});
			}
		);
	});
}

// 锚点延迟
$(".transition").click(function(){
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var $target = $(this.hash);
		$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
		if ($target.length) {
			var targetOffset = $target.offset().top - 140;
			$('html,body').animate({scrollTop: targetOffset},800);
			return false;
		}
	}
});

$('.header .h_search').click(function() {
    $('.header .search_box').slideToggle(200);
    $(this).toggleClass('active');
})

// 国内案例
$('#case_imgbox0').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplaySpeed:2000,
    margin:10,
    lazyLoad:true, //in this example only applied on video thumbnails
    merge: true, 
    video: true,
    nav: true,
    responsive:{
        320:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
})

// 国际案例
$('#case_imgbox1').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplaySpeed:2000,
    margin:10,
    lazyLoad:true, //in this example only applied on video thumbnails
    merge: true, 
    video: true,
    nav: true,
    responsive:{
        320:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
});

$('#case_imgbox2').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplaySpeed:2000,
    margin:10,
    lazyLoad:true, //in this example only applied on video thumbnails
    merge: true, 
    video: true,
    nav: true,
    responsive:{
        320:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
});

$('#case_imgbox3').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplaySpeed:2000,
    margin:10,
    lazyLoad:true, //in this example only applied on video thumbnails
    merge: true, 
    video: true,
    nav: true,
    responsive:{
        320:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
});



// 荣誉资质
$('#honor_nr_list').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplaySpeed:2000,
    margin:24,
    lazyLoad:true, //in this example only applied on video thumbnails
    merge: true, 
    video: true,
    nav: true,
    responsive:{
        320:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:5
        }
    }
});


// 内页_荣誉资质
$('#ny_honor_nr_list').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplaySpeed:2000,
    margin:24,
    lazyLoad:true, //in this example only applied on video thumbnails
    merge: true, 
    video: true,
    nav: true,
    responsive:{
        320:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:5
        }
    }
});





// 恩博新闻
$('#news_imgbox0').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplaySpeed:2000,
    margin:0,
    lazyLoad:true, //in this example only applied on video thumbnails
    merge: true, 
    video: true,
    nav: true,
    responsive:{
        320:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
})

// 行业资讯
$('#news_imgbox1').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplaySpeed:2000,
    margin:0,
    lazyLoad:true, //in this example only applied on video thumbnails
    merge: true, 
    video: true,
    nav: true,
    responsive:{
        320:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
});


// 推荐产品
$('#nybusinesslist').owlCarousel({items:1,loop:true,autoplay:false,autoplaySpeed:2000,margin:50,lazyLoad:true,nav:true,responsive:{ 320:{items:1},400:{items:2},768:{items:3},1200:{items:4} }});

// 推荐产品
$('#nybusinesslist1').owlCarousel({items:1,loop:true,autoplay:false,autoplaySpeed:2000,margin:30,lazyLoad:true,nav:true,responsive:{ 320:{items:1},400:{items:2},768:{items:3},1200:{items:4} }});



// 产品中心
$(window).load(function() {
  $('.sp-wrap').smoothproducts();
});

// 视频
	$("a.video-div").click(function(e){

	e.preventDefault();
	videoUrl = $(this).attr("href")
	$("#altVideo video").attr("src",videoUrl)
})