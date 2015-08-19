$('button').on('click', function(){
  var currentSide = $(this).attr('class');
  $('#cube').removeClass().addClass(currentSide);
});
