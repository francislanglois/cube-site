$('button').on('click', function(){
  //finds what the button's class is and puts it in a variable currentSide
  var currentSide = $(this).attr('class');
  //remove any class from the cube and adds the class that was in the variable currentSide
  $('#cube').removeClass().addClass(currentSide);
  
  //Changes the color of the nav bar to match the theme when the cube is rotated
  if($(this).attr('class') === 'show-right'){
    $('nav button').css('color', 'rgba(75, 170, 200, 1)');
  }
  else if ($(this).attr('class') === 'show-front') {
    $('nav button').css('color', 'rgba(60, 185, 15, 1)')
  }
  else if ($(this).attr('class') === 'show-left'){
    $('nav button').css('color', 'rgba(225, 105, 10, 1)')
  }
  else {
    $('nav button').css('color', 'rgba(115, 95, 145, 1)')
  }
});
