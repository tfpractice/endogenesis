import { Vector } from 'p5';
import { nthTick, tickPoints, tickTotal } from './tick';
import { applyVect } from './vector';
import { vertices } from './vertex';
const { round } = Math;

export const upBound = (nTix = 1) => poly =>
  round((tickTotal(nTix)(poly) - 1) / 2);
export const lowBound = (nTix = 1) => poly => upBound(nTix)(poly);

export const apexFloor = (nTix = 1) => poly =>
  (tickTotal(nTix)(poly) - 1) % tickTotal(nTix)(poly);

export const apexCeil = (nTix = 1) => poly =>
  (tickTotal(nTix)(poly) + 1) % tickTotal(nTix)(poly);

export const apexNorm = (nTix = 1) => poly =>
  Vector.lerp(
    nthTick(nTix)(poly)(apexFloor(nTix)(poly)),
    nthTick(nTix)(poly)(apexCeil(nTix)(poly)),
    0.5
  );

export const apex = (nTix = 1) => poly =>
  Vector.lerp(
    nthTick(nTix)(poly)(apexFloor(nTix)(poly)),
    nthTick(nTix)(poly)(apexCeil(nTix)(poly)),
    0.5
  );
