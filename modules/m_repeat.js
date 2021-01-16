
MRepeat = function(object,property,count,startval,addval) {
  KModule.call(this);

  this._object    = object;
  this._property  = property;
  this._count     = count;
  this._startval  = startval;
  this._addval    = addval;
  
  //----------
  
  this.init = function() {
    var value = this._startval;
    for (var i=0; i<this._count; i++) {
      this._object[this._property] = value;
      this.initChildren();
      value += this._addval;
    }
  }
  
  //----------
  
  this.process = function(time,prev) {
    var value = this._startval;
    for (var i=0; i<this._count; i++) {
      this._object[this._property] = value;
      this.processChildren(time,prev);
      value += this._addval;
    }
  }

}
