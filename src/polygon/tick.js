import { Vector, } from 'p5';
import { numSides, } from './data';
import { range, } from './operations';
import { applyVect, nthNormal, } from './vector';
const { floor, round, } = Math;

export const tickRef = (nTix = 1) => i => floor(i / nTix);
export const tickInv = (nTix = 1) => nTix ? nTix ** -1 : 0;
export const tickMod = (nTix = 1) => i => i ? i % nTix : i;
export const tickFactor = (nTix = 1) => i => tickMod(nTix)(i) * tickInv(nTix);
export const tickTotal = (nTix = 1) => poly => nTix * numSides(poly);

export const tickNorm = (nTix = 1) => poly => n => Vector.lerp(
    nthNormal(poly)(tickRef(nTix)(n)),
    nthNormal(poly)(tickRef(nTix)(n) + 1),
    tickFactor(nTix)(n));

export const nthTick = (nTix = 1) => poly => n =>
  applyVect(poly)(tickNorm(nTix)(poly)(n));

export const tickVex = (nTix = 1) => poly => 
  range(tickTotal(nTix)(poly)).map(tickNorm(nTix)(poly)); 

export const tickPoints = (nTix = 1) => poly =>
  tickVex(nTix)(poly).map(applyVect(poly));

const upBound = (nTix = 1) => poly => 
  round((tickTotal(nTix)(poly) - 1) / 2);
const lowBound = (nTix = 1) => poly => upBound2(poly);

const apexFloor = (nTix = 1) => poly => 
    (tickTotal(nTix)(poly) - 1) % tickTotal(nTix)(poly);

const apexCeil = (nTix = 1) => poly =>
    (tickTotal(nTix)(poly) + 1) % tickTotal(nTix)(poly);
const apex = (nTix = 1) => poly => 
    new Vector(vertices(poly)[0].x, vertices(poly)[0].y,);
