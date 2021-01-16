
MNoop = function() {
  KModule.call(this);
  
  //----------

  this.init = function() {
    this.initChildren();
  }
  
  //----------
  
  this.process = function(time,prev) {
    this.processChildren(time,prev);
  }

  //----------

  this.enter = function(time,prev) {
    this.enterChildren();
  }
  
  //----------

  this.leave = function(time,prev) {
    this.leaveChildren();
  }
  
}
