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








app.ticker.add((delta) => {
    count += 0.1;

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

