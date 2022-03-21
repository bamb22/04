$(function(){

	// 메인뷰 애니메이션 시작
	var title = $('.mainview-title');
	var img = $('.mainview-img');

	title.animate({'left': 23}, 800).next()
		.delay(1000).animate({'bottom': 56}, 800);

});