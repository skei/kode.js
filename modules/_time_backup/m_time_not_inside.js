
/*
  process children if time is NOT INSIDE the segment
  (before or after)
  (does weird things to 'time' because of hierarchy and offsets)
*/

//----------------------------------------------------------------------

MTimeNotInside = function() {
  KModule.call(this);
  
  //----------
  
  this.process = function(time,prev) {
    //this.checkEnterLeave(time,prev);  
    if (!this.inside(time)) { 
      this.processDefault(time,prev);
    }
  }

}
