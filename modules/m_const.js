
MConst = function(object,property,value,remember) {
  KModule.call(this);
  
  this._object    = object;
  this._property  = property;
  this._value     = value;
  this._remember = remember || false;
  
  //----------
  
  // internal
  //this.setval = function(time) {
  //  this._object[this._property] = this._value;  
  //}
  
  //----------
  
  //this.init = function() {
  //  this.setval(time);
  //  this.initChildren();
  //}
  
  //----------
  
  //this.process = function(time,prev) {
  //  this.setval(time);
  //  this.processChildren(time,prev);
  //}

  //----------
  
  this.enter = function(time,prev) {
    if (this._remember) {
      this._oldvalue = this._object[this._property];
    }
    this._object[this._property] = this._value;  
    this.enterChildren(time,prev);
  }

  //----------
  
  this.leave = function(time,prev) {
    if (this._remember) {
      this._object[this._property] = this._oldvalue;
    }
    //else {
    //  this._object[this._property] = this._value;
    //}
    this.leaveChildren(time,prev);
  }

}
