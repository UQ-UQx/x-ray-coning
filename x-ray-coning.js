$(function() {
  $('#x-ray-bed').draggable({
    containment: 'parent',
  });

  $('#x-ray-length-slider').slider({
    min: 10,
    max: 100,
    value: 100,
    step: 1,
    slide: function(event, ui) {
	  $('#x-ray-left-frame').css('width', Math.ceil((-112.5 / 90 * (ui.value - 10) + 122.5)));
      $('#x-ray-right-frame').css('width', Math.ceil((-112.5 / 90 * (ui.value - 10) + 122.5)));
	  $('#x-ray-right-frame').css('left', Math.ceil(542 - Math.ceil(-112.5 / 90 * (ui.value - 10) + 122.5)));
      $('#x-ray-exposure-value').html(Math.round(parseInt(ui.value) * parseInt($('#x-ray-width-slider').slider('value')) / 45 * 100) / 100 + '%');
	  $('#x-ray-exposure-container').css('left', 272 + Math.ceil((-112.5 / 90 * (ui.value - 10) + 122.5)));
    }
  });

  $('#x-ray-width-slider').slider({
	min: 10,
	max: 45,
	value: 45,
	step: 1,
	slide: function(event, ui) {
	  $('#x-ray-top-frame').css('height', Math.ceil((-43.5 / 35 * (ui.value - 10) + 101.5)));
	  $('#x-ray-bottom-frame').css('height', Math.ceil(-43.5 / 35 * (ui.value - 10) + 101.5));
	  $('#x-ray-bottom-frame').css('top', Math.ceil(228 - Math.ceil(-43.5 / 35 * (ui.value - 10) + 101.5)));
	  $('#x-ray-left-frame').css('top', Math.ceil((-43.5 / 35 * (ui.value - 10) + 101.5)));
	  $('#x-ray-left-frame').css('height', Math.ceil(228 - 2 * Math.ceil(-43.5 / 35 * (ui.value - 10) + 101.5)));
	  $('#x-ray-right-frame').css('top', Math.ceil((-43.5 / 35 * (ui.value - 10) + 101.5)));
	  $('#x-ray-right-frame').css('height', Math.ceil(228 - 2 * Math.ceil(-43.5 / 35 * (ui.value - 10) + 101.5)));
	  $('#x-ray-exposure-value').html(Math.round(parseInt($('#x-ray-length-slider').slider('value')) * parseInt(ui.value) / 45 * 100) / 100  + '%');
	  $('#x-ray-exposure-container').css('top', Math.ceil((-43.5 / 35 * (ui.value - 10) + 101.5)) - 48);
	}
  });
});