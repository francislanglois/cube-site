$('button').on('click', function(){
  var currentSide = $(this).attr('class');
  $('#cube').removeClass().addClass(currentSide);
});

var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
prop,
el = document.createElement('div');

for(var i = 0, l = props.length; i < l; i++) {
 if(typeof el.style[props[i]] !== "undefined") {
   prop = props[i];
   break;
 }
}

var xAngle = 0;
var yAngle = 0;

document.addEventListener('keydown', function(e){
  switch(e.keyCode){
    case 37: //left
    yAngle -= 90;
    break;

    // case 38: //up
    // xAngle += 90;
    // e.preventDefault();
    // break

    case 39: //right
    yAngle += 90;
    break

    // case 40: //down
    // xAngle -= 90;
    // e.preventDefault();
    // break;
  };

  document.getElementById('cube').style[prop] = 'rotateX(' + xAngle + 'deg) rotateY(' + yAngle + 'deg)';
});
