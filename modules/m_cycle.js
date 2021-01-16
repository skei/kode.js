// round-robin
// cycle through children, with wraparound..
// possibly attached to a MInterval module

MCycle = function() {
  KModule.call(this);
  
  this._child = 0;
  
  //----------
  
  // doesn't make sense in init (no time)
  //this.init = function() {
  //}
  
  //----------
  
  this.process = function(time,prev) {
    var len = this._children.length;
    if (len > 0) {
      if (this._child >= len) this._child = 0;
      this.processChild(this._child,time,prev);
    }
    this._child++;
  }

}


