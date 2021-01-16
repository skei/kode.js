
/*
  process children if time is AFTER the segment
  (does weird things to 'time' because of hierarchy and offsets)
*/

//----------------------------------------------------------------------

MTimeAfter = function() {
  KModule.call(this);
  
  //----------
  
  this.process = function(time,prev) {
    //this.checkEnterLeave(time,prev);  
    if (this.after(time)) { 
      this.processDefault(time,prev);
    }
  }

}
