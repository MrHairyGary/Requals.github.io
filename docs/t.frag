#ifdef GL_ES
precision mediump float;
#endif
                                            
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

void main() {
  nc = gl_FragCoord.xy/u_resolution;
  gl_FragColor = vec4(sin(nc.x)+cos(nc.y+u_time),0.0,0.0,1.0);
}
