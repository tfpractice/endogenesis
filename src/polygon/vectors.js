import { Vector, } from 'p5';
import { numSides, radius, rotation, } from './data';
import { applyVect, baseAngle, range, } from './operations';

const { floor, } = Math;

export const circumNorm = poly => Vector.fromAngle(rotation(poly));
export const circumVector = poly => circumNorm(poly).mult(radius(poly));

export const tickBase = nTix => i => floor(i / nTix);

export const tickInv = nTix => nTix ? nTix ** -1 : 0;
export const tickMod = nTix => i => i ? i % nTix : i;
export const tickFactor = nTix => i => tickMod(nTix)(i) * tickInv(nTix);

export const nthVector = poly => (n = 0) => circumNorm(poly).rotate(n * baseAngle(poly));
export const nthVertex = poly => (n = 0) => applyVect(poly)(nthVector(poly)(n));
export const vectors = poly => range(numSides(poly)).map(nthVector(poly));
export const vertices = poly => vectors(poly).map(applyVect(poly));

export const nthTick = poly => nTix => n => Vector.lerp(
    nthVector(poly)(tickBase(nTix)(n)),
    nthVector(poly)(tickBase(nTix)(n) + 1),
    tickFactor(nTix)(n));

export const tickVex = poly => nTix => range(nTix * numSides(poly)).map(nthTick(poly)(nTix)); 
export const tickPoints = poly => nTix => tickVex(poly)(nTix).map(applyVect(poly));
