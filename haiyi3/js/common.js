/*全站搜索*/



//详细页分页点击效果
$(".paging_num > a").click(function(){
	var index= $(this).index();
	location.hash = index+1;
	var hash = location.hash;
	$(".total .paging").eq(hash.slice(1)-1).css("display","block").siblings().css("display","none");
	$(this).addClass("paging_hover").siblings().removeClass("paging_hover");
});
var hash = location.hash;
if (! hash) {
    $(".total .paging").eq(0).css("display","block").siblings().css("display","none");
} else {
    $(".total .paging").eq(hash.slice(1)-1).css("display","block").siblings().css("display","none");
    $(".paging_num > a").eq(hash.slice(1)-1).addClass("paging_hover").siblings().removeClass("paging_hover");
}
//设为首页
function SetHome(obj,vrl){
        try{
                obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
        }
        catch(e){
                if(window.netscape){
                        try{
                                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                        }catch (e){
                        		alert("抱歉！您的浏览器不支持直接设为首页。请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为“true”，点击“加入收藏”后忽略安全提示，即可设置成功。");
                        }
                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        prefs.setCharPref('browser.startup.homepage',vrl);
                 }else{
		        alert('抱歉，您的浏览器不支持自动设置首页, 请使用浏览器菜单手动设置!');
		    }
        }
}

//banner1 - 多图
function bb1(){
	 var nav_num = '';
	 var obj_li = $(".bb li");
	 var count  = obj_li.length;
	 obj_li.first().css("display","block");
	 obj_li.each(function(){
		 var index = $(this).index() + 1;
		 nav_num += '<li><a href="javascript:void(0)">' + index + '</a></li>';
	 });
	$(".banner").append('<ul class="num">' + nav_num + '</ul>');
    $(".num li").first().addClass("num_hover");
	$(".num li").hover(function(){
		sw = $(".num li").index(this);
		myShow(sw);
	});
	function myShow(i){
		$(".num li").eq(i).addClass("num_hover").siblings().removeClass("num_hover");
		obj_li.eq(i).stop(true,true).fadeIn(600).siblings("li").fadeOut(600);
	}
	var myTime = 0;
	//滑入停止动画，滑出开始动画
	$(".bb").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		myTime = setInterval(function(){
		myShow(sw);
		sw++;
		if(sw == count){
			sw=0;
		}
		} , 3000);
	});
	//自动开始
	var sw = 0;
	myTime = setInterval(function(){
	   myShow(sw);
	   sw++;
	   if(sw == count){
		   sw=0;
	   }
	} , 2000);
}

//banner2 - 多图
function bb2(){
	var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
	var len = $("#focus ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer = 0;
	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	var btn = "<div class='btnBg'></div><div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div>";
	$("#focus").append(btn);
	$("#focus .btnBg").css("opacity",0.5);
	$("#focus .btnBg").css("filter","alpha(opacity=60)");
	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$("#focus .btn span").css("opacity",0.4).mouseenter(function() {
		index = $("#focus .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");
	//上一页按钮
	$("#focus .pre").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});
	//下一页按钮
	$("#focus .next").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});
	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#focus ul").css("width",sWidth * (len));
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$("#focus").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},4000); //此4000代表自动播放的间隔，单位：毫秒
	}).trigger("mouseleave");

	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		$("#focus ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
		$("#focus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
	}
}

//多页签
function tabs(tabs,tab_box,_event) {
	$(tab_box).hide();
	$(tab_box).eq(0).show();
	$(tabs).find('li:eq(0)').addClass('cur');
	$(tabs).find("li").bind(_event,function(){
	   $(this).addClass("cur").siblings("li").removeClass("cur");
	   var _index = $(this).index();
	   $(tab_box).eq(_index).show().siblings(tab_box).hide();
	});
};






//百度自动推送代码


function tabs(tabs, tab_box, _event) {
	$(tab_box).hide();
	$(tab_box).eq(0).show();
	$(tabs).find('li:eq(0)').addClass('cur');
	$(tabs).find("li").bind(_event,function(){
	   $(this).addClass("cur").siblings("li").removeClass("cur");
	   var _index = $(this).index();
	   $(tab_box).eq(_index).show().siblings(tab_box).hide();
	});
};
