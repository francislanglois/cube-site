$('nav button').on('click', function(){
  //finds what the button's class is and puts it in a variable currentSide
  var currentSide = $(this).attr('class');
  //remove any class from the cube and adds the class that was in the variable currentSide
  $('#cube').removeClass().addClass(currentSide);
  
  if($('.responsive-menu').hasClass('expand')){
    $('.responsive-menu').removeClass('expand');
  }
  
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
    $('nav button').css('color', 'rgba(200, 160, 220, 1)')
  }
});

var currentSelection = '';

function checkWidth(init){
  if($(window).width()<940){
    $('.peice-1-button').addClass('selected');
    $('.peice-2-button').removeClass('selected');
    $('.peice-3-button').removeClass('selected');
    $('.peice-1').addClass('displayed-peice');
    $('.peice-1').removeClass('hidden');
    $('.peice-2').addClass('hidden');
    $('.peice-2').removeClass('displayed-peice');
    $('.peice-3').addClass('hidden');
    $('.peice-3').removeClass('displayed-peice');
  }
  else{
    if(!init){
      $('.peice-1').removeClass('displayed-peice');
      $('.peice-2').removeClass('displayed-peice');
      $('.peice-3').removeClass('displayed-peice');
      $('.peice-1').removeClass('hidden');
      $('.peice-2').removeClass('hidden');
      $('.peice-3').removeClass('hidden');
    }
  }
}
$('.peice-buttons button').on('click', function(){
  $('.peice-1-button').removeClass('selected');
  $(this).addClass('selected');
  
  $(currentSelection).removeClass('selected');
  currentSelection = $(this);
  
  if($(this).hasClass('peice-1-button')){
    $('.peice-1').removeClass('hidden').addClass('displayed-peice');
    $('.peice-2').removeClass('displayed-peice').addClass('hidden');
    $('.peice-3').removeClass('displayed-peice').addClass('hidden');
  }
  else if ($(this).hasClass('peice-2-button')){
    $('.peice-2').removeClass('hidden').addClass('displayed-peice');
    $('.peice-1').removeClass('displayed-peice').addClass('hidden');
    $('.peice-3').removeClass('displayed-peice').addClass('hidden');
  }
  else if($(this).hasClass('peice-3-button')){
    $('.peice-3').removeClass('hidden').addClass('displayed-peice');
    $('.peice-1').removeClass('displayed-peice').addClass('hidden');
    $('.peice-2').removeClass('displayed-peice').addClass('hidden');
  }
});

$(document).ready(function(){
  checkWidth(true);
  
  $(window).resize(function(){
    checkWidth(false);
  });
  
  $(function(){
    $('.menu-btn').click(function(){
      $('.responsive-menu').toggleClass('expand')
    })
  })
});
