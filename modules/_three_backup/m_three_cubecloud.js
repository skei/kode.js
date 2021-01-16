
MThreeCubes = function() {
  KModule.call(this);
  
  this._group = 0;;

  //----------
  
  this.init = function() {
    var geometry = new THREE.CubeGeometry( 100, 100, 100 );
    this._group = new THREE.Object3D();
    for ( var i = 0; i < 100; i ++ ) {
      var mesh = new THREE.Mesh(geometry,kode_current_material);
      mesh.position.x = Math.random() * 2000 - 1000;
      mesh.position.y = Math.random() * 2000 - 1000;
      mesh.position.z = Math.random() * 2000 - 1000;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      this._group.add( mesh );
    }
    kode_current_scene.add(this._group);
    this.initDefault();
  }
  
  //----------
  
  this.process = function(time,prev) {
    this.checkEnterLeave(time,prev);  
    if (this.inside(time)) { 
    
      var rx = Math.sin( time * 0.7 ) * 0.5,
          ry = Math.sin( time * 0.3 ) * 0.5,
          rz = Math.sin( time * 0.2 ) * 0.5;
          
      this._group.rotation.x = rx;
      this._group.rotation.y = ry;
      this._group.rotation.z = rz;
      
      //kode_renderer.clear( false, true, false ); // clear depth buffer
      //kode_renderer.render(this._scene,this._camera);
      
      this.processDefault(time,prev);
    }
  }

}
