
MDebug = function() {
  KModule.call(this);
  
  //----------
  
  this.init = function() {
    KTrace('MDebug.init');
    this.initChildren();
  }

  //----------
  
  this.process = function(time,prev) {
    KTrace('MDebug.process. time:' + time + ' prev:' + prev);
    this.processChildren(time,prev);
  }

}
