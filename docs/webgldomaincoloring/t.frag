#ifdef GL_ES
precision mediump float;
#endif
                                            
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 nc = gl_FragCoord.xy/u_resolution;
  gl_FragColor = vec4(pow(abs(nc.x),nc.y-sin(u_time)),pow(abs(nc.y),nc.x-sin(u_time)),pow(abs(nc.x),nc.y-cos(u_time)),1.0);
}
