export function round(n: number, toTheNearest: number, fn: "round" | "floor" | "ceil" = "round") {
	return Math[fn](n / toTheNearest) * toTheNearest;
}

namespace Vector {
	export function match(v: Vector, w: Vector) {
		return v.x === w.x && v.y === w.y;
	}
}

type Vector = { x: number, y: number }

export { Vector };