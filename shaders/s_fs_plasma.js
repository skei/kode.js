
//----------------------------------------------------------------------
//
//----------------------------------------------------------------------

var vs_plasma = [
  " void main() { ",
  "   gl_Position = vec4(position,1.0); ",
  " } "
].join('\n');

//----------

var fs_plasma = [
  " #ifdef GL_ES ",
  " precision highp float; ",
  " #endif ",
  " uniform vec2 resolution; ",
  " uniform float time; ",
  " uniform vec2 mouse; ", 
  " void main(void) { ",
  "   vec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy; ",
  "   float cossin1 = cos(p.x* 5.0+time) +       sin(p.y*7.0-time)+sin(time); ",
  "   float cossin2 = cos(p.y* 3.0+time) +       sin(p.x*9.0-time)-cos(time); ",
  "   float cossin3 = cos(p.x*11.0+time) + 0.5 * sin(p.y*3.0+time)+cos(time); ",
  "   gl_FragColor = vec4(cossin1*sin(p.x),cossin2*sin(p.y),cossin3*sin(p.x),1.0); ",
  " } "
].join('\n');
  