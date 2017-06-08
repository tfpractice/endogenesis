// import { Vector, } from 'p5';
// import { getX, getY, numSides, radius, rotation, segments, } from './data';
// import { addCenter ,baseAngle, center,circumNorm,range ,scaleRadius, } from './operations';
// import { nthTick,
// 
// // nthVector,
// vectors,
// withTicks, } from 'module';
// 
// export const center = poly => new Vector(getX(poly), getY(poly));
// export const addCenter = poly => vec => vec.add(center(poly));
// export const scaleRadius = poly => vec => vec.mult(radius(poly));
// export const applyVect = poly => vec =>
//  [ scaleRadius(poly), addCenter(poly), ].reduce((v, fn) => fn(v),vec);
//  
// export const nthVector = poly => (n = 0) => circumNorm(poly).rotate(n * baseAngle(poly));
// export const nthVertex = poly => (n = 0) => 
//   nthVector(poly)(n).mult(radius(poly)).add(center(poly));
// 
// // 
// // export const vectors = poly => range(numSides(poly)).map(nthVector(poly));
// 
// export const vertices = poly => vertVex(poly).map(scaleRadius(poly)).map(addCenter(poly));
// 
// // 
// // export const pointCount = poly => segments(poly) * numSides(poly);
// // export const lerpFactor = poly => segments(poly) ? segments(poly) ** -1 : 0;
// // export const upBound = poly => round((pointCount(poly) - 1) / 2);
// // export const lowBound = poly => upBound(poly);
// // export const baseIdx = poly => i => floor(i / segments(poly));
// // export const segMod = poly => i => i ? i % segments(poly) : i;
// // 
// // export const nthTick = poly => n => Vector.lerp(
// //     nthVector(poly)(baseIdx(poly)(n)),
// //     nthVector(poly)(baseIdx(poly)(n) + 1),
// //     ((segMod(poly)(n)) * lerpFactor(poly)));
// //     
// // export const tickPoint = poly => i => applyVect(poly)(nthTick(poly)(i));
// // 
// // export const edgePoint = tickPoint;
// // 
// // export const tickVex = poly => range(pointCount(poly)).map(nthTick(poly)); 
// // export const edgePoints = poly => tickVex(poly).map(applyVect(poly)); 
