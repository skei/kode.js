
/*
  thought:
  - you can change (code) start/end-val runtime..
*/

MLinear = function(object,property,startval,endval) {
  KModule.call(this);
  
  this._object    = object;
  this._property  = property;
  this._startval  = startval;
  this._endval    = endval;
  
  //----------
  
  // internal
  this.setval = function(time) {
    this._object[this._property] = this._value;  
  }
  
  //----------
  
  this.init = function() {
    this._object[this._property] = this._startval;
    this.initChildren();
  }
  
  //----------
  
  this.process = function(time,prev) {
    var delta = (time - this._position) / this._duration;
    var value = KInterpolate( this._startval, this._endval, delta );
    this._object[this._property] = value;
    this.processChildren(time,prev);
  }

}
