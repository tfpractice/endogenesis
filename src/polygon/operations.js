import { Vector, } from 'p5';
import { getX, getY, numSides, radius, rotation, segments, } from './data';

const { cos, PI, pow, round, floor, } = Math;

// console.log('Vector', Vector);
export const isEven = poly => numSides(poly) % 2 === 0;
export const xEven = poly => !isEven(poly);
export const baseAngle = poly => 2 * PI / numSides(poly);

export const center = poly => new Vector(getX(poly), getY(poly));
export const apoFactor = poly => cos(PI / numSides(poly));
export const apoMag = poly => radius(poly) * apoFactor(poly);
export const apoOffset = poly => baseAngle(poly) / 2;
export const apoDir = poly => rotation(poly) + apoOffset(poly);

export const apoVector = poly => 
   Vector.fromAngle(apoDir(poly)).mult(apoMag(poly));

export const circumVector = poly => 
   Vector.fromAngle(rotation(poly)).mult(radius(poly));

const range = (x = 0) => [ ...Array(x).keys(), ];

// export const applyVector=vec=>poly
export const nthVertex = poly => (n = 0) =>
  circumVector(poly).rotate(n * baseAngle(poly)).add(center(poly));

export const vertices = poly =>
  range(numSides(poly)).map(nthVertex(poly));

export const pointCount = poly => segments(poly) * numSides(poly);
export const lerpFactor = poly => pow(segments(poly), -1);
export const upBound = poly => round((pointCount(poly) - 1) / 2);
export const lowBound = poly => upBound(poly);
export const baseIdx = poly => i => floor(1 / segments(poly));

export const edgePoint = poly => (i) => {
  console.log('(i % segments(poly))', (i % segments(poly)));
  console.log('nthVertex(poly)(baseIdx(poly)(i))', nthVertex(poly)(baseIdx(poly)(i)));
  console.log('nthVertex(poly)(baseIdx(poly)(i) + 1)', nthVertex(poly)(baseIdx(poly)(i) + 1)); 
  console.log(' lerpFactor(poly)', lerpFactor(poly));
  console.log('(i % segments(poly)) * lerpFactor(poly))', (i % segments(poly)) * lerpFactor(poly));
  return Vector.lerp(
    nthVertex(poly)(baseIdx(poly)(i)),
    nthVertex(poly)(baseIdx(poly)(i) + 1),
    ((i % segments(poly)) * lerpFactor(poly))); 
};
    
export const edgePoints = poly =>
      range(numSides(poly) * (segments(poly) + 1)).map(edgePoint(poly));

// ayer.prototype.establishPartitionPoints = function() {
//     for (var i = 0; i < this.polygon.sideCount; i++) {
//         // console.log("display is calling the base object");
//         // console.log(this.polygon);
//         var nextIndex = (i + 1) % this.polygon.sideCount;
//         var tempCenter = this.polygon.center.copy();
//         var tempVertex = this.polygon.vertices[i].copy();
//         var tempNext = this.polygon.vertices[nextIndex].copy();
//         // this.polygon.sideCount[i]
//         for (var j = 0; j < this.pointsPerEdge; j++) {
//             var pointIndex = (this.pointsPerEdge * i) + j;
//             var instanceLerp = j * this.lerpFactor;
//             this.partitionPoints[pointIndex] = new p5.Vector.lerp(tempVertex, tempNext, instanceLerp);
//         };
//     };
// };
