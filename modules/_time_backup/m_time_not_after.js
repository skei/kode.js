
/*
  process children if time is NOT AFTER the segment
  (before or inside)
  (does weird things to 'time' because of hierarchy and offsets)
*/

//----------------------------------------------------------------------

MTimeNotAfter = function() {
  KModule.call(this);
  
  //----------
  
  this.process = function(time,prev) {
    //this.checkEnterLeave(time,prev);  
    if (!this.after(time)) { 
      this.processDefault(time,prev);
    }
  }

}
