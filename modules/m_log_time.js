

MLogTime = function(text) {
  KModule.call(this);
  
  this._text = text || '';
  
  //----------
  
  this.init = function() {
    console.log(this._text + ' init');
    this.initChildren();
  }
  
  //----------
  
  this.process = function(time,prev) {
    console.log(this._text + ' process (' + time + ')');
    this.processChildren(time,prev);
  }
  
  this.enter = function() {
    console.log(this._text + ' enter');
    this.enterChildren();
  }
  
  //----------
  
  this.leave = function() {
    console.log(this._text + ' leave');
    this.leaveChildren();
  }
  
  //----------
  
  

}
