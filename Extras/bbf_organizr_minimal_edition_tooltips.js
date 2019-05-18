var children = $(".allTabsList");
for (var i = 0; i < children.length; i++) {
	children[i].setAttribute("data-tippy-content", children[i].getAttribute("data-tab-name"))
}

var getTippy = new Promise(function() {
	$.getScript('https://unpkg.com/tippy.js', function() {
		tippy(".allTabsList", {
			placement: 'right',
			boundary: document.getElementById('page-wrapper'),
			touch: false,
			theme: 'bbf'
		})
	});
});

var getPopper = new Promise(function() {
	$.getScript('https://unpkg.com/popper.js');
});

getPopper.then(getTippy);