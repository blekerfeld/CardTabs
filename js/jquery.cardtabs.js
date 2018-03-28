/*!
 * CardTabs jQuery plugin
 * https://github.com/blekerfeld/cardtabs
 *
 * Released under the MIT license
 */

jQuery.fn.cardTabs = function(options){

	// Getting the initial selector
	var selector = $(this).parents().map(function() { return this.tagName; }).get().reverse().concat([this.nodeName]).join(">");var id = $(this).attr("id");if (id) { selector += "#"+ id;}var classNames = $(this).attr("class");if (classNames) {selector += "." + $.trim(classNames).replace(/\s/gi, ".");}
	var activeCount = 0;

	var settings = $.extend({
        theme: '',
     }, options );

	// Initializing
	var htmlInner = $(this).html();
	var stack = $('<div />').addClass('card-tabs-stack').html(htmlInner);
	var bar = $('<div />').addClass('card-tabs-bar');

	$(selector).children('div[data-tab]').each(function(){
		bar.append($('<a />').attr('href', 'javascript:void();').data('tab', $(this).data('tab')).append($(this).data('tab')));
	});

	$(selector).html('').append(bar).append(stack);


	// Fixing the theme
	if(settings.theme != ''){
		$(selector + ' .card-tabs-bar').addClass(settings.theme);
		$(selector + ' .card-tabs-stack').addClass(settings.theme);
	}

	function toggleTab(obj){
		$(selector + " .card-tabs-stack div[data-tab][data-tab='" + obj.data('tab') + "']").show();
		$(selector + " .card-tabs-stack div[data-tab][data-tab!='" + obj.data('tab') + "']").hide();
	}

	// Checking whether we have to set a tab as active
    $(selector + ' .card-tabs-stack').children('div[data-tab]').each(function () {
    	if($(this).hasClass('active')){
    		$(selector + " .card-tabs-bar a[data-tab='" + $(this).data('tab') + "']").addClass('active');
    		toggleTab($(this));
    		$(this).removeClass('active');
    		activeCount++;
    	}
	});

	// Otherwise, it's the first one, and the first tab in the bar needs to be active
	if(activeCount == 0){
		$(selector + ' .card-tabs-bar a:first-child').addClass('active');
	}

	$(selector + ' .card-tabs-bar a').click(function(){
		$(selector + ' .card-tabs-bar a').removeClass('active');
		$(this).addClass('active');
		toggleTab($(this));
	});

	return this;
};
