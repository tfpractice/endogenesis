import { Vector, } from 'p5';
import { getX, getY, numSides, segments, } from './data';
const { cos, PI, pow, round, floor, } = Math;

export const range = (x = 1) => [ ...Array(x).keys(), ];

export const isEven = poly => numSides(poly) % 2 === 0;
export const xEven = poly => !isEven(poly);
export const baseAngle = poly => (2 * PI) / numSides(poly);
export const center = poly => new Vector(getX(poly), getY(poly));
