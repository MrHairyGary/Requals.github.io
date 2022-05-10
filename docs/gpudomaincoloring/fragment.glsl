#if_def GL_ES
precision mediump float
#endif
uniform vec2 u_resolution;
uniform float u_time;

void main() {
 vec2 o = gl_fragCoord.xy/u_resolution;
 gl_fragColor = vec4(o.x,o.y,0.0,1.0);
}
