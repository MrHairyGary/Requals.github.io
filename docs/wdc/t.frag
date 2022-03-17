#ifdef GL_ES
precision mediump float;
#endif
                                            
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;


void main() 
{
  vec2 nc = gl_FragCoord.xy/u_resolution;
  vec2 ac = nc;
  gl_FragColor = vec4(nc.x+u_time,nc.y-u_time,nc.z,1.0)
}
