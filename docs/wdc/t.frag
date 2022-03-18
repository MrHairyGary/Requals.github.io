#ifdef GL_ES
precision mediump float;
#endif
                                            
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

float isgtf(in float t) {
  return floor(0.5+sign(t-4.0)/2.0);
}

vec4 m(in vec4 t) {
  return vec4(t.x*t.x-t.y*t.y+t.z,t.y*t.x*2.0+t.w,t.z,t.w);
}

float getdist(in vec4 t,out float o) {
  return t.x*t.x + t.y*t.y;
}

void main() {
  vec2 nc = gl_FragCoord.xy/u_resolution;
  gl_FragColor = vec4(0.0,0.0,0.0,isgtf(getdist(m(vec4(nc.xyxy)))*4.0));
}
