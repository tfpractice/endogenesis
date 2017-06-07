const { PI, } = Math;
const dGon = {
 x: 0, y: 0, radius: 10, rotation: 0, numSides: 3, segments: 1,
};

export const polygon = (x = 0, y = 0, radius = 10, rotation = 0, numSides = 3, segments = 1) => ({
 x, y, radius, rotation, numSides, segments,
}); 

export const getX = ({ x, } = dGon) => x;
export const getY = ({ y, } = dGon) => y;
export const radius = ({ radius, } = dGon) => radius;
export const rotation = ({ rotation, } = dGon) => rotation;
export const numSides = ({ numSides, } = dGon) => numSides;
export const segments = ({ segments, } = dGon) => segments;

export const setX = x => poly =>
polygon(x, getY(poly), radius(poly), rotation(poly), numSides(poly), segments(poly));
export const setY = y => poly =>
polygon(getX(poly), y, radius(poly), rotation(poly), numSides(poly), segments(poly));
export const setRadius = rd => poly =>
polygon(getX(poly), getY(poly), rd, rotation(poly), numSides(poly), segments(poly));
export const setRotation = rt => poly =>
polygon(getX(poly), getY(poly), radius(poly), rt, numSides(poly), segments(poly));
export const setNumSides = n => poly =>
polygon(getX(poly), getY(poly), radius(poly), rotation(poly), n,segments(poly));
export const setSegments = s => poly =>
polygon(getX(poly), getY(poly), radius(poly), rotation(poly), numSides(poly), s);
 
export const baseAngle = poly => 2 * PI / numSides(poly);
export const isEven = poly => numSides(poly) % 2 === 0;

// function Polygon(cx, cy, radius, rotation, numSides, dFactory) {
//       this.cx = cx;
//       this.cy = cy;
//       this.radius = radius;
//       this.rotation = rotation;
//       this.numSides = numSides;
//       this.dFactory = dFactory;
//       this.pointsPerEdge = 1;
//       this.centrality = true;
//       this.parallel = true;
//       this.apoFactor = Math.cos(Math.PI / this.numSides);
//       this.update();
//       this.setDisplayer();
//   };
