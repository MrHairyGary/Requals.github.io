precision mediump float;

uniform vec2 mouse;
uniform vec2 resolution;
uniform float time;

void main() {
  nc = gl_FragCoord.xy/resolution
  gl_FragColor = sin(nc.x)+cos(nc.y+time)
}
