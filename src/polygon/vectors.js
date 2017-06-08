import { Vector, } from 'p5';
import { numSides, } from './data';
import { applyVect, baseAngle, circumNorm, range, } from './operations';

const { floor, } = Math;

export const baseIdx = nTix => i => floor(i / nTix);

export const tickInv = nTix => nTix ? nTix ** -1 : 0;
export const tickMod = nTix => i => i ? i % nTix : i;
export const tickFactor = nTix => i => tickMod(nTix)(i) * tickInv(nTix);

export const nthVector = poly => (n = 0) => circumNorm(poly).rotate(n * baseAngle(poly));
export const nthVertex = poly => (n = 0) => applyVect(poly)(nthVector(poly)(n));
export const vectors = poly => range(numSides(poly)).map(nthVector(poly));
export const vertices = poly => vectors(poly).map(applyVect(poly));

export const nthTick = poly => nTix => n => Vector.lerp(
    nthVector(poly)(baseIdx(nTix)(n)),
    nthVector(poly)(baseIdx(nTix)(n) + 1),
    tickFactor(nTix)(n));

    // export const nthTickPoin = poly => (n = 0) => applyVect(poly)(nthVector(poly)(n));

export const tickVex = poly => nTix => range(nTix * numSides(poly)).map(nthTick(poly)(nTix)); 
export const tickPoints = poly => nTix => tickVex(poly)(nTix).map(applyVect(poly));

// 
// const { cos, PI, pow, round, floor, } = Math;
// const range = (x = 0) => [ ...Array(x).keys(), ];
// 
// export const isEven = n => n % 2 === 0;
// export const xEven = n => !isEven(n);
// export const theta = n => (2 * PI) / n;
// export const dirVect = n => Vector.fromAngle(theta(n));
// export const withDir = angle => Vector.fromAngle(angle);
// export const add = v0 => v1 => Vector.add(v0,v1);
// export const scale = fact => v => v.mult(fact);
// export const bInvoke = (v, fn) => fn(v);
// 
// export const apoFactor = n => cos(PI / n);
// export const apoOffset = n => theta(n) / 2;
// export const rotate = delta => v => v.copy().rotate(delta);
// 
// export const apoNorm = n => Vector.fromAngle(apoOffset(n)).mult(apoFactor(n));
// 
// export const tickCount = poly => segments(poly) * numSides(poly);
