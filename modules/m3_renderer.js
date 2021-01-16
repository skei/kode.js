
var KODE_THREE_RENDERER = null;

var KODE_THREE_SCENE    = null;
var KODE_THREE_CAMERA   = null;
var KODE_THREE_MATERIAL = null;
var KODE_THREE_MESH     = null;
var KODE_THREE_GEOMETRY = null;

//----------------------------------------------------------------------

M3Renderer = function(dom) {
  KModule.call(this);

  this._dom       = document.getElementById(dom); //dom;
  this._width     = KODE_WIDTH;
  this._height    = KODE_HEIGHT;
  this._renderer  = null;

  //----------
  
  this.init = function() {
    this._renderer = new THREE.WebGLRenderer({antialias:true,alpha:false});
    this._renderer.autoClear = false;
    this._renderer.setSize(this._width,this._height);
    if (this._dom !== null) {
      this._dom.appendChild(this._renderer.domElement);
    }
    KODE_THREE_RENDERER = this._renderer;
    this.initChildren();
  }
  
}
