
// FS : FullScreen (Quad)

MThreeFSShader = function(vs,fs,speed,offset) {
  KModule.call(this);
  
  this._vs = vs;
  this._fs = fs;
  
  this._speed  = speed;//1;
  this._offset = offset;//0;
  this._mouseX = 0.5;
  this._mouseY = 0.5;
  
	this._camera = 0;
  this._scene = 0;
  this._uniforms = [];  

  //----------
  
  this.init = function() {
    this._camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );
    this._scene = new THREE.Scene();
    this._uniforms = {
      time:       { type: "f",  value: 1.0 },
      mouse:      { type: "v2", value: new THREE.Vector2( this._mouseX, this._mouseY ) },
      resolution: { type: "v2", value: new THREE.Vector2(K_WIDTH,K_HEIGHT) }
    };
    var material = new THREE.ShaderMaterial( {
      uniforms:       this._uniforms,
      vertexShader:   this._vs,
      fragmentShader: this._fs
    });
    var object = new THREE.Mesh( new THREE.PlaneGeometry(2,2), material );
    this._scene.add(object);    
    this.initDefault();
  }
  
  //----------
  
  this.process = function(time,prev) {
    this.checkEnterLeave(time,prev);  
    if (this.inside(time)) { 
      this._uniforms.time.value = ( time * this._speed ) + this._offset;
      kode_renderer.render(this._scene,this._camera);
      this.processDefault(time,prev);
    }
  }

}
