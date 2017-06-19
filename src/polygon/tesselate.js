import { apothem,inscribed, } from './apothem';
import { baseAngle, range, } from './operations';
import { numSides, setX, setY, } from './data';
export const tessVector = poly => apothem(poly).mult(2);

export const nthTess = poly => (n = 0) => tessVector(poly).rotate(n * baseAngle(poly));
export const tessVex = poly => range(numSides(poly)).map(nthTess(poly));
export const tesselate = poly => tessVex(poly).map(v =>
[ setX(v.x),setY(v.y), ].reduce((p,fn) => fn(p), poly));
