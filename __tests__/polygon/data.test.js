import 'jasmine-expect';
import { getX, getY, numSides, polygon, radius, rotation, segments,
  setNumSides, setRadius, setRotation, setSegments, setX, setY, } 
from 'src/polygon';

const basePoly = polygon();

describe('polygon', () => {
  describe('polygon', () => {
    it('returns an object with a geometric properties', () => {
      expect(basePoly.x).toEqual(0);
      expect(basePoly.y).toEqual(0);
      expect(basePoly.radius).toEqual(10);
      expect(basePoly.rotation).toEqual(0);
      expect(basePoly.numSides).toEqual(3);
      expect(basePoly.segments).toEqual(1);
    });
  });
  
  describe('getX', () => {
    it('returns the getX proprerty', () => {
      expect(getX(basePoly)).toEqual(0);
    });
  });
  describe('getY', () => {
    it('returns the getY proprerty', () => {
      expect(getY(basePoly)).toEqual(0);
    });
  });
  describe('radius', () => {
    it('returns the radius proprerty', () => {
      expect(radius(basePoly)).toEqual(10);
    });
  });
  describe('rotation', () => {
    it('returns the rotation proprerty', () => {
      expect(rotation(basePoly)).toEqual(0);
    });
  });
  describe('numSides', () => {
    it('returns the numSides proprerty', () => {
      expect(numSides(basePoly)).toEqual(3);
    });
  });
  describe('segments', () => {
    it('returns the segments proprerty', () => {
      expect(segments(basePoly)).toEqual(1);
    });
  });
  describe('setX', () => {
    it('sets the setX proprerty', () => {
      expect(setX(5)(basePoly).x).toEqual(5);
    });
  });
  
  describe('setY', () => {
    it('sets the setY proprerty', () => {
      expect(setY(5)(basePoly).y).toEqual(5);
    });
  });
  describe('setRadius', () => {
    it('sets the setRadius proprerty', () => {
      expect(setRadius(5)(basePoly).radius).toEqual(5);
    });
  });
  describe('setRotation', () => {
    it('sets the setRotation proprerty', () => {
      expect(setRotation(5)(basePoly).rotation).toEqual(5);
    });
  });
  describe('setNumSides', () => {
    it('sets the setNumSides proprerty', () => {
      expect(setNumSides(5)(basePoly).numSides).toEqual(5);
    });
  });
  describe('setSegments', () => {
    it('sets the setSegments proprerty', () => {
      expect(setSegments(5)(basePoly).segments).toEqual(5);
    });
  });
});
