let app = new PIXI.Application({
    width: 1600,
    height: 547
});
document.body.appendChild(app.view);

let count = 0;

const ropeLength = 27.6;
const ropeLength2 = 26;
const ropeLength3 = 16.1;
const ropeLength4 = 50.3;
const ropeLength5 = 46;
;
const points = [];
const points2 = [];
const points3 = [];
const points4 = [];
const points5 = [];

let sprite = PIXI.Sprite.from('./img/background.jpg');
app.stage.addChild(sprite);

for (let i = 0; i <8; i++){
    points3.push(new PIXI.Point(i * ropeLength3,0));
}

const strip3 = new PIXI.SimpleRope(PIXI.Texture.from('./img/hair3.png'), points3);
strip3.x = 1134;
strip3.y = 55;
strip3.rotation = Math.PI*0.5;
app.stage.addChild(strip3);



let spriteW = PIXI.Sprite.from('./img/woman.png');
spriteW.x = 909;
app.stage.addChild(spriteW);

for (let i = 0; i <8; i++){
    points4.push(new PIXI.Point(i * ropeLength4,0));
}
for (let i = 0; i <8; i++){
    points5.push(new PIXI.Point(i * ropeLength5,0));
}
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
app.stage.addChild(strip5);



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





//app.stage.addChild(spriteH);

const g = new PIXI.Graphics();
g.x = strip.x;
g.y = strip.y;
app.stage.addChild(g);



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
    
});


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
