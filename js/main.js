var dynamic = true;
$(function(){
	if(dynamic == true){
		$('.gallery-list a').click(function(){
			var title = $(this).attr('title'),
				href = $(this).attr('href'),
				src = $(this).find('img').attr('src'),
				data = {
					title: title,
					src: src
				}
			getImage(data);
			window.history.pushState(data, title, href);
			$('.feedback').addClass('dynamic').html('<p>Dynamic loaded</p>');
			return false;
		});
	}
});
function getImage(data){
	var image = '<img src="'+data.src+'" alt="'+data.title+'">';
	document.getElementById('gallery-container').innerHTML = image;
}
window.addEventListener('popstate', function(event) {
	var state = event.state;
	if (state !== null) {
		getImage(state);
	}
});
