import { first, } from 'fenugreek-collections';
import { vertices, } from './vertex';
import { tickPoints, } from './tick';
import { center, } from './operations';
import { apex, } from './apex';

export const closed = verts => verts.concat(first(verts));

export const insertIf = bool => val => (coll, next) =>
bool ? coll.concat(val, next) : coll.concat(next);

const insertAt = (x = 3) => val => (pv = [], next, ix) =>
 (!ix || (ix % (x - 1) === (0))) ? pv.concat(val, next) : pv.concat(next);

export const withBase = base => verts => 
   closed(verts.reduce(insertAt(3)(base), [ ]));

export const triangulate = base => verts => 
  closed(verts.reduce(insertAt(3)(base), [ ]));

export const closedInterval = int => base => verts =>
    closed(verts.reduce(insertAt(int)(base), [ ]));

export const baseInterval = int => base => verts =>
      closed(verts.reduce(insertAt(int)(base), [ ]));

export const path = poly => closed(vertices(poly));

export const basePath = base => poly =>
  closed(base.concat(vertices(poly)));

export const tickPath = base => nTix => poly => 
    baseInterval(3)(base)(tickPoints(nTix)(poly));

export const tickPathInt = int => base => nTix => poly => 
      baseInterval(int)(base)(tickPoints(nTix)(poly));

export const centralTicks = nTix => poly =>
    tickPath(center(poly))(nTix)(poly);

export const surroundTix = nTix => poly =>
    tickPath(apex(nTix)(poly))(nTix)(poly);
