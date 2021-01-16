
/*
  process children if time is INSIDE the segment
  like the default behaviour.. :-/
*/

//----------------------------------------------------------------------

MTimeInside = function() {
  KModule.call(this);
  
  //----------
  
  this.process = function(time,prev) {
    //this.checkEnterLeave(time,prev);  
    if (this.inside(time)) { 
      this.processDefault(time,prev);
    }
  }

}
