let app = new PIXI.Application({
    width: 1600,
    height: 547
});

document.body.appendChild(app.view);


let sprite = PIXI.Sprite.from('./img/background.jpg');
app.stage.addChild(sprite);

//SMOKE shader

const fragWater = `

#define TAU 6.28318530718
#define MAX_ITER 5

uniform vec3 iResolution;
uniform float iTime;


void main( ) 
{
	float time = iTime * .5+23.0;
    // uv should be the 0-1 uv of texture...
	vec2 uv = gl_FragCoord.xy  / iResolution.xy;
    
#ifdef SHOW_TILING
	vec2 p = mod(uv*TAU*2.0, TAU)-250.0;
#else
    vec2 p = mod(uv*TAU, TAU)-250.0;
#endif
	vec2 i = vec2(p);
	float c = 1.0;
	float inten = .005;

	for (int n = 0; n < MAX_ITER; n++) 
	{
		float t = time * (1.0 - (3.5 / float(n+1)));
		i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));
		c += 1.0/length(vec2(p.x / (sin(i.x+t)/inten),p.y / (cos(i.y+t)/inten)));
	}
	c /= float(MAX_ITER);
	c = 1.17-pow(c, 1.4);
	vec3 colour = vec3(pow(abs(c), 14.0));
    colour = clamp(colour + vec3(0.0, 0.12, 0.1), 0.0, 3.0);
    

	#ifdef SHOW_TILING
	// Flash tile borders...
	vec2 pixel = 2.0 / iResolution.xy;
	uv *= 2.0;

	float f = floor(mod(iTime*.5, 2.0)); 	// Flash value.
	vec2 first = step(pixel, uv) * f;		   	// Rule out first screen pixels and flash.
	uv  = step(fract(uv), pixel);				// Add one line of pixels per tile.
	colour = mix(colour, vec3(1.0, 1.0, 0.0), (uv.x + uv.y) * first.x * first.y); // Yellow line
	
	#endif
	gl_FragColor = vec4(colour, 1.0);
}
    
`;

const effectWidth = window.innerWidth;
const effectHeight = window.innerHeight;


var myUniformsWater = {
    iResolution: [effectWidth, effectHeight],
    iTime: 0,
  }

let containerWater = new PIXI.Container();

var causticShader = new PIXI.Filter(undefined, fragWater, myUniformsWater);
causticShader.blendMode = PIXI.BLEND_MODES.SCREEN;
causticShader.alpha =100;

var water = new PIXI.Sprite();
water.width = effectWidth;
water.height = effectHeight;
water.filters = [causticShader];
app.stage.addChild(containerWater);
containerWater.addChild(water);

//++++++++++++++++++++++++++++++++++++++++SMOKE++++++++++++++++++++++++++


app.ticker.add((delta) => {
    causticShader.uniforms.iTime += 0.01;
});