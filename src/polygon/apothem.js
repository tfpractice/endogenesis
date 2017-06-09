// import { Vector, } from 'p5';
// import { getX, getY, numSides, radius, rotation, segments, } from './data';
// import { 
//   nthTick,
//   nthVector,
//   nthVertex,
// tickFactor,
// tickInv,
// tickMod,
// tickPoints,
// tickVex,
// vectors,
// vertices, } from './vectors';
// const { cos, PI, pow, round, floor, } = Math;
// 
// export const range = (x = 1) => [ ...Array(x).keys(), ];
// 
// export const isEven = poly => numSides(poly) % 2 === 0;
// export const xEven = poly => !isEven(poly);
// export const baseAngle = poly => (2 * PI) / numSides(poly);
// 
// export const center = poly => new Vector(getX(poly), getY(poly));
// export const addCenter = poly => vec => vec.add(center(poly));
// export const scaleRadius = poly => vec => vec.mult(radius(poly));
// export const applyVect = poly => vec =>
//  [ scaleRadius(poly), addCenter(poly), ].reduce((v, fn) => fn(v), vec);
// 
// export const apoFactor = poly => cos(PI / numSides(poly));
// export const apoOffset = poly => baseAngle(poly) / 2;
// export const apoDir = poly => rotation(poly) + apoOffset(poly);
// export const apoMag = poly => radius(poly) * apoFactor(poly);
// export const apoNorm = poly => Vector.fromAngle(apoDir(poly));
// export const apoVector = poly => apoNorm(poly).mult(apoMag(poly));
