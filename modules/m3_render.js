
/*
  clears depth buffer and renders scene..
  
  a few global variables needs to be set:
  
  KODE_THREE_RENDERER - M3Renderer
  KODE_THREE_SCENE    - M3Scene
  KODE_THREE_CAMERA   - M3Camera
*/

//----------------------------------------------------------------------

M3Render = function() {
  KModule.call(this);
  
  //----------

  this.process = function(time,prev) {
    KODE_THREE_RENDERER.clear(false,true,false); // clear depth buffer
    KODE_THREE_RENDERER.render(KODE_THREE_SCENE,KODE_THREE_CAMERA);
    this.processChildren(time,prev);
  }
  
}
