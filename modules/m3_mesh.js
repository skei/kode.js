
M3Mesh = function() {
  KModule.call(this);

  this._mesh = null;

  //----------
  
  this.init = function() {
    this._mesh = new THREE.Mesh(KODE_THREE_GEOMETRY,KODE_THREE_MATERIAL);
    KODE_THREE_SCENE.add(this._mesh);
    KODE_THREE_MESH = this._mesh;
    this.initChildren();
  }
  
  //----------
  
  this.process = function(time,prev) {
    KODE_THREE_MESH = this._mesh;
    this.processChildren(time,prev);
  }
  
  
}
