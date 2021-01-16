
var KODE_PREVIOUS_TIME = -1;

//----------------------------------------------------------------------

function demo_start() {
  KODE_DEMO.init();
  KODE_DEMO.process(-1,-1);
  KODE_MUSIC.play();
  demo_loop();
}

//----------           

function demo_loop() {
  var time = KODE_MUSIC.currentTime();
  var len  = KODE_MUSIC.duration();
  if (time >= len) {
    demo_end();
    return;
  }
  KODE_DEMO.process(time,KODE_PREVIOUS_TIME);
  KODE_PREVIOUS_TIME = time;
  window.requestAnimationFrame(demo_loop);
}

//----------

function demo_end() {
}

//----------------------------------------------------------------------

demo_setup();
demo_start();
