
/*
  to help us visualize variables/properties
  http://www.worldwidewhat.net/2011/06/draw-a-line-graph-using-html5-canvas/
*/

/*
  TODO: fix this!
  stationary buffer, mowing (w/wraparound) cursor
*/

//var KODE_GRAPH_DATA_LENGTH = 256;

//----------

KGraph = function(dom,len,w,h) {

  this._canvas  = document.getElementById(dom);
  this._canvas.width = w;//KODE_WIDTH;
  this._canvas.height = h;
  
  this._len = len;

  this._data = [];
  for (var i=0; i<this._len; i++) this._data.push(0);
  
  this._xpad    = 0;
  this._ypad    = 0;
  
  //------------------------------
  // helpers
  //------------------------------
  
  this.getMaxY = function() {
    var max = 0;
    for (var i=0; i<this._data.length; i++) {
      if (this._data[i] > max) {
        max = this._data[i];
      }
    }
    //max += 10 - max % 10;
    return max;
  }
  
  //----------
  
  this.getXPixel = function(val) {
    return ((this._canvas.width - this._xpad) / this._data.length) * val + (this._xpad * 1.5);
  }

  //----------
  
  this.getYPixel = function(val) {
    return this._canvas.height - (((this._canvas.height - this._ypad) / this.getMaxY()) * val) - this._ypad;
  }  
  
  //------------------------------
  //
  //------------------------------
  
  this.append = function(val) {
    //while (this._data.length >= this._len) {
      this._data.shift();
    //}
    this._data.push( val );
  }
  
  //----------
  
  this.draw = function() {
    var c = this._canvas.getContext('2d');
    c.clearRect(0,0,this._canvas.width,this._canvas.height)    
    c.lineWidth = 1;
    c.strokeStyle = '#333';
    //c.font = 'italic 8pt sans-serif';
    //c.textAlign = "center";
    c.strokeStyle = '#000';
    c.beginPath();
    c.moveTo(this.getXPixel(0), this.getYPixel(this._data[0]));
    for (var i=1; i<this._data.length; i++) {
      c.lineTo(this.getXPixel(i), this.getYPixel(this._data[i]));
    }
    c.stroke();
  }
}