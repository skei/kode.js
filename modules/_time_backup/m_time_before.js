
/*
  process children if time is BEFORE the segment
  (does weird things to 'time' because of hierarchy and offsets)
*/

//----------------------------------------------------------------------

MTimeBefore = function() {
  KModule.call(this);
  
  //----------
  
  this.process = function(time,prev) {
    //this.checkEnterLeave(time,prev);  
    if (this.before(time)) { 
      this.processDefault(time,prev);
    }
  }

}
