import { Vector, } from 'p5';
import * as p5 from 'p5';
import { numSides, radius, rotation, } from './data';
import { baseAngle, center, range, } from './operations';

const { floor, } = Math;

export const addCenter = poly => vec => vec.add(center(poly));
export const scaleRadius = poly => vec => vec.mult(radius(poly)); 
export const applyVect = poly => vec =>
 [ scaleRadius(poly), addCenter(poly), ].reduce((v, fn) => fn(v), vec);

export const unit = () => new Vector(1, 0);
export const normal = poly => Vector.fromAngle(rotation(poly));
export const radial = poly => applyVect(poly)(normal(poly));

export const circumNorm = poly => Vector.fromAngle(rotation(poly));

export const circumVector = poly => circumNorm(poly).mult(radius(poly));

export const nthNormal = poly => (n = 0) => normal(poly).rotate(n * baseAngle(poly));

export const nthVector = poly => (n = 0) => normal(poly).rotate(n * baseAngle(poly));
export const nthVertex = poly => (n = 0) => applyVect(poly)(nthNormal(poly)(n));

export const vectors = poly => range(numSides(poly)).map(nthVector(poly));
