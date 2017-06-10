import { Vector, } from 'p5';
import { numSides, } from './data';
import { range, } from './operations';
import { applyVect, nthNormal, } from './vector';
const { floor, round, } = Math;

export const tickRef = nTix => i => floor(i / nTix);
export const tickInv = nTix => nTix ? nTix ** -1 : 0;
export const tickMod = nTix => i => i ? i % nTix : i;
export const tickFactor = nTix => i => tickMod(nTix)(i) * tickInv(nTix);
export const tickTotal = nTix => poly => nTix * numSides(poly);

export const tickNorm = nTix => poly => n => Vector.lerp(
    nthNormal(poly)(tickRef(nTix)(n)),
    nthNormal(poly)(tickRef(nTix)(n) + 1),
    tickFactor(nTix)(n));

export const nthTick = nTix => poly => n =>
  applyVect(poly)(tickNorm(nTix)(poly)(n));

export const tickVex = nTix => poly => 
  range(tickTotal(nTix)(poly)).map(tickNorm(nTix)(poly)); 

export const tickPoints = nTix => poly =>
  tickVex(nTix)(poly).map(applyVect(poly));

// 
// export const upBound = nTix => poly => 
//   round((tickTotal(nTix)(poly) - 1) / 2);
// export const lowBound = nTix => poly => upBound(poly);
// 
// export const apexFloor = nTix => poly => 
//     (tickTotal(nTix)(poly) - 1) % tickTotal(nTix)(poly);
// export const apexCeil = nTix => poly =>
//     (tickTotal(nTix)(poly) + 1) % tickTotal(nTix)(poly);
// export const apex = nTix => poly => 
//     new Vector(vertices(poly)[0].x, vertices(poly)[0].y,);
