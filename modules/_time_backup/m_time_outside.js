
/*
  same as not inside
  process children if time is OUTSIDE the segment
  (before or afrer)
  (does weird things to 'time' because of hierarchy and offsets)
*/

//----------------------------------------------------------------------

MTimeOutside = MNotInside;

/*

KModule_Outside = function() {
  KModule.call(this);
  
  //----------
  
  this.process = function(time,prev) {
    //this.checkEnterLeave(time,prev);  
    if (!this.inside(time)) { 
      this.processDefault(time,prev);
    }
  }

}

*/