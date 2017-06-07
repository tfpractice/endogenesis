import 'jasmine-expect';
import { getX, getY, polygon, radius, rotation, segments, sides, } from 'src/polygon';

const basePoly = polygon();

describe('polygon', () => {
  describe('polygon', () => {
    it('returns an object with a geometric properties', () => {
      expect(basePoly.x).toEqual(0);
      expect(basePoly.y).toEqual(0);
      expect(basePoly.radius).toEqual(10);
      expect(basePoly.rotation).toEqual(0);
      expect(basePoly.sides).toEqual(3);
      expect(basePoly.segments).toEqual(1);
    });
  });
});
