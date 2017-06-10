import { Vector, } from 'p5';
import { numSides, radius, rotation, } from './data';
import { baseAngle, center, range, } from './operations';

export const addCenter = poly => vec => vec.add(center(poly));
export const scaleRadius = poly => vec => vec.mult(radius(poly)); 
export const applyVect = poly => vec =>
 [ scaleRadius(poly), addCenter(poly), ].reduce((v, fn) => fn(v), vec);

export const unit = () => new Vector(1, 0);
export const normal = poly => Vector.fromAngle(rotation(poly));

export const nthNormal = poly => (n = 0) => normal(poly).rotate(n * baseAngle(poly));
export const vectors = poly => range(numSides(poly)).map(nthNormal(poly));
