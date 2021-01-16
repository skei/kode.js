
MCosine = function(object,property,minval,maxval,speed,offset) {
  KModule.call(this);
  
  this._object    = object;
  this._property  = property;
  this._minval    = minval;
  this._maxval    = maxval;
  this._speed     = speed;
  this._offset    = offset;

  //----------
  
  // internal
  this.setval = function(time) {
    var spd = this._speed * PI2;
    var v = ( Math.cos( spd * (time+this._offset) ) + 1 ) * 0.5; // 0..1
    v *= (this._maxval - this._minval);
    v += this._minval;
    this._object[this._property] = v;
  }
  
  //------------------------------
  
  this.init = function() {
    this.setval(0);
    this.initChildren();
  }
  
  //----------
  
  this.process = function(time,prev) {
    this.setval(time);
    this.processChildren(time,prev);
  }

}
