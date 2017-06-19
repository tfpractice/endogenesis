import 'jasmine-expect';
import { baseAngle, polygon, } from 'src/polygon';
import { apex, apexCeil, apexFloor, apexNorm, lowBound, upBound, } from 'src/polygon/apex';
const basePoly = polygon();

describe('apex', () => {
  describe('upBound', () => {
    it('returns the upper index of the apex points', () => {
      expect(upBound(3)(basePoly)).toEqual(4);
    });
  });
  describe('lowBound', () => {
    it('returns the lower index', () => {
      expect(lowBound(3)(basePoly)).toEqual(4);
    });
  });
  describe('apexFloor', () => {
    it('index', () => {
      expect(apexFloor(3)(basePoly)).toEqual(8);
    });
  });
  describe('apexCeil', () => {
    it('index', () => {
      expect(apexCeil(3)(basePoly)).toEqual(1);
    });
  });
  describe('apexNorm', () => {
    it('returns the normalized apex vector', () => {
      console.log('apexNorm(3', apexNorm(3)(basePoly));
    });
  });
});
