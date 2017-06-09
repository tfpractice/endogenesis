import 'jasmine-expect';
import { polygon, } from 'src/polygon';
import { apex, apexCeil, apexFloor,
  apoNorm, baseAngle, baseIdx, center, circumNorm, 
  circumVector, edgePoint, edgePoints, isEven, lerpFactor, lowBound, nthTick,
 pointCount, segMod, upBound, 
xEven, } from 'src/polygon/operations';

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

  describe('circumVector', () => {
    it('returns a vector with the magnitude and direction of the circumscribed circle', () => {
      expect(circumVector(basePoly)).toBeDefined();
    });
  });

  describe('pointCount', () => {
    it('pointCount', () => {
      expect(pointCount(basePoly)).toBe(3);
    });
  });
  describe('lerpFactor', () => {
    it('lerpFactor', () => {
      expect(lerpFactor(basePoly)).toBe(1);
    });
  });
  describe('upBound', () => {
    it('upBound', () => {
      expect(upBound(basePoly)).toBeTruthy();
    });
  });
  describe('lowBound', () => {
    it('lowBound', () => {
      expect(lowBound(basePoly)).toBeTruthy();
    });
  });
  describe('baseIdx', () => {
    it('baseIdx', () => {
      expect(baseIdx(basePoly)(1)).toBeTruthy();
    });
  });
  describe('segMod', () => {
    it('segMod', () => {
      expect(segMod(basePoly)(1)).toBe(0);
    });
  });
  describe('edgePoint', () => {
    it('edgePoint', () => {
      expect(edgePoint(basePoly)(1)).toBeTruthy();
    });
  });
  describe('edgePoints', () => {
    it('edgePoints', () => {
      expect(edgePoints(basePoly)).toBeArray();
    });
  });
  describe('apexFloor', () => {
    it('apexFloor', () => {
      expect(apexFloor(basePoly)).toBeTruthy();
    });
  });
  describe('apexCeil', () => {
    it('apexCeil', () => {
      expect(apexCeil(basePoly)).toBeTruthy();
    });
  });
  describe('apex', () => {
    it('apex', () => {
      expect(apex(basePoly)).toBeTruthy();
    });
  });
  describe('apoNorm', () => {
    it('returns a normalized apoVector', () => {
      expect(apoNorm(basePoly)).toBeTruthy();
    });
  });
  describe('circumNorm', () => {
    it('reurns the normalized circumVector', () => {
      expect(circumNorm(basePoly)).toBeTruthy();
    });
  });

  describe('nthTick', () => {
    it('returns the vector of the tick', () => {
      expect(nthTick(basePoly)(1)(1)).toBeTruthy();
    });
  });
});
