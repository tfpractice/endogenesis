import { Vector, } from 'p5';
import { getX, getY, numSides, segments, } from './data';
import { vertices, } from './vertex';
const { cos, PI, pow, round, floor, } = Math;

export const range = (x = 1) => [ ...Array(x).keys(), ];

export const isEven = poly => numSides(poly) % 2 === 0;
export const xEven = poly => !isEven(poly);
export const baseAngle = poly => (2 * PI) / numSides(poly);
export const center = poly => new Vector(getX(poly), getY(poly));

export const pointCount = poly => segments(poly) * numSides(poly);
export const lerpFactor = poly => segments(poly) ? segments(poly) ** -1 : 0;
export const upBound = poly => round((pointCount(poly) - 1) / 2);
export const lowBound = poly => upBound(poly);
export const baseIdx = poly => i => floor(i / segments(poly));
export const segMod = poly => i => i ? i % segments(poly) : i;

export const apexFloor = poly => (pointCount(poly) - 1) % pointCount(poly);
export const apexCeil = poly => (pointCount(poly) + 1) % pointCount(poly);
export const apex = poly => new Vector(vertices(poly)[0].x, vertices(poly)[0].y,);
