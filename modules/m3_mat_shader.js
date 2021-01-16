
M3MatShader = function(uni,vs,fs) {
  KModule.call(this);

  this._material  = null;
  this._uniforms  = uni;
  this._vs        = vs;
  this._fs        = fs;

  //----------
  
  this.init = function() {
    this._material  = new THREE.ShaderMaterial( {
      uniforms:       this._uniforms,
      vertexShader:   this._vs,
      fragmentShader: this._fs
    });
    KODE_THREE_MATERIAL = this._material;
    this.initChildren();
  }
  
  //----------
  
  this.process = function(time,prev) {
    //this._uniforms.time.value = ( time * this._speed ) + this._offset;
    KODE_THREE_MATERIAL = this._material;
    this.processChildren(time,prev);
  }
  
  
}

//----------------------------------------------------------------------

/*

  this._uniforms = [];  
  this._uniforms = {
    time:       { type: "f",  value: 1.0 },
    mouse:      { type: "v2", value: new THREE.Vector2( this._mouseX, this._mouseY ) },
    resolution: { type: "v2", value: new THREE.Vector2(K_WIDTH,K_HEIGHT) }
  
};

*/
