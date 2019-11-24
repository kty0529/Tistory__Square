jQuery(document).ready(function() {
	//txc-info wrap
	jQuery('.txc-info').wrap('<div class="txc-info-wrap"></div>');

	//smart device responsive video
	jQuery('iframe[src*=youtube],iframe[src*=video],video,embed').wrap('<div class="responsive-video"></div>');

	jQuery('#sidebar').on('DOMMouseScroll mousewheel', function(ev) {
		var $this = jQuery(this),
			scrollTop = this.scrollTop,
			scrollHeight = this.scrollHeight,
			height = $this.height(),
			delta = (ev.type == 'DOMMouseScroll' ? ev.originalEvent.detail * -40 : ev.originalEvent.wheelDelta),
			up = delta > 0;

		var prevent = function() {
			ev.stopPropagation();
			ev.preventDefault();
			ev.returnValue = false;
			return false;
		}

		if (!up && -delta > scrollHeight - height - scrollTop) {
			// Scrolling down, but this will take us past the bottom.
			$this.scrollTop(scrollHeight);
			return prevent();
		} else if (up && delta > scrollTop) {
			// Scrolling up, but this will take us past the top.
			$this.scrollTop(0);
			return prevent();
		}
	});

	// recent post widget - get thumbnail
	jQuery('#recent-post .box').each(function() {
		var url = jQuery(this).find('.thumb').attr('href'),
			target  = jQuery(this).find('.thumb img');

		jQuery.ajax({
			url: url,
			dataType: 'html',
			success: function(data) {

				var first = '<meta property="og:image" content="',
					last  = '"';
				var	image = data.match( first+"(.*?)"+last );

				if ( image !== null ) {
					target.attr('src', image[1]);
				}

			}
		});
	});
});

//sidebar toggle
function sidebar_toggle() {
	var root = document.documentElement;
	if (~root.className.indexOf(' sidebar-active')) {
		root.className = root.className.replace(' sidebar-active', '');
	} else {
		root.className += ' sidebar-active';
	};
};

//short key
function getKey(keyStroke) {
	if ((event.srcElement.tagName != 'INPUT') && (event.srcElement.tagName != 'TEXTAREA')){
		isNetscape=(document.layers);
		eventChooser = (isNetscape) ? keyStroke.which : event.keyCode;
		which = String.fromCharCode(eventChooser).toLowerCase();
		for (var i in key)
			if (which == i) window.location = key[i];
	}
}
document.onkeypress = getKey;
console.log("Square final 1.1.1 / Skin by wallel.com")
