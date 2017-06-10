import 'jasmine-expect';
import { polygon, } from 'src/polygon';
import { center, } from 'src/polygon/operations';
import { nthTick, tickFactor, tickInv, tickMod, tickNorm, tickPoints,
tickRef, tickTotal, tickVex, } from 'src/polygon/tick';
import { closed,withBase, } from 'src/polygon/path';

const basePoly = polygon();
const tix3 = tickPoints(3)(basePoly);
const tix9 = tickPoints(9)(basePoly);

describe('path', () => {
  describe('closed', () => {
    it('returns an array of vertices with the first vertex at the end', () => {
      expect(closed(tix3).pop()).toEqual(tix3.shift());
    });
  });
  describe('withBase', () => {
    it('inserts a base point at every interval of 3 into the array', () => {
      expect(withBase(center(basePoly))(tix3)[3]).toEqual(center(basePoly));
      expect(withBase(center(basePoly))(tix9)[6]).toEqual(center(basePoly));
      expect(withBase(center(basePoly))(tix9)[9]).toEqual(center(basePoly));
    });
  });
});
