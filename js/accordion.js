$(function() {

  var menuItem = $('.qna li h4, .faq li h3');

  menuItem.click(function() {
    $(this).toggleClass('title-act').next().slideToggle(800)

  });

});