#ifdef GL_ES
precision mediump float;
#endif
                                            
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

float isgttwo(in float t){
  return 0.5+sign(t-2.0)/2.0
}
void main() {
  vec2 nc = gl_FragCoord.xy/u_resolution;
  gl_FragColor = vec4(0.0,0.0,0.0,isgttwo(nc.x*4.0));
}
