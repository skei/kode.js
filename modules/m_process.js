
MProcess = function() {
  KModule.call(this);
  
  this.init = function() {
    // do nothing
  }
  
  //----------
  
  this.process = function(time,prev) {
    this.processChildren(time,prev);
  }

}
