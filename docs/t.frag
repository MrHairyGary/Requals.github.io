#ifdef GL_ES
precision mediump float;
#endif
                                            
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 nc = gl_FragCoord.xy/u_resolution;
  gl_FragColor = vec4(pow(nc.x,2.0),pow(nc.y,2.0),mod(u_time,1.0),1.0);
}
