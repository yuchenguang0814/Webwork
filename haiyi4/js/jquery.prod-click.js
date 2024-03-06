$(function() {
	$('#European_step1').click(function(event){
		console.log('European_step1 click');
		$('.in_prod_pc').find('img').switchClass('European_zoomIn Japanese_zoomIn','European_zoomOut',500, 'easeInOutQuad');
		$('.in_prod_pc').switchClass('European_pc2 European_pc3 European_pc4 European_pc5 European_pc6 European_pc7 Japanese_pc1 Japanese_pc2 Japanese_pc3 Japanese_pc4 Japanese_pc5 Japanese_pc6 Japanese_pc7','European_pc1',500, 'easeInOutQuad');
		$('#European_step1').addClass('active').siblings().removeClass('active');
		// $('.prod1 .in_prod_step').find('span.filling-line').css('width','0%');
		$('.European_step1').siblings('.in_prod_box').hide();
		$('.European_step1').delay(1000).show(0);
	});
	$('#European_step2').click(function(event) {
		console.log('European_step2 click');
		$('.in_prod_pc').find('img').switchClass('European_zoomIn Japanese_zoomIn','European_zoomOut',500, 'easeInOutQuad').delay(500).switchClass('European_zoomOut Japanese_zoomOut','European_zoomIn',500, 'easeInOutQuad');
		$('.in_prod_pc').attr('class','in_prod_pc European_pc1').delay(500).switchClass('European_pc1 European_pc3 European_pc4 European_pc5 European_pc6 European_pc7 Japanese_pc1 Japanese_pc2 Japanese_pc3 Japanese_pc4 Japanese_pc5 Japanese_pc6 Japanese_pc7','European_pc2',500, 'easeInOutQuad');
		$('#European_step2').addClass('active').siblings().removeClass('active');
		// $('.prod1 .in_prod_step').find('span.filling-line').css('width','20%');
		$('.European_step2').siblings('.in_prod_box').hide();
		$('.European_step2').delay(1000).show(0);
	});
	$('#European_step3').click(function(event) {
		console.log('European_step3 click');
		$('.in_prod_pc').find('img').switchClass('European_zoomIn Japanese_zoomIn','European_zoomOut',500, 'easeInOutQuad').delay(500).switchClass('European_zoomOut Japanese_zoomOut','European_zoomIn',500, 'easeInOutQuad');
		$('.in_prod_pc').attr('class','in_prod_pc European_pc1').delay(500).switchClass('European_pc1 European_pc2 European_pc4 European_pc5 European_pc6 European_pc7 Japanese_pc1 Japanese_pc2 Japanese_pc3 Japanese_pc4 Japanese_pc5 Japanese_pc6 Japanese_pc7','European_pc3',500, 'easeInOutQuad');
		$('#European_step3').addClass('active').siblings().removeClass('active');
		// $('.prod1 .in_prod_step').find('span.filling-line').css('width','40%');
		$('.European_step3').siblings('.in_prod_box').hide();
		$('.European_step3').delay(1000).show(0);
	});
	$('#European_step4').click(function(event) {
		console.log('European_step4 click');
		$('.in_prod_pc').find('img').switchClass('European_zoomIn Japanese_zoomIn','European_zoomOut',500, 'easeInOutQuad').delay(500).switchClass('European_zoomOut Japanese_zoomOut','European_zoomIn',500, 'easeInOutQuad');
		$('.in_prod_pc').attr('class','in_prod_pc European_pc1').delay(500).switchClass('European_pc1 European_pc2 European_pc3 European_pc5 European_pc6 European_pc7 Japanese_pc1 Japanese_pc2 Japanese_pc3 Japanese_pc4 Japanese_pc5 Japanese_pc6 Japanese_pc7','European_pc4',500, 'easeInOutQuad');
		$('#European_step4').addClass('active').siblings().removeClass('active');
		// $('.prod1 .in_prod_step').find('span.filling-line').css('width','60%');
		$('.European_step4').siblings('.in_prod_box').hide();
		$('.European_step4').delay(1000).show(0);
	});
	$('#European_step5').click(function(event) {
		console.log('European_step5 click');
		$('.in_prod_pc').find('img').switchClass('European_zoomIn Japanese_zoomIn','European_zoomOut',500, 'easeInOutQuad').delay(500).switchClass('European_zoomOut Japanese_zoomOut','European_zoomIn',500, 'easeInOutQuad');
		$('.in_prod_pc').attr('class','in_prod_pc European_pc1').delay(500).switchClass('European_pc1 European_pc2 European_pc3 European_pc4 European_pc6 European_pc7 Japanese_pc1 Japanese_pc2 Japanese_pc3 Japanese_pc4 Japanese_pc5 Japanese_pc6 Japanese_pc7','European_pc5',500, 'easeInOutQuad');
		$('#European_step5').addClass('active').siblings().removeClass('active');
		// $('.prod1 .in_prod_step').find('span.filling-line').css('width','80%');
		$('.European_step5').siblings('.in_prod_box').hide();
		$('.European_step5').delay(1000).show(0);
	});
	$('#European_step6').click(function(event) {
		console.log('European_step6 click');
		$('.in_prod_pc').find('img').switchClass('European_zoomIn Japanese_zoomIn','European_zoomOut',500, 'easeInOutQuad').delay(500).switchClass('European_zoomOut Japanese_zoomOut','European_zoomIn',500, 'easeInOutQuad');
		$('.in_prod_pc').attr('class','in_prod_pc European_pc1').delay(500).switchClass('European_pc1 European_pc2 European_pc3 European_pc4 European_pc5 European_pc7 Japanese_pc1 Japanese_pc2 Japanese_pc3 Japanese_pc4 Japanese_pc5 Japanese_pc6 Japanese_pc7','European_pc6',500, 'easeInOutQuad');
		$('#European_step6').addClass('active').siblings().removeClass('active');
		// $('.prod1 .in_prod_step').find('span.filling-line').css('width','100%');
		$('.European_step6').siblings('.in_prod_box').hide();
		$('.European_step6').delay(1000).show(0);
	});
	$('#European_step7').click(function(event) {
		console.log('European_step7 click');
		$('.in_prod_pc').find('img').switchClass('European_zoomIn Japanese_zoomIn','European_zoomOut',500, 'easeInOutQuad').delay(500).switchClass('European_zoomOut Japanese_zoomOut','European_zoomIn',500, 'easeInOutQuad');
		$('.in_prod_pc').attr('class','in_prod_pc European_pc1').delay(500).switchClass('European_pc1 European_pc2 European_pc3 European_pc4 European_pc5 European_pc6 Japanese_pc1 Japanese_pc2 Japanese_pc3 Japanese_pc4 Japanese_pc5 Japanese_pc6 Japanese_pc7','European_pc7',500, 'easeInOutQuad');
		$('#European_step7').addClass('active').siblings().removeClass('active');
		// $('.prod1 .in_prod_step').find('span.filling-line').css('width','100%');
		$('.European_step7').siblings('.in_prod_box').hide();
		$('.European_step7').delay(1000).show(0);
	});


	$('#Japanese_step1').click(function(event){
		console.log('Japanese_step1 click');
		$('.in_prod_pc').find('img').switchClass('European_zoomIn Japanese_zoomIn','Japanese_zoomOut',500, 'easeInOutQuad');
		$('.in_prod_pc').switchClass('Japanese_pc2 Japanese_pc3 Japanese_pc4 Japanese_pc5 Japanese_pc6 Japanese_pc7 European_pc1 European_pc2 European_pc3 European_pc4 European_pc5 European_pc6 European_pc7','Japanese_pc1',500, 'easeInOutQuad');
		$('#Japanese_step1').addClass('active').siblings().removeClass('active');
		// $('.prod2 .in_prod_step').find('span.filling-line').css('width','0%');
		$('.Japanese_step1').siblings('.in_prod_box').hide();
		$('.Japanese_step1').delay(1000).show(0);
	});
	$('#Japanese_step2').click(function(event) {
		console.log('Japanese_step2 click');
		$('.in_prod_pc').find('img').switchClass('European_zoomIn Japanese_zoomIn','Japanese_zoomOut',500, 'easeInOutQuad').delay(500).switchClass('European_zoomOut Japanese_zoomOut','Japanese_zoomIn',500, 'easeInOutQuad');
		$('.in_prod_pc').attr('class','in_prod_pc Japanese_pc1').delay(500).switchClass('Japanese_pc1 Japanese_pc3 Japanese_pc4 Japanese_pc5 Japanese_pc6 Japanese_pc7 European_pc1 European_pc2 European_pc3 European_pc4 European_pc5 European_pc6 European_pc7','Japanese_pc2',500, 'easeInOutQuad');
		$('#Japanese_step2').addClass('active').siblings().removeClass('active');
		// $('.prod2 .in_prod_step').find('span.filling-line').css('width','25%');
		$('.Japanese_step2').siblings('.in_prod_box').hide();
		$('.Japanese_step2').delay(1000).show(0);
	});
	$('#Japanese_step3').click(function(event) {
		console.log('Japanese_step3 click');
		$('.in_prod_pc').find('img').switchClass('European_zoomIn Japanese_zoomIn','Japanese_zoomOut',500, 'easeInOutQuad').delay(500).switchClass('European_zoomOut Japanese_zoomOut','Japanese_zoomIn',500, 'easeInOutQuad');
		$('.in_prod_pc').attr('class','in_prod_pc Japanese_pc1').delay(500).switchClass('Japanese_pc1 Japanese_pc2 Japanese_pc4 Japanese_pc5 Japanese_pc6 Japanese_pc7 European_pc1 European_pc2 European_pc3 European_pc4 European_pc5 European_pc6 European_pc7','Japanese_pc3',500, 'easeInOutQuad');
		$('#Japanese_step3').addClass('active').siblings().removeClass('active');
		// $('.prod2 .in_prod_step').find('span.filling-line').css('width','50%');
		$('.Japanese_step3').siblings('.in_prod_box').hide();
		$('.Japanese_step3').delay(1000).show(0);
	});
	$('#Japanese_step4').click(function(event) {
		console.log('Japanese_step4 click');
		$('.in_prod_pc').find('img').switchClass('European_zoomIn Japanese_zoomIn','Japanese_zoomOut',500, 'easeInOutQuad').delay(500).switchClass('European_zoomOut Japanese_zoomOut','Japanese_zoomIn',500, 'easeInOutQuad');
		$('.in_prod_pc').attr('class','in_prod_pc Japanese_pc1').delay(500).switchClass('Japanese_pc1 Japanese_pc2 Japanese_pc3 Japanese_pc5 Japanese_pc6 Japanese_pc7 European_pc1 European_pc2 European_pc3 European_pc4 European_pc5 European_pc6 European_pc7','Japanese_pc4',500, 'easeInOutQuad');
		$('#Japanese_step4').addClass('active').siblings().removeClass('active');
		// $('.prod2 .in_prod_step').find('span.filling-line').css('width','75%');
		$('.Japanese_step4').siblings('.in_prod_box').hide();
		$('.Japanese_step4').delay(1000).show(0);
	});
	$('#Japanese_step5').click(function(event) {
		console.log('Japanese_step5 click');
		$('.in_prod_pc').find('img').switchClass('European_zoomIn Japanese_zoomIn','Japanese_zoomOut',500, 'easeInOutQuad').delay(500).switchClass('European_zoomOut Japanese_zoomOut','Japanese_zoomIn',500, 'easeInOutQuad');
		$('.in_prod_pc').attr('class','in_prod_pc Japanese_pc1').delay(500).switchClass('Japanese_pc1 Japanese_pc2 Japanese_pc3 Japanese_pc4 Japanese_pc6 Japanese_pc7 European_pc1 European_pc2 European_pc3 European_pc4 European_pc5 European_pc6 European_pc7','Japanese_pc5',500, 'easeInOutQuad');
		$('#Japanese_step5').addClass('active').siblings().removeClass('active');
		// $('.prod2 .in_prod_step').find('span.filling-line').css('width','100%');
		$('.Japanese_step5').siblings('.in_prod_box').hide();
		$('.Japanese_step5').delay(1000).show(0);
	});
	$('#Japanese_step6').click(function(event) {
		console.log('Japanese_step6 click');
		$('.in_prod_pc').find('img').switchClass('European_zoomIn Japanese_zoomIn','Japanese_zoomOut',500, 'easeInOutQuad').delay(500).switchClass('European_zoomOut Japanese_zoomOut','Japanese_zoomIn',500, 'easeInOutQuad');
		$('.in_prod_pc').attr('class','in_prod_pc Japanese_pc1').delay(500).switchClass('Japanese_pc1 Japanese_pc2 Japanese_pc3 Japanese_pc4 Japanese_pc5 Japanese_pc7 European_pc1 European_pc2 European_pc3 European_pc4 European_pc5 European_pc6 European_pc7','Japanese_pc6',500, 'easeInOutQuad');
		$('#Japanese_step6').addClass('active').siblings().removeClass('active');
		// $('.prod1 .in_prod_step').find('span.filling-line').css('width','100%');
		$('.Japanese_step6').siblings('.in_prod_box').hide();
		$('.Japanese_step6').delay(1000).show(0);
	});
	$('#Japanese_step7').click(function(event) {
		console.log('Japanese_step7 click');
		$('.in_prod_pc').find('img').switchClass('European_zoomIn Japanese_zoomIn','Japanese_zoomOut',500, 'easeInOutQuad').delay(500).switchClass('European_zoomOut Japanese_zoomOut','Japanese_zoomIn',500, 'easeInOutQuad');
		$('.in_prod_pc').attr('class','in_prod_pc Japanese_pc1').delay(500).switchClass('Japanese_pc1 Japanese_pc2 Japanese_pc3 Japanese_pc4 Japanese_pc5 Japanese_pc6 European_pc1 European_pc2 European_pc3 European_pc4 European_pc5 European_pc6 European_pc7','Japanese_pc7',500, 'easeInOutQuad');
		$('#Japanese_step7').addClass('active').siblings().removeClass('active');
		// $('.prod1 .in_prod_step').find('span.filling-line').css('width','100%');
		$('.Japanese_step7').siblings('.in_prod_box').hide();
		$('.Japanese_step7').delay(1000).show(0);
	});

	$('.carousel-control').click(function(event){
		console.log('carousel-control click');
		$('.in_prod_pc').find('img').switchClass('European_zoomIn','European_zoomOut',100, 'linear');
		$('.in_prod_pc').switchClass('European_pc2 European_pc3 European_pc4 European_pc5 European_pc6 European_pc7 Japanese_pc1 Japanese_pc2 Japanese_pc3 Japanese_pc4 Japanese_pc5 Japanese_pc6 Japanese_pc7','European_pc1',100, 'linear');
		// $('.prod1 .in_prod_step').find('span.filling-line').css('width','0%');
		$('.in_prod_pc').find('img').switchClass('European_zoomIn Japanese_zoomIn','Japanese_zoomOut',100, 'linear');
		$('.in_prod_pc').switchClass('Japanese_pc2 Japanese_pc3 Japanese_pc4 Japanese_pc5 Japanese_pc6 Japanese_pc7 European_pc1 European_pc2 European_pc3 European_pc4 European_pc5 European_pc6 European_pc7','Japanese_pc1',100, 'linear');
		// $('.prod2 .in_prod_step').find('span.filling-line').css('width','0%');
		$('#Japanese_step1').click();
		$('#European_step1').click();
	});
});