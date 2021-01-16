
MThreeCubes = function() {
  KModule.call(this);
  
  this._material = 0;;
  

  //----------
  
  this.init = function() {
    this._material = new THREE.MeshNormalMaterial();
    //material.opacity = 0.5;
    this.initDefault();
  }
  
  //----------
  
  this.process = function(time,prev) {
    this.checkEnterLeave(time,prev);  
    if (this.inside(time)) { 
      kode_current_material = this._material;
      this.processDefault(time,prev);
    }
  }

}
