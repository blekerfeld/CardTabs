/*!
 * CardTabs jQuery plugin
 * https://github.com/blekerfeld/cardtabs
 *
 * Released under the MIT license
 */

jQuery.fn.cardTabs = function(){

	var mainClass =  $(this).attr('class');
	var activeCount = 0;

	function toggleTab(obj){
		$('.' + mainClass + " div[data-tab='" + obj.data('tab') + "']").show();
		$('.' + mainClass + " div[data-tab!='" + obj.data('tab') + "']").hide();
	}

	// Checking whether we have to set a tab as active
    $('.' + mainClass + ' .ctTabs').children('.ctTab').each(function () {
    	if($(this).hasClass('active')){
    		$('.' + mainClass + " .ctBar a[data-tab='" + $(this).data('tab') + "']").addClass('active');
    		toggleTab($(this));
    		$(this).removeClass('active');
    		activeCount++;
    	}
	});

	// Otherwise, it's the first one, and the first tab in the bar needs to be active
	if(activeCount == 0){
		$('.' + mainClass + ' .ctBar a:first-child').addClass('active');
	}

	$('.' + mainClass + ' .ctBar a').click(function(){
		$('.' + mainClass + ' .ctBar a').removeClass('active');
		$(this).addClass('active');
		toggleTab($(this));
	});

	return this;
};
