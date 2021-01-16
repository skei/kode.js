
//----------------------------------------------------------------------
// modules
//----------------------------------------------------------------------

demo.js
  KODE_MUSIC
  KODE_DEMO
  demo_setup()
  
//----------

KDemo()

KGraph(dom,len,w,h)
  append(val)
  draw()
  
k_main.js
  demo_start()
  demo_loop()
  demo_end()
  
KModule()
  append(position,duration,module)
  add(position,duration,module)
  up()
  push()
  pop()
  inside(time)
  initChild(child)
  processChild(child,time,prev)
  initChildren()
  processChildren(time,prev)
  enterChildren(time,prev)
  leaveChildren(time,prev)
  init()
  process(time,prev)
  enter(time,last)
  leave(time,last)
  
KMusic(src)
  play()
  stop()
  currentTime()
  duration()
  
k_utils.js
  window.requestAnimationFrame()
  KInterpolate(v1,v2,d)
  KTrace(txt)
  PI2
  
//----------------------------------------------------------------------
// modules
//----------------------------------------------------------------------

// helpers

MDebug()
MLogTime(text)
MNoop()

// time

MCallback(init,process,enter,leave)
MInterval(speed,offset)
MLoop(time,speed)

MConst(object,property,value)
MCosine(object,property,minval,maxval,speed,offset)
MCurve(object,property,startval,endval,shape)
MLfo(object,property,type,speed,offset)
MLinear(object,property,startval,endval)
MPattern(object,property,pattern)

// children

MCycle()
MInit()
MProcess()

MCondition(object,property,value)
MRepeat(object,property,count,startval,addval)

// three.js

M3CamOrthographics(x,y,z)
M3CamPerspective(x,y,z)
M3Clear()
M3GeoCube()
M3GeoFSQuad()
M3MatMeshNormal()
M3MatShader(uni,vs,fs)
M3Mesh()
M3Render()
M3Renderer(dom)
M3Scene()

//----------------------------------------------------------------------
// optimizations
//----------------------------------------------------------------------

https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/
http://www.w3.org/wiki/JavaScript_best_practices

One of the most common mistake is to read the length attribute of an array at every iteration:
var names = ['George','Ringo','Paul','John'];
for (var i=0; i<names.length; i++){
  doSomeThingWith(names[i]);
}

> will jit take care of that?

//----------------------------------------------------------------------
// ideas/thoughts
//----------------------------------------------------------------------

* time is always positive? we got rid of those before/after modules,
  and time is related to parent time.. we can only be active if the
  parent is active, so only positive time ..
  
  meaning.. we can have an 'init' phase, with time=-1, prev=-1
  or something like that.. after this, we sync to the music time as
  usual, meaning only positive time..
  
  and init doesn't check times..
  a container with negative duration, is skipped, children ignored
  if we have all init stuff in there..

* MRandom(speed)
  - process one of children randomly
  
* MRandom(object,property,min,max)
  - set property to random value
  
  ? interval + random.. steped random changes..
    what if we want o smoothly change the value?
    - we could trick the lfo into something..
    - linear, interpolate between values..
    - (i already miss the simplicity of RC filter/curves...)
      - investigate..
  
  
* 'reset' function <- enter..
  'enter' in segments, calls 'reset' in module/graph..
  
? spilt module/segment.. segment types..
  same graph in multiple segments..
  (MReference)
- [editor] icon for segment-types..
  
//----------

todo:

* procedural
  - bitmap
  - mesh/geometry

//----------------------------------------------------------------------
//
//----------------------------------------------------------------------

