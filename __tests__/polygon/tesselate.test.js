import 'jasmine-expect';
import { baseAngle, polygon, } from 'src/polygon';
import { nthTess, tesselate, tessVector, tessVex,
} from 'src/polygon/tesselate';
import { apoDir, apoMag,apothem, } from 'src/polygon/apothem';

const basePoly = polygon();

describe('tesselate', () => {
  describe('tessVector', () => {
    it('returns the apothem doubled in magnitude', () => {
      expect(tessVector(basePoly).mag()).toEqual(apoMag(basePoly) * 2);
    });
  });
  describe('nthTess', () => {
    it('returns the tessVector rotated n times the baseAngle', () => {
      expect(nthTess(basePoly)(2).heading()).toEqual(tessVector(basePoly).heading() * -1);
    });
  });
  describe('tessVex', () => {
    it('returns the center of the tesselated polygon', () => {
      expect(tessVex(basePoly)).toBeArray();
    });
  });
  describe('tesselate', () => {
    it('returns an array of polygons', () => {
      console.log('tesselate(basePoly)', tesselate(basePoly));
    });
  });
});
