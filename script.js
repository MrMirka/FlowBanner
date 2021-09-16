let app = new PIXI.Application({
    width: 1600,
    height: 547
});

document.body.appendChild(app.view);
let elapsed = 0.0;
let sprite = PIXI.Sprite.from('./img/background.jpg');
let spriteGirl = PIXI.Sprite.from('./img/woman.png');
spriteGirl.x = 910;
app.stage.addChild(sprite);
app.stage.addChild(spriteGirl);
app.ticker.add((delta) => {
    elapsed += delta;
    spriteGirl.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
});