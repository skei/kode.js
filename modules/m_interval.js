
/*
  todo: doesn't work properly?
  - ph = ((time+offset)*speed) % 1 (fract?)
  - on-rate, off-rate
*/

/*
  http://stackoverflow.com/questions/13380390/javascript-what-level-of-code-optimization-can-one-expect
  "Use parseInt() rather than Math.floor."
  
*/

MInterval = function(speed,offset) {
  KModule.call(this);
  
  this._speed   =  1/speed;
  this._offset  =  offset;
  this._first   = true;
  
  //----------
  
  this.init = function() {
    _first = true;
  }
  
  //----------
  
  this.process = function(time,prev) {
    if (this._first) {
      this._first = false;
      this.processChildren(time,prev);
    } else {
      var ph = ((time+this._offset) * this._speed);
      ph -= Math.floor(ph); // 0..1
      
      var prev_ph = ((prev+this._offset) * this._speed);
      prev_ph -= Math.floor(prev_ph); // 0..1
      
      //if previous ph is larger than current ph..
      //indicating wrap-around..
      
      if (prev_ph > ph) {
        this.processChildren(time,prev);
      }
    }
  
  }

}
