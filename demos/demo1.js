
var KODE_MUSIC  = new KMusic('music/transparent.ogg');
var KODE_DEMO   = new KDemo();
var graph       = new KGraph('graph',200,KODE_WIDTH,20);

var demo_data   = {
  graph_value : 0
};

//----------------------------------------------------------------------
// callback functions
//----------------------------------------------------------------------

function do_graph(time) {
  //graph.append( KShape(demo_data.graph_value,0.25) );
  graph.append( demo_data.graph_value );
  graph.draw();
}

//----------

function do_rotate(time) {
  var camera  = KODE_THREE_CAMERA;
  var mesh    = KODE_THREE_MESH;
  camera.lookAt( KODE_THREE_SCENE.position );
  mesh.rotation.x = Math.sin( time * 0.7 );
  mesh.rotation.y = Math.sin( time * 0.3 );
  mesh.rotation.z = Math.sin( time * 0.2 );
}

//----------------------------------------------------------------------
// setup
//----------------------------------------------------------------------

demo_setup = function() {

  var debug     = document.getElementById('debug');
 
  var scene     = new M3Scene();
  var geometry  = new M3GeoCube();
  var material  = new M3MatMeshNormal();
  var mesh      = new M3Mesh(); // (geometry,material)
  var camera    = new M3CamPerspective(0,0,2);
  
  //----------
  
  var fx        = new KModule();
  var fx_init   = new MInit();
  var fx_proc   = new KModule();
  var fx_debug  = new KModule();
  var lfos      = new KModule();
  
  //----------
  
  lfos
    .add( 0, 4, new MLfo(demo_data,'graph_value',M_LFO_SIN,1,0) )
    .add( 4, 4, new MLfo(demo_data,'graph_value',M_LFO_TRI,1,0) )
    .add( 8, 4, new MLfo(demo_data,'graph_value',M_LFO_SQU,1,0) )
    .add( 12,4, new MLfo(demo_data,'graph_value',M_LFO_PH, 1,0) )
    .add( 16,4, new MLfo(demo_data,'graph_value',M_LFO_SAW,1,0) )
    .add( 20,4, new MLfo(demo_data,'graph_value',M_LFO_RND,1,0) );
  
  //----------

  fx_init
    // none of these have process
    .add( 0,0, new M3Renderer('demo') )
    .add( 0,0, scene)
    .add( 0,0, geometry)
    .add( 0,0, material)
    .add( 0,0, mesh)
    .add( 0,0, camera);
    
  //-----
      
  fx_proc
    .add( 0,0, new M3Clear() )
    .add( 0,0, new MCallback(0,do_rotate) )
    .add( 0,0, new M3Render() );
    
  //-----
  
  fx_debug
  
    // loop, lfos
  
    .append(  0,0, new MLoop(12,2))
      .add(0,0,new MReference(lfos))
    .up()
    
    // update value, redraw graph
    
    .add( 0,0, new MCallback(0,do_graph) )
    
    // interval
    
    //.append( 0,0, new MInterval(2,0) )
    //  .add( 0,0, new MLogTime() );
    
    // cycle

    .append( 0,0, new MInterval(2,0) )
      .append( 0,0, new MCycle() )
        .add( 0,0, new MLogTime('1'))
        .add( 0,0, new MLogTime('2'))
        .add( 0,0, new MLogTime('3'))
      .up()
    .up()
    
    // pattern
    
    .append( 0,0, new MInterval(1,0) )
      .add( 0,0, new MPattern(debug,'innerHTML',[0,3,1,2,5,8,13,21,1000,666,'hello!'] ) )
    .up()

    // loop
    
  //----------
  
  fx
    .add(0,0,fx_init)
    .add(0,0,fx_proc)
    .add(0,0,fx_debug);

  //----------

  KODE_DEMO
    .add(0,0,fx);
    
}
