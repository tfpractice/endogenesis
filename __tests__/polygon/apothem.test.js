import 'jasmine-expect';
import { polygon, } from 'src/polygon';
import { apoDir, apoFactor, apoMag, apoNorm, apoOffset, apothem,inscribed,
 } from 'src/polygon/apothem';

const basePoly = polygon();

describe('apothem', () => {
  describe('apoFactor', () => {
    it('does some calculation based on polydata', () => {
      expect(apoFactor(basePoly)).toBeDefined();
    });
  });
  describe('apoOffset', () => {
    it('does some calculation based on polydata', () => {
      expect(apoOffset(basePoly)).toBeDefined();
    });
  });
  describe('apoMag', () => {
    it('does some calculation based on polydata', () => {
      expect(apoMag(basePoly)).toBeDefined();
    });
  });
  describe('apoDir', () => {
    it('does some calculation based on polydata', () => {
      expect(apoDir(basePoly)).toBeDefined();
    });
  }); 
  describe('apoNorm', () => {
    it('does some calculation based on polydata', () => {
      expect(apoNorm(basePoly)).toBeDefined();
    });
  });
  describe('apothem', () => {
    it('does some calculation based on polydata', () => {
      expect(apothem(basePoly)).toBeDefined();
    });
  });
  describe('inscribed', () => {
    it('returns a polygon that fits within the given polygon', () => {
      expect(inscribed(basePoly).rotation).toEqual(apoDir(basePoly));
    });
  });
});
