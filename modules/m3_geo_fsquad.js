
M3GeoFSQuad = function() {
  KModule.call(this);

  this._geometry = null;
  

  //----------
  
  this.init = function() {
    this._geometry = new THREE.PlaneGeometry(2,2);
    KODE_THREE_GEOMETRY = this._geometry;
    this.initChildren();
  }
  
  //----------
  
  this.process = function(time,prev) {
    KODE_THREE_GEOMETRY = this._geometry;
    this.processChildren(time,prev);
  }
  
  
}
