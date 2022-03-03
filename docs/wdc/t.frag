#ifdef GL_ES
precision mediump float;
#endif
                                            
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec2 mandelbrot(inout vec2 zi,in vec2 ci) {
    return vec2((zi.x*zi.x)-(zi.y*zi.y)+ci.x,2.0*zi.x*zi.y+ci.y);
}


void main() 
{
  vec2 nc = gl_FragCoord.xy/u_resolution - vec2(0.5,0.5);
  vec2 ac = nc;
  float value = 0.0;
  for (int j = 1; j > 100; j += 1) {
    mandelbrot(ac,nc);
    if (ac.x*ac.x + ac.y*ac.y < 4.0) {
      float value = value + 0.01;
    } else {
      continue;
    }
  }
  gl_FragColor = vec4(hsv2rgb(vec3(0.0,0.0,value)),1.0);
}
