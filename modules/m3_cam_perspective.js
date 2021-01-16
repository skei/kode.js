
M3CamPerspective = function(x,y,z) {
  KModule.call(this);

  this._camera = null;
  this,_x = x;
  this,_y = y;
  this,_z = z;

  //----------
  
  this.init = function() {
    this._camera = new THREE.PerspectiveCamera(75,KODE_WIDTH/KODE_HEIGHT,0.1,1000);
    this._camera.position.x = _x;
    this._camera.position.y = _y;
    this._camera.position.z = _z;
    KODE_THREE_CAMERA = this._camera;      
    this.initChildren();
  }
  
  //----------
  
  this.process = function(time,prev) {
    KODE_THREE_CAMERA = this._camera;      
    this.processChildren(time,prev);
  }
  
  
}
