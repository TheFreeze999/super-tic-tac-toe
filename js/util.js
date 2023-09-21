export function round(n, toTheNearest, fn = "round") {
    return Math[fn](n / toTheNearest) * toTheNearest;
}
var Vector;
(function (Vector) {
    function match(v, w) {
        return v.x === w.x && v.y === w.y;
    }
    Vector.match = match;
})(Vector || (Vector = {}));
export { Vector };
