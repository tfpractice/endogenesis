import 'jasmine-expect';
import { polygon, radius, rotation, } 
from 'src/polygon';
import { addCenter, applyVect, normal, nthNormal, scaleRadius, unit, vectors, }
from 'src/polygon/vector';
const basePoly = polygon();

describe('vector', () => {
  describe('unit', () => {
    it('returns a vector with magnitude 1', () => {
      expect(unit().mag()).toEqual(1);
    });
  });
  describe('normal', () => {
    it('returns a  unit vecotr rotated to match the polys rotation', () => {
      expect(normal(basePoly).heading()).toEqual(basePoly.rotation);
    });
  });
  describe('addCenter', () => {
    it('adds a vector to a polygons center', () => {
      expect(addCenter(basePoly)(unit())).toBeTruthy();
    });
  });
  describe('scaleRadius', () => {
    it('multiplies a vector by the radius of the polygon', () => {
      expect(scaleRadius(basePoly)(unit()).mag()).toEqual(radius(basePoly));
    });
  });
  describe('applyVect', () => {
    it('scales and transltes a vector by polygon radiuse and center', () => {
      expect(applyVect(basePoly)(unit()).mag()).toEqual(radius(basePoly));
    });
  });
  
  describe('nthNormal', () => {
    it('returns a vector rotated by the polygons base angle n times', () => {
      expect(nthNormal(basePoly)(3).angleBetween(nthNormal(basePoly)(0))).toEqual(3 * rotation(basePoly));
    });
  });
  describe('vectors', () => {
    it('returns the normalized vectors of the vertices', () => {
      expect(vectors(basePoly)).toBeArray();
    });
  });
});
