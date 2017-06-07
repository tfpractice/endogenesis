import 'jasmine-expect';
import { polygon, } from 'src/polygon';
import { apoDir, apoFactor, apoMag, apoOffset, apoVector, baseAngle, center, circumVector,
 isEven, vertices,xEven, } from 'src/polygon/operations';

const basePoly = polygon();

describe('operations', () => {
  describe('center', () => {
    it('returns an new vector from the x and y positions', () => {
      console.log('center(basePoly)', center(basePoly));
      expect(center(basePoly).x).toBeDefined();
      expect(center(basePoly).y).toBeDefined();
      expect(center(basePoly).z).toBeDefined();
    });
  });
  describe('isEven', () => {
    it('does some calculation based on polydata', () => {
      console.log(isEven(basePoly));
      expect(isEven(basePoly)).toBeDefined();
    });
  });
  describe('xEven', () => {
    it('does some calculation based on polydata', () => {
      console.log(xEven(basePoly));
      expect(xEven(basePoly)).toBeDefined();
    });
  });
  describe('baseAngle', () => {
    it('does some calculation based on polydata', () => {
      console.log(baseAngle(basePoly));
      expect(baseAngle(basePoly)).toBeDefined();
    });
  });
  describe('center', () => {
    it('does some calculation based on polydata', () => {
      console.log(center(basePoly));
      expect(center(basePoly)).toBeDefined();
    });
  });
  describe('apoFactor', () => {
    it('does some calculation based on polydata', () => {
      console.log(apoFactor(basePoly));
      expect(apoFactor(basePoly)).toBeDefined();
    });
  });
  describe('apoOffset', () => {
    it('does some calculation based on polydata', () => {
      console.log(apoOffset(basePoly));
      expect(apoOffset(basePoly)).toBeDefined();
    });
  });
  describe('apoMag', () => {
    it('does some calculation based on polydata', () => {
      console.log(apoMag(basePoly));
      expect(apoMag(basePoly)).toBeDefined();
    });
  });
  describe('apoDir', () => {
    it('does some calculation based on polydata', () => {
      console.log(apoDir(basePoly));
      expect(apoDir(basePoly)).toBeDefined();
    });
  });
  describe('apoVector', () => {
    it('does some calculation based on polydata', () => {
      console.log(apoVector(basePoly));
      expect(apoVector(basePoly)).toBeDefined();
    });
  });
  describe('circumVector', () => {
    it('returns a vector with the magnitude and direction of the circumscribed circle', () => {
      console.log('circumVector(basePoly)', circumVector(basePoly));
      expect(circumVector(basePoly)).toBeDefined();
    });
  });
  describe('vertices', () => {
    it('returns an array of n vertices', () => {
      console.log('vertices(basePoly)', vertices(basePoly));      
    });
  });
});
