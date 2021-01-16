
MThreeColor = function(color,opacity) {
  KModule.call(this);
  
  this._color     = color;    // 0xff00ff,
  this._opacity   = opacity;  // 1
  
	this._camera    = null;
  this._material  = null;
  this._scene     = null;
  

  //----------
  
  this.init = function() {
    this._camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );
    this._material = new THREE.MeshBasicMaterial( {
      color: this._color,
      opacity: this._opacity,
      transparent: true
    } );
    this._scene = new THREE.Scene();
    var object = new THREE.Mesh(new THREE.PlaneGeometry(2,2),this._material);
    this._scene.add(object);
    this.initDefault();
  }
  
  //----------
  
  this.process = function(time,prev) {
    this.checkEnterLeave(time,prev);  
    if (this.inside(time)) { 
      kode_renderer.render(this._scene,this._camera);
      this.processDefault(time,prev);
    }
  }

}
