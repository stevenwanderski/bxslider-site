$(function(){
	
	$('.btn').click(function() {
		return false;
	});
	
	$('.bxslider').bxSlider({
		adaptiveHeight: false,
		pager: false
	});
	
	/**
	 * Quick reference tool
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
			$('.reference-content').slideToggle(300);
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
	
});