#ifdef GL_ES
precision mediump float;
#endif
                                            
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;




void main() {
  vec2 nc = gl_FragCoord.xy/u_resolution;
  vec2 r = nc-vec2(0.5,0.5)
  vec2 p = nc-vec2(0.5,0.5)
  for(int i = 0; i < 30; ++i){
    p = vec2(p.x*p.x - p.y*p.y + r.x,2*p.x*p.y + r.y)
  }
  gl_FragColor = vec4(p,0.5,0.0)
}
