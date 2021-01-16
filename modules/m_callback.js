
MCallback = function(init,process,enter,leave) {
  KModule.call(this);
  
  this._init    = init;
  this._process = process;
  this._enter   = enter;
  this._leave   = leave;

  //----------
  
  this.init = function() {
    if (this._init) this._init();
    this.initChildren();
  }

  //----------
  
  this.process = function(time,prev) {
    if (this._process) this._process(time,prev);
    this.processChildren(time,prev);
  }


  //----------
  
  this.enter = function(time,prev) {
    if (this._enter) this._enter(time,prev);
    this.enterChildren(time,prev);
  }

  //----------
  
  this.leave = function(time,prev) {
    if (this._leave) this._leave(time,prev);
    this.leaveChildren(time,prev);
  }
  
}
