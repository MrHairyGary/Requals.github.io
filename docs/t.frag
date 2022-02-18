#ifdef GL_ES
precision mediump float;
#endif
                                            
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 nc = gl_FragCoord.xy/u_resolution;
  gl_FragColor = vec4(pow(abs(nc.x),nc.y),pow(abs(nc.y),nc.x),pow(abs(nc.x),nc.y),1.0);
}
