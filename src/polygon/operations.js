import { Vector, } from 'p5';
import { getX, getY, numSides, radius, rotation, segments, } from './data';

const { cos, PI, pow, round, floor, } = Math;
const range = (x = 0) => [ ...Array(x).keys(), ];

export const isEven = poly => numSides(poly) % 2 === 0;
export const xEven = poly => !isEven(poly);
export const baseAngle = poly => (2 * PI) / numSides(poly);

export const center = poly => new Vector(getX(poly), getY(poly));
export const addCenter = poly => vec => vec.add(center(poly));
export const scaleRadius = poly => vec => vec.mult(radius(poly));
export const applyVect = poly => vec =>
 [ scaleRadius(poly), addCenter(poly), ].reduce((v, fn) => fn(v),vec);
 
export const circumNorm = poly => Vector.fromAngle(rotation(poly));
export const circumVector = poly => circumNorm(poly).mult(radius(poly));

export const apoFactor = poly => cos(PI / numSides(poly));
export const apoOffset = poly => baseAngle(poly) / 2;
export const apoDir = poly => rotation(poly) + apoOffset(poly);
export const apoMag = poly => radius(poly) * apoFactor(poly);
export const apoNorm = poly => Vector.fromAngle(apoDir(poly));
export const apoVector = poly => apoNorm(poly).mult(apoMag(poly));

export const nthVector = poly => (n = 0) => circumNorm(poly).rotate(n * baseAngle(poly));
export const nthVertex = poly => (n = 0) => 
  nthVector(poly)(n).mult(radius(poly)).add(center(poly));

export const vertVex = poly => range(numSides(poly)).map(nthVector(poly));

export const vertices = poly => vertVex(poly).map(scaleRadius(poly)).map(addCenter(poly));

export const pointCount = poly => segments(poly) * numSides(poly);
export const lerpFactor = poly => segments(poly) ? segments(poly) ** -1 : 0;
export const upBound = poly => round((pointCount(poly) - 1) / 2);
export const lowBound = poly => upBound(poly);
export const baseIdx = poly => i => floor(i / segments(poly));
export const segMod = poly => i => i ? i % segments(poly) : i;

export const nthTick = poly => n => Vector.lerp(
    nthVector(poly)(baseIdx(poly)(n)),
    nthVector(poly)(baseIdx(poly)(n) + 1),
    ((segMod(poly)(n)) * lerpFactor(poly)));
    
export const tickPoint = poly => i => applyVect(poly)(nthTick(poly)(i));

export const edgePoint = tickPoint;

export const tickVex = poly => range(pointCount(poly)).map(nthTick(poly)); 
export const edgePoints = poly => tickVex(poly).map(applyVect(poly)); 

export const apexFloor = poly => (pointCount(poly) - 1) % pointCount(poly);
export const apexCeil = poly => (pointCount(poly) + 1) % pointCount(poly);
export const apex = poly => new Vector(vertices(poly)[0].x, vertices(poly)[0].y,);
