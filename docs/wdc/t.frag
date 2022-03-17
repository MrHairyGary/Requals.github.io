#ifdef GL_ES
precision mediump float;
#endif
                                            
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

float isgttwo(t){
  return (sign(t-2)+1)/2
}

void main() {
  vec2 nc = gl_FragCoord.xy/u_resolution;
  gl_FragColor = vec4(0.0,0.0,0.0,isgttwo(nc.x*4.0));
}
