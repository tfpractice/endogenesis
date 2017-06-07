import 'jasmine-expect';
import { cx, cy, polygon, radius, rotation, segments, sides, } from 'src/polygon';

const basePoly = polygon();

describe('polygon', () => {
  describe('polygon', () => {
    it('returns an object with a geometric properties', () => {
      expect(basePoly.cx).toEqual(0);
    });
  });
});
