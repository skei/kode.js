
MThreeCubes = function() {
  KModule.call(this);
  
  this._container = 0;
  this._camera = 0;
  this._scene = 0;
  this._geometry = 0;
  this._group = 0;;
  

  //----------
  
  this.init = function() {
  
    // camera
    
    this._camera = new THREE.PerspectiveCamera( 60, K_WIDTH/K_HEIGHT, 1, 10000 );
    this._camera.position.z = 500;
    
    // scene
    
    this._scene = new THREE.Scene();
    this._scene.fog = new THREE.Fog( 0xffffff, 1, 10000 );
    
    // material
    
    var material = new THREE.MeshNormalMaterial();
    material.opacity = 0.5;
    
    // geometry
    
    var geometry = new THREE.CubeGeometry( 100, 100, 100 );
    
    // group
    
    this._group = new THREE.Object3D();
    for ( var i = 0; i < 100; i ++ ) {
      var mesh = new THREE.Mesh( geometry, material );
      mesh.position.x = Math.random() * 2000 - 1000;
      mesh.position.y = Math.random() * 2000 - 1000;
      mesh.position.z = Math.random() * 2000 - 1000;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      this._group.add( mesh );
    }
    this._scene.add( this._group );
    
    this.initDefault();
  }
  
  //----------
  
  this.process = function(time,prev) {
    this.checkEnterLeave(time,prev);  
    if (this.inside(time)) { 
      var rx = Math.sin( time * 0.7 ) * 0.5,
          ry = Math.sin( time * 0.3 ) * 0.5,
          rz = Math.sin( time * 0.2 ) * 0.5;
      //camera.position.x += (   mouseX - camera.position.x ) * .05;
      //camera.position.y += ( - mouseY - camera.position.y ) * .05;
      this._camera.lookAt( this._scene.position );
      this._group.rotation.x = rx;
      this._group.rotation.y = ry;
      this._group.rotation.z = rz;
      kode_renderer.clear( false, true, false ); // clear depth buffer
      kode_renderer.render(this._scene,this._camera);
      this.processDefault(time,prev);
    }
  }

}
