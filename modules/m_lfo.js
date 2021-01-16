
var
  M_LFO_SIN = 0;
  M_LFO_TRI = 1;
  M_LFO_SQU = 2;
  M_LFO_PH  = 3;
  M_LFO_SAW = 4;
  M_LFO_RND = 5;
  
//----------------------------------------------------------------------
//
//----------------------------------------------------------------------

MLfo = function(object,property,type,speed,offset) {
  KModule.call(this);
  
  this._object    = object;
  this._property  = property;
  this._type      = type;
  this._speed     = speed;
  this._offset    = offset;

  //----------
  
  // internal
  this.setval = function(time) {
    var ph = ((time+this._offset) * this._speed);
    ph -= Math.floor(ph); // 0..1
    var v = 0;
    switch (this._type) {
      case M_LFO_SIN: v = Math.sin(ph*PI2) * 0.5 + 0.5; break;
      case M_LFO_TRI: if (ph<0.5) v = (ph*2); else v=((1-ph)*2); break;
      case M_LFO_SQU: if (ph<0.5) v = 0; else v=1; break;
      case M_LFO_PH:  v = ph; break;
      case M_LFO_SAW: v = 1-ph; break;
      case M_LFO_RND: v = Math.random(); //break;
    }
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
