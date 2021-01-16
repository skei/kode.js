
M3GeoCube = function() {
  KModule.call(this);

  this._geometry = null;
  

  //----------
  
  this.init = function() {
    this._geometry = new THREE.CubeGeometry(1,1,1);
    KODE_THREE_GEOMETRY = this._geometry;
    this.initChildren();
  }
  
  //----------
  
  this.process = function(time,prev) {
    KODE_THREE_GEOMETRY = this._geometry;
    this.processChildren(time,prev);
  }
  
  
}
