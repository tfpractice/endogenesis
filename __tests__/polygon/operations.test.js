import 'jasmine-expect';
import { polygon, } from 'src/polygon';
import { baseAngle, center, isEven, xEven, } from 'src/polygon/operations';

const basePoly = polygon(0, 0, 10);

describe('operations', () => {
  describe('center', () => {
    it('returns an new vector from the x and y positions', () => {
      expect(center(basePoly).x).toBeDefined();
      expect(center(basePoly).y).toBeDefined();
      expect(center(basePoly).z).toBeDefined();
    });
  });
  describe('isEven', () => {
    it('does some calculation based on polydata', () => {
      expect(isEven(basePoly)).toBeDefined();
    });
  });
  describe('xEven', () => {
    it('does some calculation based on polydata', () => {
      expect(xEven(basePoly)).toBeDefined();
    });
  });
  describe('baseAngle', () => {
    it('does some calculation based on polydata', () => {
      expect(baseAngle(basePoly)).toBeDefined();
    });
  });
  describe('center', () => {
    it('does some calculation based on polydata', () => {
      expect(center(basePoly)).toBeDefined();
    });
  });
});
