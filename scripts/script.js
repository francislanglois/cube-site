var yAngle = 0;

//sets the color scheme of the nav bar based on the yAngle
function setColorScheme(yAngle){
  if(yAngle === -90 || yAngle === 270){
    $('nav button').css('color', 'rgba(75, 170, 200, 1)');
  }
  else if (yAngle === -270 || yAngle === 90) {
    $('nav button').css('color', 'rgba(225, 105, 10, 1)');
  }
  else if (yAngle === -180 || yAngle === 180){
    $('nav button').css('color', '#B23AEE');
  }
  else {
    $('nav button').css('color', 'rgba(60, 185, 15, 1)');
  }
}

function rotateSides(yAngle){
  
  var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
  prop,
  el = document.createElement('div');
  
  for(var i = 0, l = props.length; i < l; i++) {
    if(typeof el.style[props[i]] !== "undefined") {
      prop = props[i];
      break;
    }
  }
  document.getElementById('cube').style[prop] = 'translateZ(-50vw) rotateY('+yAngle+'deg)';
}

function removeMobileNav(){
  //if the nav bar has the class of expand (for mobile) then it removes that class to hide the menu after something has been clicked on
  if($('.responsive-menu').hasClass('expand')){
    $('.responsive-menu').removeClass('expand');
  }
}

$('nav button').on('click', function(){
  
  //finds what the button's class is and puts it in a variable currentSide
  var currentSide = $(this).attr('class');
  //remove any class from the cube and adds the class that was in the variable currentSide
  $('#cube').removeClass().addClass(currentSide);
  
  removeMobileNav();
  
  //sets the yAngle based on which nav bar button has been pushed
  if($(this).attr('class') === 'show-right'){
    yAngle = -90;
  }
  else if ($(this).attr('class') === 'show-front') {
    yAngle = 0;
  }
  else if ($(this).attr('class') === 'show-left'){
    yAngle = 90;
  }
  else {
    yAngle = 180;
  }
  
  rotateSides(yAngle);
  setColorScheme(yAngle);
});

$('body').keydown(function(e){
  $('#cube').removeClass('show-right').removeClass('show-front').removeClass('show-left');
  
  switch(e.keyCode){
    case 37: //left key press
    yAngle += 90;
    if(yAngle === -360 || yAngle === 360){
      yAngle = 0;
    };
    break;
    
    case 39:
    yAngle -= 90; //right key press
    if(yAngle === -360 || yAngle === 360){
      yAngle = 0;
    };
    break;
  };
  
  rotateSides(yAngle);
  setColorScheme(yAngle);
});

//rotates the page if one of the chevron arrows is clicked
$('.arrow-container button').on('click', function(){
  
  if ($(this).hasClass('left-arrow')){
    yAngle += 90;
    if(yAngle === -360 || yAngle === 360){
      yAngle = 0;
    }
  }
  else{
    yAngle -= 90;
    if(yAngle === -360 || yAngle ===360){
      yAngle = 0;
    }
  }
  rotateSides(yAngle);
  setColorScheme(yAngle);
});

var currentSelection = '';

function checkWidth(init){
  if($(window).width()<940){
    $('.peice-1-button').addClass('selected');
    $('.peice-2-button').removeClass('selected');
    $('.peice-3-button').removeClass('selected');
    $('.work-peice').addClass('hidden').removeClass('displayed-peice');
    $('.peice-1').addClass('displayed-peice').removeClass('hidden');
  }
  else{
    if(!init){
      $('.work-peice').removeClass('displayed-peice').removeClass('hidden');
    }
  }
}
$('.peice-buttons button').on('click', function(){
  $('.peice-buttons button').removeClass('selected');
  $(this).addClass('selected');
  
  $(currentSelection).removeClass('selected');
  currentSelection = $(this);
    $('.work-peice').removeClass('displayed-peice').addClass('hidden');
  if($(this).hasClass('peice-1-button')){
    $('.peice-1').removeClass('hidden').addClass('displayed-peice');
  }
  else if ($(this).hasClass('peice-2-button')){
    $('.peice-2').removeClass('hidden').addClass('displayed-peice');
  }
  else if($(this).hasClass('peice-3-button')){
    $('.peice-3').removeClass('hidden').addClass('displayed-peice');
  }
  else if($(this).hasClass('peice-4-button')){
    $('.peice-4').removeClass('hidden').addClass('displayed-peice');
  }
  else if($(this).hasClass('peice-5-button')){
    $('.peice-5').removeClass('hidden').addClass('displayed-peice');
  }
});

$('html').on('click', function(){
  removeMobileNav();
});

$(document).ready(function(){
  checkWidth(true);
  
  $(window).resize(function(){
    checkWidth(false);
  });
  
  $(function(){
    $('.menu-btn').click(function(event){
      event.stopPropagation();
      $('.responsive-menu').toggleClass('expand')
      
    });
  });
  
});
