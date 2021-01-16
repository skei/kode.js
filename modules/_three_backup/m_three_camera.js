
MThreeCubes = function() {
  KModule.call(this);
  
  this._camera = 0;

  //----------
  
  this.init = function() {
    this._camera = new THREE.PerspectiveCamera( 60, K_WIDTH/K_HEIGHT, 1, 10000 );
    //this._camera.position.z = 500;
    this.initDefault();
  }
  
  //----------
  
  this.process = function(time,prev) {
    this.checkEnterLeave(time,prev);  
    if (this.inside(time)) { 
      kode_current_camera = this._camera;
      this.processDefault(time,prev);
    }
  }

}
