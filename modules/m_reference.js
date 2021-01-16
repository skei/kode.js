
MReference = function(module) {
  KModule.call(this);
  
  this._module = module;
  
  //----------

  this.init = function() {
    this._module.initChildren();
  }
  
  //----------
  
  this.process = function(time,prev) {
    this._module.processChildren(time,prev);
  }

  //----------

  this.enter = function(time,prev) {
    this._module.enterChildren();
  }
  
  //----------

  this.leave = function(time,prev) {
    this._module.leaveChildren();
  }
  
}
