import 'jasmine-expect';
import { polygon, radius, rotation, } from 'src/polygon';
import { addCenter, applyVect, normal, nthNormal, scaleRadius, unit, vectors, }
from 'src/polygon/vector';
import { nthTick,
tickFactor,
tickInv,
tickMod,
tickNorm, 
tickPoints,
tickRef,
tickTotal,
tickVex, } from 'src/polygon/tick';
const basePoly = polygon();

describe('tick', () => {
  describe('tickRef', () => {
    it('tickRef', () => {
      expect(tickRef(3)(7)).toEqual(2);
    });
  });
  describe('tickInv', () => {
    it('tickInv', () => {
      expect(tickInv(3)).toEqual(1 / 3);
    });
  });
  describe('tickMod', () => {
    it('tickMod', () => {
      expect(tickMod(3)(7)).toEqual(1);
    });
  });
  describe('tickFactor', () => {
    it('tickFactor', () => {
      expect(tickFactor(3)(8)).toEqual(2 / 3);
    });
  });
  describe('tickTotal', () => {
    it('tickTotal', () => {
      expect(tickTotal(3)(basePoly)).toEqual(9);
    });
  });
  describe('tickNorm', () => {
    it('tickNorm', () => {
      expect(tickNorm(3)(basePoly)(2)).toBeDefined();
    });
  });
  describe('nthTick', () => {
    it('nthTick', () => {
      expect(nthTick(3)(basePoly)(2)).toBeDefined();
    });
  });
  describe('tickVex', () => {
    it('tickVex', () => {
      expect(tickVex(3)(basePoly)).toBeDefined();
    });
  });
  describe('tickPoints', () => {
    it('tickPoints', () => {
      expect(tickPoints(3)(basePoly)).toBeDefined();
    });
  });
});
