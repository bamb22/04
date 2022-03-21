$(function() {

  // Sub2 Page - Gallery Setting
  var grid = $('.grid');
  var all = $('.grid-item a');
  var g1 = $('.g1 a');
  var g2 = $('.g2 a');
  var g3 = $('.g3 a');

  // 겔러리 정렬 시작
  grid.isotope({
    itemSelector: '.grid-item'
  });


  // 초기 설정
  all.lightBox({
    overlayBgColor: '#000',
    overlayOpacity: 0.4
  });

  // 필터링 정렬 시작
  $('#m1').click(function() {
    grid.isotope({ filter: '.grid-item' });

    all.lightBox({
      overlayBgColor: '#000',
      overlayOpacity: 0.4
    });
  });

  $('#m2').click(function() {
    grid.isotope({ filter: '.g1' });

    g1.lightBox({
      overlayBgColor: '#000',
      overlayOpacity: 0.4
    });
  });

  $('#m3').click(function() {
    grid.isotope({ filter: '.g2' });

    g2.lightBox({
      overlayBgColor: '#000',
      overlayOpacity: 0.4
    });
  });

  $('#m4').click(function() {
    grid.isotope({ filter: '.g3' });

    g3.lightBox({
      overlayBgColor: '#000',
      overlayOpacity: 0.4
    });
  });

});