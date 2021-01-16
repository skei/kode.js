
MCondition = function(object,property,value) {
  KModule.call(this);
  
  this._object    = object;
  this._property  = property;
  this._value     = value;
  
  //------------------------------
  
  // internal
  this.getval = function() {
    return this._object[this._property] = this._value;
  }
  
  //------------------------------
      
  this.init = function() {
    var value = getval();
    if (value >= 0) this.initChildren();
  }
  
  //----------
  
  this.process = function(time,prev) {
    var value = getval();
    if (value >= 0) this.processChildren(time,prev);
  }

}
