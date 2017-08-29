import p5, { p5sketch } from 'p5';

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
        p.background("#FF0066");

        p.text("Hello world", 50, 50);
    }
});