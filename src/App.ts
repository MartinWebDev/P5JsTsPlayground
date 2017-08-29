import p5, {
    p5sketch
} from 'p5';

(() => {
    console.log("I think this works");
})();

var p5proj = new p5((p: p5sketch) => {
    var w = 200;
    var h = 200;

    p.setup = function () {
        p.createCanvas(w, h);
    }

    p.draw = function () {
        p.background(150);
        p.background("#FFEEDD");

        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(20);
        p.fill("#333");
        p.noStroke();
        p.text("Hello world" + p.abs(-10).toString(), p.width / 2, p.height / 2);

        p.fill("#EEDDFF");
        p.stroke(0);
        p.rect(10, 10, 10, 10);
    }
});