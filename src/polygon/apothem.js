import { Vector, } from 'p5';
import { numSides, radius, rotation, setRadius, setRotation, } from './data';
import { baseAngle, } from './operations';

// import { getX, getY, numSides, polygon, radius, rotation,
//   segments, setNumSides, setRadius, setRotation, setSegments, setX,setY, }
const { cos, PI, } = Math;

export const apoFactor = poly => cos(PI / numSides(poly));
export const apoOffset = poly => baseAngle(poly) / 2;
export const apoDir = poly => rotation(poly) + apoOffset(poly);
export const apoMag = poly => radius(poly) * apoFactor(poly);
export const apoNorm = poly => Vector.fromAngle(apoDir(poly));
export const apothem = poly => apoNorm(poly).mult(apoMag(poly));
export const inscribed = poly => 
[ setRadius(apoMag(poly)), setRotation(apoDir(poly)), ].reduce((p, fn) => fn(p));

// (getX(poly), getY(poly))
