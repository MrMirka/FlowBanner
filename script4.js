let app = new PIXI.Application({
    width: 1600,
    height: 547
});
document.body.appendChild(app.view);

let count = 0;

let starAmount = 1000;
let cameraZ = 0;

const ropeLength = 27.6;
const ropeLength2 = 26;
const ropeLength3 = 16.1;
const ropeLength4 = 50.3;
const ropeLength5 = 46;

const palm1lenfth = 61;
const palm2lenfth = 43.4;

const points = [];
const points2 = [];
const points3 = [];
const points4 = [];
const points5 = [];
const palmPoints = [];
const palmPoints2 = [];



let sprite = PIXI.Sprite.from('./img/background.jpg');
app.stage.addChild(sprite);

//MaskCar
let maskCar = PIXI.Sprite.from('./img/mask_car.png');
maskCar.position.set(1007,188);


//CAR LIGTH
let carLigth = PIXI.Sprite.from('./img/car_ligth.png');
carLigth.position.set(1238,153);
carLigth.blendMode = PIXI.BLEND_MODES.SCREEN;
app.stage.addChild(carLigth);

//app.stage.addChild(maskCar);

for (let i = 0; i <8; i++){
    points3.push(new PIXI.Point(i * ropeLength3,0));
}

const strip3 = new PIXI.SimpleRope(PIXI.Texture.from('./img/hair3.png'), points3);
strip3.x = 1134;
strip3.y = 55;
strip3.rotation = Math.PI*0.5;
app.stage.addChild(strip3);

//PALMS---------------
for (let i = 0; i <8; i++){
    palmPoints.push(new PIXI.Point(i * palm1lenfth,0));
    palmPoints2.push(new PIXI.Point(i * palm2lenfth,0));
}

const palm1 = new PIXI.SimpleRope(PIXI.Texture.from('./img/palm1.png'), palmPoints);
palm1.x = 450;
palm1.y = 421;
palm1.rotation = Math.PI*-0.47;
app.stage.addChild(palm1);

const palm2 = new PIXI.SimpleRope(PIXI.Texture.from('./img/palm2.png'), palmPoints2);
palm2.x = 550;
palm2.y = 385;
palm2.rotation = Math.PI*-0.47;
app.stage.addChild(palm2);

//CAR MSK
const blurFilter2 = new PIXI.filters.BlurFilter();
const carFlark = new PIXI.Graphics();
carFlark.beginFill(0x9DECFE);
carFlark.drawCircle(1070,350,300);
carFlark.endFill();
carFlark.filters = [blurFilter2];
blurFilter2.blur = 1;
carFlark.alpha = 8;
carFlark.blendMode = PIXI.BLEND_MODES.SCREEN;
carFlark.mask = maskCar;
app.stage.addChild(maskCar, carFlark);


let spriteW = PIXI.Sprite.from('./img/woman.png');
spriteW.x = 909;
app.stage.addChild(spriteW);

for (let i = 0; i <8; i++){
    points4.push(new PIXI.Point(i * ropeLength4,0));
}
for (let i = 0; i <8; i++){
    points5.push(new PIXI.Point(i * ropeLength5,0));
}

//GLASS blick
let blickGlass = PIXI.Sprite.from('./img/blick_glasses.png');
blickGlass.position.set(1136, 48);
blickGlass.blendMode = PIXI.BLEND_MODES.SCREEN;
app.stage.addChild(blickGlass);

let blickEarring = PIXI.Sprite.from('./img/blick_earring.png');
blickEarring.position.set(1206, 110);
blickEarring.blendMode = PIXI.BLEND_MODES.SCREEN;
app.stage.addChild(blickEarring);

//JAKET
const strip4 = new PIXI.SimpleRope(PIXI.Texture.from('./img/jaket1.png'), points4);
strip4.x = 1310;
strip4.y = 193;
strip4.rotation = Math.PI*0.5;
app.stage.addChild(strip4);

const strip5 = new PIXI.SimpleRope(PIXI.Texture.from('./img/jaket2.png'), points5);
strip5.x = 1082;
strip5.y = 167;
strip5.rotation = Math.PI*0.5;
//strip5.blendMode = PIXI.BLEND_MODES.SCREEN;
app.stage.addChild(strip5);

//Jacket blick
let blickJacket1 = PIXI.Sprite.from('./img/blick_jacket.png');
let blickJacket2 = PIXI.Sprite.from('./img/blick_jacket2.png');
blickJacket2.position.set(1222, 207);
blickJacket2.blendMode = PIXI.BLEND_MODES.SCREEN;
app.stage.addChild(blickJacket2);
blickJacket1.position.set(900, 98);
blickJacket1.blendMode = PIXI.BLEND_MODES.SCREEN;
app.stage.addChild(blickJacket1);



//AD points

for (let i = 0; i <8; i++){
    points.push(new PIXI.Point(i * ropeLength,0));
}

for (let i = 0; i <8; i++){
    points2.push(new PIXI.Point(i * ropeLength2,0));
}
//-------------------------------

const strip = new PIXI.SimpleRope(PIXI.Texture.from('./img/hair.png'), points);
strip.x = 1270;
strip.y = 13;
strip.rotation = Math.PI*0.5;
app.stage.addChild(strip);


const strip2 = new PIXI.SimpleRope(PIXI.Texture.from('./img/hair2.png'), points);
strip2.x = 1270;
strip2.y = 12;
strip2.rotation = 2.8;
app.stage.addChild(strip2);


let blickHair1 = PIXI.Sprite.from('./img/blick_hair1.png');
blickHair1.position.set(1205, 5);
blickHair1.blendMode = PIXI.BLEND_MODES.SCREEN;
app.stage.addChild(blickHair1);


//FONTS letter glass
let openO = PIXI.Sprite.from('./img/open_O.png');
openO.position.set(1510, 46);
openO.blendMode = PIXI.BLEND_MODES.MULTIPLY;
app.stage.addChild(openO);

let summer = PIXI.Sprite.from('./img/blick_summer.png');
summer.position.set(569, 109);
summer.blendMode = PIXI.BLEND_MODES.ADD;
app.stage.addChild(summer);




//app.stage.addChild(spriteH);

const g = new PIXI.Graphics();
g.x = strip.x;
g.y = strip.y;
app.stage.addChild(g);

//Create stars

const starTexture = new PIXI.Texture.from('/img/star.png');
const stars = [];
const blurFilter = new PIXI.filters.BlurFilter();




for(let i=0; i<starAmount; i++){
    const star = {
        sprite: new PIXI.Sprite(starTexture),
        z:0,
        x:0,
        y:0,
        dir:Math.random(),
        scale:Math.random(),
        blur: Math.random()
    };
    star.sprite.anchor.x = 4;
    star.sprite.anchor.y = 5;
    star.sprite.alpha = 0.1;
    randomizeStar(star, true);
    app.stage.addChild(star.sprite);
    stars.push(star);
}

function randomizeStar(star, initial) {
    const deg = Math.random() * Math.PI * 2;
    const distance = Math.random() * app.renderer.screen.width;
    star.sprite.x = Math.cos(deg) * distance+1;
    star.sprite.y = Math.sin(deg) * distance+1;
}

  //STARS
  stars.forEach((item) => {
    item.sprite.alpha = Math.random()*.7;
    item.sprite.scale.set(item.scale);

});

//MASK
let mask = PIXI.Sprite.from('./img/mask_floor.png');
mask.position.set(267,350);
app.stage.addChild(mask);





//CIrcle

const circle = new PIXI.Graphics();
circle.beginFill(0xE520BA);
circle.drawCircle(470,350,100);
circle.endFill();
circle.filters = [blurFilter];
blurFilter.blur = 2;
circle.alpha = 0.2;
circle.blendMode = PIXI.BLEND_MODES.SCREEN;
circle.mask = mask;
app.stage.addChild(mask, circle);



//SMOKE shader
function hexColorToVec3(hexString) {
	//check if valid hex value
  if (/^#([0-9A-F]{3}){1,2}$/i.test(hexString)) {
		// Extracted from: https://github.com/mrdoob/three.js/blob/dev/src/math/Color.js#L229

		const match = /^\#([A-Fa-f0-9]+)$/.exec(hexString);

		const hex = match[1];
		const size = hex.length;

		if ( size === 3 ) {

			// #ff0
			const output = [
				parseInt( hex.charAt( 0 ) + hex.charAt( 0 ), 16 ) / 255,
				parseInt( hex.charAt( 1 ) + hex.charAt( 1 ), 16 ) / 255,
				parseInt( hex.charAt( 2 ) + hex.charAt( 2 ), 16 ) / 255,
			];

			return output;

		} else if ( size === 6 ) {

			// #ff0000
			const output = [
				parseInt( hex.charAt( 0 ) + hex.charAt( 1 ), 16 ) / 255,
				parseInt( hex.charAt( 2 ) + hex.charAt( 3 ), 16 ) / 255,
				parseInt( hex.charAt( 4 ) + hex.charAt( 5 ), 16 ) / 255,
			];

			return output;

		}

	} else {
		throw new Error('The passed hex color is not valid.');
	}
}
const frag = `
// Original fragment shader extracted from:
// https://gist.github.com/OmarShehata/9650b8ee419db3696ce555f10712d499
precision mediump float;
// Cant be named 'resolution' since it's a default uniform
// provided by PIXI.Filter(), see: https://pixijs.download/dev/docs/PIXI.Filter.html
// And the PIXI's resolution unifmor is the ratio of screen (CSS) pixels to real pixels.
uniform vec2  dimensions;
uniform float time;
uniform vec2  speed;

// Smoke colors
uniform vec3  smoke1_color_a;
uniform vec3  smoke1_color_b;

uniform vec3  smoke2_color_a;
uniform vec3  smoke2_color_b;

// Used to increase the brightness of the image on transitions.
uniform float brightness; // 0.5 by default.

float rand(vec2 n) {
	// This is just a compounded expression to simulate a random number based on a seed given as n.
	// fract() returns the fractional part of x. This is calculated as x - floor(x).
	// This is like a (x % 1) operation.
	// see more in: https://thebookofshaders.com/10/
	return fract(cos(dot(n, vec2(3, 10))) * 15.5453);
}

float noise(vec2 n) {
	const vec2 d = vec2(0.0, 1.0);
	vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
	return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
}


float fbm(vec2 n) {
	// fbm stands for 'Fractal Brownian Motion',
	// see more in: https://thebookofshaders.com/13/
	// https://en.wikipedia.org/wiki/Fractional_Brownian_motion
	float gain = 0.5;
	// we successively increment the frequencies in regular steps (lacunarity).
	float lacunarity = 2.15; // this is a magic number to generate a little bit of distortion.

	float total = 0.0, amplitude = 0.75;
	for (int i = 0; i < 10; i++) {
		total += noise(n) * amplitude;
		// n += n; // lacunarity, increments 1 octave in each cycle.
		// lacunarity increments frequency exponentially each cycle in a factor
		// to genereta a litle of distortion.
		n *= lacunarity;
		// Decreases the amplitud by half each iteration.
		amplitude *= gain;
	}
	return total;
}

void main() {
	const vec3 c1 = vec3(0.0,0.0,0.150);
	const vec3 c2 = vec3(167. / 255., 93. / 255., 110. / 255.);
	const vec3 c3 = vec3(0.4902, 0.5333, 0.4902);
	const vec3 c4 = vec3(0.370,0.254,0.240);
	const vec3 c5 = vec3(0.157,0.317,0.320);
	const vec3 c6 = vec3(0.8, 0.3569, 0.3569);

	// vec2 p = gl_FragCoord.xy * 3.0 / dimensions.xx;
	vec2 p = gl_FragCoord.xy * 2.3 / dimensions.xx;

	float q = fbm(p - time * 0.1);

	vec2 r = vec2(fbm(p + q + time * speed.x - p.x - p.y), fbm(p + q - time * speed.y));

	vec3 c = mix(c1, c2, fbm(p + r)) + mix(c3, c4, r.x) - mix(c5, c6, r.y);

	// Just a cyclic number to multiply with the c color.
	// the name of this variable has nothing to do with the alpha-premultiply algorithm.
	// I'm no longer passing the shift as an uniform since I need magic numbers.
	//float premultiplier = 1.0 - sin(shift * gl_FragCoord.y / dimensions.y);
	float premultiplier = 1.0 - sin(0.5 * gl_FragCoord.y / dimensions.y);
	vec3 endColor = c * premultiplier;

  gl_FragColor = vec4(endColor * brightness, 1.5);
	// Uncomment the next line to debug colors and smoke effect without brightness parameters.
  gl_FragColor = vec4(endColor * 0.5, 0.5);

	// To produce the volumetric fog effect.
	// https://developer.nvidia.com/gpugems/gpugems3/part-ii-light-and-shadows/chapter-13-volumetric-light-scattering-post-process
	vec2 st = gl_FragCoord.xy/dimensions.xy;
	vec2 pos = vec2(0.15,0.1);

	// when brightness <= 0.3, smoothstep returns: 0.0
	// when brightness in (0.3, 2.0) range, smoothstep returns: hermite interpolation between 0 and 1.
	// when brightness >= 2.0, smoothstep returns: 1.0
	// The brightnessSlider is used to make all the mask clear during transitions (hide the center circle from the mask).
	float brightnessSlider = smoothstep( 0.9, 0.0, brightness );
	float aperture = mix(0.9, -0.5, brightnessSlider);
	float centerMask = smoothstep( aperture, .56, distance(st, vec2(-0.1, 0.)) ) * r.x;
	// Uncomment next line and comment the last one to debug only mask.
	gl_FragColor = vec4(c * cos(0.5 * gl_FragCoord.y /dimensions.y), 1.0);
	 gl_FragColor.xyz *= centerMask;
}
`;

const width = 1600;
const height = 547;

/*
var imgBg = new PIXI.Sprite.from('./img/pixi_v3_github-pad.png');
imgBg.width = 500;
imgBg.height = 500;
app.stage.addChild(imgBg);
*/

var myUniforms = {
    dimensions: [width, height],
    time: 0,
  
    // TODO: Decide wether remove 'speed' uniform or not.
    // This multiplies the frequency in the fbm functions.
    speed: [0.4, 0.0], // speed in each component.
  
    // Smoke colors
    smoke1_color_a: hexColorToVec3('#B55DB4'),
    smoke1_color_b: hexColorToVec3('#0F2C30'),
  
    smoke2_color_a: hexColorToVec3('#0F2C30'),
    smoke2_color_b: hexColorToVec3('#0F2C30'),
  
    // Used to increase the brightness of the image on transitions.
    brightness: 0.0,
  }

let container = new PIXI.Container();
var smokeShader = new PIXI.Filter(undefined, frag, myUniforms);
smokeShader.uniforms.dimensions = [width, 720];
smokeShader.uniforms.time = 0;
smokeShader.uniforms.speed = [0.4, 0.7];
smokeShader.uniforms.brightness = 0.5;
smokeShader.uniforms.smoke1_color_a =   [1, 0.5, 0];
smokeShader.uniforms.smoke1_color_b = [1, 0, 0];
smokeShader.uniforms.smoke2_color_a =  [1, 1, 0];
smokeShader.uniforms.smoke2_color_b =  [1, 0.5, 0];
smokeShader.blendMode = PIXI.BLEND_MODES.ADD;
smokeShader.alpha = 0.3;
var bg = new PIXI.Sprite();
bg.width = width;
bg.height = height;
//bg.blendMode = PIXI.BLEND_MODES.SCREEN;
bg.filters = [smokeShader];
app.stage.addChild(container);
container.addChild(bg);
//bg.scale.x = 1
//container.scale.set(1)






//++++++++++++++++++++++++++++++++++++++++SMOKE++++++++++++++++++++++++++



app.ticker.add((delta) => {
    count += 0.1;

    smokeShader.uniforms.time += 0.01;
    


    // make the snake
    for (let i = 3; i < points.length; i++) {
        points[i].y = Math.sin((i * 0.5) + count) * 3.5;
        points[i].x = i * ropeLength + Math.cos((i * 0.3) + count) * 2.2;
    }

    for (let i = 3; i < points2.length; i++) {
        points2[i].y = Math.sin((i * 0.5) + count) * 3.5;
        points2[i].x = i * ropeLength2 + Math.cos((i * 0.3) + count) * 2.2;
    }

    for (let i = 3; i < points3.length; i++) {
        points3[i].y = Math.sin((i * 0.5) + count) * 2.5;
        points3[i].x = i * ropeLength3 + Math.cos((i * 0.3) + count) * 1.1;
    }

    for (let i = 5; i < points4.length; i++) {
        points4[i].y = Math.sin((i * 0.5) + count) * 1.5;
        points4[i].x = i * ropeLength4 + Math.cos((i * 0.3) + count) * .3;
    }
    for (let i = 5; i < points5.length; i++) {
        points5[i].y = Math.sin((i * 0.5) + count) * 2.2;
        points5[i].x = i * ropeLength5 + Math.cos((i * 0.3) + count) * .3;
    }

    //PALM
    for (let i = 2; i < palmPoints.length; i++) {
        palmPoints[i].y = Math.sin((i * .6) + count) * 0.9;
        palmPoints[i].x = i * palm1lenfth + Math.cos((i * 1.3) + count/20) * 0.01;
    }

    for (let i = 2; i < palmPoints2.length; i++) {
        palmPoints2[i].y = Math.sin((i * 3.5) + count) * 0.7;
        palmPoints2[i].x = i * palm2lenfth + Math.cos((i * .8) + count) * 0.1;
    }


    //MASK FLOOR
    circle.x += +0.9;
    circle.y = Math.cos(count);


    //+++++++++++++++++++++++++BLICKS++++++++++++++++++++++++++++++
    blickGlass.alpha = Math.sin(count*0.7)*0.7;
    blickJacket1.alpha = Math.sin(count*0.7)*0.5;
    blickJacket2.alpha = Math.sin(count*0.7)*0.6;
    blickHair1.alpha = Math.sin(count*0.3)*0.4;
    blickEarring.alpha = Math.sin(count*0.3)*0.4;
    carLigth.alpha = Math.abs(Math.cos(count*0.3)*0.5)*1.2;
    

    carFlark.alpha = -Math.sin(count*0.3)*0.2;
    carFlark.x = -Math.sin(count * 0.3)*750;
    carFlark.y = Math.sin(count * 0.6)*210;
    //blurFilter2.blur = Math.sin(count*5.3)*2.9;

    //+++++++++++++++++++++++FONTS++++++++++++++++++++++++++++++++++
    openO.alpha = Math.sin(count*2.3)*1.4/Math.sin(delta);
    summer.alpha = Math.sin(count*5.3)*.8/Math.sin(delta);
    
    
    stars.forEach((item, index) => {
       
      
        if(getDirection(item)){
            item.sprite.y += -(Math.random()* app.renderer.screen.width/1000) * index/1000 ;
            item.sprite.x += (Math.cos(count))*2.3 - (2 * Math.sin(delta));
        } else{
            item.sprite.y += (Math.random() * app.renderer.screen.width/1000) * index/1210 ;
            item.sprite.x += (Math.cos(count) * 3.3);
        }
        
        
       
    });
    


});

function getDirection(item){
    if(item.dir > 0.5){
        return false;
    }else{
        return true
    }
}


function renderPoints() {
    g.clear();

    g.lineStyle(2, 0xffc2c2);
    g.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
        g.lineTo(points[i].x, points[i].y);
    }

    for (let i = 1; i < points.length; i++) {
        g.beginFill(0xff0022);
        g.drawCircle(points[i].x, points[i].y, 10);
        g.endFill();
    }
}

