
//----------------------------------------------------------------------
// module base
//----------------------------------------------------------------------

/*
KModuleBase = function() {
  this._parent    = null;
  this._children  = [];
  this._position  = 0;
  this._duration  = 0;
  this.init       = function() {}
  this.process    = function(time,prev) {}
  this.enter      = function(time,prev) {}
  this.leave      = function(time,prev) {}
}
*/

//----------------------------------------------------------------------
// module
//----------------------------------------------------------------------

var kode_module_stack = null;

//----------

KModule = function() {
  //KModuleBase.call(this)
  
  this._parent    = null;
  this._children  = [];
  this._position  = 0;
  this._duration  = 0;
  
  //----------------------------------------
  // hierarchy
  //----------------------------------------
  
  // returns child (appended) module
  
  this.append = function(position,duration,module) {
    module._position = position;
    module._duration = duration;
    module._parent = this;
    this._children.push(module);
    return module;
  }
  
  //----------
  
  // returns parent (this)
  
  this.add = function(position,duration,module) {
    module._position = position;
    module._duration = duration;
    module._parent = this;
    this._children.push(module);
    return this;
  }

  //----------
  
  // append().append().up().add()
  
  this.up = function() {
    return this._parent;
  }
  
  //----------
  
  // hack alert!
  // stack is just a global variable, only 1 level deep
  
  this.push = function() {
    kode_module_stack = this;
    return this;
  }
  
  //-----
  
  this.pop = function() {
    return kode_module_stack;
  }
  
  //----------------------------------------
  // time
  //----------------------------------------
  
  this.inside = function(time) {
    if (this._duration <= 0) return true;
    if (time < this._position) return false;
    if (time >= (this._position+this._duration)) return false;
    return true;
  }
  
  //----------------------------------------
  // children
  //----------------------------------------
  
  this.initChild = function(child) {
    var module = this._children[child];
    module.init();
  }
  
  //----------
  
  this.processChild = function(child,time,prev) {
    var module = this._children[child];
    if (module.inside(time)) {
      if (!module.inside(prev)) module.enter(time,prev);
      module.process(time,prev);
    } else {
      if (module.inside(prev)) module.leave(time,prev);
    }
  }
  
  //----------------------------------------
  // default
  //----------------------------------------
  
  this.initChildren = function() {
    var i,l;
    for (i=0, l=this._children.length; i<l; i++) {
      this.initChild(i);
    }
  }
  
  //----------
  
  this.processChildren = function(time,prev) {
    var i,l;
    time -= this._position;
    prev -= this._position;
    for (i=0, l=this._children.length; i<l; i++) {
      this.processChild(i,time,prev);
    }
  }
  
  //----------
  
  this.enterChildren = function(time,prev) {
  }
  
  //----------
  
  this.leaveChildren = function(time,prev) {
  }
  
  //----------------------------------------
  // callbacks
  //----------------------------------------
  
  this.init = function() {
    this.initChildren();
  }
  
  //----------
  
  this.enter = function(time,last) {
    this.enterChildren();
    
  }
  
  //----------
  
  this.leave = function(time,last) {
    this.leaveChildren();
  }
  
  //----------
  
  this.process = function(time,prev) {
    this.processChildren(time,prev);
  }
  
}
