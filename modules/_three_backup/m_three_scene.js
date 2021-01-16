
MThreeScene = function() {
  KModule.call(this);
  
  this._scene = 0;

  //----------
  
  this.init = function() {
    this._scene = new THREE.Scene();
    //this._scene.fog = new THREE.Fog( 0xffffff, 1, 10000 );
    this.initDefault();
  }
  
  //----------
  
  this.process = function(time,prev) {
    this.checkEnterLeave(time,prev);  
    if (this.inside(time)) { 
      kode_current_scene = this._scene;
      this.processDefault(time,prev);
    }
  }

}
