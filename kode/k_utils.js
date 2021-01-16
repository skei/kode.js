
var PI2 = (Math.PI*2);

//----------

window.requestAnimationFrame = (
  function() {
    return window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame
        || function(callback) {
             window.setTimeout(callback,1000/60);
           };
  }
)();

//----------

if (KODE_DEBUG) {
  function KTrace(txt) {
    var el = document.getElementById('debug');
    if (el) el.innerHTML = txt;
    else console.log(txt);
  }
} else {
  function KTrace(txt) {
  }
}

//----------


function KInterpolate(v1,v2,d) {
  return (v1*(1-d)) + (v2*d);
}
  
//----------

/*
  shape linear value with a curve
  http://www.kvraudio.com/forum/viewtopic.php?t=271900&highlight=curves
  For arbitrary shapes of x, between 0..1, try this:
  y = x / (x + (1 - (1/shape)) * (x - 1));
  where:
  shape = 0.5 -> lin
  shape > 0.5 -> log
  shape < 0.5 -> exp
  - shape can not be 0 -> 1/0
*/

function KShape(value,shape) {  
  return value / (value + (1 - (1/shape)) * (value-1));
}

