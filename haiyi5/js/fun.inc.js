/*模板定义函数*/
function partnav(c2,c3){
	var part2=$('#part2_'+c2);
	var part3=$('#part3_'+c3);
	if(part2)part2.addClass('cur');
	if(part3)part3.addClass('cur');
}
/*自定义函数结束*/
var csnow=$("#sidebar").attr('data-csnow'),class3=$("#sidebar").attr('data-class3');
partnav(csnow,class3);//侧栏导航点击展开隐藏

function partnav1(c21,c31){
	var part21=$('#part21_'+c21);
	var part31=$('#part31_'+c31);
	if(part21)part21.addClass('cur');
	if(part31)part31.addClass('cur');
}

var csnow1=$("#sidebar1").attr('data-csnow'),class31=$("#sidebar1").attr('data-class3');
partnav1(csnow1,class31);//侧栏导航点击展开隐藏

var nyside = $("#sidebar>li").length;
if(nyside == 1){
	$("#sidebar>li").addClass('w100');
}
if(nyside == 2){
	$("#sidebar>li").addClass('w50');
}
if(nyside == 3){
	$("#sidebar>li").addClass('w33');
}
if(nyside > 3){
	$("#sidebar>li").addClass('w25');
}