document.addEventListener("DOMContentLoaded", function () {

	document.getElementById('ascii-intro').innerHTML = linkify(document.getElementById('ascii-intro').innerHTML);

	var anchors = document.getElementsByTagName('a');

	for (var i in anchors)
		anchors[i].onclick = function () {
			return !window.open(this);
		};

});