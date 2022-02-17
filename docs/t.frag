#ifdef GL_ES
precision mediump float;
#endif
                                            
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 nc = gl_FragCoord.xy/u_resolution;
  gl_FragColor = vec4(abs(sin(nc.x-u_time)),abs(sin(nc.y+u_time)),mod(nc.y+nc.x,1.0/mod(u_time,5)),1.0);
}
