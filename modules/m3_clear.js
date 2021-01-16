
M3Clear = function() {
  KModule.call(this);

  //----------
  
  this.process = function(time,prev) {
    KODE_THREE_RENDERER.clear();
    this.processChildren(time,prev);
  }

}
