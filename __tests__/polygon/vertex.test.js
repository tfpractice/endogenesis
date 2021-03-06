import 'jasmine-expect';
import { polygon, radius, } from 'src/polygon';
import { nthVertex, radial, vertices, } from 'src/polygon/vertex';

const basePoly = polygon();

describe('vertex', () => {
  describe('radial', () => {
    it('returns the raidal vector of the polygom ', () => {
      expect(radial(basePoly).mag()).toEqual(radius(basePoly));
    });
  });
  describe('nthVertex', () => {
    it('nthVertex', () => {
      expect(nthVertex(basePoly)(0).mag()).toEqual(radius(basePoly));
    });
  });
  describe('vertices', () => {
    it('returns an array of n vertices', () => {
      expect(vertices(basePoly)).toBeArray();
    });
  });
});
