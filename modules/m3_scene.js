
M3Scene = function() {
  KModule.call(this);

  this._scene    = null;

  //----------
  
  this.init = function() {
    this._scene = new THREE.Scene();
    KODE_THREE_SCENE = this._scene;
    this.initChildren();
  }
  
  //----------
  
  this.process = function(time,prev) {
    KODE_THREE_SCENE = this._scene;
    this.processChildren(time,prev);
  }
  
  
}
