
//var kode_renderer = new THREE.WebGLRenderer();

var kode_renderer = null;

var kode_current_camera   = null;
var kode_current_scene    = null;
var kode_current_material = null;

//----------------------------------------------------------------------

MThree = function(dom,width,height) {
  KModule.call(this);

  this._dom       = document.getElementById(dom); //dom;
  this._width     = width;
  this._height    = height;

  //----------
  
  this.init = function() {
    kode_renderer = new THREE.WebGLRenderer({antialias:true,alpha:false});
    kode_renderer.autoClear = false;
    kode_renderer.setSize(width,height); // window.innerWidth, window.innerHeight );  
    if (this._dom !== null) {
      this._dom.appendChild( kode_renderer.domElement );
    }
    this.initDefault();
  }
  
}
