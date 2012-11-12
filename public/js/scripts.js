$(function(){
	
	$('.btn').click(function() {
		return false;
	});
	
	$('.home .bxslider').bxSlider({
		adaptiveHeight: false,
		pager: false
	});
	
	/**
	 * QUICK REFERENCE
	 */
	
	// check if the window bindings should be applied (only if the element is present)
	var $reference = $('.reference-wrap');
	if($reference.length > 0){
	
		// toggle the menu
		$('.reference-wrap h3').click(function() {
			$('.reference-content').slideToggle(300);
		});
	
		// scroll to the elements
		$('.reference-content a').click(function(){
			var id = $(this).html();
			$('html, body').animate({
				scrollTop: $('#' + id).offset().top - 20
			}, 300);
			return false;
		});
	
		$(window).bind('scroll resize', positionQuickReference);
	}
	
	// check if .reference-wrap should be sticky
	function positionQuickReference(){
		var windowTop = $(window).scrollTop();
		if(windowTop >= 112){
			$reference.css({
				position: 'fixed',
				top: 20,
				right: $(window).width() > 700 ? $(window).width() - ($('#primary h1').offset().left + $('#primary').width()) : 20
			});
		}else{
			$reference.css({
				position: 'absolute',
				top: 0,
				right: $(window).width() > 1040 ? 0 : 20
			});
		}
	}
	
	/**
	 * EXAMPLES
	 */
	
	// JS / HTML code switcher
	$('.code-switch a').click(function(){
		if(!$(this).hasClass('active')){
			$('.code-switch a').removeClass('active');
			$(this).addClass('active');
			var code = $(this).attr('data-code');
			$('.code-wrap .active').fadeOut(100, function(){
				$(this).removeClass('active');
				$('.code-wrap .code[data-code="' + code + '"]').fadeIn(100).addClass('active');
			});
		}
		return false;
	});
	
	
	
});