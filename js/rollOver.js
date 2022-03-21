$(function() {

  var imgItem = $(".grid-item, .recent li");


  imgItem.hover(
    function() {
      $(this).find('img').attr("src", $(this).find('img').attr("src").replace(/-off(\.gif|\.jpg|\.png)$/, "-on$1"));
    },
    function() {
      $(this).find('img').attr("src", $(this).find('img').attr("src").replace(/-on(\.gif|\.jpg|\.png)$/, "-off$1"));
    }
  );

});