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
export const lerpFactor = poly => segments(poly) ? segments(poly) ** -1 : 0;

// pow(segments(poly), -1);
export const upBound = poly => round((pointCount(poly) - 1) / 2);
export const lowBound = poly => upBound(poly);

export const baseIdx = poly => i => floor(i / segments(poly));

export const segMod = poly => i => i ? i % segments(poly) : i;

export const edgePoint = poly => (i) => {
  console.log('i', i);

  // console.log('segMod(poly)(i)', segMod(poly)(i));
  // console.log(' lerpFactor(poly)', lerpFactor(poly));
  // 
  // console.log('segMod(poly)(i) * lerpFactor(poly)', segMod(poly)(i) * lerpFactor(poly));
  // 
  // console.log('nthVertex(i))', nthVertex(poly)(baseIdx(poly)(i)));
  // console.log('nthVertex(i) + 1)', nthVertex(poly)(baseIdx(poly)(i) + 1)); 

  // console.log('(segments(poly) % i) * lerpFactor(poly))', (segments(poly) % i) * lerpFactor(poly));
  // 
  // const res = Vector.lerp(
  //   nthVertex(poly)(baseIdx(poly)(i)),
  //   nthVertex(poly)(baseIdx(poly)(i) + 1),
  //   (segMod(poly)(i) * lerpFactor(poly))); 
  // 
  // console.log('res', res);
  return Vector.lerp(
    nthVertex(poly)(baseIdx(poly)(i)),
    nthVertex(poly)(baseIdx(poly)(i) + 1),
    ((segments(poly) % i) * lerpFactor(poly))); 
};
    
export const edgePoints = poly =>

// segments(poly) ?
 range(pointCount(poly)).map(edgePoint(poly)); 

 // : [];

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
