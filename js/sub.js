$(function(){

	var sectionItem = $('.p-bottom');

	sectionItem.waypoint(function(direction) {
	  if (direction == 'down') {

	    $('.progress').children().first().animate({ 'width': '100%' }, 800).next().delay(800).animate({ 'width': '97%' }, 800).next().delay(1500).animate({ 'width': '85%' }, 800);

	  } else {
	    $('.progress').children().first().animate({ 'width': '0' }, 800).next().delay(800).animate({ 'width': '0' }, 800).next().delay(1500).animate({ 'width': '0' }, 800);
	  }
	}, { offset: '75%' });



});