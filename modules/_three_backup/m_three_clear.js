
MThreeClear = function() {
  KModule.call(this);

  //----------
  
  this.process = function(time,prev) {
    this.checkEnterLeave(time,prev);  
    if (this.inside(time)) { 
      kode_renderer.clear();
      this.processDefault(time,prev);
    }
  }

}
