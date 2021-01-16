
/*
  thought:
  - you can change start/end-val runtime..
    - code/callback
    - lfo?
*/

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

//----------

MCurve = function(object,property,startval,endval,shape) {
  KModule.call(this);
  
  this._object    = object;
  this._property  = property;
  this._startval  = startval;
  this._endval    = endval;
  this._shape     = shape;
  
  //if (shape > 0) this._shape = shape;
  //else this._shape = 0.000001;
  
  //----------
  
  // internal
  //this.setval = function(time) {
  //  this._object[this._property] = this._value;  
  //}
  
  //----------
  
  this.init = function() {
    this._object[this._property] = this._startval;
    this.initChildren();
  }
  
  //----------
  
  this.process = function(time,prev) {
    var delta = (time - this._position) / this._duration;
    var v = KInterpolate( this._startval, this._endval, delta );
    //var value = v / (v + (1 - (1/this._shape)) * (v-1));
    this._object[this._property] = KShape(v);//value;
    this.processChildren(time,prev);
  }

}
