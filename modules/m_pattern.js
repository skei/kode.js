// round-robin
// cycle through children, with wraparound..
// possibly attached to a MInterval module

MPattern = function(object,property,pattern) {
  KModule.call(this);
  
  this._object    = object;
  this._property  = property;
  this._pattern   = pattern;
  this._index     = 0;
  
  //----------
  
  this.process = function(time,prev) {
    var len = this._pattern.length;
    if (len > 0) {
      if (this._index >= len) this._index = 0;
      var value = this._pattern[ this._index ];
      this._object[this._property] = value;  
      this._index++;
    }
    this.processChildren(time,prev);
  }

}


