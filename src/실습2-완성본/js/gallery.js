$(function(){

	var grid = $('.grid');
	var all = $('.grid-item a');
	var g1 = $('.dev a');
	var g2 = $('.graphy a');
	var g3 = $('.design a');

	// 초기설정 시작
	grid.isotope({
	  itemSelector: '.grid-item'
	})

	all.lightBox({
		overlayBgColor : '#333',
		overlayOpacity : 0.6,
		imageLoading: '../images/lightbox/lightbox-ico-loading.gif',
    imageBtnClose: '../images/lightbox/lightbox-btn-close.gif',
    imageBtnPrev: '../images/lightbox/lightbox-btn-prev.gif',
    imageBtnNext: '../images/lightbox/lightbox-btn-next.gif'
	});

	// 메뉴설정 시작
	$('#m1').click(function(){
		grid.isotope({ filter: '.grid-item' });

		all.lightBox({
			overlayBgColor : '#333',
			overlayOpacity : 0.6,
			imageLoading: '../images/lightbox/lightbox-ico-loading.gif',
	    imageBtnClose: '../images/lightbox/lightbox-btn-close.gif',
	    imageBtnPrev: '../images/lightbox/lightbox-btn-prev.gif',
	    imageBtnNext: '../images/lightbox/lightbox-btn-next.gif'
		});

		event.preventDefault();
	});

	$('#m2').click(function(){
		grid.isotope({ filter: '.dev' });

		g1.lightBox({
			overlayBgColor : '#333',
			overlayOpacity : 0.6,
			imageLoading: '../images/lightbox/lightbox-ico-loading.gif',
	    imageBtnClose: '../images/lightbox/lightbox-btn-close.gif',
	    imageBtnPrev: '../images/lightbox/lightbox-btn-prev.gif',
	    imageBtnNext: '../images/lightbox/lightbox-btn-next.gif'
		});

		event.preventDefault();
	});

	$('#m3').click(function(){
		grid.isotope({ filter: '.graphy' });

		g2.lightBox({
			overlayBgColor : '#333',
			overlayOpacity : 0.6,
			imageLoading: '../images/lightbox/lightbox-ico-loading.gif',
	    imageBtnClose: '../images/lightbox/lightbox-btn-close.gif',
	    imageBtnPrev: '../images/lightbox/lightbox-btn-prev.gif',
	    imageBtnNext: '../images/lightbox/lightbox-btn-next.gif'
		});

		event.preventDefault();
	});

	$('#m4').click(function(){
		grid.isotope({ filter: '.design' });

		g2.lightBox({
			overlayBgColor : '#333',
			overlayOpacity : 0.6,
			imageLoading: '../images/lightbox/lightbox-ico-loading.gif',
	    imageBtnClose: '../images/lightbox/lightbox-btn-close.gif',
	    imageBtnPrev: '../images/lightbox/lightbox-btn-prev.gif',
	    imageBtnNext: '../images/lightbox/lightbox-btn-next.gif'
		});

		event.preventDefault();
	});

});