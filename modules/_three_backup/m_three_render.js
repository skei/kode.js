
MThreeRender = function() {
  KModule.call(this);
  
  //----------
  
  this.process = function(time,prev) {
    this.checkEnterLeave(time,prev);  
    if (this.inside(time)) { 
    
      // hack
      kode_current_camera.lookAt( kode_current_scene.position );
      kode_renderer.clear(false,true,false); // clear depth buffer
      kode_renderer.render(kode_current_scene,kode_current_camera);
      this.processDefault(time,prev);
    }
  }

}
