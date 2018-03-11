import { Vector, } from 'p5';

// import { getX, getY, numSides, radius, rotation, segments, } from './data';

const { cos, PI, pow, round, floor, } = Math;
const range = (x = 0) => [ ...Array(x).keys(), ];

export const isEven = n => n % 2 === 0;
export const xEven = n => !isEven(n);
export const theta = n => (2 * PI) / n;
export const dirVect = n => Vector.fromAngle(theta(n));
export const withDir = angle => Vector.fromAngle(angle);
export const add = v0 => v1 => Vector.add(v0,v1);
export const scale = fact => v => v.mult(fact);
export const bInvoke = (v, fn) => fn(v);

// export const scaleRadius = poly => vec => vec.mult(radius(poly));
// export const applyVect = poly => vec =>
//  [ scaleRadius(poly), addCenter(poly), ].reduce((v, fn) => fn(v),vec);
//  
// export const circumNorm = poly => Vector.fromAngle(rotation(poly));
// export const circumVector = poly => circumNorm(poly).mult(radius(poly));

export const apoFactor = n => cos(PI / n);
export const apoOffset = n => theta(n) / 2;
export const rotate = delta => v => v.copy().rotate(delta);

// export const apoDir = poly => rotation(poly) + apoOffset(poly);
// export const apoMag = poly => radius(poly) * apoFactor(poly);
export const apoNorm = n => Vector.fromAngle(apoOffset(n)).mult(apoFactor(n));

// export const apoVector = poly => apoNorm(poly).mult(apoMag(poly));

// 
