
MLoop = function(time,speed) {
  KModule.call(this);
  
  this._time  = time;
  this._speed = speed;
  
  //----------

  //this.init = function() {
  //  this.initChildren();
  //}
  
  //----------
  
  this.process = function(time,prev) {
    var diff = prev - time;
    time %= this._time;
    time *= this._speed;
    prev = time + diff;
    this.processChildren(time,prev);
  }

  //----------

  //this.enter = function(time,prev) {
  //  this.enterChildren();
  //}
  
  //----------

  //this.leave = function(time,prev) {
  //  this.leaveChildren();
  //}
  
}
