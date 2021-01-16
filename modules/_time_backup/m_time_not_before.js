
/*
  process children if time is NOT BEFORE the segment
  (inside or after)
  (does weird things to 'time' because of hierarchy and offsets)
*/

//----------------------------------------------------------------------

MTimeNotBefore = function() {
  KModule.call(this);
  
  //----------
  
  this.process = function(time,prev) {
    //this.checkEnterLeave(time,prev);  
    if (!this.before(time)) { 
      this.processDefault(time,prev);
    }
  }

}
