
/*
  TODO:
  - split: createCamera, selectCamera?
*/

M3CamOrthographics = function(x,y,z) {
  KModule.call(this);

  this._camera = null;
  this,_x = x;
  this,_y = y;
  this,_z = z;

  //----------
  
  this.init = function() {
    this._camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1);
    KODE_THREE_CAMERA = this._camera;      
    this.initChildren();
  }
  
  //----------
  
  this.process = function(time,prev) {
    KODE_THREE_CAMERA = this._camera;      
    this.processChildren(time,prev);
  }
  
  
}
