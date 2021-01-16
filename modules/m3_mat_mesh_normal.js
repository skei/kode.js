
M3MatMeshNormal = function() {
  KModule.call(this);

  this._material = null;

  //----------
  
  this.init = function() {
    this._material = new THREE.MeshNormalMaterial();
    //this._material = new THREE.MeshBasicMaterial({color:0x00ff00});
    //material.opacity = 0.5;
    KODE_THREE_MATERIAL = this._material;
    this.initChildren();
  }
  
  //----------
  
  this.process = function(time,prev) {
    KODE_THREE_MATERIAL = this._material;
    this.processChildren(time,prev);
  }
  
  
}
