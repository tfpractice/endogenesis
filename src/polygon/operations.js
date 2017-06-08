import { Vector, } from 'p5';
import { getX, getY, numSides, radius, rotation, segments, } from './data';

const { cos, PI, pow, round, floor, } = Math;
const range = (x = 0) => [ ...Array(x).keys(), ];

export const isEven = poly => numSides(poly) % 2 === 0;
export const xEven = poly => !isEven(poly);
export const baseAngle = poly => (2 * PI) / numSides(poly);

export const center = poly => new Vector(getX(poly), getY(poly));
export const circumNorm = poly => Vector.fromAngle(rotation(poly));
export const circumVector = poly => circumNorm(poly).mult(radius(poly));

export const apoFactor = poly => cos(PI / numSides(poly));
export const apoOffset = poly => baseAngle(poly) / 2;
export const apoDir = poly => rotation(poly) + apoOffset(poly);
export const apoMag = poly => radius(poly) * apoFactor(poly);
export const apoNorm = poly => Vector.fromAngle(apoDir(poly));
export const apoVector = poly => apoNorm(poly).mult(apoMag(poly));

export const nthVector = poly => (n = 0) => circumNorm(poly).rotate(n * baseAngle(poly));

export const nthVertex = poly => (n = 0) => nthVector(poly)(n).add(center(poly));
export const addCenter = poly => vec => vec.add(center(poly));
export const vertVex = poly => range(numSides(poly)).map(nthVector(poly));

export const vertices = poly => range(numSides(poly)).map(nthVertex(poly));

export const pointCount = poly => segments(poly) * numSides(poly);
export const lerpFactor = poly => segments(poly) ? segments(poly) ** -1 : 0;

export const upBound = poly => round((pointCount(poly) - 1) / 2);
export const lowBound = poly => upBound(poly);

export const baseIdx = poly => i => floor(i / segments(poly));

export const segMod = poly => i => i ? i % segments(poly) : i;

export const edgePoint = poly => i => Vector.lerp(
    nthVertex(poly)(baseIdx(poly)(i)),
    nthVertex(poly)(baseIdx(poly)(i) + 1),
    ((segMod(poly)(i)) * lerpFactor(poly)));

export const edgePoints = poly => range(pointCount(poly)).map(edgePoint(poly)); 

export const apexFloor = poly => (pointCount(poly) - 1) % pointCount(poly);
export const apexCeil = poly => (pointCount(poly) + 1) % pointCount(poly);
export const apex = poly => new Vector(vertices(poly)[0].x, vertices(poly)[0].y,);
