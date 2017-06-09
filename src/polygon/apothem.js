import { Vector, } from 'p5';
import { numSides, radius, rotation, } from './data';
import { baseAngle, } from './operations';

const { cos, PI, } = Math;

export const apoFactor = poly => cos(PI / numSides(poly));
export const apoOffset = poly => baseAngle(poly) / 2;
export const apoDir = poly => rotation(poly) + apoOffset(poly);
export const apoMag = poly => radius(poly) * apoFactor(poly);
export const apoNorm = poly => Vector.fromAngle(apoDir(poly));
export const apothem = poly => apoNorm(poly).mult(apoMag(poly));
